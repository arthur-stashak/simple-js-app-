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

  function addListItem(pokemon){
    let pokemonList = document.querySelector('.pokemon-list');
    let listPokemon = document.createElement('li');
    let button = document.createElement('button');
    button.innerText = pokemon.name;
    button.classList.add('button-class');
    listPokemon.appendChild(button);
    pokemonList.appendChild(listPokemon);
    button.addEventListener ('click', function(event){
      showDetails(pokemon);
    });
  }

  function showDetails(pokemon) {
    console.log('hello world')
  }

  return {
    add: add,
    getAll: getAll,
    addListItem: addListItem,
    showDetails: showDetails
  }
})();

pokemonRepository.getAll().forEach(function (pokemon) {
  pokemonRepository.addListItem(pokemon);
});
