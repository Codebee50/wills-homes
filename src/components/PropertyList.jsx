import PropertyItem from "./PropertyItem"

const PropertyList = (props) => {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {
            props.list.map((property)=> (
                <PropertyItem key={property.title} {...property}/>
            ))
        }
    
    </div>
 
  )

}

export default PropertyList