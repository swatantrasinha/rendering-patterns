import React,{useState, useEffect} from 'react'

const index = () => {
    const [todoItems, setTodoItems] = useState([]);

    const  getTodoItemsList= async() => {
        const response = await fetch('https://dummyjson.com/todos')
        const data = await response.json()
         const fiveTodosItems= data.todos.splice(0,5)
        setTodoItems(fiveTodosItems);
    }
    useEffect(() => {
        getTodoItemsList();
    }, [])
    
  return (
    <div>
          <hr />
        <h3>Todo List By CSR is :</h3>
       {todoItems && todoItems.length && todoItems.map((ele,index) => {
        const uniqueKey= `${index}`;
        return (<div> {ele.todo}</div>)
       })}
        <hr />
      </div>
  )
}

export default index