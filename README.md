# Execute-study

### Cytestion tool could be found here: [cytestion.zip](./cytestion.zip). Inside the zip, you will found a **complete** README.

# Study using UAES approach

The study was made comparing the UAES approach with the markup approach using twenty industrial applications using [Ant Design](https://ant.design/) components based on [React](https://react.dev/).

The four open-source applications:

[petclinic](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/spring-petclinic) a SpringBoot website for adding owners as well as their pets and manage scheduled visits to a veterinary

[bistro-restaurant](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-bistro-restaurant) a website that serves as a portfolio template for your restaurant.

[learn-educational](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-learn-educational) a website that serves as a platform to show informations about a learning institution.

[school-educational](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-school-educational) a website that serves as a template for school websites.

The study aims to extract the elements located to be tested in each state of the applications. Those elements are separated by the URL and placed in a catalog in order to analyze the properties of each approach towards the results gathered.

The data used in the study acquired from the execution of the tool Cytestion is located in `data/`, where the catalogs for the industrial and open-source applications can be found. Each approach has its own `.json` catalog.

Need have instaled:

- Python3
- Pip
- Nodejs

## To execute

To generate the results (`results/`, `results_csv/`) and graphs (`generated_graphs/`, `group_graphs/`) execute the bash script:

`bash script.sh`

Then for counting the particular details of the data comparsion you can alter the file `cnt_new_missed.py` at lines 27, 28, 30 for `new` elements and 33 for `missed` ones, then execute the command:

`python3 cnt_new_missed.py`

The results can be found at `results_new_elements/` and at the file `selectorsRanking.json`


## Result

The results found in `results/` at each file are the elements belonging to separate categories defined in the study, those categories being `same`, `new`, `missed` , respectively, are the elements found by the two approaches, elements found only by UAES and elements found only by the markup approach.

The catalog structure is maitained in order to separate which elements are found in each GUI of the applications.