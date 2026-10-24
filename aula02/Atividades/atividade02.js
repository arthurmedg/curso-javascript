let valorInicial = 500
let desconto
let valorFinal

if (valorInicial >= 200) {
    desconto = valorInicial * 0.2
    valorFinal = valorInicial - desconto
    
} else if (valorInicial >= 100) {
    desconto = valorInicial * 0.1
    valorFinal = valorInicial - desconto
} else {
    desconto = 0
    valorFinal = valorInicial - desconto
}

console.log(desconto);
console.log(valorFinal);

