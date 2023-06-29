import { useState } from 'react'
import './Mensaje.css'


const Mensaje = () => {
    const [mensaje, setMensaje] = useState(false);

    const mensajeDescuento = () => {
        setMensaje (!mensaje);
    }

  return (
    <div className='descuento'>
        <button onClick={mensajeDescuento}> {mensaje ? "Borrar descuento" : "Obtener descuento" }</button>
        {mensaje && <h2>Felicidades, 25% off en la tienda</h2> }
    </div>
  )
}

export default Mensaje