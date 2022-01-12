import Header from "./components/NavBar.js" 
import ItemListContainer from "./components/ItemListContainer" 
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import "./components/Item.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Carrito from "./components/Carrito"
import CustomProvider from "./components/CartContext"

function App () {
    
    
    return (
        <>
            <CustomProvider>
                <BrowserRouter>
                    <Header nombre="Kevin"/>
                    <Routes>
                        <Route path="/home" element={<Home/>}/>   
                        <Route path="/productos" element={<ItemListContainer/>}/>
                        <Route path="/categoria/:id" element={<ItemListContainer/>}/>
                        <Route path="/carrito" element={<Carrito/>}/>
                        <Route path="/producto/:id"  element={<ItemDetailContainer/>}/>
                    </Routes>
                    <Footer/>
                </BrowserRouter>
            </CustomProvider>
        </>
        
    )
} 
    


export default App 