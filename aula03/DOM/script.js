// const paragrafo = document.getElementById("paragrafo")
// const paragrafo2 = document.getElementById("paragrafo2")
// const paragrafo3 = document.getElementById("paragrafo3")
// const paragrafo4 = document.getElementById("paragrafo4")

// console.log(paragrafo);
// console.log(paragrafo2);
// console.log(paragrafo3);
// console.log(paragrafo4);

// const title = document.getElementById("title")
// title.innerText = "Troquei"

// const subTitle = document.getElementById("sub-title")
// subTitle.innerText = "Troquei tbm"
// subTitle.style.color = "green"
// subTitle.style.fontSize = "90px"
// subTitle.style.backgroundColor = "yellow"


// const paragrafo1 = document.getElementById("paragrafo1")
// paragrafo1.innerText = "paragrafo mudou"
// paragrafo1.style.fontFamily = "sans serif"
// paragrafo1.style.fontSize = "30px"
// paragrafo1.style.borderRadius = "12px"
// paragrafo1.style.backgroundColor = "gray"


// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Deu bom!"
//     paragrafo.style.color = "blue"
// })


// const paragrafo = document.getElementById("paragrafo")
// const btn = document.getElementById("btn")
// const img = document.getElementById("img")

// btn.addEventListener("click", function(){
//     paragrafo.innerText = "Carro bomba"
//     img.src = "https://i0.wp.com/loucosporcarro.com.br/wp-content/uploads/2020/04/Blog.jpg?resize=800%2C450&ssl=1"
// })



// document.addEventListener("keydown", function(e){
//     alert("Você precionou a tecla: " + e.key)
// })



// desafio background rgb
document.addEventListener("keydown", function(e){
    if (e.key == "r") {
        document.body.style.backgroundColor = "red"
    } else if (e.key == "g") {
        document.body.style.backgroundColor = "green"
    } else if (e.key == "b") {
        document.body.style.backgroundColor = "blue"
    } else {
        alert("Precione as teclas: r, g ou b")
    }
})