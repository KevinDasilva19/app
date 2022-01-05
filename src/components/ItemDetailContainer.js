
import React from "react";  
import ItemDetail from "./ItemDetail"
import { useState, useEffect } from "react"
import { useParams } from "react-router-dom"

//Abajo de todo esta comentado las distintas formas en las que intente traer el producto
const ItemDetailContainer = () => {
    let [product, setProduct] = useState({})
    const {id} = useParams()
    // const getItem = async () => {
    //     const pedido = await fetch(url);
    //     const productos = await pedido.json();
    //     return productos.filter(producto=>producto.id==id)
    // }
    
    
        

    useEffect(()=> {
        let promise
        if (id) {
            promise = fetch(`https://fakestoreapi.com/products/${id}`)
        } else {
            promise = fetch('https://fakestoreapi.com/products')
        }
        console.log(id)
        promise
        .then(res=>res.json())
        .then(res=> {
            setProduct(res)
        })
        
    },[id])
    console.log(product)
    
    // getItem()
    // .then((res) => {
    // setProduct(res);
    // })
    // .catch((err) => {
    //     console.log(err.message);
    // })
    
    return (
        
        <ItemDetail item={product}/>
        )
    
}



export default ItemDetailContainer

// const getItem = () => {
//     console.log(id)
//     fetch('https://fakestoreapi.com/products')
//     .then(res=>res.json())
//     .then(res=>{
//         setProduct(res)
//     })
// }


// getItem().then(res=> {
    //     const dataSeleccionada = res.find((producto) => producto.id === Number(id))
    //     setProduct(dataSeleccionada)
    // })
    // useEffect(()=>{
        //     console.log(id)
        //     fetch('https://fakestoreapi.com/products')
    //     .then(res=>res.json())
    //     .then(res=> {
    //         setProduct(res)
    //     })
    // }, [id])
    // console.log(product)
    
    // const getItem = () => {
    //     fetch(url)
    //     .then(res=>res.json())
    // }
