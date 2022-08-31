/* - Qual o seu nome?
- Quantos anos você tem?
- Qual linguagem de programação você está estudando? */

var nome = prompt("Qual o seu nome?")
var idade = prompt("Quantos anos você tem?")
var linguagem = prompt("Qual linguagem de programação você está estudando?")


alert("Olá " + nome + ", você tem " + idade + " anos e já está aprendendo " + linguagem + "!")

var resposta = prompt("Você gosta de estudar " + linguagem + " ? Responda com o número 1 para SIM ou 2 para NÃO.")

if(resposta == 1){
    alert("Muito bom! Continue estudando e você terá muito sucesso.")
}

if(resposta == 2){
    alert("Ahh que pena... Já tentou aprender outras linguagens?")
}
