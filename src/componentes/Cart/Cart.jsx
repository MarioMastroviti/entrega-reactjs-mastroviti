import { useContext, useState } from "react";
import { CarritoContext } from "../../Context/CarritoContext";
import { Link } from "react-router-dom";
import CartItem from "../CartItem/CartItem";
import "./Cart.css"

const Cart = () => {
    const { carrito, vaciarCarrito, total, cantidadTotal } = useContext(CarritoContext);

    if (cantidadTotal === 0) {
        return (
            <>
            <div className="carrito-vacio">
                
                <h2>Aun no hay productos en el carrito!</h2>
                <Link to="/">Empeza a comprar!</Link>
            </div>
            </>
        )

    }
    return (
        <div className="card">
            {carrito.map(producto => <CartItem key={producto.id} {...producto} />)}
            <h3>Cantidad de productos: {cantidadTotal} </h3>
            <h3>Total a pagar: $ {total} </h3>
            <button onClick={() => vaciarCarrito()}>Vaciar carrito</button>
            <Link to="/checkout" className="link">Terminar compra</Link>
        </div>
    )
}

export default Cart