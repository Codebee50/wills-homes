const Showcase = (props) => {

  return (
    <div className={`p-4 sm:p-7 odd:bg-[#F3F3F3] even:bg-[#D9E1E7] flex flex-col items-center w-[33%]`}>
        <p className="text-dark-blue font-bold text-2xl sm:text-3xl font-worksans">{props.value}</p>
        <p className="text-black text-sm text-center mt-2 font-worksans">{props.label}</p>
    </div>
  )
}

export default Showcase