import React from 'react'
import NavBar from './components/NavBar'
import ItemListContainer from './components/ItemListContainer'


const App = () => {
  return (
    <>
    <NavBar/>
    <ItemListContainer
    greeting="¡Gracias por Visitarnos! Descubri nuestras delicias, libres de productos de origen animal."
    />
    </>
  )
}

export default App
