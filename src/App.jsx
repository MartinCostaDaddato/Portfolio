import Contact from "./Components/Contact";
import Me from "./Components/Me";
import Navbar from "./Components/Navbar";
import Projects from "./Components/Projects";
import Studies from "./Components/Studies";
import { BrowserRouter, Routes, Route} from "react-router-dom";

function App() {

  return (
    <BrowserRouter>
      <div className="m-0 p-0 flex flex-col justify-center w-full h-screen font-manrope text-white">
        <Navbar/>
        <div className="container mx-auto h-full flex-col items-center justify-center">
          <Routes location={location} key={location.pathname}>
            <Route index  element={<Me />} />
            <Route path="/Projects" element={<Projects />} />
            <Route path="/Studies" element={<Studies />} />
            <Route path="/Contact" element={<Contact />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
