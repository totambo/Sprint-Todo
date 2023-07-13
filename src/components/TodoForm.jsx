import React from 'react';
import './TodoForm.css';

const TodoForm = ({theme,inputValue, lista, setLista, setInputValue, fontColor}) => {
    const newTask = () => {
        if (inputValue !== undefined && inputValue !== "") {
            const id = lista.length > 0 ? lista[lista.length - 1].id + 1:1
            const item = {id: id, task: inputValue, complete: false}
            setLista([...lista, item]);
            setInputValue("");       
        }
    } 

return (
    <form name="form" action="">
        <input 
        value={inputValue} 
        onChange={(event) => setInputValue(event.target.value)} 
        className={`todoInput ${theme} ${fontColor}`}  
        type="text" placeholder="Create a new todo..."
        />
        <button className={`create ${theme} ${fontColor}`} type="submit" onClick={(e) => {e.preventDefault(); newTask()}}>Create</button>
    </form>
)}

export default TodoForm