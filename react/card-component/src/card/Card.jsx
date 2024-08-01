import profilePic from "../assets/profile-pic.png";
import styles from "./Card.module.css";

function Card() {
  return (
    <div className={styles.card}>
      <img className={styles.cardImg} src={profilePic} alt="profile picture" />
      <h2 className={styles.cardTitle}>Jeremiah</h2>
      <p className={styles.cardText}>I like to code and watch Anime</p>
    </div>
  );
}

export default Card;
