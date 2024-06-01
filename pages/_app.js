import React from 'react'
import Header from './header/Header';
import Footer from './footer/Footer';
import "./styles/global.css";



const App = (props) => {
    const {Component, pageProps} = props;
    return (
        <>
           <Header/>
            <main>
                <>
                    <p>This is main area in _app.js and Landing Page content(index.js) will display below:  </p>
                    <Component {...pageProps} />
                </>
            </main>
            <Footer/>
        </>
    )
}

export default App
