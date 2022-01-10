import { createContext, useContext, useState } from "react";


const contexto = createContext()

export const { Provider } = contexto 


export const useContexto = () => {
    return useContext(contexto) 
}
const CustomProvider = ({children}) => {


    const [cantidadTotal, setCantidadTotal] = useState(0)
    const [precioTotal, setPrecioTotal] = useState(0)
    const [carrito, setCarrito] = useState([])
    
    
    function limpiarCarrito () {
        setCarrito([])
    }
    function agregarAlCarrito (cantidad, producto) {
        const copiaProducto = {...producto}
        copiaProducto.cantidad = cantidad
        setCarrito([...carrito,copiaProducto])
        console.log(copiaProducto)
        setCantidadTotal(cantidad)
    } 
    function borrarCarrito (id) {
    }
    function isInCarrito (id) {
        //return true?false
    } 
    const valorContexto = {
        cantidadTotal , 
        setCantidadTotal,
        precioTotal, 
        setPrecioTotal,
        carrito , 
        setCarrito,
        agregarAlCarrito , 
        borrarCarrito ,
        limpiarCarrito
    }
    
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider






