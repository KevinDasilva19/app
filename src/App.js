import Header from "./components/NavBar.js" 
import LogoCarrito from "./components/CartWidjet"
import ItemListContainer from "./components/ItemListContainer" 

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
            <div><ItemListContainer/></div>
        </>
        
    )
} 
    


export default App 