
import FAQItem from "../components/FAQItem"
import { FAQList } from "../constants"
import { useState } from "react";


const FAQ = () => {
  const [openFaq, setOpenFaq] = useState(1)

  const openFaqHandler = (index)=>{
    const computeindex = index===openFaq? 0: index
    setOpenFaq(computeindex)
  }
  
  return (
    <section className="w-full min-h-screen bg-white flex flex-col items-center justify-center max-container padding-x py-16">
        <h1 className="text-3xl font-poppins font-medium text-dark-txt">Frequently Asked Questions</h1>
        <p className="text-slate-500 mt-3 font-outfit">In this FAQ section, you can find some information about our services</p>

        <div className="w-full mt-5 ">
            {
              FAQList.map((faq, index) => (
                <FAQItem question={faq.question} answer={faq.answer} key={faq.question} index={index+1} onOpenFaq={openFaqHandler} open={(index+1)===openFaq}/>
              ))
            }
        </div>
    </section>
  )
}

export default FAQ