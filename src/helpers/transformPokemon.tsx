import { IPokeData, IPokemon } from "../components/types";

export const transformPokemon = (data: IPokeData): IPokemon => {
  console.log(data);
  const pokemonType: string = data.types
    .map((poke: any) => poke.type.name)
    .join(", ");

  const pokemon = {
    id: data.id,
    name: data.name,
    image: `${data.sprites.front_default}`,
    type: pokemonType,
  };

  return pokemon;
};
