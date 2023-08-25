import React from 'react'
import ItemList from './ItemList'
import { useState, useEffect } from 'react'
import {useParams } from 'react-router-dom'
import {collection, getDocs, getFirestore} from 'firebase/firestore'
import BanerHome from './BanerHome'
import Loading from './Loading'


const ItemListContainer = ({}) => {
  const{ categoria }= useParams();

  const [items, setItems]= useState([])
  const [filter, setFilter]= useState([])
  const [loading, setLoading]= useState(true)

  useEffect(()=>{
    const db= getFirestore()
    const productCollection= collection(db, "craft")
    getDocs(productCollection).then((snapshot)=>{
      const docs= snapshot.docs.map((doc)=>doc.data())
      setItems(docs)
      setLoading(false)
    })
    
  },[])

  useEffect(()=>{
    const filteredProducts= 
    items.filter((p)=> p.categoria === categoria)
    setFilter(filteredProducts)
  

}, [categoria, items])

  if(loading){
    return <Loading/>
  }
  
  return categoria?(
    <>
      <ItemList catProducts={filter}/>
    </>
  ):(
    <>
    <BanerHome/>
    <ItemList catProducts={items}/>
    </>
  )
  
  
}

export default ItemListContainer