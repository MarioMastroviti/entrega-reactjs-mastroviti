import './CartWidget.css'
import { useContext } from 'react'
import { CarritoContext } from '../../Context/CarritoContext'
import { Link } from 'react-router-dom'

const CartWidget = () => {
    const carrito = "https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png"
    const {cantidadTotal} = useContext(CarritoContext);

    
  return (
    <div>
      <Link to = "/cart">
        <img className="carrito" src={carrito}  alt="Imagen de carrito de compras" />
        {
          cantidadTotal > 0 && <strong> {cantidadTotal} </strong>
        }
        </Link>
      
    </div>
  )
}

export default CartWidget