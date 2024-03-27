import os
from re import M
import matplotlib.pyplot as plt
import numpy as np
import seaborn as sns
import pandas
import matplotlib.pyplot as plt

index_names = []
data = {
    "industrial": {
        "plus": [],
        "equal": [],
        "minus": [],
    },
    "opensource": {
        "plus": [],
        "equal": [],
        "minus": [],
    }
}

base_dir = "results_csv/"
for module in os.listdir(base_dir):
    kind = "industrial" if "industrial" in module else "opensource"
    df = pandas.read_csv(base_dir + module)
    categories = df.columns[1:]
    values = df.iloc[0, 1:]
    for key in data[kind].keys():
        data[kind][key].append(values[key])
    if kind == "opensource": index_names.append(module.replace(".csv", ''))
index_names.append("Total")

def plot_them(kind):
    df = pandas.DataFrame(data=data[kind])
    categories = df.columns[0:]
    values = df.iloc
    df.loc[len(df)] = df.sum(axis=0)
    totals = df.sum(axis=1)

    max_horizontal_plots = 7 if kind == "industrial" else 2
    num_indexes = len(df)
    num_cols = min(num_indexes, max_horizontal_plots)
    num_rows = (num_indexes - 1) // max_horizontal_plots + 1
    sns.set_style("whitegrid")
    pastel_palette = sns.color_palette("pastel")

    # Plotting
    fig, axes = plt.subplots(num_rows, num_cols, figsize=(2 * num_cols, 2 * num_rows))
    custom_colors = {'new': '#90EE90', 'same': '#ADD8E6', 'missed': '#FFA07A'}
    pastel_palette = sns.color_palette("pastel")
    for key, color in custom_colors.items():
        if color in pastel_palette:
            custom_colors[key] = pastel_palette[pastel_palette.index(color)]

    for i, index in enumerate(df.index):
        total = totals[i]
        ax = axes[i // num_cols, i % num_cols] if num_rows > 1 else axes[i % num_cols]
        wedges, texts, autotexts = ax.pie(df.iloc[i], autopct=lambda p: '{:.0f}\n({:.1f}%)'.format(p * total / 100, p), startangle=90,  textprops={'fontsize': 9}, colors=custom_colors.values())
        if kind == "industrial":
            ax.set_title("App " + str(index+1) if i + 1 < len(df.index) else "Total", fontsize=10)
        else:
            ax.set_title(index_names[i][:index_names[i].rfind("-result"):].replace("-", " ") if index_names[i].rfind("-result") != -1 else index_names[i], fontsize=9)
        ax.axis('equal')
        angle = 90
        for j, autotext in enumerate(autotexts):
            angle += (wedges[j].theta2 - wedges[j].theta1) / 2
            x = np.cos(np.deg2rad(angle)) * 0.60  # Adjust label position to be inside the pie chart
            y = np.sin(np.deg2rad(angle)) * 0.40  # Adjust label position to be inside the pie chart
            autotext.set_position((x, y))
            angle += (wedges[j].theta2 - wedges[j].theta1) / 2.5

            # Increase label distance from center to prevent overlap
            autotext.set_position((autotext.get_position()[0] * 0.8, autotext.get_position()[1] * 1.75))
    #plt.subplots_adjust(right=0.8)
    plt.subplots_adjust(right=1.85, top=1.85, bottom=1.65, hspace=1.5, wspace=1.85)
    bbox_to_anchor_y = -0.15 if not bool(len(df.index) % (num_cols * num_rows)) else 0
    fig.legend(wedges, ['new','same', 'missed'], title="Categories", loc='lower right', fontsize=10, bbox_to_anchor=(1, bbox_to_anchor_y, 0, 0))
    for ax in axes.flat[len(df.index)::]:
        ax.remove()
    plt.tight_layout()
    if kind == "opensource":
        plt.savefig("group_graphs/open_source.png", bbox_inches='tight')
    else:
        plt.savefig("group_graphs/industrial.png", bbox_inches='tight')
    plt.close()

plot_them("industrial")
plot_them("opensource")