import { useState, useEffect } from 'react';
import './App.css';

function App() {
  // Store the current input value
  const [task, setTask] = useState('');

  // Store all tasks
  const [tasks, setTasks] = useState([]);

  // Update browser tab title whenever the task list changes
  useEffect(() => {
    document.title = `Tasks (${tasks.length})`;
  }, [tasks]);

  // Add a new task
  function addTask() {
    // Prevent adding an empty task
    if (task.trim() === '') {
      return;
    }

    // Add the new task
    setTasks([...tasks, task]);

    // Clear the input field
    setTask('');
  }

  // Delete a task
  function deleteTask(indexToDelete) {
    setTasks(
      tasks.filter((item, index) => index !== indexToDelete)
    );
  }
  return (
    <div>
      <h1>My Tasks</h1>
      <input
        type="text"
        placeholder="Enter a task"
        value={task}
        onChange={(e) => setTask(e.target.value)}
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {tasks.map((item, index) => (
          <li key={index}>
            {item}
            <button onClick={() => deleteTask(index)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
export default App;
