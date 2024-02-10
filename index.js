const perguntas = [
    {
      pergunta: "Coelho tem quantos olhos?",
      respostas: [
        "2",
        "1",
        "3",
      ],
      correta: 0
    },
    {
      pergunta: "Quanto é 1+2 vezes 100?",
      respostas: [
        "3000",
        "300",
        "3100",
      ],
      correta: 1
    },
    {
      pergunta: "A Terra é plana?",
      respostas: [
        "talvez",
        "não",
        "sim",
      ],
      correta: 1
    },
    {
      pergunta: "Existe sapo venenoso",
      respostas:[
        "não",
        "sim",
        "só na Autrália",
      ],
      correta: 1
    },
    {
      pergunta: "A maior árvore do mundo fica no Sol?",
      respostas: [
        "sim",
        "não",
        "não, mas fica em UYScuti",
      ],
      correta: 1
    },
    {
      pergunta: "Cachorro pode ser rosa?",
      respostas: [
        "sim",
        "não",
        "sim/não",
      ],
      correta: 0
    },
    {
      pergunta: "Qual o nome da moeda usada no Brasil?",
      respostas: [
        "Real",
        "Roel",
        "Riel",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o ponto de exclamação?",
      respostas: [
        ".",
        "?",
        "!",
      ],
      correta: 2
    },
    {
      pergunta: "Qual a cor do Ovo?",
      respostas: [
        "tem diversas cores",
        "marrom",
        "branco",
      ],
      correta: 0
    },
    {
      pergunta: "O que aconteceu a um dia no passado, é chamado de?",
      respostas: [
        "hoje",
        "amanhã",
        "ontem",
      ],
      correta: 2
    }
  ];
  
  
  //o computador vai acessar o documento e selecionará id= "quiz"/'#quiz'
  const quiz = document.querySelector('#quiz')
  //o computador vai acessar o documento e selecionará o "Template"
  const template = document.querySelector('template')
  //está armazenando o resultado das perguntas escolhidas pelo usuário; se ele mudar de resposta, Set continua armazenando a pontuação.
  const corretas = new Set()
  //armazena em totalDePerguntas, a quantidade dos arrays dentro de "perguntas", que é 10.
  const totalDePerguntas = perguntas.length
  //selecionará o span dentro de acertos. Depois, atribuirá o texto ao const: corretas, a tudo aquilo depois do igual; funcionará no loop das questões, linha 145.
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  
  //loop
  //"item de perguntas", ou seja, o loop vai acessar os itens do "const perguntas" na linha 1
  for(const item of perguntas)
  {
    //Essa variável, vai pegar a variável da lina 98, pegar seu conteúdo e cloná-la.
    const QuizItem = template.content.cloneNode(true)
    //pega "QuizItem", sleciona o "h3" esse o conteúdo em texto, torna igual aos itns dentro de "pergunta"; em vez de aparecer 10 vezes: Pergunta 1, aparece as 10 perguntas perguntas.
    QuizItem.querySelector('h3').textContent = item.pergunta
  
  
     //o loop acessa o item das respostas
     for(const resposta of item.respostas)
     {
  
    //vai em "QuizItem", seleciona o dt que está dentro de dl, e clona ele
     const dt = QuizItem.querySelector('dl dt').cloneNode(true)
  
     //no dt, seleciona o contúdo em texto do span, e o torna igual a resposta; como resposta incluí todos item.respostas, aparece todas as opções, em vez de só: Resposta A
     dt.querySelector('span').textContent = resposta
  
     //no dt, vai em Input, acessa Name e o atribui a cada variavel pergunta; ou seja, o input que é o que faz selecionar as questões, em vez de selecionar só uma questão das 30, agora seleciona uma entre cada 3 das 10 perguntas.
     dt.querySelector('input').setAttribute('name','pergunta-' + perguntas.indexOf(item)) //perguntas.indexOf(item), deixa acessar a variável perguntas, pois perguntas é um array.
     
     //no dt, vai em input, pega um valor; que é 0; e atribui a cada item da variável resposta; em ves de todas as respostas terem valor 0, elas ficam enumeradas de 0 à 1.
     dt.querySelector('input').value = item.respostas.indexOf(resposta)
  
     //no dt, seleciona o input. Quando uma das respostas forem clicadas, ele vai pegar o valor das opções e comparar com o valor de correta, e ver se é "verdadeiro" ou "falso"/correta ou não.
     dt.querySelector('input').onchange = (event) => 
     {
       const estacorreta = event.target.value == item.correta
  
       //se a pessoa mudar a opção que ela selecionou, o "Set", não armazena o ponto e deleta o item de sua "memória", e usando: "se", ela vai dentro do itens; valores; na linha 137, e adiciona ao Set. Ou seja, é só um trocador de valores.
       corretas.delete(item)
       if(estacorreta) {
        corretas.add(item)
       }
       //por meio desse código é colocado os valores. "Size" mostra o "corretas.add(item)"; Total de perguntas faz que o número 0 seja alterado até 10; e sem "de" por algum motivo, fica somando no número 10.
       mostrarTotal.textContent =  corretas.size + ' de ' + totalDePerguntas
     }
  
  //Faz o que a linha 157 faz, só que com as respostas.
     QuizItem.querySelector('dl').appendChild(dt)
     }
  
    
  //tira da tela a frase "Resposta A"; senão fica aparecendo com as outras respostas
    QuizItem.querySelector('dl dt').remove()
  
    //pega a variável "quiz", acessa o filho "QuizItem", coloca na tela; faz a pergunta aparecer na tela
    quiz.appendChild(QuizItem)//appendChild sempre no fim das chaves.
    }