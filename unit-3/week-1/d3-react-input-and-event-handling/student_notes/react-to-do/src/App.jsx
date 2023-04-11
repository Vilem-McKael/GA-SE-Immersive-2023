import { useState } from 'react'
import './App.css'
import ToDoList from './components/ToDoList/ToDoList'
import NewToDoForm from './components/NewToDoForm/NewToDoForm';

function App() {

  const [todos, setToDos] = useState([
    'Have Fun with BTY',
    'Learn React with BTY',
    'Learn the MERN-Stack BTY'
  ])

  const [showTodos, setShowTodos] = useState(true);

  // const [formData, setFormData] = useState({
  //   name: "",
  //   emotion: "😁"
  // });

  function addToDo(todo) {
    setToDos([...todos, todo])
  }

  // function handleChange(evt) {
  //   const newFormData = {...formData, [evt.target.name]: evt.target.value};
  //   setFormData(newFormData);
  // }

  // function addNewUser(evt) {
  //   const newFormData = {...formData, [evt.target.name]: evt.target.value} // Makes a copy of formData instead of sharing a reference
  //   setFormData(newFormData);
  // }

  return (

    <div className="App">
      <h1>React To-Do with BTY</h1>
      <button onClick={() => setShowTodos(!showTodos)}>{showTodos ? 'Hide' : 'Show'}</button>
      {showTodos && <ToDoList todos={todos} />}
      <hr />
      <NewToDoForm addToDo={addToDo} />
    </div>
  )
}

export default App

// {/* <form>
//         <label>NAME</label>
//         <input name="name" onChange={handleChange} value={formData.name} />
//         <label>EMOTION</label>
//         <select name="emotion" onChange={handleChange}>
//           <option value="😁">Happy</option>
//           <option value="😐">Neutral</option>
//           <option value="😠">Angry</option>
//         </select>
//       </form> */}

//       {/* <h1>{formData.name} is {formData.emotion}</h1> */}