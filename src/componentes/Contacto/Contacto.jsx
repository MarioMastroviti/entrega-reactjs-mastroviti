import { useState } from "react"
import  emailjs from "emailjs-com"
import "./Contacto.css"

const Contacto = () => {
    const [nombre, setNombre] = useState("");
    const [email, setEmail] = useState("");
    const [mensaje, setMensaje] = useState("");
 

    const handlerContacto = (e) => {
      e.preventDefault();

      const templateParams = {
        from_name: nombre,
        from_email: email,
        message : mensaje
      };

      emailjs.send(
        "service_tv6y37s",
        "template_486ofvr",
        templateParams,
        "iCRqlQBECr8SH7tSQ"
      )
        .then((respueta) => {
        console.log(respueta.text);
        alert("mensaje enviado");
      })
      .catch((error) =>{
        console.log(error);
        alert("no se pudo enviar el mensaje");
  
      })

      const nuevaConsulta = {nombre, email, mensaje}
      console.log(nuevaConsulta);

      setNombre("");
      setEmail("");
      setMensaje("");

    }
  return (

    <form onSubmit={handlerContacto} className="contacto">
        <label htmlFor="">Nombre: </label>
        <input type="text" value={nombre} onChange= {(e)=> setNombre(e.target.value)}/>

        <label htmlFor="">Email: </label>
        <input type="email" value={email} onChange= {(e)=> setEmail(e.target.value)} />

        <label htmlFor="">Mensaje: </label>
        <textarea  value={mensaje} onChange= {(e)=> setMensaje(e.target.value)}/>

        <button type="submit" className="boton"> Enviar mensaje</button>


    </form>
  )
}

export default Contacto