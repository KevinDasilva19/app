import List from "./ItemList"
import { useState, useEffect } from "react"

function ItemListContainer () {
    let [producto, setProductos] = useState([])

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=> {
            setProductos(res)
        })
    }, [])
    
    return (
        <>
            <List data={producto}/>
        </>
    )
    
}
export default ItemListContainer







