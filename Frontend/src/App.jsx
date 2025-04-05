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
import MyProfile from "./pages/MyProfile";
import MyAppointments from "./pages/MyAppointments";
import Appointment from "./pages/Appointment";
import DoctorVerification from "./pages/DoctorVerification";
import MapPage from "./pages/MapPage";

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
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/my-appointments" element={<MyAppointments />} />
        <Route path="/appointment/:docId" element={<Appointment />} />
        <Route path="/doctor-verification" element={<DoctorVerification />} />
        <Route path="/map" element={<MapPage />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
