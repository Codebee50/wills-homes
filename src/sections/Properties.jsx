import PropertyList from "../components/PropertyList"

const Properties = () => {
  return (
    <section className="min-h-screen bg-light-gray" id="properties">
      <div className="padding-x w-full flex flex-col md:flex-row items-start md:items-end justify-between sticky top-0 bg-light-gray z-10 py-4">
        <div>
          <p className="text-dark-blue font-medium font-outfit ">HOUSES FOR YOU</p>
          <h1 className="text-3xl font-bold font-worksans text-dark-txt">Luxury Properties</h1>
        </div>

        <div className="flex flex-row max-md:mt-5">
            <div className="bg-dark-blue py-3 px-4 cursor-pointer">
              <p className="font-worksans text-white sm:text-sm text-[0.8rem]">All categories</p>
            </div>
            <div className="bg-white py-3 px-4 cursor-pointer">
              <p className="font-worksans text-black  sm:text-sm text-[0.8rem]">For sale</p>
            </div>
            <div className="bg-white py-3 px-4 cursor-pointer">
              <p className="font-worksans text-black sm:text-sm text-[0.8rem]">Rent</p>
            </div>
        </div>
      </div>

      <div className="padding-x w-full flex flex-row flex-wrap gap-3 mt-10">
        <PropertyList/>
      </div>
    </section>
  )
}

export default Properties