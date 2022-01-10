import { useContexto } from "./CartContext"
import "./Item.css"
import { Link } from "react-router-dom"

const Carrito = () => {
    
    const { carrito, setCarrito, limpiarCarrito } = useContexto()
    
    console.log(carrito)

    if (carrito.length === 0) {
        return (
            <div>
                <p>El carrito se encuentra vacío</p>
                <Link to="/productos" >Seguir Comprando</Link>
            </div>
        )
    } else {
        return (
            <article>
                <button onClick={limpiarCarrito}>Vaciar Carrito</button>
                {
                    carrito.map(producto => (
                        <div id={producto.id} key={producto.id}>
                            <h3>{producto.title}</h3>
                            <p>{producto.price}</p>
                            <img src={producto.image} className="imgProduct"/>
                            <p>cantidad:{producto.cantidad}</p>
                            <button >Eliminar Producto</button>
                        </div>
                    ))
                }
            </article>
        )
    }
}

export default Carrito