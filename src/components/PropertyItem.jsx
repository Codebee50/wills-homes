const PropertyItem = (props) => {
  return (
    <div className="rounded-md shadow-sm hover:shadow-md transition-all ease-in-out  flex flex-col">
        <div>
            <img src={props.image} className="w-full h-[300px] object-cover object-center" alt="" />
        </div>

        <div className="flex flex-col p-5">
            <h3 className="font-semibold font-outfit text-[1.1rem] text-slate-600">{props.title}</h3>
            <p className="text-sm opacity-70 mt-1">{props.description}</p>

            <div className="mt-5 flex flex-row gap-2 items-center">
                <svg width={15} height={15} className="fill-dark-blue" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <p className="text-sm" >{props.location}</p>
            </div>

            <p className="mt-4 font-worksans"><span className="text-[0.9rem] opacity-40">{props.currency}</span> <span className="text-[1.3rem] font-medium text-dark-blue">{props.price}</span></p>
        </div>
    </div>
  )
}

export default PropertyItem