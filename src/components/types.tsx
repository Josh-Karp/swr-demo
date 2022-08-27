export interface IPokemon {
  id: number;
  name: string;
  image: string;
  type: string;
}

export interface IPokeData {
  abilities: Array<any>;
  base_experience: number;
  forms: Array<any>;
  game_indices: Array<any>;
  height: number;
  held_items: Array<any>;
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Array<any>;
  name: string;
  order: number;
  past_types: Array<any>;
  species: any;
  sprites: any;
  stats: Array<any>;
  types: Array<any>;
  weight: number;
}
