import React from 'react';
import AddTask from './components/AddTask';
import TasksList from './components/List';
import DeleteTask from './components/Deleted';
import CompleteTask from './components/Completed';
import './App.css';


const App = () => (
  <div className="mytodoapp container">
    <div className="row">
      <div className="header tasksContainer col-7 text-center mx-auto">
        <AddTask />
      </div>
      <div className="tasksContainer col-7 mx-auto">
        <TasksList />
      </div>

      <div className="tasksContainer col-7 mx-auto">
        <h3>Completed Tasks</h3>
        <CompleteTask />
      </div>
      <div className="tasksContainer col-7 mx-auto">
        <h3>Deleted Tasks</h3>
        <DeleteTask />
      </div>
    </div>
  </div>
)


export default App;
