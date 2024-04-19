import { Fragment } from "react"
import Hero from "../sections/Hero"
import Properties from "../sections/Properties"
import StatisticsSection from "../sections/StatisticsSection"
import Comments from "../sections/Comments"
import Contact from "../sections/Contact"


const HomePage = () => {
  return (
    <Fragment>
    <main>
      <Hero></Hero>
      <Properties/>
      <StatisticsSection/>
      <Comments/>
      <Contact/>
    </main>
  </Fragment>
  )
}

export default HomePage