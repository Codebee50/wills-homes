import { useState } from "react"
import PropertyList from "../components/PropertyList"
import { PropertiesList } from "../constants"
import FilterBtn from "../components/FilterBtn"


const Properties = () => {

  const [filterBy, setFilterBy] = useState('')


  const list = PropertiesList.filter((value)=> value.houseType.toLowerCase().includes(filterBy))

  const onSetFilteredBy= (filteredValue)=>{
    setFilterBy(filteredValue)
  }

  return (
    <section className="min-h-screen bg-light-gray pt-2 sm:pt-5 pb-10" id="properties">


      <div className="padding-x w-full flex flex-col md:flex-row items-start md:items-end justify-between sticky top-0 bg-light-gray z-10 py-4">
        <div>
          <p className="text-dark-blue font-medium font-outfit ">HOUSES FOR YOU</p>
          <h1 className="text-3xl font-bold font-worksans text-dark-txt">Luxury Properties</h1>
        </div>

        <div className="flex flex-row max-md:mt-5">
          <FilterBtn filterBy={filterBy} filterValue='' label='All Categories' onSetFilteredBy={onSetFilteredBy} />
          <FilterBtn filterBy={filterBy} filterValue='sale' label='For sale' onSetFilteredBy={onSetFilteredBy} />
          <FilterBtn filterBy={filterBy} filterValue='rent' label='Rent' onSetFilteredBy={onSetFilteredBy} />

            {/* <div className={`${filterBy==''? 'bg-dark-blue': 'bg-white'} py-3 px-4 cursor-pointer`} onClick={()=> {setFilterBy('')}}>
              <p className={`font-worksans text-white sm:text-sm text-[0.8rem]`}>All categories</p>
            </div> */}
            
            {/* <div className="bg-white py-3 px-4 cursor-pointer" onClick={()=> {setFilterBy('sale')}}>
              <p className="font-worksans text-black  sm:text-sm text-[0.8rem]">For sale</p>
            </div> */}
            {/* <div className="bg-white py-3 px-4 cursor-pointer" onClick={()=> {setFilterBy('rent')}}>
              <p className="font-worksans text-black sm:text-sm text-[0.8rem]">Rent</p>
            </div> */}
        </div>
      </div>

      <div className="padding-x w-full flex flex-row flex-wrap gap-3 mt-10">
        <PropertyList list={list}/>
      </div>
    </section>
  )
}

export default Properties