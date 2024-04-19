import { HiMiniMinus } from "react-icons/hi2";

import { HiPlus } from "react-icons/hi2";

import { useRef, useLayoutEffect } from "react";

const FAQItem = (props) => {
    const answerContainer = useRef()
    
    
    useLayoutEffect(()=>{
        if(props.open){
            answerContainer.current.style.height = `${answerContainer.current.scrollHeight}px`
        }
        else{
            answerContainer.current.style.height = '0'
        }
    })

    const faqClickHandler = ()=>{
        console.log(answerContainer.current)
        props.onOpenFaq(props.index)
    }

  return (
    <div className={`transition-all ease-in-out duration-300 w-full flex flex-col items-start max-w-[1100px] mx-auto cursor-pointer p-3 ${props.open? 'bg-[#f7fbfe]': ''}`} onClick={faqClickHandler}>

        {/* top */}
        <div className={`flex flex-row w-full items-center pb-5 pt-5 ${!props.open && 'border-b'}`}>
            <p className={`font-bold text-[1.1rem] ${props.open? 'text-dark-blue': 'text-[#D4D3D3]'}  font-poppins mt-3`}>0{props.index}</p>

            <div className=" flex flex-grow flex-col pt-3 px-5">
                <div className="flex flex-row justify-between items-center">
                    <p className="font-poppins font-medium text-[1rem] text-dark-txt-10">{props.question}</p>

                    <div>
                        {
                            props.open? <HiMiniMinus size={'1.2em'}/> : <HiPlus size={'1.2em'}/>
                        }
                    </div>
                </div>
            </div>

        </div>


        {/* bottom */}
        <div className={`flex transition-height ease-linear overflow-hidden duration-300`} ref={answerContainer}>
            <p className="pl-9 opacity-50 font-poppins text-[0.9rem]">{props.answer}</p>
        </div>       
    </div>
  )
}

export default FAQItem