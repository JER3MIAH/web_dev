import Todo, { TodoProps } from "./Todo";
import styles from "./TextField.module.css";
import { useEffect, useState } from "react";

function TodoList() {
  const [myTodos, setMyTodos] = useState<TodoProps[]>([]);
  const [newTodo, setNewTodo] = useState<TodoProps>();

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      const key = event.key.toLowerCase();
      if (key === "enter") {
        event.preventDefault();
        addTodo();
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  });

  function handleKeyboardChange(event: React.ChangeEvent<HTMLInputElement>) {
    setNewTodo({ title: event.target.value, isCompleted: false });
  }

  function addTodo() {
    if (newTodo != null && newTodo.title != "") {
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
