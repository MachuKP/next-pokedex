export type AttackType = {
  name: string;
};

export type EvolutionType = {
  id: string;
  image: string;
  name: string;
  number: string;
};

export interface PokemonType {
  pokemon: {
    id: string;
    number: string;
    name: string;
    types: string[];
    resistant: string[];
    weaknesses: string[];
    maxCP: number;
    image: string;
    attacks: {
      fast: AttackType[];
      special: AttackType[];
    };
    evolutions: EvolutionType[];
  };
}
