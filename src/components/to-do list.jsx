import { useState } from "react";
import './to-do.css';

let formData = {
  write: "",
  tasks: [],
};

function TodoList() {
  const [form, setForm] = useState(formData);
  const [count, setCount] = useState(0);
  const [empty, setEmpty] = useState(false);

  function addTasks() {
    if (form.write.trim() !== "") {
      setForm({
        write: "",
        tasks: [...form.tasks, { id: count, text: form.write }],
      });
      setCount(count + 1);
      setEmpty(false);
    } else {
      setEmpty(true);
    }
  }

  function deleteTasks(id) {
    const tasksFiltering = form.tasks.filter((t) => t.id !== id);
    setForm({
      ...form,
      tasks: tasksFiltering,
    });
  }

  return (
    <div class="todo-app">
      <h2 class="title">Todo List</h2>

      <div class="todo-input">
        <input
          className={empty ? "errorData" : "inputData"}
          value={form.write}
          type="text"
          placeholder="اكتب مهمة جديدة..."
          onChange={(e) => setForm({ ...form, write: e.target.value })}
        />
        <button onClick={addTasks}>إضافة</button>
      </div>

      <ul class="todo-list">
        {form.tasks.map((task) => {
          return (
            <li key={task.id} class="todo-item">
              {task.text}
              <button onClick={() => deleteTasks(task.id)} class="delete">
                <i class="fa-solid fa-trash"></i>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default TodoList;
