import { createContext, useState } from "react"

export const CartContext= createContext(null)

export const CartProvider= ({children}) => {

    const [cart, setCart]= useState([])
    const [orderId, setOrderId]=useState(null)

    const plusItem=(producto)=>{
      const currentCart= [...cart]
      const isProduct= currentCart.find(p=> p.producto===producto.producto)
      if (isProduct){
        isProduct.quantity += 1;
      }else{
        currentCart.push({...producto, quantity: 1})
      }
      setCart(currentCart)
    }

    const minusItem= (producto)=>{
      const currentCart= [...cart]
      const isProduct= currentCart.find(p=> p.producto===producto.producto)
      if(isProduct && isProduct.quantity>0){
        isProduct.quantity -=1
      }
      setCart(currentCart)
    }

    const buyItem=(producto)=>{
      const isProduct= cart.find(p=> p.producto===producto.producto)
      if(!isProduct){
        const currentCart= [...cart,{...producto, quantity:1}]
        setCart(currentCart)
      }
    }


  return (
    <CartContext.Provider value={{cart, setCart, plusItem, minusItem, buyItem, orderId, setOrderId}}>
       {children}
    </CartContext.Provider>
  )
}

export default CartProvider 