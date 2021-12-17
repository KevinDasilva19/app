import List from "./ItemList"
import { useState, useEffect } from "react"
/*
import LogoCarrito from "./CartWidjet"


function Links () {
    const links = [
        {href:"#", link:"Inicio"},
        {href:"#", link:"Sobre Nosotros"},
        {href:"#", link:"Contactanos"},
        {href:"#", link:<LogoCarrito/>}
    ]
    return (
        <>
            {links.map((elemento, indice)=> {
                return (
                    <a href={elemento.href}>{elemento.link}</a>
                )
                })}
        </>
    )
}

export default Links
*/

function ItemListContainer () {
    const DATA = [
        {
            id: "1",
            title: "Nike Cortez Rosa",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas1.jpeg", 
            price: "2.200"
        },
        {
            id: "2",
            title: "Vans Clasicas",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas2.jpeg",
            price: "4.400"
        },
        {
            id: "3",
            title: "Nike Air Force Tornasolada Azul",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas3.jpeg",
            price: "3.000"
        },
        {
            id: "4",
            title: "Adidas Ultra Bost Blanco",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas4.jpeg",
            price: "4.300"
        },
        {
            id: "5",
            title: "Adidas NEO Blanco/Violeta",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas5.jpeg",
            price: "5.000"
        },
        {
            id: "6",
            title: "Nike Cortez Verde",
            image: "https://kevindasilva19.github.io/imagenes/imagenes/zapatillas6.jpeg",
            price: "2.200"
        }
    
    ]

    let [lista, setLista] = useState([])

    useEffect(()=>{

        const promesa = new Promise((res,rej)=>{
            setTimeout(()=>{
                res(DATA)
            },2000)
        })
        
        promesa
        .then((productos)=>{
            console.log("Todo bien")
            setLista(productos)
        })
        .catch(()=>{
            console.log("Todo mal")
        })

    },[])


    return (
        <>
            <List data={lista}/>
        </>
    )
}

export default ItemListContainer
