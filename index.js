const ElementoResposta = document.querySelector('#resposta')
//busca as respostas

const inputPergunta = document.querySelector('#inputPergunta')
const botaoPerguntar = document.querySelector('#botaoPerguntar')
//respostas prontas
const respostas = [
  "Certeza!",
  "Não tenho tanta certeza.",
  "É decididamente assim.",
  "Não conte com isso.",
  "Sem dúvidas!",
  "Pergunte novamente mais tarde.",
  "Sim, definitivamente!",
  "Minha resposta é não.",
  "Você pode contar com isso.",
  "Melhor não te dizer agora.",
  "A meu ver, sim.",
  "Minhas fontes dizem não.",
  "Provavelmente.",
  "Não é possível prever agora.",
  "Perspectiva boa.",
  "As perspectivas não são tão boas.",
  "Sim.",
  "Concentre-se e pergunte novamente.",
  "Sinais apontam que sim.",
]

// clicar em fazer pergunta
function fazerPergunta() {
if (inputPergunta.value == "") {
  alert("Digite sua pergunta!")
  return 
 }

  botaoPerguntar.setAttribute("disable", true)

  const pergunta = "<div>" + inputPergunta.value + "</div>" 

//gerar resposta aleatoria
  const totalResposta = respostas.length
  const numeroAleatorio = Math.floor(Math.random() * totalResposta)

// mostrar respostas na tela
 ElementoResposta.innerHTML = pergunta + respostas[numeroAleatorio]
 ElementoResposta.style.opacity = 1;

// desaparecer resposta depois de 3 seg(em milisegundos)
  setTimeout(function() {
  ElementoResposta.style.opacity = 0;
  botaoPerguntar.removeAttribute("disable")
 }, 3000)
}