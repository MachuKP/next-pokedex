import { gql } from '@apollo/client';

const POKEMON_FRAGMENT = gql`
  fragment RecursivePokemonFragment on Pokemon {
    id
    number
    name
    image
  }
`;

export default POKEMON_FRAGMENT;
