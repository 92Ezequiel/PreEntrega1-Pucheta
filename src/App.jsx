import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ItemDetailContainer from './components/ItemDetailContainer'
import Cart from './components/Cart'
import CartProvider from './context/CartContext'
import Footer from './components/Footer'



const App = () => {
  return (
    <BrowserRouter>
    <CartProvider>
    <NavBar/>
    <Routes>
      <Route exact path='/' element={<ItemListContainer/>} />
      <Route exact path='/item/:id' element={<ItemDetailContainer/>} />
      <Route exact path='/categoria/:categoria' element={<ItemListContainer/>}/>
      <Route exact path='/cart' element={<Cart/>}/>
    </Routes>
    <Footer/>
    </CartProvider>


    

    </BrowserRouter>
  )
}

export default App
