import { useState } from "react";

export function CreateTodo({ todos, setTodos }){
    const [title,setTitle] = useState('');

    return (
        <>
          <div >
            
            <h1 id="top-but1-most-container" style={{ color: '#333',textAlign:"center", fontSize: '50px', marginBottom: '10px' 
            }}>Todos</h1>
            <div style={{display: 'flex',
            flexDirection: 'column',
            padding: '20px',
            marginLeft:"50px"
            }}>
            <h1 id="create-heading" style={{ fontSize: '36px', color: '#333',fontWeight:700 }}>
              Create <span id="task-heading" style={{ color: '#007BFF',fontWeight:500 }}>Task</span>
            </h1>
            
            <input id="task-input"
              style={{
                margin: '5px 0',
                padding: '10px',
                width: '50%',
                height:'50px', 
                border: '1px solid #ccc',
                borderRadius: '4px',
                boxSizing: 'border-box',
                fontSize: '20px'
                
              }}
              type="text"
              value={title}
              placeholder="What you wanna do?"
              onChange={function(e) {
                setTitle(e.target.value);
              }}
            />
            <br />
      
            <button id="add-task-button"
              style={{
                margin: '2px 0',
                padding: '10px 20px',
                backgroundColor: '#007BFF',
                color: '#fff',
                border: 'none',
                borderRadius: '4px',
                cursor: 'pointer',
                fontSize: '16px',
                width:"7%"
              }}
              onClick={() => {
                if (title === "") {
                  alert("Enter valid text");
                  return;
                }
                setTitle('');
                setTodos([...todos, { title,completed:false }]);
              }}
            >
              Add
            </button>
      
            <h1 id="my-heading" style={{ color: '#333', fontSize: '32px', fontWeight:700,marginTop: '30px' }}>
              My<span id="tasks-heading" style={{ color: '#007BFF',fontWeight:700, }}> Tasks</span>
            </h1>
            </div>
            </div>
        </>
        
      );
      
}
