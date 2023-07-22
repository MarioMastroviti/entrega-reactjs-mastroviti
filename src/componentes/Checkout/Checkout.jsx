import { useState, useContext } from "react"
import { CarritoContext } from "../../Context/CarritoContext"
import { db } from "../../services/config"
import { collection, addDoc, updateDoc, doc, getDoc } from "firebase/firestore"
import "./Checkout.css"

const Checkout = () => {
    const { carrito, vaciarCarrito, cantidadTotal, total } = useContext(CarritoContext);
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [email, setEmail] = useState("");
    const [telefono, setTelefono] = useState("");
    const [emailConfirmacion, setEmailConfirmacion] = useState("");
    const [error, setError] = useState("");
    const [ordenId, setOrdenId] = useState("");

    const handerlFormulario = (e) => {

        e.preventDefault();

        if (!nombre || !apellido || !telefono || !email || !emailConfirmacion) {
            setError("Completar todos los campos");
            return;
        }

        if (email !== emailConfirmacion) {
            setError("Los emails no coinciden");
            return;
        }

        const orden = {
            items: carrito.map(producto => ({
                id: producto.item.id,
                nombre: producto.item.nombre,
                cantidad: producto.cantidad


            })),

            total: cantidadTotal,
            nombre,
            apellido,
            telefono,
            email           
        };

        Promise.all(
            orden.items.map(async (producto) => {
                const productoRef = doc(db, "inventario", producto.id);
                const productoDoc = await getDoc(productoRef);
                const stockActual = productoDoc.data().stock;
                

                await updateDoc(productoRef, {
                    stock: stockActual - producto.cantidad
                });
              
            })
        )
            .then(() => {
                
                addDoc(collection(db, "ordenes"), orden)
                    .then((docRef) => {
                        setOrdenId(docRef.id);
                        vaciarCarrito();
                    })
                    .catch((error) => {
                        console.log("Error al crear la orden", error);
                        setError("Error al crear la orden");
                    })
            })
            .catch((error) => {
                console.log("Error al actualizar el stock.", error);
                setError("Error al actualizar el stock. Intente nuevamente");
            })

            setNombre("");
            setApellido("");
            setEmail("");
            setEmailConfirmacion("");
            setTelefono("");


    }


    return (

        <div>
            <h2>Checkout</h2>

            <form onSubmit={handerlFormulario} className="formulario">
                {carrito.map(producto => {

                    <div>
                       <p>Producto: {producto.item.nombre} </p>
                       <p>Precio Unitario: ${producto.item.precio} </p>
                       <hr />
                       <p>Cantidad de productos: {cantidadTotal} </p>
                       <p>total: ${total} </p>
                    </div>
                })}

                <div>
                    <div className="form-campos">
                    <label htmlFor="nombre">Nombre</label>
                    <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} />
                    </div>
                   

                    <div className="form-campos">
                    <label htmlFor="apellido">Apellido</label>
                    <input type="text" value={apellido} onChange={(e) => setApellido(e.target.value)} />
                    </div>
                    
                    <div className="form-campos">
                    <label htmlFor="telefono">Telefono</label>
                    <input type="text" value={telefono} onChange={(e) => setTelefono(e.target.value)} />

                    </div>
                    
                    <div className="form-campos">
                    <label htmlFor="email">Email</label>
                    <input type="text" value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>

                    <div className="form-campos">
                    <label htmlFor="emailConfirmacion">Email confirmacion</label>
                    <input type="text" value={emailConfirmacion} onChange={(e) => setEmailConfirmacion(e.target.value)} />
                    </div>

                </div>

                {
                    error && <p style={{ color: "red" }}> {error} </p>
                }

                <button type="submit">Finalizar</button>


            </form>

            {
                ordenId &&
                (<strong className="orden">Muchas gracias por tu compra, gracias por confiar en nosotros!
                    Tu numero de orden es: {ordenId}
                </strong>)

            }

        </div>
    )
}

export default Checkout
