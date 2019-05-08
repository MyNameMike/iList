import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import ToDoList from './ToDoList';

const destination = document.querySelector('#container');

ReactDOM.render(
    <div>
      <h1>iList</h1>
      <ToDoList/>
    </div>,
    destination
);