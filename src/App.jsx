import './App.css'
import Advertisements from './components/NavBar/Anuncment/Advertisements'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetail from './components/ItemDetail/ItemDetail'



function App() {

  return (
    <>
      <Advertisements />
      <Navbar />
      {/*<ItemListContainer greeting="Bienvenido a Limbo Hats" />*/}
      <ItemDetail />
  </>
  )
}

export default App
