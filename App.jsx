import { BrowserRouter, Routes, Route } from "react-router-dom";
import Body from "./src/components/Body";
import Home from "./src/components/Home";
import Experince from "./src/components/Experince";
import Skills from "./src/components/Skills";
import Certificates from "./src/components/Certificates";
import About from "./src/components/About";

function App() {
  return (
    <>  
      <BrowserRouter basename="/">
        <Routes>
          <Route path="/" element={<Body/>}>
            <Route path="/" element={<Home/>}></Route>
            <Route path="About" element={<About/>}></Route>
            <Route path="Emploment" element={<Experince/>}></Route>
            <Route path="Skills" element={<Skills/>}></Route>
            <Route path="Certificates" element={<Certificates/>}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
