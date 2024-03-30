"use client";
import styles from "./evolution.module.css";
import { useRouter } from "next/navigation";

interface PropsType {
    data: {
        id: string;
        image: string;
        number: string;
        name: string;
    }
}

const EvolutionComponent = (props: PropsType) => {
  const router = useRouter();
  const handleClick = () => {
    router.push(`/${props.data.name}`);
  };
  return (
    <div
      className={styles.pokemonContainer}
      key={props.data.id}
      onClick={handleClick}
    >
      <img
        className={styles.pokemonImage}
        src={props.data.image}
        alt="evolution image"
      />
      <div className={styles.title}>
        <span className={styles.pokemonNumber}>{props.data.number}</span>
        {props.data.name}
      </div>
    </div>
  );
};

export default EvolutionComponent;
