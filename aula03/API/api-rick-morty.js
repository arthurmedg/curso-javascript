fetch("https://rickandmortyapi.com/api/character") // fetch vai atrás de um endereço, nesse caso, no endereço da API
    .then((res) => res.json())  // then(então), caso de certo, ele irá executar o bloco de código. res = response. json() função nativa que transforma texto em um arquivo json
    .then((data) => {   // data = resposta convertida em objeto. Só rodará se a função para transformar o parametro res em cima funcionar
        console.log(data.results[0].name);  // results era a aba onde estavam ficando os valores
    })   
