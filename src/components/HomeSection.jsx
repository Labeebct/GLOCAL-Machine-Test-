import React from "react";
import bgVector from "../assets/Images/Vector 1.png";

const HomeSection = () => {
  return (
    <div
      className="flex justify-center items-center w-full h-[calc(100vh-96px)]"
      style={{
        backgroundImage: `url(${bgVector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      
    ></div>
  );
};

export default HomeSection;
