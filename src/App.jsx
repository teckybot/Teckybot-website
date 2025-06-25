import React, { useEffect } from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ScrollToTop from './Components/ScrollToTop';
import ScrollToTopButton from './Components/ScrollToTopButton'
import Home from './Pages/Home';
import AboutUs from './Pages/AboutUs';
import Career from './Pages/Career';
import Events from './Pages/Events';
import Services from './Pages/Services';
import Programs from './Pages/programs';
import Navbar from './Components/Navbar';
import Teckyboti from './Pages/Teckyboti';
import ContactUs from './Pages/Contactus';
import Workshop from './Pages/Workshop';
import Projects from './Pages/Projects';
import StemLabs from './Pages/StemLabs';
import Seminars from './Pages/Seminars'
import Internship from './Pages/Internship';
import Fdp from './Pages/Fdp';
import Iic from './Pages/Iic';
import BootCamp from './Pages/BootCamp';
import CustomCursor from './Components/CustomCursor';


function App() {

  return (
    <div className="">
      <CustomCursor/>
      <BrowserRouter>
        <Navbar/>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs/>}/>
          <Route path="/Teckyverse" element={<Teckyboti/>}/>
          <Route path="/Career" element = {<Career/>}/>
          <Route path="/Services" element = {<Services/>}/>
          <Route path="/Programs" element = {<Programs/>}/>
  

          <Route path="/Services/projects" element={<Projects/>}/>
          <Route path="/Services/stemlabs" element={<StemLabs/>}/>
          <Route path="/Services/TechFdp" element={<Fdp/>}/>
          <Route path="/Services/TechIic" element={<Iic/>}/> 

          <Route path="/programs/internships" element={<Internship/>}/>
          <Route path="/programs/BootCamp" element={<BootCamp/>}/>
          <Route path="/programs/workshops" element={<Workshop/>}/>
          <Route path="/programs/seminars" element={<Seminars/>}/>

          <Route path="/Events" element = {<Events/>}/>
          <Route path="/ContactUs" element = {<ContactUs/>}/>
        </Routes>
      </BrowserRouter>
      <ScrollToTopButton/>

    </div>
  );
}

export default App;
