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