import csv, json, os
import pandas
import matplotlib.pyplot as plt
import seaborn as sns

base_dir = "results/"

plus = 0
minus = 0
equal = 0
montante = 0
sns.set_style("whitegrid")
pastel_palette = sns.color_palette("pastel")

def generate_graph_image(csv_file_name):
    global montante, equal, minus, plus
    if(csv_file_name == "total"):
        df = pandas.DataFrame(data={"total": [montante], "equal": [equal], 'minus': [minus], 'plus': [plus]})
    else:
        df = pandas.read_csv("results_csv/" + csv_file_name + ".csv")

    custom_colors = {'equal': '#ADD8E6', 'minus': '#FFA07A', 'plus': '#90EE90'}
    pastel_palette = sns.color_palette("pastel")
    for key, color in custom_colors.items():
        if color in pastel_palette:
            custom_colors[key] = pastel_palette[pastel_palette.index(color)]

    categories = df.columns[1:]
    values = df.iloc[0, 1:]
    total = df.iloc[0,0]
    montante += total
    equal += df.iloc[0,1].tolist()
    minus += df.iloc[0,2].tolist()
    plus += df.iloc[0,3].tolist()
    fig, ax = plt.subplots()
    ax.pie(values, labels=categories, autopct=lambda p: '{:.0f} ({:.1f}%)'.format(p * total / 100, p), startangle=90, colors=custom_colors.values())
    ax.set_title(csv_file_name + ": " + str(total))
    ax.axis('equal')
    plt.savefig("generated_graphs/" + csv_file_name + '.png')
    plt.close()


def generate_csv(module):
    with open(base_dir + module) as json_file:
        json_data = json.load(json_file)
        csv_file_name = module.split('.')[0]
        open_source = ["petclinic", "bistro-restaurant", "learn-educational", "school-educational"]
        csv_file_name += "-opensource" if any(filter(lambda a: a in module or module in a, open_source)) else "-industrial"
        with open("results_csv/" + csv_file_name + ".csv", mode="w+", newline='') as csvfile:
            writer = csv.writer(csvfile)
            writer.writerow(["total"] + list(json_data['total'].keys()))
            dead_and_done = list(json_data['total'].values())
            writer.writerow([sum(dead_and_done)] + list(dead_and_done))
    generate_graph_image(csv_file_name)

for module in os.listdir(base_dir):
    generate_csv(module)
generate_graph_image("total")