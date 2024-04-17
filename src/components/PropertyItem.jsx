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
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995L16.9497 15.9497ZM12 13C10.8954 13 10 12.1046 10 11C10 9.89543 10.8954 9 12 9C13.1046 9 14 9.89543 14 11C14 12.1046 13.1046 13 12 13Z"></path></svg>
                <p className="text-sm" >{props.location}</p>
            </div>
            <div className="mt-5 flex flex-row gap-2 items-center">               
                <svg width={15} height={15} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3.00488 6.99972L11.4502 1.36952C11.7861 1.14559 12.2237 1.14559 12.5596 1.36952L21.0049 6.99972V20.9997C21.0049 21.552 20.5572 21.9997 20.0049 21.9997H4.00488C3.4526 21.9997 3.00488 21.552 3.00488 20.9997V6.99972ZM5.00488 8.07009V19.9997H19.0049V8.07009L12.0049 3.40342L5.00488 8.07009ZM12.0049 10.9997C10.9003 10.9997 10.0049 10.1043 10.0049 8.99972C10.0049 7.89515 10.9003 6.99972 12.0049 6.99972C13.1095 6.99972 14.0049 7.89515 14.0049 8.99972C14.0049 10.1043 13.1095 10.9997 12.0049 10.9997Z"></path></svg>
                <p className="text-sm" >{props.houseType}</p>
            </div>


            <p className="mt-4 font-worksans"><span className="text-[0.9rem] opacity-40">{props.currency}</span> <span className="text-[1.3rem] font-medium text-dark-blue">{props.price}</span></p>
        </div>
    </div>
  )
}

export default PropertyItem