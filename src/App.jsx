import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Contact from './components/Contact'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'



const App = () => {
  return (
    <BrowserRouter>
    <NavBar/>

    <Routes>
      <Route exact path='/' element={<ItemListContainer/>} />
      <Route exact path='/contact' element={<Contact/>} />
      <Route exact path='/category/:category' element={<ItemListContainer/>}/>
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      <Route exact path='/cart' element={<Cart/>}/>
    
    </Routes>

    </BrowserRouter>
  )
}

export default App
