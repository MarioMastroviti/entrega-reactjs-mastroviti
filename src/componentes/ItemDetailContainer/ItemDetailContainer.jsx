import { useState, useEffect } from "react"
import { getUnProducto } from "../../Asyncmock"
import ItemDetail from '../ItemDetail/ItemDetail'
import { useParams } from "react-router-dom"


export const ItemDetailContainer = () => {
    const [producto, setProductos] = useState(null)
    const {idItem} = useParams();

    useEffect( () => {
        getUnProducto(idItem)
        .then(res => setProductos(res))
        .catch(error => console.log(error))
    }, [idItem])

  return (
    <div>
        <ItemDetail {...producto} />
    </div>
  )
}

export default ItemDetailContainer