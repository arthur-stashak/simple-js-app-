//This creates the pokemon variables
let pokemonList = [
{ name: 'Pikachu', type: 'electric', height: 2},
{ name: 'Charizard', type: 'fire', height: 6},
{ name: 'Squirtle', type: 'water', height: 3}
];

//This is the loop that creates the list of pokemon and their heights
for (let i=0; i < pokemonList.length; i++){
  document.write('<p>'+ pokemonList[i].name + ' (height: '  + pokemonList[i].height +')' + ((pokemonList[i].height > 5) ? ' Wow that\'s big!' : '') + '<p>');
  }
