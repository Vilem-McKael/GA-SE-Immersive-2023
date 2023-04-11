import React from 'react'
import ToDoListItem from '../ToDoListItem/ToDoListItem'


// rfc command stubs up this whole file

export default function ToDoList({todos}) {
    return (
        <>  
        <ul>
            {todos.map((t, idx) => <ToDoListItem todo={t} index={idx} key={idx}/>)}
        </ul>
      </>
    );
}