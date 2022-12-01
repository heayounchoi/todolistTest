import React, {useState} from "react";
import './App.css';

const Todo = ({item, todo}) => {
    return (
        <div>
            <span>{item.body}</span>
        </div>
    )
}

function App() {
    const [input, setInput] = useState('')
    const [todo, setTodo] = useState([])

    const onClickAddButton = () => {
        const newTodo = todo.concat({
            id: todo.length,
            body: input,
        })
        setTodo(newTodo)

        setInput('')
    }
  return (
    <div>
      <input type="text" onChange={(e) => setInput(e.target.value)} value={input}/><button type="submit" onClick={onClickAddButton}>추가하기</button>
        <h1>Todo List</h1>
        <ul>
            {todo &&
                todo.map((item) => {
                return <Todo item={item} todo={todo} key={todo.id} />
            })}
        </ul>
    </div>
  );
}

export default App;
