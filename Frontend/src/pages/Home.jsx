import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import PrescriptionSection from "../components/PrescriptionSection";
const Home = () => {
  return (
    <div>
      <Header />
      <SpecialityMenu />
      <PrescriptionSection />
    </div>
  );
};

export default Home;
