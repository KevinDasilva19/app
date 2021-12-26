import ItemCount from "./ItemCount"
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"

const ItemDetailContainer = () => {
    const getItem = () => {
        const promesa = new Promise ((res,rej) => {
            setTimeout(()=>{
                res(<ItemDetail/>)
            }, 2000)
        }

        )
    }
    function OnAdd() {}

    return (
        1 + 1
    )
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