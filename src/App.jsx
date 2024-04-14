import { Fragment } from "react"
import Hero from "./sections/Hero"
import Properties from "./sections/Properties"

const App = () => {
  return (
    <Fragment>
      <main>
        <Hero></Hero>
        <Properties/>
      </main>
    </Fragment>
  )
}

export default App