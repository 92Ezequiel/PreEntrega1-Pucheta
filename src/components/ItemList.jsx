import React from 'react'
import Item from './Item'

const ItemList = ({catProducts}) => {

    
  return (
    <div className='card-container'>
      {catProducts.map((p)=>{
        return(
          <Item
            key={p.id}
            id={p.producto}
            producto={p.producto}
            descripcion={p.descripcion}
            img={p.url}
            precio={p.precio}
          />
        )
      })

      }
    </div>
  )
}

export default ItemList