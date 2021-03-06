import { useState } from "react"

function ItemCount ({stock, initial, onAdd}) {
    
    const [contador, setContador] = useState(initial)
    console.log(contador, setContador)

    const sumar = () => {
        if (contador < stock) {
            setContador (contador + 1)
        } else {
            console.log("No hay mas stock disponible")
        }
    }

    const restar = () => {
        if (contador > 0) {
            setContador(contador - 1)
        } else {
            console.log("Ya no tienes productos en el carrito de compras")
        }
    }

    const agregarItem = () => {
        console.log("aca agrego un item desde item count")
        setContador(initial)
        onAdd(contador)
    }
    
    return (
        <>
            
            <p>Productos Selecionados: {contador}</p>
            <button onClick={sumar}>+</button>
            <button onClick={agregarItem}>Agregar a Carrito</button>
            <button onClick={restar}>-</button>
        </>
    )
}

export default ItemCount 