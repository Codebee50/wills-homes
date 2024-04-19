import { MdStarRate } from "react-icons/md";
import person from '../assets/images/person.png'
import homepalour from '../assets/images/homepalour.jpg'


const Comments = () => {
  return (
    <section className=" max-container flex flex-col-reverse md:flex-row min-h-[60vh] w-full">
      <div  className="pt-10 md:pt-20 max-md:pb-10 padding-x w-ful md:w-1/2 max-md:mt-10">
          <h1 className="text-dark-txt-10 font-bold text-3xl lg:text-4xl leading-10 font-poppins max-w-[600px]">Here is what our customers are saying about us</h1>

          <div className="mt-5 md:mt-10 flex flex-row items-center gap-3">
            {/* <p className="font-medium text-[1.2rem] font-outfit text-dark-txt ">Top notch</p> */}

            <div className="flex flex-row items-center">
              <MdStarRate fill='#39B571' size={'1.5em'}/>
              <MdStarRate fill='#39B571' size={'1.5em'}/>
              <MdStarRate fill='#39B571' size={'1.5em'}/>
              <MdStarRate fill='#39B571' size={'1.5em'}/>
              <MdStarRate fill='#39B571' size={'1.5em'}/>
              </div>
          </div>

          <div className="mt-4">
            <p className="font-outfit text-slate-400 max-md:text-sm">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi, ratione suscipit ad sint quidem eum illo molestias illum aut, delectus voluptatibus soluta, asperiores itaque? Ipsam sunt suscipit dolore nostrum eligendi.</p>
          </div>

          <div className="mt-7 flex flex-row items-center">
            <img src={person}  className=" w-16 h-16 object-cover object-center rounded-full" alt="" />
            <div className="ml-4">
              <p className="font-outfit font-bold text-dark-txt">Abubakar M. Danladi</p>
              <p className="text-sm text-slate-600 ">House Buyer</p>
            </div>
          </div>
      </div>

      <div className="w-full md:w-1/2 h-[50vh] md:h-[100vh] from-white to-transparent relative m-auto">
        <img src={homepalour} alt="" className="w-full h-full flex-grow object-cover object-center" loading="lazy"/>
        <div className="w-full h-full absolute z-10 top-0 bg-gradient-to-t md:bg-gradient-to-r from-white">

        </div>
      </div>

      <div>

      </div>

    </section>
  )
}

export default Comments