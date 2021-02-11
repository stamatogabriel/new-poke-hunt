export default async function getPokemon(type: string) {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/type/${type}`, {
      method: "GET",
    });

    const data: any = await response.json();

    const pokemonSort =
      data?.pokemon[Math.floor(Math.random() * data?.pokemon.length)];

    const parts = pokemonSort.pokemon.url.split("/");

    return { pokemon: { ...pokemonSort.pokemon, type, id: parts[6] } };
  } catch (err) {
    throw { message: "Oops ... Something went wrong. Please try again." };
  }
}
