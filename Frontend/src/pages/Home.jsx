import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import PrescriptionSection from "../components/PrescriptionSection";
import TopDoctors from "../components/TopDoctors"
import Banner from "../components/Banner";
const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <PrescriptionSection />
            <TopDoctors />
            <Banner />
        </div>
    );
};

export default Home;
