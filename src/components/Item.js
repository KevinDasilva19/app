
import ItemCount from "./ItemCount.js";
import "./Item.css"
import { Link } from "react-router-dom"


const Item = ({ name, price, img, id }) => {

return (
    <>
        <div key={id}>
            <h3>{name}</h3>
            <p>Precio:${price}</p>
            <img src={img} alt="imgProduct" className="imgProduct"></img>
            <Link to={`/producto/${id}`} className="btnDetalle">Ver Detalle</Link>
        </div>
        
    </>
);
};


export default Item;