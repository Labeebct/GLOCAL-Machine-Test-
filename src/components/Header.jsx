import React, { useEffect, useState } from "react";
import Logo from "../assets/Images/Logo.png";
import MenuIcon from "@mui/icons-material/Menu";
import SideBar from "./SideBar";

const Header = () => {
  const [navOpen, setNavOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1280) {
        setNavOpen(false);
      }
    };

    handleResize(); 
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);


  return (
    <nav className="flex justify-between px-2 sm:px-4 md:px-6 lg:px-8 xl:px-10 items-center w-full h-24 bg-white">
      <div className="flex items-center gap-x-1 sm:gap-x-2 md:gap-x-3 w-1/12">
        <img src={Logo} className="h-auto w-12" alt="paw logo" />
        <h3 className="font-bold text-[32px] bg-gradient-to-b from-orange-400 to-yellow-300 text-transparent bg-clip-text">
          Glocal
        </h3>
        <div className="xl:hidden ml-2 mt-1 block">
          <MenuIcon
            onClick={() => setNavOpen(!navOpen)}
            className="cursor-pointer"
            sx={{ fontSize: "27px" }}
          />
        </div>
      </div>
      <SideBar setNavOpen={setNavOpen} isNavOpen={navOpen} />
      <div className="hidden xl:block w-1/2">
        <ul className="flex w-full px-10  justify-between items-center">
          <li className="font-roboto font-semibold text-[#FFAA00]  transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            Home
          </li>
          <li className="font-roboto font-medium text-[#2f2f2fde] hover:text-[#FFAA00] transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            Categories
          </li>
          <li className="font-roboto font-medium text-[#2f2f2fde] hover:text-[#FFAA00] transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            About Us
          </li>
          <li className="font-roboto font-medium text-[#2f2f2fde] hover:text-[#FFAA00] transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            Products
          </li>
          <li className="font-roboto font-medium text-[#2f2f2fde] hover:text-[#FFAA00] transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            Pet Care
          </li>
          <li className="font-roboto font-medium text-[#2f2f2fde] hover:text-[#FFAA00] transition ease-in-out cursor-pointer duration-300 hover:-translate-y-1">
            Contact
          </li>
        </ul>
      </div>
      <div className="flex  w-1/2 xl:w-1/4 justify-end gap-4 md:gap-8 items-center">
        <button className="px-4 sm:px-6 md:px-8 lg:px-10 text-[.8rem] sm:text-[.9rem] md:text-[1rem] py-2 rounded-[3px] font-medium font-roboto bg-[#124C5F] text-white">
          Sign In
        </button>
        <button className="px-4 sm:px-6 md:px-8 lg:px-10 text-[.8rem] sm:text-[.9rem] md:text-[1rem] py-2 rounded-[3px] font-medium font-roboto text-[#124C5F] bg-[#C7E7E1]">
          Register
        </button>
      </div>
    </nav>
  );
};

export default Header;
