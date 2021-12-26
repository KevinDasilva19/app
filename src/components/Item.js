
import ItemCount from "./ItemCount.js";
import "./Item.css"


const Item = ({ name, price, img, id }) => {
  
  return (
    <>
        <div id={id} key={id}>
            <h3>{name}</h3>
            <p>Precio:${price}</p>
            <img src={img} alt="imgProduct" className="imgProduct"></img>
            <button className="btnDetalle">Ver Detalle</button>
        </div>
        
    </>
);
};


export default Item;