import React from "react";
import { useNavigate } from "react-router-dom";

const Map = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/map"); // Navigate to /map route
  };

  return (
    <div
      className="fixed bottom-10 left-10 flex flex-col items-center cursor-pointer z-50"
      onClick={handleClick}
    >
      <div className="w-20 h-20 bg-white rounded-full shadow-xl flex items-center justify-center hover:scale-110 transition-transform border-4 border-green-600">
        <img
          src="https://my.clevelandclinic.org/-/scassets/images/org/locations/home/locations-card.jpg"
          alt="Map Icon"
          className="w-full h-full rounded-full object-cover"
        />
      </div>
      <p className="mt-2 text-sm font-medium text-gray-800">Medical Map</p>
    </div>
  );
};

export default Map;
