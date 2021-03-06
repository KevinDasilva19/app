import Item from "./Item"

const List = ({data}) => {
    return (
        <>
            {
                data.map(
                    item => (
                        <Item key={item.id} id={item.id} name={item.title} img= {item.image} price={item.price}/>
                    )
                )
            }
        </>
    )
}

export default List

