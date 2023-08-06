import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from './ItemDetail';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {
  const {id}= useParams()


  const productos = [
    {id:0, producto:"Lemon Pie", descripcion:"Clasico Lemon pie, relleno de crema de limon y merengue",url:"https://content-cocina.lecturas.com/medio/2022/06/13/paso_a_paso_para_hacer_tarta_de_limon_y_merengue_lemon_pie_resultado_final_802804db_600x600.jpg", precio: 750, category: "cat1" },
    {id:1, producto:"Tarta de coco", descripcion:"Relleno de dulce de leche, crocante de coco", url:"https://1.bp.blogspot.com/-4o_1XMK25JI/XKoN5-uF_BI/AAAAAAAAK2Y/Xa3uj7uu8GcfdQ8ixZTPabyQdev68Ue5QCEwYBhgL/s1600/DSCN2368.png", precio:750, category:"cat1"},
    {id:2, producto:"Budin", descripcion:"Mandarina, Limon, Pomelo", url: "https://2.bp.blogspot.com/-dnSowjSgvxg/XHV2NNDqiFI/AAAAAAAAKoI/sYy66qU816AryfWjtd3Dgur1nfCstbjkgCLcBGAs/s1600/DSCN1383.png", precio:350, category: "cat2" },
    {id:3, producto:"Magdalenas", descripcion:"Panques de vainilla o chocolate con glase de limon", url:"https://www.deliciosi.com/images/2500/2567/receta-magdalenas-thermomix.jpg", precio:200, category: "cat2"},
    {id:4 , producto:"Tiramisu", descripcion:"Postre con biscochos de vainilla y relleno de crema de queso, castañas y tofu", url:"https://www.dietdoctor.com/es/wp-content/uploads/2020/05/Reencuadre-NK-4281-2_.jpg", precio:800, category:"cat3"},
    {id:5 , producto:"Marquise", descripcion:"Biscocho humedo de chocolate, relleno de dulce de leche, y merengue", url:"https://1.bp.blogspot.com/-TCgkcNZMjDE/YMeOYjY3EGI/AAAAAAAAcqA/0uuHi1-_4Y8eU_A1cK-tFbLDLmFl_kt7gCLcBGAsYHQ/s2048/Marquise.jpg", precio:800, category:"cat3" }
  ]

   const [producto, setProducto]= useState([]);

    const getItem = new Promise ((resolve, rejected) =>{
      if (productos.length > 0){
        setTimeout(()=>{
        resolve(productos)
      }, 2000)
    }else{
      rejected
    }
    })
  
    getItem
    .then((res)=>{
      console.log(res)
    })
    .catch((err)=>{
      console.log("no hay productos")
    })

  useEffect(()=>{
    const idProductos= productos.filter((item)=> item.id==id);
    setProducto(idProductos)
  }, [])


  return (
    <div className='card-container'>
      
    {<ItemDetail producto={producto}/>}
    </div>
    
  )
}

export default ItemDetailContainer