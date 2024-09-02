import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { CreateTodo } from './components/CreateTodo'
import { Todos } from './components/Todos'
      
function App() {
  const [todos, setTodos] = useState([]);
  const server_url = import.meta.env.VITE_SERVER_URL;
  useEffect(function(){
    fetch(`${server_url}/`)
      .then(async (res) =>{
          const json = await res.json();
          setTodos(json.todos);
        })
      },[]);
  return (
    <div style={{ backgroundColor: '#f9fbfe'}}>
       <CreateTodo todos={todos} setTodos = { setTodos }></CreateTodo>
       <ul >
          <Todos  todos={todos} setTodos={setTodos}></Todos>
       </ul>
       <button style={{
                margin: '2px 0',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                width:"7%",
                marginLeft:70
              }} onClick={() => {
    
            todos.forEach(todo => {
              fetch(`${server_url}/todo`, {
              method: "POST",
              headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ title: todo.title,completed: todo.completed })  
        })
        .then(response => response.json())
        .then(data => {
            console.log(data.msg); 
        })
        .catch(error => {
            console.error('Error:', error);
        });
    });
            }}>Save</button>
    </div>
  )
}

export default App