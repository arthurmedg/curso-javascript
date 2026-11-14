// documentation: https://swapi.info/

fetch("https://swapi.info/api/")
  .then((res) => res.json())
  .then((data) => {
    console.log(data);
  }) 
  