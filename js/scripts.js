//This creates the pokemon variables
let pokemonRepository = (function () {
  let pokemonList = [
    { name: 'Pikachu', type: 'electric', height: 2},
    { name: 'Charizard', type: 'fire', height: 6},
    { name: 'Squirtle', type: 'water', height: 3}
  ];

  function add(pokemon) {
    pokemonList.push(pokemon);
  }

  function getAll() {
    return pokemonList;
  }

  function addListItem(pokemon) {
    let pokemonClass = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button'){
      button.addEventListener ('click', function(){
        showDetails(pokemon);
      }
    );
    };
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonClass.appendChild(listpokemon);
  }

  function showDetails(pokemon) {
    console.log()
  }


  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem
  };
})();
