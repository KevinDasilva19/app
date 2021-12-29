import "./NavBar.css"
import {Link, NavLink} from "react-router-dom"

function Header ({nombre, links}) {
    return (
        <>
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
                    </li>
                </ul>
            </nav>
            
        </>
)
}

export default Header