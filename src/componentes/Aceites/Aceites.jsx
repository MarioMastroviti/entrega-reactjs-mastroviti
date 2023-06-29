import { useParams } from "react-router-dom"

const Aceites = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>categoria aceites</h2>
      <p>id producto: {id} </p>
    </div>
  )
}

export default Aceites