
Video Tutorial Link : 

1. https://www.youtube.com/watch?v=qwhMyVVnmKM&t=394s
2. https://www.youtube.com/watch?v=fRgAI3FiYHc&list=PLe3J6mZBq1xVDr297Yg0p1SHbdj_Oceld&index=5

<details>
  <summary>Steps for Installation: </summary>

- npm init -y
- npm install next react react-dom
- create pages folder parallel to package.json
- inside pages folder add files index.js and return some jsx <br/>
  "scripts": {  
    "dev" : "next dev",  
    "build" : "next build",  
    "start" : "next start",  
    "lint": "next lint",
    "export" : "next build && next export"  
  },  
- npm run dev
</details>

<hr/>

<h1> <ins> Rendering Pattern </ins> </h1>
<ol>
  <li> Pre-render</li>
  <li> CSR</li>
  <li> SSR</li>
  <li> SSG</li>
  <li> ISSR</li>
</ol>

<details>
  <summary>Pre-rendering </summary>

  <h3> <ins> Case1 : Non-PreRender </ins> </h3>
- Initial App Load Shows Blank Screen  <br/>
- The first HTML file sent was not pre-render from server <br/>

<ins> Simple React App </ins>
1. Server sends HTML file to client (browser)
2. Browser receives HTML file with

```html
<div id="root">
  // empty
</div>
```
3. After client is hydrated with JS, our react code runs and then it fills the empty space.

![React JS: CSR](https://github.com/swatantrasinha/rendering-patterns/blob/main/screenshots/non-pre-render.png)


<h3> <ins> Case2 : With Pre-render </ins> </h3>
- Initial App Load Shows Some Text on Screen  <br/>
- The first HTML file sent was pre-render from server <br/>

<ins> Next JS App </ins>

1. Server sends HTML file to client (browser)
2. Browser receives complete HTML file to display on screen
3. After client is hydrated with JS, app becones interactive <br/>
![Next JS: SSR](https://github.com/swatantrasinha/rendering-patterns/blob/main/screenshots/with-pre-render-ssr.png)

</details>

<details>
  <summary>CSR and SSR</summary>

In a Next JS App we if dont use getServerSideProps --> it acts as CSR (same as a basic React App)
In this repo see HomePage and TodoItems link output is same as below <br/>

![CSRAndSSr](https://github.com/swatantrasinha/rendering-patterns/blob/main/screenshots/CSR-and-SSR.png)

See in code
### Home Page - SSR (using getServerSideProps)
```javascript
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
```

### Todo_Items Page - CSR  (not using getServerSideProps)
```javascript
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
```
</details>


<details>
  <summary>SSG - Static Site Generation </summary>
Whenever we request a url to our Next Server then it generates a HTML everytime and sends to client as response.
  If web app is getting too many request then this kind of operations becomes heavier on server and this might lead to memeory errors.
  So to this problem we have <b> <ins> SSG approach </ins> </b> where we will build the whole HTML once only during build time and we will deploy that build on server.
  <br />

  
<ins>Build Command </ins> - next build --> create .next folder <br />
<ins>Export Command </ins> - next export --> create out folder <br />

1. SSG without Data
We saw how to implement SSR using funcion -> getStaticProps <br />
Let try to build and export now <br />
When we build - in creates .next folder where all JS chunks are there <br />
When we export it creates an out folder that contains HTML files <br />
If we already have .next folder then delete it and then run npm run export <br/>

We will get error as - Error: Error for page /: pages with `getServerSideProps` can not be exported. <br/>

<ins>Remember </ins> :  We have used getServeSideProps for SSR in  - index.js <br/>

<ins> Also note </ins> : getServeSideProps - is meant to generate HTML at run time and not at build time <br />
So to make SSG we need some change- Now what changes to be made depends on 3 scenarios
- SSG with no data
  ```javascript
  import React from 'react';
const LandingPage = (props) =>  {
  
    return (
        <div>
          <hr />
          <h3>Todo List </h3>
      </div>
    )
}

export default LandingPage;
```
Now if we do:   npm run export
We can see its successful

- SSG with  data
- SSG with fetch data on client
  <br />
  



  </details>



