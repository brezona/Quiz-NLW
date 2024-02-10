const perguntas = [
    {
      pergunta: "Qual é a função usada para imprimir algo no console em JavaScript?",
      respostas: [
        "print()",
        "log()",
        "display()",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma variável constante em JavaScript?",
      respostas: [
        "const myVar;",
        "let myVar;",
        "const myVar = 10;",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a maneira correta de comparar se duas variáveis são iguais em valor e tipo em JavaScript?",
      respostas: [
        "x == y;",
        "x === y;",
        "x = y;",
      ],
      correta: 1
    },
    {
      pergunta: "Como você declara uma função anônima em JavaScript?",
      respostas: [
        "function() {}",
        "const myFunc = function() {}",
        "anonymousFunction() {}",
      ],
      correta: 1
    },
    {
      pergunta: "Qual método JavaScript é usado para remover o último elemento de um array?",
      respostas: [
        "pop()",
        "shift()",
        "removeLast()",
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de comentar uma linha de código em JavaScript?",
      respostas: [
        "// Comment",
        "/* Comment */",
        "<!-- Comment -->",
      ],
      correta: 0
    },
    {
      pergunta: "Como você seleciona um elemento do DOM pelo seu ID em JavaScript?",
      respostas: [
        "getElementByName()",
        "querySelector()",
        "getElementById()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual é o operador lógico 'E' em JavaScript?",
      respostas: [
        "&&",
        "||",
        "!",
      ],
      correta: 0
    },
    {
      pergunta: "Qual método JavaScript é usado para adicionar um elemento ao início de um array?",
      respostas: [
        "append()",
        "push()",
        "unshift()",
      ],
      correta: 2
    },
    {
      pergunta: "Qual dessas opções é usada para iniciar um loop infinito em JavaScript?",
      respostas: [
        "for (;;) {}",
        "for (i=0; i<10; i++) {}",
        "while (true) {}",
      ],
      correta: 0
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