import os
import matplotlib.pyplot as plt
import seaborn as sns
import pandas

index_names = []
category_labels = ['new', 'same', 'missed']
category_colors = ['#90EE90', '#ADD8E6', '#FFA07A']
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


def sort_key(filename):
    name = filename.replace(".csv", "")
    if name.startswith("A") and "-result" in name:
        app_number = name.split("-result", 1)[0].replace("A", "")
        if app_number.isdigit():
            return (0, int(app_number))
    return (1, name)


base_dir = "results_csv/"
for module in sorted(os.listdir(base_dir), key=sort_key):
    kind = "industrial" if "industrial" in module else "opensource"
    df = pandas.read_csv(base_dir + module)
    values = df.iloc[0, 1:]
    for key in data[kind].keys():
        data[kind][key].append(values[key])
    if kind == "opensource": index_names.append(module.replace(".csv", ''))
index_names.append("Total")


def display_name(kind, index, total_indexes):
    if kind == "industrial":
        return "A" + str(index + 1) if index + 1 < total_indexes else "Total"

    name = index_names[index]
    result_position = name.rfind("-result")
    if result_position != -1:
        return name[:result_position].replace("-", " ")
    return name


def plot_them(kind):
    df = pandas.DataFrame(data=data[kind])
    df.loc[len(df)] = df.sum(axis=0)
    totals = df.sum(axis=1)

    max_horizontal_plots = 7
    num_indexes = len(df)
    num_cols = min(num_indexes, max_horizontal_plots)
    num_rows = (num_indexes - 1) // max_horizontal_plots + 1
    sns.set_style("white")

    # Plotting
    fig, axes = plt.subplots(
        num_rows,
        num_cols,
        figsize=(2.1 * num_cols, 2.15 * num_rows + 0.55),
        squeeze=False,
    )
    def autopct(total):
        return lambda p: '' if p == 0 else '{:.0f}\n({:.1f}%)'.format(p * total / 100, p)

    for i, index in enumerate(df.index):
        total = totals[i]
        ax = axes[i // num_cols, i % num_cols]
        wedges, _, _ = ax.pie(
            df.iloc[i],
            autopct=autopct(total),
            startangle=90,
            pctdistance=0.58,
            textprops={'fontsize': 8.5, 'color': '#333333'},
            colors=category_colors,
            wedgeprops={'linewidth': 1, 'edgecolor': 'white'},
        )
        ax.set_title(display_name(kind, i, len(df.index)), fontsize=10 if kind == "industrial" else 9)
        ax.axis('equal')

    fig.legend(
        wedges,
        category_labels,
        title="Categories",
        loc='upper center',
        ncol=3,
        fontsize=10,
        bbox_to_anchor=(0.5, 0.98),
        frameon=False,
    )
    for ax in axes.flat[len(df.index):]:
        ax.remove()
    plt.tight_layout(rect=(0, 0, 1, 0.93), w_pad=0.6, h_pad=1.2)
    if kind == "opensource":
        plt.savefig("group_graphs/open_source.png", bbox_inches='tight')
    else:
        plt.savefig("group_graphs/industrial.png", bbox_inches='tight')
    plt.close()


def plot_stacked_100(kind):
    df = pandas.DataFrame(data=data[kind])
    df.loc[len(df)] = df.sum(axis=0)
    totals = df.sum(axis=1)
    percentages = df.div(totals, axis=0).mul(100).fillna(0)
    names = [display_name(kind, i, len(df.index)) for i in range(len(df.index))]

    sns.set_style("white")
    fig_height = max(5, 0.38 * len(df) + 1.4)
    fig, ax = plt.subplots(figsize=(11, fig_height))
    left = pandas.Series([0] * len(df), index=df.index, dtype=float)

    for column, label, color in zip(df.columns, category_labels, category_colors):
        ax.barh(
            names,
            percentages[column],
            left=left,
            label=label,
            color=color,
            edgecolor='white',
            linewidth=0.8,
        )

        for i, (percent, count, start) in enumerate(zip(percentages[column], df[column], left)):
            if percent >= 7:
                ax.text(
                    start + percent / 2,
                    i,
                    f"{int(count)}\n({percent:.1f}%)",
                    ha='center',
                    va='center',
                    fontsize=8,
                    color='#333333',
                )

        left += percentages[column]

    ax.set_xlim(0, 100)
    ax.set_xlabel("Percentage")
    ax.set_ylabel("")
    ax.invert_yaxis()
    ax.xaxis.set_major_formatter(lambda x, _: f"{int(x)}%")
    ax.grid(axis='x', color='#dddddd', linewidth=0.7)
    ax.set_axisbelow(True)
    ax.legend(
        title="Categories",
        loc='upper center',
        bbox_to_anchor=(0.5, 1.12),
        ncol=3,
        frameon=False,
    )
    sns.despine(left=True, bottom=False)
    plt.tight_layout()

    if kind == "opensource":
        plt.savefig("group_graphs/open_source_stacked_100.png", bbox_inches='tight')
    else:
        plt.savefig("group_graphs/industrial_stacked_100.png", bbox_inches='tight')
    plt.close()


if data["industrial"]["plus"]:
    plot_them("industrial")
    plot_stacked_100("industrial")
plot_them("opensource")
plot_stacked_100("opensource")
