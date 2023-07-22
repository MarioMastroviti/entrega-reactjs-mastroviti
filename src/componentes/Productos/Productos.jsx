import { useState, useEffect } from "react"
import { getDocs, collection, query, where, doc, updateDoc } from "firebase/firestore"
import { db } from "../../services/config"
import "./Productos.css"

const Productos = () => {
    const [productos, setProductos] = useState([]);

    useEffect ( () => {
        const misProductos = query(collection(db, "inventario"), where ("precio" , "<", 5000));

        getDocs(misProductos)
       .then(respuesta => {
        setProductos(respuesta.docs.map((doc) => ({id : doc.id, ...doc.data()})))
       })
       .catch(error => console.log(error))

    }, [productos])

    const descontarStock = async (producto) => {
        const productoRef = doc(db, "inventario", producto.id);
        const nuevoStock = producto.stock - 1;

       await updateDoc (productoRef, {stock: nuevoStock});
    }

  

  return (
    <div>
        <h2>Productos</h2>
        <div className="contenedor-productos"> 
            {
                productos.map(producto => (
                    <div className="producto-carta" key={producto.id}> 
                    <h2> nombre: {producto.nombre} </h2>
                    <p> precio: {producto.precio} </p>
                    <p> stock: {producto.stock} </p>
                    <button onClick={() => descontarStock(producto)}>Comprar</button>
                    </div>
                ))
            }
        </div>
    </div>
  )
}

export default Productos