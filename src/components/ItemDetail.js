import ItemCount from "./ItemCount"
const ItemDetail = () => {
    function OnAdd() {}
    return (
        <>
            <div className="btnCarrito">
                <ItemCount stock={5} initial={1} onAdd={OnAdd} />
            </div>
        </>
    )
}

export default ItemDetail
