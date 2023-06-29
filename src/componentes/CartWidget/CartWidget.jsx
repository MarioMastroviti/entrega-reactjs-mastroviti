import './CartWidget.css'

const CartWidget = () => {
    const carrito = "https://images.vexels.com/media/users/3/200097/isolated/preview/942820836246f08c2d6be20a45a84139-icono-de-carrito-de-compras-carrito-de-compras.png"

    
  return (
    <div>
        <img className="carrito" src={carrito}  alt="Imagen de carrito de compras" />
        <strong> 2 </strong>
    </div>
  )
}

export default CartWidget