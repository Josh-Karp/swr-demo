import React from "react";
import { usePokemon } from "../hooks/usePokemon";

export default function Pokemon({ id }: { id: number }) {
  const { pokemon, error } = usePokemon(id);

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
