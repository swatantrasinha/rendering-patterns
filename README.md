
Video Tutorial Link : 

1. https://www.youtube.com/watch?v=qwhMyVVnmKM&t=394s
2. https://www.youtube.com/watch?v=fRgAI3FiYHc&list=PLe3J6mZBq1xVDr297Yg0p1SHbdj_Oceld&index=5

Steps for Installation:
- npm init -y
- npm install next react react-dom
- create pages folder parallel to package.json
- inside pages folder add files index.js and return some jsx <br/>
  "scripts": {  
    "dev" : "next dev",  
    "build" : "next build",  
    "start" : "next start",  
    "lint": "next lint"  
  },  
- npm run dev

<hr/>

<h1> <ins> Rendering Pattern </ins> </h1>
<ol>
  <li> Pre-render</li>
  <li> CSR</li>
  <li> SSR</li>
  <li> SSG</li>
  <li> ISSR</li>
</ol>

<h2>Pre-rendering</h2>

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

![React JS: CSR](https://github.com/swatantrasinha/rendering-patterns/assets/62704756/aa564c0e-843f-4ef0-a18a-c85900b733c7)


<h3> <ins> Case2 : With Pre-render </ins> </h3>
- Initial App Load Shows Some Text on Screen  <br/>
- The first HTML file sent was pre-render from server <br/>

<ins> Next JS App </ins>

1. Server sends HTML file to client (browser)
2. Browser receives complete HTML file to display on screen
3. After client is hydrated with JS, app becones interactive
![Next JS: SSR](https://github.com/swatantrasinha/rendering-patterns/assets/62704756/aa564c0e-843f-4ef0-a18a-c85900b733c7)


