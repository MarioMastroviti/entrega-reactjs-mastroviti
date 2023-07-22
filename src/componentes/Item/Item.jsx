import { Link } from "react-router-dom"
import "./Item.css"


const Item = ( {id, nombre, precio, img, stock} ) => {
  return (
    <div className="producto">

        <img src= {img}  alt=" {nombre} " />

        <div>
        <h3> Nombre: {nombre} </h3>
        <h3>Precio: $ {precio} </h3>
         <p>stock: {stock} </p>
       <button className="botonDetalles"> <Link to={ `/item/${id}`}>Ver detalles</Link> </button>

        </div>
    </div>
  )
}

export default Item
