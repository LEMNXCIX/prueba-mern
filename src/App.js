import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./componentes/Home";
import { Navbar } from "./componentes/Navbar";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home/>}/>
    </Routes>
    </BrowserRouter>
   
  );
}

export default App;
