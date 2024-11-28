import React from "react";   
import ReactDOM from  "react-dom/client"

function Hello(props) {
    return <h1> Hello World ! </h1>; 
}

const root= document.getElementById("root");
//const root= ReactDOM.createRoot(container);
root.render(<Hello/>);

export default Hello;