import Todo, { TodoProps } from "./Todo";
import styles from "./TextField.module.css";
import { useState } from "react";

function TodoList() {
  //   document.addEventListener("keydown", function (event) {
  //     const key = event.key.toLowerCase();
  //     if (key === "enter") addTodo();
  //   });

  const [myTodos, setMyTodos] = useState<TodoProps[]>([]);
  const [newTodo, setNewTodo] = useState<TodoProps>();

  function handleKeyboardChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo({ title: event.target.value, isCompleted: false });
  }

  function addTodo() {
    if (newTodo != null) {
      setMyTodos((m) => [...m, newTodo]);
      setNewTodo({ title: "", isCompleted: false });
    }
  }

  function removeTodo(index: number) {
    setMyTodos(myTodos.filter((_, id) => id !== index));
  }

  function checkTodo(index: number) {
    setMyTodos(
      myTodos.map((todo, id) =>
        id === index ? { ...todo, isCompleted: !todo.isCompleted } : todo
      )
    );
  }
  return (
    <>
      <div className={styles.fbWrapper}>
        <input
          className={styles.textfield}
          type="text"
          placeholder="Enter Todo"
          value={newTodo?.title}
          onChange={handleKeyboardChange}
        />
        <button type="button" onClick={addTodo} className={styles.addButton}>
          Add
        </button>
      </div>
      {myTodos.map((l) => (
        <Todo
          title={l.title}
          isCompleted={l.isCompleted}
          onDelete={() => {
            removeTodo(myTodos.indexOf(l));
          }}
          onCheck={() => {
            checkTodo(myTodos.indexOf(l));
          }}
        ></Todo>
      ))}
    </>
  );
}

export default TodoList;
