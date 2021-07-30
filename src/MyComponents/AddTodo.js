
import React,{useState} from 'react';
import { Form,Button} from 'react-bootstrap'
export const AddTodo = ({addTodo}) => {
     const [Title, setTittle] = useState("");
     const [Desc, setDesc] = useState("");
          const submit = (e)=>{
              e.preventDefault();
              if(!Title || !Desc){
                  console.log("empty")
                  alert('Tittle or Description Cannot be blank');
              }
             addTodo(Title,Desc)
          }      
          
    return (

        <Form className="container" onSubmit={submit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Todo Tittle</Form.Label>
    <Form.Control type="text" value={Title} onChange={(e)=>setTittle(e.target.value)} placeholder="Todo Tittle" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Todo Description</Form.Label>
    <Form.Control type="text" value={Desc} onChange={(e)=>setDesc(e.target.value)} placeholder="Description" />
  </Form.Group>
  
  <Button variant="success" type="submit" className="btn btn-sm">
    AddTodo
  </Button>
</Form>
    )
}
