import Header from "./components/NavBar.js" 
import LogoCarrito from "./components/CartWidjet"
import ItemListContainer from "./components/ItemListContainer" 
import ItemDetailContainer from "./components/ItemDetailContainer"
import Footer from "./components/Footer"
import "./components/Item.css"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./components/Home"
import Carrito from "./components/Carrito"
import CustomProvider from "./components/CartContext"

function App () {
    const links = [
        {href:"/productos", link:"Productos", id: 1},
        {href:"/categoria/1", link:"electronics", id:2},
        {href:"/categoria/2", link:"jewelery", id:3},
        {href:"/carrito", link:<LogoCarrito/>}
    ]
    
    return (
        <>
            <CustomProvider>
                <BrowserRouter>
                    <header> <Header nombre="Kevin" links={links}/> </header>
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