import { useState, useEffect } from 'react'
import ItemList from '../ItemList/ItemList'
import { getProductos, getProductosCategoria } from '../../Asyncmock'
import { useParams } from 'react-router-dom'
import './ItemListContainer.css'

const ItemListContainer = () => {
  const[productos, setProductos] = useState([]);

  const {idCategoria} = useParams();

  useEffect( () => {
    
    const funcionCargaDeProductos = idCategoria ? getProductosCategoria : getProductos;
    
    funcionCargaDeProductos(idCategoria)
    .then(res => setProductos(res))
    .catch(error => console.log(error))
    
  }, [idCategoria])


  return (
    <div className='fondo'>
      <h2 className='tituloPrincipal'>Mis productos</h2>
    <ItemList productos= {productos} />
    </div>
  )
}

export default ItemListContainer