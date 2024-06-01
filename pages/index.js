import React from 'react';

export async function getServerSideProps() {
    const response = await fetch('https://dummyjson.com/todos')
    const data = await response.json()
    const fiveTodosItems= data.todos.splice(0,5)
   
    return {
      props: {
        todoItems: fiveTodosItems
      }
    }
  }

const LandingPage = (props) =>  {
  const {todoItems} = props;
    return (
        <div>
          <hr />
          <h3>Todo List By SSR is :</h3>
          {todoItems && todoItems.length && todoItems.map((ele,index) => {
        const uniqueKey= `${index}`;
        return (<div> {ele.todo}</div>)
       })}
        <hr />
      </div>
    )
}

export default LandingPage;