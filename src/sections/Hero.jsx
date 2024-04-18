import Nav from "../components/Nav"
// import background from '../assets/images/home-background.png'
// import ShowcaseList from "../components/ShowcaseList"
// import house from '../assets/images/house.jpg'
import interior from '../assets/images/interior.jpg'
import { Fragment } from "react"
// import home from '../assets/images/homepalour.jpg'
const Hero = () => {
  return (
    <div className="relative">
      <section className="w-full h-[80vh] sm:h-[70vh] relative">
          <img src={interior} alt="" className="w-full h-full object-center object-cover"/>
          <section className="w-full h-full absolute top-0 bg-bg-overlay flex flex-col items-center justify-between">
              <Nav></Nav>

              <div className=" mt-20 self-center justify-self-center flex flex-col items-center justify-center">
                  <h1 className="text-center text-4xl sm:text-6xl font-outfit text-white font-bold leading-[1.3]">Live Where Your Heart <br /> Belongs.</h1>
                  <p className="w-[90%] max-w-96 text-center text-white opacity-70 mt-2 max-sm:text-sm">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                  <a className="md:hidden" href="#properties">
                      <button className="font-outfit py-3 font-medium  rounded-md px-5 bg-peach-10 mt-5">Get started</button>
                  </a>
                  {/* <ShowcaseList></ShowcaseList> */}
              </div>

              <div className="h-36 bg-white mt-10"></div>

          </section>
      </section>

        {/* <div className="w-[100%] bg-light-gray bottom-0 z-20 p-7  mx-auto">
            <div className="w-[80%] bg-white h-36 m-auto rounded-md"></div>
        </div> */}


    </div>

  )
}

export default Hero