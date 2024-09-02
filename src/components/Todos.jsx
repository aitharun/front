
export function Todos({todos, setTodos}){
    const server_url = import.meta.env.VITE_SERVER_URL;
    const handleDelete = (todoId,index) => {
        fetch(`${server_url}/delete`, {
            method: "DELETE",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({ _id: todoId }) 
        })
        .then(async(response) => {
            const json = response.json();
            console.log(json.msg);
        })
        .then(data => {
            setTodos(prevTodos => prevTodos.filter((_, i) => i !== index));
        })
        .catch(error => {
            console.error('Error:', error); 
        });
    };
    
    const handleCheckboxChange = (index) => {
        setTodos(todos.map((todo, _id) => 
            _id === index ? { ...todo, completed: !todo.completed } : todo
        ));
    };
    return <div>

        {todos.map(function(todo){
            if(!todo) return null;
            return(
            <>
                <li key={index} style={{
                    display: 'flex',
                    alignItems: 'center',
                    //backgroundColor: '#eaf6ff', /* Light blue background */
                    borderRadius: '8px', /* Rounded corners */
                    padding: '10px',
                    margin: '10px 0',
                    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)'
                    }}>

                    <input type="checkbox" id="checkboxb" style={{
                        width: '20px', 
                        height: '20px', 
                        marginRight: '10px', 
                        accentColor: '#007BFF', 
                        cursor: 'pointer', 
                    }} checked={todo.completed}
                    onChange={() => handleCheckboxChange(index)}/>

                    <span id="spanb" style={{
                        flexGrow: 1,
                        color: '#333',
                        fontSize: '25px',
                        marginLeft:'10px',
                        padding:5,
                        textDecoration: todo.completed ? 'line-through': 'none' }}>{todo.title}</span>
                    
                    <button 
                    id="buttonb" 
                    style={{
                        background: 'none',
                        border: 'none',
                        cursor: 'pointer',
                        marginLeft: 10
                    }}
                    onClick={() => handleDelete(todo._id,index)} // Move onClick to the button for clarity
                        >
                    <img 
                        src="https://res.cloudinary.com/dpovsggij/image/upload/delete-button-svgrepo-com_hfg9oj123" 
                        alt="Delete Task" 
                        style={{
                            width: 25,
                            height: 25
                        }} 
                    />
                </button>
                </li>
                </>
            );
        })}
    </div>
}
