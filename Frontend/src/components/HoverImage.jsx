import React from "react";
import { useNavigate } from "react-router-dom";

const HoverImage = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/diet-planner"); // Navigates to the DietPlanner component
    };

    return (
        <div 
            className="fixed bottom-10 right-10 flex flex-col items-center cursor-pointer"
            onClick={handleClick}
        >
            <div className="w-20 h-20 bg-blue-500 rounded-full shadow-lg flex items-center justify-center hover:bg-blue-600 transition-transform transform hover:scale-110 border-4 border-green-500">
                <img 
                    src="https://media.istockphoto.com/id/181956663/photo/food-pyramid.jpg?s=612x612&w=0&k=20&c=TXLnzvc8-pJ1PTN6Mx9-v3F9Wm5DHuxTIt06qBPRlbw=" 
                    alt="Floating Icon" 
                    className="w-full h-full rounded-full object-cover"
                />
            </div>
            <p className="mt-2 text-sm font-semibold text-gray-700">Diet Planner</p>
        </div>
    );
    
};

export default HoverImage;
