import React from "react";
import Pokemon from "./components/pokemon";

export default function App() {
  const PokemonIds = Array.from({ length: 151 }, (v, i) => i + 1);

  return (
    <>
      <div className='App'>
        {PokemonIds.map((id) => (
          <Pokemon key={id} id={id} />
        ))}
        ,
      </div>
    </>
  );
}
