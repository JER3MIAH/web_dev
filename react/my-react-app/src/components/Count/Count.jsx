import styles from "./Count.module.css"

function Count({ clickCount }) {
  return <h1 className={styles.count}>{clickCount}</h1>;
}

export default Count;
