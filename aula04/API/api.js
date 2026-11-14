const nome = document.getElementById("nome")
const email = document.getElementById("email")
const telefone = document.getElementById("telefone")
const website = document.getElementById("website")
const company_name = document.getElementById("company_name")

fetch("https://jsonplaceholder.typicode.com/users")
.then((res) => res.json())
.then((data) => {
    console.log(data)
    nome.innerText = data[6].name
    email.innerText = data[6].email
})