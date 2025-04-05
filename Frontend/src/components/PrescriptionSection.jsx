import React from "react";
import { useNavigate } from "react-router-dom";

const MedicineDetailsSearch = () => {
    const navigate = useNavigate();

    const handleSearchClick = () => {
        navigate("/medicine-search");
    };

    return (
        <div className="flex flex-col bg-[#E3F2FD] rounded-3xl p-8 lg:p-12 shadow-lg w-full text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#023E8A]">
                Medicine Details Search
            </h2>
            <p className="text-sm md:text-base lg:text-lg font-medium text-[#023E8A] mt-4 leading-relaxed flex-grow">
                Get detailed info about medicines — uses, dosage, side effects &
                interactions.
            </p>
            <button
                onClick={handleSearchClick}
                className="mt-6 bg-[#0077B6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E63946] hover:scale-105 transition-all duration-300"
            >
                Go to Medicine Search
            </button>
        </div>
    );
};

const PrescriptionSection = () => {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 px-4 lg:px-20 mt-12">

            {/* --- AI-Based Medicine Suggestion --- */}
            <div className="flex flex-col bg-[#E3F2FD] rounded-3xl p-8 lg:p-12 shadow-lg w-full text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#023E8A]">
                    AI-Based Medicine Suggestion
                </h2>
                <p className="text-sm md:text-base lg:text-lg font-medium text-[#023E8A] mt-4 leading-relaxed flex-grow">
                    Get accurate and helpful medicine suggestions by simply entering your symptoms, powered by advanced AI technology.
                </p>
                <button
                    onClick={() =>
                        (window.location.href = "https://psudo-coder-disease-prediction-juxu.onrender.com")
                    }
                    className="mt-6 bg-[#0077B6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E63946] hover:scale-105 transition-all duration-300"
                >
                    Check AI Suggestions
                </button>
            </div>

            {/* --- Prescription Digitalization --- */}
            <div className="flex flex-col bg-[#E3F2FD] rounded-3xl p-8 lg:p-12 shadow-lg w-full text-center">
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-[#023E8A]">
                    Prescription Digitalization
                </h2>
                <p className="text-sm md:text-base lg:text-lg font-medium text-[#023E8A] mt-4 leading-relaxed flex-grow">
                    Easily convert your handwritten prescriptions into clear digital records using fast and reliable AI recognition tools.
                </p>
                <button
                    onClick={() =>
                        (window.location.href = "https://code-hire-x-digiscribe.streamlit.app/")
                    }
                    className="mt-6 bg-[#0077B6] text-white font-semibold px-8 py-3 rounded-full shadow-md hover:bg-[#E63946] hover:scale-105 transition-all duration-300"
                >
                    Digitalize Now
                </button>
            </div>

            {/* --- Medicine Details Search --- */}
            <MedicineDetailsSearch />
        </div>
    );
};

export default PrescriptionSection;
