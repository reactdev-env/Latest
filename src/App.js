import React from 'react'
import ReactDOM from "react-dom/client"
import Header from './Components/Header';
import Stat from './Components/Stat';




const App = () => {
    return (
        <div className='app'>
            <Header />
            <Stat />




        </div>
    )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<App />);
