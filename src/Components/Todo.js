import { useState } from "react";
import './Todo.css'

function App() {
    const [task, setTask] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput) {
            setTask([...task, taskInput]);
            setTaskInput('');
        }
      };
    
      const deleteTask = (index) => {
        const newTask = task.filter((_, i) => i !== index);
        setTask(newTask);
      };

      return (
        <div>
            <h1>TO-DO-LIST</h1>
            <h2>Add your todays tasks</h2>
          <input
            type="text"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <button onClick={addTask}>Add</button>
    
          <ul>
            {task.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => deleteTask(index)}>Delete this Task</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default App;