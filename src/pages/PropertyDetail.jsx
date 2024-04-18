import { Fragment } from "react"
// import { useParams } from "react-router-dom"
import {h7 } from "../assets/properties"

const PropertyDetail = () => {
    // let {id} = useParams()

  return (
    <Fragment>
        <section className="w-full min-h-screen flex flex-row items-start">

            <div className="w-full min-h-screen flex flex-row p-4">

                <div className="w-[50%] min-h-screen flex flex-row fixed">

                    <div className="w-[20%] min-h-screen flex flex-col items-center">

                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>
                        <img src={h7} alt="" className="m-1 w-[90%] h-[100px] object-cover object-center rounded-md"/>

                    </div>


                    <div className="w-[80%] min-h-screen">
                        <img src={h7} alt="" className="w-full h-[90vh] object-cover object-center rounded-md"/>
                    </div>

                </div>

                <div className="w-[50%] min-h-screen">

                </div>
                
            </div>


        </section>
    </Fragment>
  )
}

export default PropertyDetail