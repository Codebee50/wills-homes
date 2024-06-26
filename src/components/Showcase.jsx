const Showcase = (props) => {

  return (
    <div className={`p-4 sm:p-7 odd:bg-[#F3F3F3] even:bg-[#D9E1E7] flex flex-col items-center justify-center w-[33%] h-[110px]`}>
        <p className="text-dark-blue font-bold text-2xl sm:text-4xl font-outfit">{props.value}</p>
        <p className="text-black text-[0.8rem] text-center mt-2 font-outfit">{props.label}</p>
    </div>
  )
}

export default Showcase