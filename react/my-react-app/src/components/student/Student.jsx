import PropTypes from "prop-types";
import styles from "./Student.module.css";

function Student(props) {
  return (
    <div className={styles.student}>
      <p>Name: {props.name}</p>
      <p>Age: {props.age}</p>
    </div>
  );
}

Student.propTypes = {
    name: PropTypes.string.isRequired,
    age: PropTypes.number.isRequired,
}

Student.defaultProps = {
  name: "Jeremiah",
  age: 100,
}

export default Student;
