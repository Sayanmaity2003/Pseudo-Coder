import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Contact from "./pages/Contact";
import Doctors from "./pages/Doctors";
import About from "./pages/About";
import DietPlanner from "./pages/DietPlanner";
import Login from "./pages/Login";
import MedicineSearch from "./pages/MedicineSearch";

const App = () => {
  return (
    <div className="mx-4 sm:mx-[10%]">
      <ToastContainer />

      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:speciality" element={<Doctors />} />
        <Route path="/about" element={<About />} />
        <Route path="/diet-planner" element={<DietPlanner />} />
        <Route path="/login" element={<Login />} />
        <Route path="/medicine-search" element={<MedicineSearch />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
