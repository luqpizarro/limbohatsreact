import './App.css'
import { Routes, Route } from 'react-router-dom'
import Advertisements from './components/NavBar/Anuncment/Advertisements'
import Navbar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'



function App() {

  return (
    <>
      <Advertisements />
      <Navbar />

      <Routes>
        <Route path="/" element={<ItemListContainer />} />
        <Route path="/category/:categoryId" element={<ItemListContainer />} />
        <Route path="/item/:id" element={<ItemDetailContainer />} />
      </Routes>
  </>
  )
}

export default App
