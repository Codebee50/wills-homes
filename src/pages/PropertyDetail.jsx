import { useParams } from "react-router-dom"

const PropertyDetail = () => {
    let {id} = useParams()

  return (
    <div>PropertyDetail {id}</div>
  )
}

export default PropertyDetail