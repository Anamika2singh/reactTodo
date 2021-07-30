import './App.css';
import React,{useState} from 'react';
import Header from './MyComponents/Header';
import { Todos } from './MyComponents/Todos';
import { AddTodo } from './MyComponents/AddTodo';
import {Footer} from './MyComponents/Footer';
function App() {

  const onDelete = (todo) =>{
    console.log("im on delete of todo",todo);
   
    setTodos(todos.filter((e)=>{
      console.log("element",e)
        return e!==todo;
    }))
 }
  
 const [todos , setTodos] = useState([ ])
  const addTodo = (Title,Desc)=>{
    console.log("adding this todo");
    // let sno = todos[todos.length-1].sno +  1;
     const mytodo = {
      //  sno:sno,
       Title:Title,
       Desc:Desc
     }
     setTodos([...todos,mytodo])
     console.log("mytodo",mytodo)
  }
  return (
    <>
   <Header tittle="My Todos List" SearchBar = {true}/>
   <AddTodo addTodo={addTodo}/>
   <Todos todos={todos} onDelete={onDelete}/>
   <Footer/>
    </>
  );
}

export default App;
