import ItemCount from "./ItemCount.js"

const Item = ({name, price, img,  key}) => {
    function OnAdd () {
        
    }

    return (
        <div id={key}>
            <h3 >{name}</h3>
            <p>Precio:${price}</p>
            <img src={img} alt="imgProduct"></img>
            <div class="btnCarrito">
                <ItemCount stock={5} initial={1} onAdd={OnAdd}/>
            </div> 
        </div>
    )
}

export default Item 