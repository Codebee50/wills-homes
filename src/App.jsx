import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import Nopage from "./pages/Nopage";
import PropertyDetail from "./pages/PropertyDetail";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/home" element={<HomePage/>} />
        <Route path="/:id/detail" element={<PropertyDetail/>}/>
        <Route path="*" element={<Nopage/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App