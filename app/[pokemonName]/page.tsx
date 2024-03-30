import React, { Suspense } from "react";

import createApolloClient from "@/apollo-client";
import GET_POKEMON_BY_NAME from "../graphql/GET_POKEMON_BY_NAME";

import { PokemonType } from "../type";
import styles from "./pokemonName.module.css";
import ArrayContainer from "../components/arrayContainer";
import EvolutionComponent from "../components/evolution";

async function loadPokemonData(pokemonName: string) {
  const client = createApolloClient();
  const { data } = await client.query({
    query: GET_POKEMON_BY_NAME,
    variables: {
      name: pokemonName,
    },
  });
  return data;
}

const PokemonDetails = async ({
  params: { pokemonName },
}: {
  params: { pokemonName: string };
}) => {
  const data: PokemonType = await loadPokemonData(pokemonName);

  return (
    <div className={styles.mainContainer}>
      <Suspense fallback={<div>Loading...</div>}>
        {data && data.pokemon ? (
          <div>
            <div className={styles.pokemonContainer}>
              <div className={styles.title}>
                <span className={styles.pokemonNumber}>
                  {data.pokemon.number}
                </span>
                {data.pokemon.name}
              </div>
              <img
                className={styles.pokemonImage}
                src={data.pokemon.image}
                alt="pokemon image"
              />
            </div>
            <div className={styles.detailContainer}>
                <span  className={styles.datail}>Max CP</span>{data.pokemon.maxCP}
            </div>
            <ArrayContainer title="Fast" attacks={data.pokemon.attacks.fast} />
            <ArrayContainer title="Special" attacks={data.pokemon.attacks.special} />
            <ArrayContainer title="Type" datas={data.pokemon.types} />
            <ArrayContainer title="Resistant" datas={data.pokemon.resistant} />
            <ArrayContainer
              title="Weaknesses"
              datas={data.pokemon.weaknesses}
            />
            {data.pokemon?.evolutions?.length && (
              <div className={styles.mainEvolution}>
                <div className={styles.pokemonNumber}>Evolution</div>
                <div className={styles.evolutionContainer}>
                  {data.pokemon.evolutions.map((evolution) => (
                    <EvolutionComponent data={evolution} />
                  ))}
                </div>
              </div>
            )}
          </div>
        ) : (
          <div className={styles.mainContainer}>Not Found</div>
        )}
      </Suspense>
    </div>
  );
};

export default PokemonDetails;
