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
        const id = producto.id
        if (isInCarrito(id)) {
            //producto.cantidad = producto.cantidad ....
            const copia_carrito = [...carrito]
            let match = copia_carrito.find((p)=> p.id === p.id )
            match.cantidad =match.cantidad + cantidad
            setCarrito(copia_carrito)
        } else {

            const copiaProducto = {...producto}
            copiaProducto.cantidad = cantidad
            setCarrito([...carrito,copiaProducto])
            console.log(copiaProducto)
            setCantidadTotal(cantidad)
        }
        setCantidadTotal(cantidadTotal + cantidad)
        
    } 
    function borrarCarrito (id, cantidad) {
        //const nuevoCarrito = carrito.filter ( product =>product.id !== id )
        //setCarrito([...carrito,nuevoCarrito]) 
        //const copia = [...carrito]
        const copia = carrito.filter (product=>(product.id) !== id)
        setCarrito(copia)
        setCantidadTotal(cantidadTotal - cantidad)

    }
    function isInCarrito (id) {
        //return true?false
        return carrito.some((p)=> p.id === id)
        console.log("soy isInCarrito")
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
        limpiarCarrito,
        isInCarrito
    }
    
    return (
        <Provider value={valorContexto}>
            {children}
        </Provider>
    )
}

export default CustomProvider






