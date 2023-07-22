import "./ItemDetail.css"
import { useContext, useState } from "react"
import { Link } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount"
import { CarritoContext } from "../../Context/CarritoContext"

 const ItemDetail = ({ id, nombre, precio, img, stock}) => {

  const [agregarCantidad, setAgregarCantidad] = useState(0);

  const {agregarProducto} = useContext(CarritoContext);

  const handlerCantidad = (cantidad) => {
    setAgregarCantidad(cantidad);    
    const item = {id, nombre, precio};
    agregarProducto(item, cantidad);
  }

  return (
    <div className='contenedor'>
        <img src= {img} alt= {nombre} />
        <div>
        <h3> Nombre: {nombre} </h3>
        <h3>Precio: $ {precio} </h3>
     
      
        

   
        {
          agregarCantidad > 0 ? (<Link to="/cart" className="link">Terminar compra</Link>) : (<ItemCount inicial={1} stock={stock} funcionAgregar={handlerCantidad}/>)
        }
        
        </div>
    </div>
  )
}

export default ItemDetail