import { Routes, Route } from "react-router-dom";
import Home from './Pages/Home.jsx';
import Aggence from './Pages/Aggence.jsx';
import Projects from './Pages/Projects.jsx';
import Navbar from "./Components/Navigations/Navbar.jsx";
import FullScreenNav from "./Components/Navigations/FullScreenNav.jsx";


function App() {
  return (
    <div>
      <Navbar />
      <FullScreenNav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/aggence' element={<Aggence />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </div>
  );
}

export default App;
