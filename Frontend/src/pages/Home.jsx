import React from "react";
import Header from "../components/Header";
import SpecialityMenu from "../components/SpecialityMenu";
import PrescriptionSection from "../components/PrescriptionSection";
import TopDoctors from "../components/TopDoctors"
import Banner from "../components/Banner";
import HoverImage from "../components/HoverImage";
const Home = () => {
    return (
        <div>
            <Header />
            <SpecialityMenu />
            <PrescriptionSection />
            <TopDoctors />
            <Banner />
            <HoverImage/>
        </div>
    );
};

export default Home;
