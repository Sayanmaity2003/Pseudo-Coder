import React from "react";
import { useNavigate } from "react-router-dom";

const Card = ({ title, description, buttonText, onClick }) => (
    <div className="flex flex-col justify-between bg-[#E3F2FD] rounded-3xl p-8 lg:p-10 shadow-xl w-full h-full text-center hover:shadow-2xl hover:scale-[1.02] transition-all duration-300 ease-in-out">
        <div>
            <h1 className="text-2xl lg:text-3xl font-bold text-[#023E8A] tracking-tight mb-4">
                {title}
            </h1>
            <p className="text-sm lg:text-base font-medium text-[#023E8A] leading-relaxed">
                {description}
            </p>
        </div>
        <button
            onClick={onClick}
            className="mt-8 bg-[#0077B6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E63946] hover:scale-105 transition-all duration-300"
        >
            {buttonText}
        </button>
    </div>
);

const MedicineDetailsSearch = () => {
    const navigate = useNavigate();
    return (
        <Card
            title="Medicine Details Search"
            description="Get detailed info about medicines — uses, dosage, side effects & interactions."
            buttonText="Go to Medicine Search"
            onClick={() => navigate("/medicine-search")}
        />
    );
};

const PrescriptionSection = () => {
    return (
        <section className="px-4 lg:px-20 mt-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <div className="h-[420px]">
                    <Card
                        title="AI-Based Medicine Suggestion"
                        description="Get accurate and helpful medicine suggestions by simply entering your symptoms, powered by advanced AI technology."
                        buttonText="Check AI Suggestions"
                        onClick={() =>
                            (window.location.href = "https://psudo-coder-disease-prediction-juxu.onrender.com")
                        }
                    />
                </div>
                <div className="h-[420px]">
                    <Card
                        title="Prescription Digitalization"
                        description="Easily convert your handwritten prescriptions into clear digital records using fast and reliable AI recognition tools."
                        buttonText="Digitalize Now"
                        onClick={() =>
                            (window.location.href = "https://pseudocoder-prescription-digitalization.streamlit.app")
                        }
                    />
                </div>
                <div className="h-[420px]">
                    <MedicineDetailsSearch />
                </div>
            </div>
        </section>
    );
};

export default PrescriptionSection;
