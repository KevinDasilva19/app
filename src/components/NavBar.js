import "./NavBar.css"
import {Link, NavLink} from "react-router-dom"
import LogoCarrito from "./CartWidjet.js"
import { useContexto } from "./CartContext"


function Header ({nombre}) {
    const { cantidadTotal, setCantidadTotal } = useContexto()
    const links = [
        {href:"/productos", link:"Productos", id: 1},
        {href:"/categoria/1", link:"electronics", id:2},
        {href:"/categoria/2", link:"jewelery", id:3},
    ]
    return (
        
            <header>
                <nav id="navBar"> 
                    <Link to="home">
                        <h1>Bienvenido {nombre} a Urbano Tienda!</h1>
                    </Link>
                    <ul>
                        <li>
                            {links.map((elemento, indice)=> {
                            return (
                                <NavLink key={elemento.id} to={elemento.href}> {elemento.link}</NavLink>
                            )
                            })}
                            <NavLink to="/carrito">
                                <LogoCarrito/>
                                {cantidadTotal}
                            </NavLink>
                        </li>
                    </ul>
                </nav>
            </header>
        
)
}

export default Header