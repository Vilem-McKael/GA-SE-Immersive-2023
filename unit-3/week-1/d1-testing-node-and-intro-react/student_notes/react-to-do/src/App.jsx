import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'
import Blog from './components/Blog/Blog'
import ToDoList from './components/ToDoList/ToDoList'

const todos = [
  'Have Fun',
  'Learn React',
  'Learn the MERN-Stack'
];

export default function App() {
  return (
    <div className="App">
      <h1>React To-Do</h1>
      <ToDoList todos={todos}/>
    </div>
  )
}