import { useState } from "react";

export default function TodoList() {
    const [tasks, setTasks] = useState([
        { id: 1, text: "Сделать задание по React", completed: false },
        { id: 2, text: "Задеплоить проект", completed: false },
        { id: 3, text: "Поделиться ссылкой", completed: false },
    ]);

    const toggleTask = (id) => {
        setTasks(tasks.map(task =>
            task.id === id ? { ...task, completed: !task.completed } : task
        ));
    };

    return (
        <div style={{ maxWidth: "400px", margin: "0 auto" }}>
            <h1>Список задач</h1>
            <ul>
                {tasks.map((task) => (
                    <li key={task.id} style={{ display: "flex", alignItems: "center" }}>
                        <input
                            type="checkbox"
                            checked={task.completed}
                            onChange={() => toggleTask(task.id)}
                        />
                        <span style={{ marginLeft: "10px", textDecoration: task.completed ? "line-through" : "none" }}>
              {task.text}
            </span>
                    </li>
                ))}
            </ul>
        </div>
    );
}
