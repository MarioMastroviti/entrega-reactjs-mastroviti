import "./ItemDetail.css"

 const ItemDetail = ({id, nombre, precio, img}) => {
  return (
    <div className='contenedor'>
        <img src= {img} alt= {nombre} />
        <div>
        <h3> Nombre: {nombre} </h3>
        <h3>Precio: $ {precio} </h3>
        </div>
    </div>
  )
}

export default ItemDetail