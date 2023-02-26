#### Exercício - Criar uma página para tela pequena

Comece o exercício analisando a página em uma tela de tamanho pequeno, para simular como ela pode parecer em um dispositivo móvel (você pode usar o Chrome para isso, veja no detalhe aqui).

Ao pensar no design de uma tela pequena primeiro, estamos aplicando a abordagem do mobile first. Fazendo isso, começamos com um design básico (mínimo denominador comum) e então trabalhamos em melhorias mais sofisticadas para os navegadores com funcionalidades avançadas e layouts específicos.

Isso garante que estamos desenvolvendo uma experiência que funcionará para todos. Também tem um efeito colateral: isso também nos ajuda a perceber qual o conteúdo é realmente importante na nossa página.

Dica: no Chrome você pode facilmente encontrar qual o tamanho da sua tela usando o “Inspecionar elemento” e clicando no ícone de dispositivos móveis (Toggle device toolbar) localizado no canto superior esquerdo (ou pressione as teclas Ctrl + Shift + M). Abra-o e redimensione a janela. Enquanto isso, preste atenção no topo da tela: as dimensões de largura e altura irão aparecer conforme você redimensiona a tela.

Comece a expandir a largura da sua tela. Faça isso até chegar em um ponto onde o design atual da página não funciona mais. Por exemplo, o comprimento das linhas pode começar a ficar muito grande para que o texto seja facilmente lido, ou talvez a página fique com uma largura grande o suficiente que não faça mais sentido as imagens serem mostradas uma abaixo da outra.
Agora você vai ajustar o CSS para melhorar a visualização da página.

Realize as seguintes tarefas:

Faça o tamanho da fonte ser maior;

Faça o tamanho da fonte dos elementos h1 ser menor;

Aumente o espaçamento entre as figuras;

Adicione um pouco de margin na página.

Bora mexer na responsividade do nosso site? Antes iremos determinar um padrão de tamanho para cada dispositivo e para isso você pode usar esse link de referência:

max-width: 600px: Telas de celular. (Mobile devices)
min-width: 600px: iPads, Tablets
min-width: 768px: Telas menores, laptops
min-width: 992px: Desktops
min-width: 1200px — Telas grandes, screens e TV.

Agora que temos um padrão, vamos criar um breakpoint para telas menores de laptops. Para isso nós podemos consultar nossa tabela acima e utilizar o min-width: 768px e quando tivermos em telas menores que 768px esse estilo não vai ser aplicado. Esse será o primeiro breakpoint do layout. Um breakpoint é apenas um ponto onde estamos definindo que o design atual deve mudar. Ok?

Crie uma media query no seu arquivo CSS, usando a dimensão em pixels que você guardou como o min-width que foi apresentado acima.

Altere a cor de fundo (isso vai te ajudar a perceber quando a media query teve efeito);

Ajuste o tamanho da fonte;

Ajuste as margens da página;

Faça as imagens serem mostradas em duas colunas.

Agora, você vai criar outro breakpoint para telas grandes, como por exemplo, desktops. Para isso você pode consultar novamente nossa tabela com os tamanhos.

Crie uma nova media query no seu arquivo CSS usando a dimensão para telas de desktop e realize os seguintes ajustes dentro do breakpoint (aqui podemos usar o tamanho de tela de 992px):

Altere a cor de fundo;

Ajuste o tamanho da fonte;

Ajuste as margens da página;

Adicione a propriedade max-width à página, para garantir que a largura das linhas não fique muito grande.
