"use strict";
const aluno = {
    nome: "meu nome",
    idade: 15,
    notas: [6, 7, 6, 7],
    calcularMedia: () => {
        return aluno.notas.reduce((acc, curr) => acc + curr, 0) / aluno.notas.length;
    },
};
const media = aluno.calcularMedia();
const aprovado = media >= 7;
document.getElementById("nome").textContent = aluno.nome;
document.getElementById("notas").textContent = aluno.notas.join(", ");
document.getElementById("media").textContent = media.toFixed(2);
document.getElementById("situacao").textContent = aprovado ? "Aprovado" : "Reprovado";
