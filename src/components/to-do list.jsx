import { useState } from "react";
import "./to-do.css";

function TodoList() {
  const [text, setText] = useState("");
  const [tasks, setTasks] = useState([]);
  const [count, setCount] = useState(0);
  const [empty, setEmpty] = useState(false);

  function addTasks() {
    if (text.trim() !== "") {
      setTasks([...tasks, { id: count, task: text, isComplet: false }]);
      setCount(count + 1);
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }

  function deleteTasks(id) {
    const tasksFiltering = tasks.filter((t) => t.id !== id);
    setTasks(tasksFiltering);
  }

  function toggleComplete(id) {
    const newTasks = tasks.map((t) => {
      if (t.id === id) {
        return { ...t, isComplet: !t.isComplet };
      } else {
        return t;
      }
    });
    setTasks(newTasks);
  }

  return (
    <div className="todo-app">
      <h2 className="title">Todo List</h2>

      <div className="todo-input">
        <input
          className={empty ? "errorData" : "inputData"}
          value={text}
          type="text"
          placeholder="اكتب مهمة جديدة..."
          onChange={(e) => setText(e.target.value)}
        />
        <button onClick={addTasks}>إضافة</button>
      </div>

      <ul className="todo-list">
        {tasks.map((task) => {
          return (
            <li
              key={task.id}
              className={task.isComplet ? "todo-Completed" : "todo-item"}
            >
              {task.task}
              <label className="checkboxDiv">
                <input
                  type="checkbox"
                  checked={task.isComplet}
                  onChange={() => toggleComplete(task.id)}
                />
                <span className="checkboxBackground"></span>
              </label>

              <button onClick={() => deleteTasks(task.id)} className="delete">
                <i className="fa-solid fa-trash"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
