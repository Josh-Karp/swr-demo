import { useEffect, useState } from "react";
import useSwr from "swr";
import { IPokemon } from "../components/types";
import { transformPokemon } from "../helpers/transformPokemon";

const baseUrl = "https://pokeapi.co/api/v2";

export const usePokemon = (id: number) => {
  const [pokemon, setPokemon] = useState<IPokemon>();

  const url = `${baseUrl}/pokemon/${id}`;
  const { data, error, isValidating } = useSwr(url);

  useEffect(() => {
    if (!isValidating) {
      setPokemon(transformPokemon(data));
    }
  }, [isValidating, data]);

  return { pokemon, error };
};
