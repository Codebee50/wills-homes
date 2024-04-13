import Nav from "../components/Nav"
import background from '../assets/images/home-background.png'
import ShowcaseList from "../components/ShowcaseList"

const Hero = () => {
  return (
    <section className="w-full h-[95vh] relative">
        <img src={background} alt="" className="w-full h-full object-center object-cover"/>
        <section className="w-full h-full absolute top-0 bg-bg-overlay flex flex-col items-center">
             <Nav></Nav>

             <div className="mt-28 self-center justify-self-center flex flex-col items-center">
                <h1 className="text-center text-3xl sm:text-6xl font-outfit text-white font-bold leading-[1.3]">Live Where Your Heart <br /> Belongs.</h1>
                <p className="w-[90%] max-w-96 text-center text-white opacity-70 mt-2 max-sm:text-sm">Lorem ipsum dolor sit amet, cons ectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna</p>
                
                <ShowcaseList></ShowcaseList>
             </div>
        </section>
    </section>
  )
}

export default Hero