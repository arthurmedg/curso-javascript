const pokemon_image = document.getElementById("pokemon_image")
const pokemon_number = document.getElementById("pokemon_number")
const pokemon_name = document.getElementById("pokemon_name")
const btn_search = document.getElementById("btn-search")
const input_search = document.getElementById("input_search")

const searchPokemon = (pokemon) => {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
    .then((res) => res.json())
    .then((data) => {
        console.log(data)
        pokemon_image.src = data.sprites.versions["generation-v"]["black-white"].animated.front_default
        pokemon_name.innerText = data.name
        pokemon_number.innerText = data.id
    })  
}

btn_search.addEventListener("click", (e) => {
    e.preventDefault()
    searchPokemon(input_search.value)
})
