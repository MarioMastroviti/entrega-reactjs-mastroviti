import { useParams} from "react-router-dom"

const Cremas = () => {
  const {id} = useParams();
  return (
    <div>
      <h2>categoria cremas</h2>
      <p>id producto: {id} </p>
    </div>
  )
}

export default Cremas