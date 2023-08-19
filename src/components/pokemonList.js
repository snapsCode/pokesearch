const url = "https://pokeapi.co/api/v2/pokemon/ditto";

const getData = async (url) => {
  const resp = await fetch(url);
  const data = await resp.json();
  console.log("inside", data);
  const newData = data;
  return newData;
};
const data = getData(url);
console.log("outside", data);

export const pokemonList = [
  {
    name: "Ditto",
    img: "https://projectpokemon.org/images/normal-sprite/ditto.gif",
  },
  {
    name: "Darkrai",
    img: "https://projectpokemon.org/images/normal-sprite/darkrai.gif",
  },
  {
    name: "Arceus",
    img: "https://projectpokemon.org/images/normal-sprite/arceus.gif",
  },
  {
    name: "Charizard",
    img: "https://projectpokemon.org/images/normal-sprite/charizard.gif",
  },
  {
    name: "Blastoise",
    img: "https://projectpokemon.org/images/normal-sprite/blastoise.gif",
  },
  {
    name: "mew",
    img: "https://projectpokemon.org/images/normal-sprite/mew.gif",
  },
  {
    name: "Mewtwo",
    img: "https://projectpokemon.org/images/normal-sprite/mewtwo.gif",
  },
  {
    name: "Dragonite",
    img: "https://projectpokemon.org/images/normal-sprite/dragonite.gif",
  },
  {
    name: "Hydreigon",
    img: "https://projectpokemon.org/images/normal-sprite/hydreigon.gif",
  },
  {
    name: "Lucario",
    img: "https://projectpokemon.org/images/normal-sprite/lucario.gif",
  },
];
