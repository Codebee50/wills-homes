import { Fragment } from "react"
import Hero from "../sections/Hero"
import Properties from "../sections/Properties"
import StatisticsSection from "../sections/StatisticsSection"


const HomePage = () => {
  return (
    <Fragment>
    <main>
      <Hero></Hero>
      <Properties/>
      <StatisticsSection/>
    </main>
  </Fragment>
  )
}

export default HomePage