// necesitamos la variable react en scope
import React from "react" 
// necesitamos la variable reactDOM en scope
import ReactDOM from "react-dom"
// necesitamos una aplicacion de react
import Header from "./components/NavBar.js" 
// necesitamos dibujar la aplicacion en el dom
ReactDOM.render(<Header/>, document.getElementById("navBar")) 




