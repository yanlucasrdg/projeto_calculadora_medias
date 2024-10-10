const formulario = window.document.getElementById("formulario");
const imgAprovado = `<img src="images/aprovado.png" />`;
const imgReprovado = `<img src="images/reprovado.png" />`;
var linhas = {};

formulario.addEventListener("submit", function (e) {
e.preventDefault();

const nomeAtividade = document.getElementById("nomeAtividade");
const notaAtividade = document.getElementById("notaAtividade");


if (linhas[nomeAtividade.value]) {
alert("Atividade com mesmo nome já existe. Escolha outro nome.");
return;
}

var linha = `<tr>`;
linha += `<td>${nomeAtividade.value}</td>`;
linha += `<td>${notaAtividade.value}</td>`;
linha += `<td>${notaAtividade.value >= 7 ? imgAprovado : imgReprovado}</td>`;
linha += `</tr>`;


linhas[nomeAtividade.value] = linha;
document.getElementById("tbody").innerHTML = Object.values(linhas).join("");


nomeAtividade.value = "";
notaAtividade.value = "";


calcularMediaFinal();
});

function calcularMediaFinal() {

var linhasTabela = document.querySelectorAll("#tbody tr");


var somaNotas = 0;
var numeroNotas = 0;


linhasTabela.forEach(function (linha) {
var nota = parseFloat(linha.cells[1].textContent);


if (!isNaN(nota)) {
    somaNotas += nota;
    numeroNotas++;
}
});


var mediaFinal = numeroNotas > 0 ? somaNotas / numeroNotas : 0;


document.querySelector("tfoot td:nth-child(2)").textContent =
mediaFinal.toFixed(2);


var resultado = document.querySelector(".resultado");
resultado.textContent = mediaFinal >= 7 ? "Aprovado" : "Reprovado";
resultado.style.background = mediaFinal >= 7 ? "#009432" : "#ff0000";
}
