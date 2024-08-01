import styles from "./Button.module.css";

function Button({ title, onTap }) {
  return (
    <button className={styles.button} onClick={onTap}>
      {title}
    </button>
  );
}

export default Button;
