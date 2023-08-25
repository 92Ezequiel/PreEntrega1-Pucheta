import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import Loading from './Loading';

const ItemDetailContainer = () => {
  const {id}= useParams()


   const [items, setItems]= useState([]);
   const [filterId, setFilterId]= useState([])
   const [loading, setLoading]= useState(true)

   useEffect(()=>{
    const db= getFirestore()
    const productCollection= collection(db, "craft",)
    getDocs(productCollection).then((snapshot)=>{
      const docs= snapshot.docs.map((doc)=>doc.data())
      setItems(docs)
      setLoading(false)
    })
    
  },[])

  useEffect(()=>{
    const idProductos= items.filter((item)=> item.producto==id);
    setFilterId(idProductos)
  }, [id, items])

  if(loading){
    return <Loading/>
  }


  return (
    <div className='card-container'>
      
    {<ItemDetail producto={filterId}/>}
    </div>
    
  )
}

export default ItemDetailContainer