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




    // return (
    //     URL = fetch("products.json")
    // )
        // .then(respuesta => respuesta.json())
        // .then(respuesta => console.log(respuesta)) ;



    // 

    // useEffect(()=>{

    //     const promesa = new Promise((res,rej)=>{
    //         setTimeout(()=>{
    //             res(DATA)
    //         },2000)
    //     })
        
    //     promesa
    //     .then((productos)=>{
    //         console.log("Todo bien")
    //         setLista(productos)
    //     })
    //     .catch(()=>{
    //         console.log("Todo mal")
    //     })

    // },[])



















































































