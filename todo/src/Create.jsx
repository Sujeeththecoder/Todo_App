import React, { useState } from 'react';
import axios from 'axios';

function Create({ setTodos }) {
    const [task, setTask] = useState('');
    const [taskList, setTaskList] = useState([]);

    const handleAdd = () => {
        axios.post('http://localhost:3001/add', { task: task })
            .then(result => {
                // Update parent state with new task
                setTodos(prevTodos => [...prevTodos, { task: task }]);
                // Add task to local task list
                setTaskList(prevList => [...prevList, task]);
                // Clear input field after adding task
                setTask('');
            })
            .catch(err => console.log(err));
    };

    return (
      <div className="flex flex-col justify-center items-center h-screen">
          <h1>Todo</h1>
          <div className="flex">
              <input className="outline" type="text" placeholder="Enter Task" value={task} onChange={(e) => setTask(e.target.value)} />
              <button className="bg-blue-500" type="button" onClick={handleAdd}>Add</button>
          </div>
          {taskList.length > 0 && (
            <div>
              <h2>Tasks Added:</h2>
              <ul>
                {taskList.map((task, index) => (
                  <li key={index}>{task}</li>
                ))}
              </ul>
            </div>
          )}
      </div>
  );
}

export default Create;
