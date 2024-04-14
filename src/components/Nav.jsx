import { logo } from "../assets/icons"
import { navlinks } from "../constants"

const Nav = () => {
  return (
    <header className="w-full padding-x pt-5 flex flex-row justify-between items-center">
        <div className="flex flex-row items-end gap-3">
            <img src={logo} alt="" width={50}/>
            <p className="text-white font-bold font-outfit">Wills Homes</p>
        </div>


        <div>
            <svg width={30} height={30}  className="fill-white md:hidden" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M3 4H21V6H3V4ZM9 11H21V13H9V11ZM3 18H21V20H3V18Z"></path></svg>
        </div>

        <nav className="max-md:hidden">
            <ul className="flex flex-row items-center gap-8">
                {
                    navlinks.map((link)=>(
                        <li key={link.label} className="font-worksans text-white">
                            <a href={link.link}>{link.label}</a>
                        </li>
                    ))
                }
            </ul>
        </nav>

        <a className="max-md:hidden">
            <button className="font-outfit py-3 font-medium  rounded-md px-5 bg-peach-10">Contact us</button>
        </a>
    </header>
  )
}

export default Nav