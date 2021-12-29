import ItemCount from "./ItemCount"
const ItemDetail = ({item}) => {
    function OnAdd() {}
    return (
        <>
            <div id={item.id} key={item.id}>
            <h3>{item.title}</h3>
            <p>Precio:${item.price}</p>
            <p>{item.description}</p>
            <img src={item.image} alt="imgProduct" className="imgProduct"></img>
            </div>
            <div className="btnCarrito">
                <ItemCount stock={5} initial={1} onAdd={OnAdd} />
            </div>
        </>
    )
}

export default ItemDetail
