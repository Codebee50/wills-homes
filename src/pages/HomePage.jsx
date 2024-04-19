import { Fragment } from "react"
import Hero from "../sections/Hero"
import Properties from "../sections/Properties"
import StatisticsSection from "../sections/StatisticsSection"
import Comments from "../sections/Comments"


const HomePage = () => {
  return (
    <Fragment>
    <main>
      <Hero></Hero>
      <Properties/>
      <StatisticsSection/>
      <Comments/>
    </main>
  </Fragment>
  )
}

export default HomePage