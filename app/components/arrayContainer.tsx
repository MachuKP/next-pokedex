import { AttackType } from "../type";
import styles from "./arrayContainer.module.css";
interface PropsType {
  datas?: string[];
  attacks?: AttackType[];
  title: string;
}

const ArrayContainer = (props: PropsType) => {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.title}>{props.title}</div>
      <div className={styles.typeContainer}>
        {props.datas &&
          props.datas.map((data, index) => (
            <div key={index} className={styles.card}>
              {data}
            </div>
          ))}
        {props.attacks &&
          props.attacks.map((data, index) => (
            <div key={index} className={styles.card}>
              {data.name}
            </div>
          ))}
      </div>
    </div>
  );
};

export default ArrayContainer;
