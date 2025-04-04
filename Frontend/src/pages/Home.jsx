import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import PrescriptionSection from "../components/PrescriptionSection";
import TopDoctors from "../components/TopDoctors"
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <PrescriptionSection />
      <TopDoctors/>
    </div>
  );
};

export default Home;
