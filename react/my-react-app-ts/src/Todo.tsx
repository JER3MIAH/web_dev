import styles from "./Todo.module.css";
import trashIcon from "./assets/trash_icon.svg";

export type TodoProps = {
  title: string;
  isCompleted: boolean;
};

export type TodoComponentProps = TodoProps & {
  onDelete: () => void;
  onCheck: ()=> void;
};

function Todo(
  { title, isCompleted , onDelete, onCheck}: TodoComponentProps,
   
) {
  return (
    <div
      className={`${styles.todoItem} ${isCompleted ? styles.completed : ""}`}
    >
      <p>{title}</p>
      <div>
        <button className={styles.checkBox} onClick={onCheck}>C</button>
        <img src={trashIcon} onClick={onDelete} alt="delete icon" />
      </div>
    </div>
  );
}

export default Todo;
