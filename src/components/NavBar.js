import "./NavBar.css"

const Header = ({nombre, links}) => {
    return (
<>
    <nav id="navBar"> 
        <h1>Bienvenido {nombre} a Urbano Tienda!</h1>
        <ul>
            <li>
                {links.map((elemento)=> {
                return (
                    <a href={elemento.href}>{elemento.link}</a>
                )
                })}
            </li>
        </ul>
    </nav>
</>
)
}




export default Header