import React, { useEffect, useState } from 'react';
import Create from './Create';
import axios from 'axios';

export default function Home() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    axios
      .get('http://localhost:3001/get')
      .then((result) => setTodos(result.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div>
      <Create setTodos={setTodos} todos={todos} />
      <div className="tasks-list"> 
        {todos.length === 0 ? (
          <div>No Record</div>
        ) : (
          todos.map((todo) => (
            <div key={todo.task} className="task"> 
              {todo.task}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
