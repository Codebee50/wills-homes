const Statiscic = (props) => {
  return (
    <div className="flex flex-col items-center justify-center">
        <p className="text-white font-bold text-3xl font-worksans">{props.title}</p>
        <p className="text-slate-300 text-[0.7rem] mt-2 text-center">{props.label}</p>
    </div>
  )
}

export default Statiscic