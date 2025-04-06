import { useState } from "react";

function App() {
    const [tasks, setTasks] = useState([]);
    const [taskInput, setTaskInput] = useState('');

    const addTask = () => {
        if (taskInput) {
            setTasks([...tasks, taskInput]);
            setTaskInput('');
        }
      };
    
      const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
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
            {tasks.map((task, index) => (
              <li key={index}>
                {task} <button onClick={() => deleteTask(index)}>Delete this Task</button>
              </li>
            ))}
          </ul>
        </div>
      );
    }
    
    export default App;