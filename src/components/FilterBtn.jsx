
const FilterBtn = (props) => {
  return (
    <div className={`${props.filterBy==props.filterValue? 'bg-dark-blue': 'bg-white'} py-3 px-4 cursor-pointer`} onClick={()=> {props.onSetFilteredBy(props.filterValue)}}>
    <p className={`font-worksans ${props.filterBy==props.filterValue?'text-white': 'text-black'} sm:text-sm text-[0.8rem]`}>{props.label}</p>
    </div>
  )
}

export default FilterBtn