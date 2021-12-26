import ItemCount from "./ItemCount"


const ItemDetailContainer = () => {
    function OnAdd() {}

    return (
        <div>
            <div className="btnCarrito">
                <ItemCount stock={5} initial={1} onAdd={OnAdd} />
            </div>
        </div>
    )
}

export default ItemDetailContainer
