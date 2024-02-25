import Navbar from "./Components/NavBar/Navbar";
import NavBar2 from "./Components/NavBar2/NavBar2";
import DashBoard from "./Components/DashBoard/DashBoard";
import Chatbot from "./Components/Chatbot/Chatbot";
import { Route,Routes } from "react-router";

function App() {
  return (
    <div  className="flex ">
      <Navbar className="" />
      <div className="">
        <NavBar2/>
        <Routes>
  <Route path="/" element={<DashBoard />} />
  <Route path="/chatbot" element={<Chatbot />} />
</Routes>
      </div>
    
    </div>
  );
}

export default App;
