import { useEffect, useState } from "react";
import Todo from "./components/Todo";
import { addTodo, getAllTodo, updateTodo, deleteTodo } from "./utils/HandleApi";

function App() {

  const [todo, setTodo] = useState([])
  console.log(todo)
  const [text, setText] = useState("")
  const [IsUpdating, setIsUpdating] = useState(false)
  const [TodoId, setTodoId] = useState("")

  useEffect(() => {
    getAllTodo(setTodo)
  }, [])

  const updateMode = (_id, text) => {
    setIsUpdating(true)
    setText(text)
    setTodoId(_id)
    
  }

  return (
    <div className="App">

    <div className="container">
      <h1>Todo App</h1>
      <div className="top">
        <input 
        type= "text"
         placeholder="Add Todo..."
         value = {text}
         onChange={(e) => setText(e.target.value) }
         />
        <button onClick={ IsUpdating ? () => updateTodo(TodoId, text, setText, setTodo, setIsUpdating) : () => addTodo(text, setText, setTodo)}>
         {IsUpdating ? "Update" :  "Add"}
          </button>
      </div>
      <div className = "list">

        {todo&&todo.map((item) => <Todo key={item.id} text= {item.text} updateMode={() => updateMode(item._id, item.text)}
        deleteTodo={() => deleteTodo(item._id, setTodo)}/>)}

        
      </div>
    </div>


    </div>
  );
}

export default App;
