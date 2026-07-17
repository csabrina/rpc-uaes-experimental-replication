# Replicação Experimental do UAES

Este repositório foi inicializado a partir de um fork do [repositório original de artefatos do estudo UAES](https://gitlab.com/lsi-ufcg/cytestion/loc-study/execute-study-uaes) e posteriormente estendido com novas aplicações, dados e análises produzidos nesta replicação.

O pacote do Cytestion utilizado neste experimento está disponível no arquivo [cytestion-open-source.zip](./cytestion-open-source.zip), localizado na raiz do repositório. Após extraí-lo, siga as instruções do README incluído no pacote para executar o Cytestion e gerar os catálogos.

## Estudo com a abordagem UAES

O estudo compara a abordagem UAES com a abordagem Markup. O conjunto de dados atual contém 20 aplicações open-source:

| Aplicação | Repositório | KLOC |
| --- | --- | ---: |
| spring-petclinic | [spring-petclinic](https://gitlab.com/lsi-ufcg/cytestion/gui-testing-study/applications/spring-petclinic) | 20.7 |
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

O estudo busca coletar os elementos acionáveis identificados em cada estado das aplicações. Esses elementos são separados por URL e organizados em catálogos, permitindo analisar os resultados de cada abordagem.

Os dados coletados pelo Cytestion estão disponíveis em `data/`. Cada aplicação possui catálogos referentes às duas abordagens:

- `classic/`: catálogo da abordagem Markup;
- `generic/`: catálogo da abordagem UAES.

Algumas aplicações também incluem artefatos de cobertura em `coverage/` e o arquivo de teste Cypress gerado, `cytestion.cy.js`.

## Requisitos

- Python 3;
- pip;
- Node.js.

## Execução

Para gerar os resultados da comparação (`results/`), os resumos em CSV (`results_csv/`), os gráficos individuais (`generated_graphs/`) e os gráficos agrupados (`group_graphs/`), execute o script Bash a partir da raiz do repositório:

```bash
bash script.sh
```

O script executa o `index.js` para cada aplicação presente em `data/`, cria um ambiente virtual temporário do Python, instala as dependências definidas em `requirements.txt` e executa os scripts Python disponíveis em `scripts/`.

Para contabilizar detalhes específicos da comparação, edite `scripts/cnt_plus_minus.py` conforme necessário e execute:

```bash
python3 scripts/cnt_plus_minus.py
```

Os resultados podem ser encontrados em `results_new_elements/` e em `selectorsRanking.json`.

Para reproduzir as estatísticas descritivas e os intervalos de confiança utilizando a aplicação como unidade de reamostragem, execute:

```bash
python3 scripts/statistical_analysis.py
```

O comando grava as métricas por aplicação em `statistical_analysis/project_metrics.csv` e os resultados agregados, a configuração do bootstrap, a semente aleatória e a comparação com a referência histórica em `statistical_analysis/summary.json`. Por padrão, a análise utiliza 100.000 reamostragens bootstrap agrupadas por aplicação e a semente `20260716`. Essas opções podem ser alteradas explicitamente por meio dos argumentos `--bootstrap-repetitions` e `--seed`.

O prompt exato e os metadados utilizados para documentar o procedimento de construção do Markup assistido por LLM estão disponíveis em [`llm-markup-protocol.md`](llm-markup-protocol.md).

## Resultados

Cada arquivo em `results/` contém os elementos agrupados por categoria:

- `same`: elementos encontrados pelas duas abordagens;
- `new`: elementos encontrados somente pelo UAES;
- `missed`: elementos encontrados somente pela abordagem Markup.

A estrutura dos catálogos é preservada para indicar quais elementos foram encontrados em cada estado da GUI das aplicações.
