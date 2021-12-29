
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"


const ItemDetailContainer = () => {
    const {id} = useParams()
    let [product, setProduct] = useState({})
    useEffect(()=> {
    
        const getItem = () => {
            console.log(id)
            fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(res=> {
            setProduct(res)
        })
            
        }
        getItem()
        return (
            
            <ItemDetail item={product}/>
        )
    
},[id])
}



export default ItemDetailContainer

// useEffect(()=>{

//         const promesa = new Promise((res,rej)=>{
//             setTimeout(()=>{
//                 res(productosIniciales)
//             },2000)
//         })
        
//         promesa
//         .then((productos)=>{
//             console.log("Todo bien")
//             setLista(productos)
//         })
//         .catch(()=>{
//             console.log("Todo mal")
//         })

//     },[])