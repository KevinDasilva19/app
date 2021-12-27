import List from "./ItemList"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

function ItemListContainer () {
    const {id} = useParams()
    let [producto, setProductos] = useState([])

    useEffect(()=>{
        console.log(id)
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(res=> {
            setProductos(res)
        })
    }, [id])
    
    return (
        <div className="containerProduct">
            <List data={producto}/>
        </div>
    )
    
}
export default ItemListContainer







