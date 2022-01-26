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

  return {
    add: add,
    getAll: getAll
  };
})();

pokemonRepository.getAll().forEach(list => document.write('<p>'+ list.name + ' (height: '  + list.height +')' + ((list.height >= 5) ? ' Wow that\'s big!' : '') + '</p>'));
