import os
from collections import defaultdict, Counter
from functools import reduce
import itertools
import json

base_dir = "results/"
plusies = defaultdict(list)
minusies = defaultdict(list)
for module in os.listdir(base_dir):
    with open(base_dir + module) as json_file:
        json_data = json.load(json_file)
        for key in ['plus', 'minus']:
            for url in json_data[key]:
                for item in json_data[key][url]:
                    taggie, *_ = item['tag'].split(' ')
                    item['module'] = module + " url -> " + url
                    if key == 'plus':
                        plusies[taggie].append(item)
                    else:
                        minusies[taggie].append(item)

opens = sorted(
    catalog
    for catalog in os.listdir("data")
    if os.path.isdir(os.path.join("data", catalog))
)
with open("results_new_elements/news.json", mode="w+", newline='') as new_elements:
    gods = dict(map(lambda tag: (tag, list(filter(lambda x: not any(filter(lambda a: a in x['module'], opens)), plusies[tag]))), plusies))
    plusies['checkbox'] = dict(map(lambda tag: (tag, dict(sorted(Counter(map(lambda x: 1 if 'checkbox' in x['tag'] else 0, gods[tag])).items(), key=lambda item: item[1], reverse=True))), gods))
    #plusies['kinds_industrial'] = dict(map(lambda tag: (tag, dict(sorted(Counter(map(lambda x: x['selector'], gods[tag])).items(), key=lambda item: item[1], reverse=True))), gods))
    #plusies['kinds'] = dict(map(lambda tag: (tag, dict(sorted(Counter(map(lambda x: x['selector'], plusies[tag])).items(), key=lambda item: item[1], reverse=True))), plusies))
    plusies['total_industrial'] = dict(map(lambda tag: (tag, len(gods[tag])), gods))
    #plusies['total'] = dict(map(lambda tag: (tag, len(plusies[tag])), plusies))
    json.dump(plusies, new_elements, indent=4, ensure_ascii=False)
with open("results_new_elements/misses.json", mode="w+", newline='') as new_elements:
    #minusies['kinds'] = dict(map(lambda tag: (tag, dict(sorted(Counter(map(lambda x: x['selector'], minusies[tag])).items(), key=lambda item: item[1], reverse=True))), minusies))
    minusies['only_industrial'] = dict(map(lambda tag: (tag, len(list(filter(lambda x: not any(filter(lambda a: a in x['module'], opens)), minusies[tag])))), minusies))
    minusies['total'] = dict(map(lambda tag: (tag, len(minusies[tag])), minusies))
    json.dump(minusies, new_elements, indent=4, ensure_ascii=False)


bigDaddy = defaultdict(int)
total = 0
base = 'data/'
for catalog in os.listdir(base):
    path = base + catalog + '/generic/'
    module = os.listdir(path).pop(0)
    with open(path + module) as json_catalog:
        json_data = json.load(json_catalog)
        for element in list(filter(lambda x: 'rel="nofollow"' not in x['tag'], itertools.chain.from_iterable(json_data.values()))):
            selector = element['selector']
            selector = selector[1:selector.index('='):] if selector[0] == '[' else 'children-text'
            bigDaddy[selector] += 1
            total += 1

bigDaddy = dict(sorted(bigDaddy.items(), key=lambda item: item[1], reverse=True))
bigDaddy['total'] = total
with open('selectorsRanking.json', mode="w+", newline='') as selectors_file:
    json.dump(bigDaddy, selectors_file, indent=4, ensure_ascii=False)
