/* Seu desafio de hoje é criar os destinos possíveis de um jogo, em que o usuário consiga escolher:

1. Se quer seguir para área de Front-End ou seguir para a área de Back-End.

2. Caso esteja na área de Front-End, se quer aprender React ou aprender Vue. Caso esteja na área de Back-End, poderá aprender C# ou aprender Java.

3. Depois, independente das escolhas anteriores, o usuário poderá escolher entre seguir se especializando na área escolhida ou seguir se desenvolvendo para se 
tornar Fullstack. Você deve exibir na tela uma mensagem específica para cada escolha.

4. Por fim, pergunte quais são as tecnologias nas quais a pessoa gostaria de se especializar ou de conhecer. 
Aqui, a pessoa pode responder N tecnologias, uma de cada vez. 
Então, enquanto ela continuar respondendo ok para a pergunta: 
“Tem mais alguma tecnologia que você gostaria de aprender?”, continue apresentando para ela o Prompt, para que ela complete o nome da tecnologia em questão. 
E, logo depois, apresente uma mensagem comentando algo sobre a linguagem inserida. */

const resp1 = prompt("Você gostaria de seguir para área de Front-End ou seguir para a área de Back-End?") 

if(resp1 === "Front-End"){
    const resp1a = prompt("Você gostaria de aprender React ou aprender Vue?")
}
else if(resp1 === "Back-End"){
    const resp1b = prompt("Você gostaria de aprender C# ou Java?")
}
else{
    alert("Você não digitou nenhuma resposta válida")
}

const resp2 = prompt("Você escolhe seguir se especializando na área escolhida ou seguir se desenvolvendo para se tornar Fullstack? digite: 'especializando' ou 'fullstack' ")

if(resp2 === "especializando"){
    alert("Que bacana, se especializar é sempre bom!")
}
else if(resp2 === "fullstack"){
    alert("Que legal, se tornar fullstack é algo muito bom!")
}

var resp3 = 0

while (resp3 != "não"){
resp3 = prompt("Tem mais alguma tecnologia que você gostaria de aprender? responda 'não' caso não tenha mais nenhuma que queira responder")
if(resp3 != "não"){
alert(resp3 + " é uma ótima linguagem")
}
}
