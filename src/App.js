import Header from "./components/NavBar.js" 
import LogoCarrito from "./components/CartWidjet"
function App () {
    const links = [
        {href:"#", link:"Inicio"},
        {href:"#", link:"Sobre Nosotros"},
        {href:"#", link:"Contactanos"},
        {href:"#", link:<LogoCarrito/>}
    ]
    return (
        <>
            <header ><Header nombre="Kevin" links={links}/></header>
        </>
    )
} 
    


export default App 