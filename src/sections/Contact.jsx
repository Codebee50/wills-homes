import { Input } from "postcss"

const Contact = () => {
  return (
    <section className="max-container padding-x min-h-[70vh] py-10 md:pt-20 bg-[#c1d6f2] mt-10 flex flex-col gap-10 md:flex-row justify-between">

        <div className="flex flex-col w-full md:w-1/2">
            <h1 className="text-4xl font-bold font-poppins">Get in touch</h1>
            <p className="max-w-[400px] mt-2 opacity-50 font-outfit">{"Ready to find your perfect place? Call, email, or fill out the form below - let's chat about your dream home!"}</p>

            <a href="mailto:info@willshomes.com" className="underline mt-6 font-medium">info@willshomes.com</a>
            <a href="mailto:info@willshomes.com" className="underline mt-3 font-medium">091 2816 8542</a>

            <div className=" mt-8 md:mt-20 flex flex-row flex-wrap gap-10">
                <div>
                    <p className="font-outfit font-bold text-[1.2rem]">Customer support</p>
                    <p className="max-w-[350px] sm:max-w-[200px] text-sm">We prioritize your needs! Our customer support team is available around the clock to answer your questions. Contact us anytime.</p>
                </div>
                <div>
                    <p className="font-outfit font-bold text-[1.2rem]">Feedback</p>
                    <p className="max-w-[350px] md:max-w-[200px] text-sm">{"We're committed to using your feedback to enhance your experience."}</p>
                </div>
              
            </div>
        </div>

        <div className=" w-full md:w-1/2">
            <form action="" className="bg-white p-7 rounded-md flex flex-col items-center gap-5 w-[100%] max-w-[400px] m-auto shadow-md">
                <h1 className="font-outfit text-dark-txt-10 font-semibold text-[1.4rem]">Send us a message</h1>
{/* 
                <Input input={{
                    type:"text",
                    placeholder:"Full name"
                }} /> */}


                <input type="text" placeholder="Full name" className="border p-2 md:p-3 rounded-full w-full outline-none font-poppins text-sm"/>

                <input type="text" placeholder="Email or phone number" className="border p-3 rounded-full w-full font-poppins text-sm"/>

                <textarea name="" id="" cols="30" rows="5" className="border w-full rounded-lg p-3 font-poppins text-sm" placeholder="How can we help"></textarea>

                <input type="submit" value="Submit" className="w-full p-3 bg-dark-blue rounded-full text-white cursor-pointer font-outfit" />
            </form>
        </div>

    </section>
  )
}

export default Contact