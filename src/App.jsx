import './App.css'
import Advertisements from './components/NavBar/Anuncment/Advertisements'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'



function App() {

  return (
    <>
      <Advertisements />
      <Navbar />
      <ItemListContainer greeting="Bienvenido a Limbo Hats" />
    </>
  )
}

export default App
