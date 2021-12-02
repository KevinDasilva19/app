// necesitamos la variable react en scope
import React from "react" 
// necesitamos la variable reactDOM en scope
import ReactDOM from "react-dom"
// necesitamos una aplicacion de react
import App from "./App" 
// necesitamos dibujar la aplicacion en el dom
ReactDOM.render(<App/>, document.getElementById("root"))