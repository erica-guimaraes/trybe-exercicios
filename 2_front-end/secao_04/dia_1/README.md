### Ciclo de Vida de Componentes

Na aula de hoje aprendi um conceito fundamental para construir aplicações em React! 

Todo componente React tem um Lifecycle, ou ciclo de vida de um componente, no contexto da interação da aplicação com cada browser. As fases desse Lifecycle têm funções associadas a si, através das quais quem programa pode associar comportamentos. Por exemplo, a função componentDidMount executa logo que um componente acabou de ser montado no DOM. Uma lógica a ser executada nesse exato momento deve ser chamada aí.

Então, aprendi a utilizar os métodos do ciclo de vida do componente para programar cada coisa no seu devido lugar. 

Com isso, sou capaz de:

- Utilizar o componentDidMount para executar uma ação após o componente ser inserido no DOM;

- Utilizar o shouldComponentUpdate para avaliar se uma atualização do componente deve ou não acontecer naquele momento;

- Utilizar o componentDidUpdate para executar uma ação após o componente ser atualizado;

- Utilizar o componentWillUnmount para realizar uma ação antes de o componente ser desmontado.
