import { Fragment } from "react"
// import { useParams } from "react-router-dom"
import {h7 } from "../assets/properties"
import DetailDroplet from "../components/DetailDroplet"
import { MdOutlineDirectionsCarFilled } from "react-icons/md";



const PropertyDetail = () => {
    // let {id} = useParams()

  return (
    <Fragment>
        <section className="w-full min-h-screen flex flex-col items-start">

            <div className="w-full flex flex-col items-center justify-center p-5 border-b-2">
                {/* <p className="font-medium font-outfit text-slate-600 text-[1.2rem]">Spacious 3 Bedroom Apartment</p> */}
            </div>

            <div className="w-full min-h-screen flex flex-row p-4 gap-5">

                <div className="w-[50%] min-h-screen flex flex-col">

                    <div className="w-[100%] ">
                        <img src={h7} alt="" className="w-full h-[60vh] object-cover object-center rounded-md"/>
                    </div>

                    <div className="w-[100%] flex flex-row items-center overflow-x-scroll no-scrollbar">
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                    </div>

                </div>

                <div className="w-[50%] min-h-screen ">
                    <p className="text-2xl font-medium">Spacious 3 Bedroom Apartment</p>
                    <p className="max-w-[400px]">A quaint bungalow nestled in a serene neighborhood.</p>

                    <div className="w-full flex flex-row items-center mt-10 flex-wrap gap-5">
                        <DetailDroplet label="Bath" icon={<MdOutlineDirectionsCarFilled />
} />


                        <div className="flex flex-col items-center">
                            <p className="font-medium">Bedroom</p>
                            <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
                                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M22 11V20H20V17H4V20H2V4H4V14H12V7H18C20.2091 7 22 8.79086 22 11ZM20 14V11C20 9.89543 19.1046 9 18 9H14V14H20ZM8 11C8.55228 11 9 10.5523 9 10C9 9.44772 8.55228 9 8 9C7.44772 9 7 9.44772 7 10C7 10.5523 7.44772 11 8 11ZM8 13C6.34315 13 5 11.6569 5 10C5 8.34315 6.34315 7 8 7C9.65685 7 11 8.34315 11 10C11 11.6569 9.65685 13 8 13Z"></path></svg>
                                <p className="font-medium">3</p>
                            </div>
                        </div>

                        <div className="flex flex-col items-center">
                            <p className="font-medium">Bathroom</p>
                            <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
                                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M96 77.3c0-7.3 5.9-13.3 13.3-13.3c3.5 0 6.9 1.4 9.4 3.9l14.9 14.9C130 91.8 128 101.7 128 112c0 19.9 7.2 38 19.2 52c-5.3 9.2-4 21.1 3.8 29c9.4 9.4 24.6 9.4 33.9 0L289 89c9.4-9.4 9.4-24.6 0-33.9c-7.9-7.9-19.8-9.1-29-3.8C246 39.2 227.9 32 208 32c-10.3 0-20.2 2-29.2 5.5L163.9 22.6C149.4 8.1 129.7 0 109.3 0C66.6 0 32 34.6 32 77.3V256c-17.7 0-32 14.3-32 32s14.3 32 32 32H480c17.7 0 32-14.3 32-32s-14.3-32-32-32H96V77.3zM32 352v16c0 28.4 12.4 54 32 71.6V480c0 17.7 14.3 32 32 32s32-14.3 32-32V464H384v16c0 17.7 14.3 32 32 32s32-14.3 32-32V439.6c19.6-17.6 32-43.1 32-71.6V352H32z"/></svg>
                                <p className="font-medium">3</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="font-medium">Size</p>
                            <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M16 3H22V9H20V5H16V3ZM2 3H8V5H4V9H2V3ZM20 19V15H22V21H16V19H20ZM4 19H8V21H2V15H4V19Z"></path></svg>                                
                            <p className="font-medium">30 sqm</p>
                            </div>
                        </div>


                        <div className="flex flex-col">
                            <p className="font-medium">Parking</p>
                            <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
                            <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19 20H5V21C5 21.5523 4.55228 22 4 22H3C2.44772 22 2 21.5523 2 21V13.5L0.757464 13.1894C0.312297 13.0781 0 12.6781 0 12.2192V11.5C0 11.2239 0.223858 11 0.5 11H2L4.4805 5.21216C4.79566 4.47679 5.51874 4 6.31879 4H17.6812C18.4813 4 19.2043 4.47679 19.5195 5.21216L22 11H23.5C23.7761 11 24 11.2239 24 11.5V12.2192C24 12.6781 23.6877 13.0781 23.2425 13.1894L22 13.5V21C22 21.5523 21.5523 22 21 22H20C19.4477 22 19 21.5523 19 21V20ZM20 18V13H4V18H20ZM5.47703 11H18.523C18.6502 11 18.7762 10.9757 18.8944 10.9285C19.4071 10.7234 19.6566 10.1414 19.4514 9.62861L18 6H6L4.54856 9.62861C4.50131 9.74673 4.47703 9.87278 4.47703 10C4.47703 10.5523 4.92475 11 5.47703 11ZM5 14C7.31672 14 8.87868 14.7548 9.68588 16.2643L9.68582 16.2643C9.81602 16.5078 9.72418 16.8107 9.4807 16.9409C9.40818 16.9797 9.3272 17 9.24496 17H6C5.44772 17 5 16.5523 5 16V14ZM19 14V16C19 16.5523 18.5523 17 18 17H14.755C14.6728 17 14.5918 16.9797 14.5193 16.9409C14.2758 16.8107 14.184 16.5078 14.3142 16.2643L14.3141 16.2643C15.1213 14.7548 16.6833 14 19 14Z"></path></svg>                                
                            <p className="font-medium">5</p>
                            </div>
                        </div>

                        <div className="flex flex-col">
                            <p className="font-medium">Year built</p>
                            <div className="flex flex-row items-center gap-[4px] border py-[2px] px-4 rounded-md mt-2">
                                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9 1V3H15V1H17V3H21C21.5523 3 22 3.44772 22 4V20C22 20.5523 21.5523 21 21 21H3C2.44772 21 2 20.5523 2 20V4C2 3.44772 2.44772 3 3 3H7V1H9ZM20 11H4V19H20V11ZM8 13V15H6V13H8ZM13 13V15H11V13H13ZM18 13V15H16V13H18ZM7 5H4V9H20V5H17V7H15V5H9V7H7V5Z"></path></svg>
                                <p className="font-medium">2013</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col w-full mt-5">

                        <div className="flex flex-col mt-5">
                            <p className="font-medium">Location</p>
                            <div className="flex flex-row items-center gap-2 border py-[4px] px-4 rounded-md mt-2 max-w-[400px]">
                                <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M12 20.8995L16.9497 15.9497C19.6834 13.2161 19.6834 8.78392 16.9497 6.05025C14.2161 3.31658 9.78392 3.31658 7.05025 6.05025C4.31658 8.78392 4.31658 13.2161 7.05025 15.9497L12 20.8995ZM12 23.7279L5.63604 17.364C2.12132 13.8492 2.12132 8.15076 5.63604 4.63604C9.15076 1.12132 14.8492 1.12132 18.364 4.63604C21.8787 8.15076 21.8787 13.8492 18.364 17.364L12 23.7279ZM12 13C13.1046 13 14 12.1046 14 11C14 9.89543 13.1046 9 12 9C10.8954 9 10 9.89543 10 11C10 12.1046 10.8954 13 12 13ZM12 15C9.79086 15 8 13.2091 8 11C8 8.79086 9.79086 7 12 7C14.2091 7 16 8.79086 16 11C16 13.2091 14.2091 15 12 15Z"></path></svg>
                                <p className="font-medium">444 Fictional Road, Kaduna, Nigeria</p>
                            </div>
                            
                        </div>

                        <div className="flex flex-col mt-5">
                            <p className="font-medium">Seller</p>
                            <div className="w-full flex flex-row items-center gap-2 flex-wrap">
                                <div className="flex flex-row items-center gap-2 border py-[4px] px-4 rounded-md mt-2 w-max">
                                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M20 22H18V20C18 18.3431 16.6569 17 15 17H9C7.34315 17 6 18.3431 6 20V22H4V20C4 17.2386 6.23858 15 9 15H15C17.7614 15 20 17.2386 20 20V22ZM12 13C8.68629 13 6 10.3137 6 7C6 3.68629 8.68629 1 12 1C15.3137 1 18 3.68629 18 7C18 10.3137 15.3137 13 12 13ZM12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"></path></svg>                                   
                                    <p className="font-medium">Wills Homes</p>
                                </div>
                                <div className="flex flex-row items-center gap-2 border py-[4px] px-4 rounded-md mt-2 w-max">
                                    <svg width={20} height={20} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M9.36556 10.6821C10.302 12.3288 11.6712 13.698 13.3179 14.6344L14.2024 13.3961C14.4965 12.9845 15.0516 12.8573 15.4956 13.0998C16.9024 13.8683 18.4571 14.3353 20.0789 14.4637C20.599 14.5049 21 14.9389 21 15.4606V19.9234C21 20.4361 20.6122 20.8657 20.1022 20.9181C19.5723 20.9726 19.0377 21 18.5 21C9.93959 21 3 14.0604 3 5.5C3 4.96227 3.02742 4.42771 3.08189 3.89776C3.1343 3.38775 3.56394 3 4.07665 3H8.53942C9.0611 3 9.49513 3.40104 9.5363 3.92109C9.66467 5.54288 10.1317 7.09764 10.9002 8.50444C11.1427 8.9484 11.0155 9.50354 10.6039 9.79757L9.36556 10.6821ZM6.84425 10.0252L8.7442 8.66809C8.20547 7.50514 7.83628 6.27183 7.64727 5H5.00907C5.00303 5.16632 5 5.333 5 5.5C5 12.9558 11.0442 19 18.5 19C18.667 19 18.8337 18.997 19 18.9909V16.3527C17.7282 16.1637 16.4949 15.7945 15.3319 15.2558L13.9748 17.1558C13.4258 16.9425 12.8956 16.6915 12.3874 16.4061L12.3293 16.373C10.3697 15.2587 8.74134 13.6303 7.627 11.6707L7.59394 11.6126C7.30849 11.1044 7.05754 10.5742 6.84425 10.0252Z"></path></svg>
                                    <p className="font-medium">09128168542</p>
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
                
            </div>


        </section>
    </Fragment>
  )
}

export default PropertyDetail