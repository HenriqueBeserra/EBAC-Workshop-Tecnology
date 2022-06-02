const page = document.querySelector("#pokedex-page")

function getPokemon () {
    fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
        .then( async response => {
            return response.json();
        })
        .then(async data => {
        
        const box = document.querySelector("#pokemon-box");
            
           for(let i = 0; i < data.results.length; i++){
                box.querySelector("#pokemon-name").innerHTML = data.results[i].name; //pegando os nomes dos pokemons na api
                box.querySelector("#pokemon-name").style.textTransform = "capitalize";
                
                const pokemonImage = await fetch('https://pokeapi.co/api/v2/pokemon-form/' + data.results[i].name);
                const image = await pokemonImage.json();
                box.querySelector("#pokemon-img").src = image.sprites.front_default;
                
                const tipo = image.types[0].type.name;
                box.querySelector(".pokemon-type").innerHTML = tipo;
                box.querySelector(".pokemon-type").style.textTransform = "capitalize";

                
                
                
                page.innerHTML += box.outerHTML; //pegando os nomes da api e injetando no html
           }
            
        })
}
    
// async function getPokemon2 () {
//     let pokemon = await fetch("https://pokeapi.co/api/v2/pokemon?limit=150&offset=0")
//     poke = await pokemon.json()
//     console.log(poke.results)
// }

getPokemon()