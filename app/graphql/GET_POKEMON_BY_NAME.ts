import { gql } from "@apollo/client";
import POKEMON_FRAGMENT from "./POKEMON_FRAGMENT";

const GET_POKEMON_BY_NAME = gql`
  ${POKEMON_FRAGMENT}
  query pokemon($name: String!) {
    pokemon(name: $name) {
      id
      number
      name
      types
      resistant
      weaknesses
      maxCP
      image
      attacks {
        fast {
          name
        }
        special {
          name
        }
      }
      evolutions {
        ...RecursivePokemonFragment
      }
    }
  }
`;

export default GET_POKEMON_BY_NAME;
