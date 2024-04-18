import Statiscic from "./Statiscic"

const Statistics = () => {
  return (
    <div className="p-5 w-full min-h-[70vh] bg-[#1F308B] bg-[url('/src/assets/images/linebackground.svg')] bg-no-repeat bg-cover bg-center flex flex-col items-center justify-center">
        <p className="font-outfit font-bold text-2xl md:text-3xl text-white text-center">Find Your Dream Home in Nigeria</p>
        <p className="text-white text-[0.7rem] md:text-sm mt-2 text-center">From city apartments to beachfront villas, discover your dream home in {" Nigeria's"} diverse property market.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 mt-20 gap-10  w-[90%] max-w-[900px] ">
           <Statiscic title='200+' label='Properties'/>
           <Statiscic title='150+' label='Satisfied customers'/>
           <Statiscic title='40+' label='Active agents'/>
           <Statiscic title='100%' label='Customer satisfaction rate'/>
        </div>
    </div>
  )
}

export default Statistics