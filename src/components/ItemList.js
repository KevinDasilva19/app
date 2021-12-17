import Item from "./Item"

const List = ({data}) => {
    return (
        <>
            {
                data.map(
                    item => (
                        <Item key={item.id} name={item.title} price={item.price}/>
                    )
                )
            }
        </>
    )
}

export default List