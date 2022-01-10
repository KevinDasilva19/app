import ItemCount from "./ItemCount"
import { useContexto } from "./CartContext"


const ItemDetail = ({producto}) => {
    const { agregarAlCarrito } = useContexto()


    function OnAdd(cantidad) {
        console.log("Se agrego a Carrito")
        agregarAlCarrito(cantidad, producto)
    }
    return (
        <>
            <div id={producto.id}  className="detalle">
            <p>Detalle de Producto</p>
            <h3>{producto.title}</h3>
            <p>Precio:${producto.price}</p>
            <p>{producto.description}</p>
            <img src={producto.image} alt="imgProduct" className="imgProduct"></img>
            </div>
            <div className="btnCarrito">
                <ItemCount stock={5} initial={1} onAdd={OnAdd} />
            </div>
        </>
    )
}

export default ItemDetail
