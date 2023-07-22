import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'
import { db } from '../../services/config'
import { collection, getDocs, query, where } from 'firebase/firestore'

const ItemListContainer = () => {
  const[productos, setProductos] = useState([]);
  const {idCategoria} = useParams();

  useEffect( () => {
    
    const misProductos = idCategoria ? query(collection(db, "inventario"), where ("idCat", "==", idCategoria)) : collection(db, "inventario");

    getDocs(misProductos)
    .then(res =>{
      const nuevoProducto = res.docs.map(doc =>{
      const data = doc.data();
      return {id: doc.id, ...data}
    })
    setProductos(nuevoProducto);
    })
    .catch(error => console.log(error));
    }, [idCategoria]);


  return (
    <div className='fondo'>
      <h2 className='tituloPrincipal'>Mis productos</h2>
    <ItemList productos= {productos} />
    </div>
  )
}

export default ItemListContainer