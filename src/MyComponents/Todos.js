import React from 'react'
import {TodoItem} from './TodoItem';

export const Todos = (props) => {
    return (
        <div class="container">
            <h1 >Todos List </h1>
            
            {props.todos.length === 0 ?"no todos to display":
            props.todos.map((todo)=>{
              return <TodoItem todo= {todo} key={todo.sno} onDelete={props.onDelete}/>
            })
           }
           {/* {props.todos && props.todos.map((ele,index)=>{
               return(
                 <TodoItem todo= {ele} key={index} onDelete={ele.onDelete}/>
               )
           })} */}
        </div>
    )
}
