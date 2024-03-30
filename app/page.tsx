import styles from "./page.module.css";

export default function Home() {
  return (
    <main className={styles.main}>
      <img className={styles.image} src="./pokemon.jpg" alt="who's that pokemon?"/>
    </main>
  );
}
