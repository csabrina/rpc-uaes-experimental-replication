# UAES Experimental Replication

This repository contains the data and scripts used to replicate the open-source part of the UAES experiment.

The Cytestion package that must be executed for this experiment is [cytestion-open-source.zip](./cytestion-open-source.zip), available in the root of this repository. After extracting it, follow the README included inside the zip to run Cytestion and generate the catalogs.

## Study Using UAES Approach

The study compares the UAES approach with the markup approach. The current dataset contains 20 open-source applications:

| Application | Repository | KLOC |
| --- | --- | ---: |
| spring-petclinic | [spring-projects/spring-petclinic](https://github.com/spring-projects/spring-petclinic) | 20.7 |
| juiceshop | [juice-shop/juice-shop](https://github.com/juice-shop/juice-shop) | 142.9 |
| website-bistro-restaurant | [website-bistro-restaurant](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-bistro-restaurant) | 12.3 |
| website-learn-educational | [website-learn-educational](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-learn-educational) | 5.1 |
| website-school-educational | [website-school-educational](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/website-school-educational) | 11.0 |
| TodoMVC | [tastejs/todomvc](https://github.com/tastejs/todomvc/tree/master) | 17.4 |
| React Shopping Cart | [jeffersonRibeiro/react-shopping-cart](https://github.com/jeffersonRibeiro/react-shopping-cart/tree/main/src/components/Products/Product) | 30.1 |
| open-resume | [xitanggg/open-resume](https://github.com/xitanggg/open-resume) | 44.9 |
| cypress-realworld-app | [cypress-io/cypress-realworld-app](https://github.com/cypress-io/cypress-realworld-app/tree/develop) | 36.7 |
| PizzaFlow | [zacktam12/PizzaFlow](https://github.com/zacktam12/PizzaFlow) | 11.1 |
| react-hotel-reservation-system | [onyxdevs/react-hotel-reservation-system](https://github.com/onyxdevs/react-hotel-reservation-system) | 47.8 |
| vue_crud_bootstrap | [Jebasuthan/vue_crud_bootstrap](https://github.com/Jebasuthan/vue_crud_bootstrap) | 35.6 |
| react-hotel-booking-app | [girls-incode/react-hotel-booking-app](https://github.com/girls-incode/react-hotel-booking-app) | 31.2 |
| restaurant-react-js-app | [NomanKhial/-restaurant-react-js-app](https://github.com/NomanKhial/-restaurant-react-js-app) | 5.0 |
| job-tracker | [hosseinbaghipour/job-tracker](https://github.com/hosseinbaghipour/job-tracker.git) | 3.9 |
| Refine Dashboard | [adrianhajdin/refine_dashboard](https://github.com/adrianhajdin/refine_dashboard) | 28.5 |
| react-restaurant | [ionutcora-webdevelopment/react-restaurant](https://github.com/ionutcora-webdevelopment/react-restaurant) | 19.0 |
| Feedback App | [bradtraversy/feedback-app](https://github.com/bradtraversy/feedback-app) | 39.4 |
| cv-application | [michalosman/cv-application](https://github.com/michalosman/cv-application) | 39.8 |
| Habit-Tracker-Web-App | [TheUnknown550/Habit-Tracker-Web-App](https://github.com/TheUnknown550/Habit-Tracker-Web-App) | 4.6 |

The study aims to extract the elements located to be tested in each state of the applications. Those elements are separated by URL and placed in catalogs in order to analyze the properties of each approach.

The data acquired from Cytestion is located in `data/`. Each application has catalogs for both approaches:

- `classic/`: markup approach catalog.
- `generic/`: UAES approach catalog.

Some applications also include coverage artifacts in `coverage/` and the generated Cypress test file `cytestion.cy.js`.

## Requirements

- Python 3
- Pip
- Node.js

## To execute

To generate the comparison results (`results/`), CSV summaries (`results_csv/`), individual graphs (`generated_graphs/`), and grouped graphs (`group_graphs/`), execute the bash script from the repository root:

`bash script.sh`

The script runs `index.js` for each application in `data/`, creates a temporary Python virtual environment, installs the dependencies from `requirements.txt`, and executes the Python scripts in `scripts/`.

To count particular details of the data comparison, edit `scripts/cnt_plus_minus.py` as needed and then execute:

`python3 scripts/cnt_plus_minus.py`

The results can be found in `results_new_elements/` and in `selectorsRanking.json`.

To reproduce the descriptive statistics and the confidence intervals with the
application as the resampling unit, execute:

`python3 scripts/statistical_analysis.py`

The command writes per-application metrics to
`statistical_analysis/project_metrics.csv` and the aggregate results, bootstrap
configuration, random seed, and historical-reference comparison to
`statistical_analysis/summary.json`. The default analysis uses 100,000
application-clustered bootstrap samples and seed `20260716`. These options can
be changed explicitly with `--bootstrap-repetitions` and `--seed`.

The exact LLM prompt and the metadata required to document the LLM-assisted
Markup procedure are available in
[`llm-markup-protocol.md`](artifacts/llm-markup-protocol.md).


## Result

Each file in `results/` contains the elements grouped by category:

- `same`: elements found by both approaches.
- `new`: elements found only by UAES.
- `missed`: elements found only by the markup approach.

The catalog structure is maintained to indicate which elements are found in each GUI state of the applications.
