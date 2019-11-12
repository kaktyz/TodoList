import React from 'react';
import './App.css';
import TodoItem from "./TodoItem.js";
import todosData from "./todosData.js";

function App() {
  
  const list = todosData.map(product => <TodoItem key={product.id} text={product.text} />);

  
  return (
    <div className="App">
      {list}
    </div>
  );
}

export default App;
