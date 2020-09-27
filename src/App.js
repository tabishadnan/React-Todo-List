import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Todo from './Components/Todo';

function App() {
  return (
    <div className="container-fluid">
      <div className="row bg-light-sea-green">
        <Todo />
      </div>
    </div>
  );
}

export default App;
