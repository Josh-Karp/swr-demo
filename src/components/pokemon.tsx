import React from "react";
import useSWR from "swr";
import { IPokemon } from "./types";

const fetcher = async (url: string): Promise<any> => {
  try {
    const response = await fetch(url);
    const pokemon: any = await response.json();

    const pokemonType: string = pokemon.types
      .map((poke: any) => poke.type.name)
      .join(", ");

    const TransformedPokemon = {
      id: pokemon.id,
      name: pokemon.name,
      image: `${pokemon.sprites.front_default}`,
      type: pokemonType,
    };

    return TransformedPokemon as IPokemon;
  } catch (error) {
    console.error(error);
  }
};

export default function Pokemon({ id }: any) {
  const { data: pokemon, error } = useSWR<IPokemon, Error>(
    `https://pokeapi.co/api/v2/pokemon/${id}`,
    fetcher
  );

  if (!error && !pokemon) {
    return <div>Loading...</div>;
  }
  if (error) {
    console.error(error);
    return <div>Oops, an error occured</div>;
  }

  return (
    <div className='card'>
      <span className='card-id'>#{pokemon?.id}</span>
      <img className='card-image' src={pokemon?.image} alt={pokemon?.name} />
      <h1 className='card-name'>{pokemon?.name}</h1>
      <span className='card-details'>{pokemon?.type}</span>
    </div>
  );
}
