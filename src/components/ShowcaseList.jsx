import Showcase from "./Showcase"

const ShowcaseList = () => {
  return (
    <div className="flex flex-row items-center mt-4 w-[95%] max-w-[700px]">
        <Showcase value='200+' label='Properties owned'/>
        <Showcase value='50+' label='Satisfied customers'/>
        <Showcase value='40+' label='Active agents'/>
    </div>
  )
}

export default ShowcaseList