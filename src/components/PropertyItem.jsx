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
                <svg width={15} height={15} className="fill-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512"><path d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"/></svg>
                <p className="text-sm" >{props.location}</p>
            </div>
            <div className="mt-5 flex flex-row gap-2 items-center">
                <svg width={15} height={15} className="fill-slate-600" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M0 80V229.5c0 17 6.7 33.3 18.7 45.3l176 176c25 25 65.5 25 90.5 0L418.7 317.3c25-25 25-65.5 0-90.5l-176-176c-12-12-28.3-18.7-45.3-18.7H48C21.5 32 0 53.5 0 80zm112 32a32 32 0 1 1 0 64 32 32 0 1 1 0-64z"/></svg>
                <p className="text-sm" >{props.houseType}</p>
            </div>


            <p className="mt-4 font-worksans"><span className="text-[0.9rem] opacity-40">{props.currency}</span> <span className="text-[1.3rem] font-medium text-dark-blue">{props.price}</span></p>
        </div>
    </div>
  )
}

export default PropertyItem