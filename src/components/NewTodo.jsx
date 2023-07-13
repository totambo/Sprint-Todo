import React from 'react';
import './NewTodo.css';

const NewTodo = ({lista, setLista, theme, fontColor, filter}) => {
  const checkIcon = <img src="src/assets/icon-check.svg" alt="" className="checked"/>
  const deleteIcon = <img src="src/assets/icon-cross.svg" alt=""/>
 
  
  const todoCheked = (id) => {
      const newTodos = lista.map(item => {
      if (item.id == id)
      {item.complete = !item.complete}
      return item
    })
 
    setLista([...newTodos])
  }
  
  function deleteTodo(id) {
    const remainingTodos = lista.filter(todo => todo.id !== id);
    setLista(remainingTodos);
  }
  console.log(filter)
 
  
  return (
    
      <ul className={`${theme === "light" ? "ulLight" : "ulDark"} ${fontColor}`}>
        {lista.map(item => {
          if (filter === "Completed" && !item.complete) {
            return null;
          }
          if (filter === "Active" && item.complete) {
            return null; 
          }
          return <li key={item.id}>
            <button className={`checkbox ${item.complete ? "taskCheck" : "taskUncheck"}`} onClick={() => todoCheked (item.id)}>{checkIcon}</button>
            <span className={`${item.complete ? "taskDone" : ""}`}>{item.task}</span>
            <button className="deleteTask" type="checkbox" onClick={() => deleteTodo(item.id)}>{deleteIcon}</button>
          </li>
          })}
      </ul>
  )
}

export default NewTodo;