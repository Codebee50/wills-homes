const PropertyItem = (props) => {
  return (
    <div className="rounded-md shadow-sm hover:shadow-md transition-all ease-in-out  flex flex-col">
        <div>
            <img src={props.image} className="w-full h-[300px] object-cover object-center" alt="" />
        </div>

        <div className="flex flex-col p-5">
            <h3 className="font-semibold font-outfit text-[1.1rem] text-slate-600">{props.title}</h3>
        </div>
    </div>
  )
}

export default PropertyItem