import React from 'react';
import { useState } from 'react';
import './Main.css';
import TodoForm from './TodoForm';
import NewTodo from "./NewTodo"
import Filters from './Filters';

const Main = ({theme, fontColor}) => {
  const [inputValue, setInputValue] = useState();
  const [lista, setLista] = useState([]);
  const [filter, setFilter] = useState('all');
  
      
  return (
    <main>
      <TodoForm inputValue={inputValue} setInputValue={setInputValue} lista={lista} setLista={setLista} theme={theme} fontColor={fontColor} />
      <NewTodo lista={lista} setLista={setLista} theme={theme} fontColor={fontColor} filter={filter} />
      <Filters lista={lista} setLista={setLista} fontColor={fontColor} setFilter={setFilter}/>
    </main>
)}
export default Main

