# LLM-assisted Markup protocol

## Model and execution metadata

- Tool: Codex
- Model: GPT-5.5
- Role in the experiment: initial insertion of `data-cy` attributes; not the
  final adjudicator of actionable elements
- Prompt language: Portuguese
- Prompt reuse: the same prompt was used for all applications

## Prompt used verbatim

> Analise o código-fonte do frontend deste projeto, identifique os arquivos e
> componentes que renderizam elementos acionáveis no DOM e adicione o atributo
> personalizado data-cy a cada um deles.
>
> Um elemento acionável é um componente da interface com o qual o usuário pode
> interagir para executar uma ação ou alterar o estado da aplicação. Em geral,
> sua estrutura HTML possui uma tag, atributo, classe, propriedade ou
> manipulador de evento que indique interatividade. Considere, por exemplo,
> botões, links, campos de formulário, caixas de seleção, seletores, menus,
> filtros, paginações e elementos com eventos como onClick, onChange ou
> onSubmit.
>
> Não considere como acionáveis elementos exclusivamente visuais, estruturais
> ou textuais que não aceitem interação.
>
> Os valores de data-cy devem ser semanticamente descritivos, escritos em
> kebab-case, únicos no mesmo estado da interface, estáveis entre execuções e
> relacionados à função do elemento. Não utilize valores aleatórios,
> timestamps, posições visuais ou índices de listas como única forma de
> diferenciação.
>
> Em componentes reutilizáveis, garanta que o atributo seja encaminhado ao
> elemento HTML efetivamente renderizado no DOM. Para elementos estáticos,
> mantenha o mesmo identificador entre páginas e estados. Para elementos
> dinâmicos, utilize informações contextuais ou identificadores determinísticos
> para distinguir cada instância.
>
> Em componentes de bibliotecas externas, utilize as propriedades
> disponibilizadas para encaminhar o atributo. Caso isso não seja possível,
> registre a limitação e não altere a dependência.
>
> Não modifique regras de negócio, comportamento, estilos ou elementos não
> interativos.
>
> Ao final, informe os arquivos modificados e os casos que não puderam receber
> um data-cy único e estável.

