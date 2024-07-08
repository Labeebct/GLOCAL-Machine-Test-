import React from "react";
import Logo from "../assets/Images/Logo.png";
import HomeIcon from "@mui/icons-material/Home";
import CategoryIcon from "@mui/icons-material/Category";
import InventoryIcon from "@mui/icons-material/Inventory";
import PetsIcon from "@mui/icons-material/Pets";
import InfoIcon from "@mui/icons-material/Info";
import PhoneIcon from "@mui/icons-material/Phone";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = ({ isNavOpen, setNavOpen }) => {
  return (
    <div
      className={`w-[250px] z-50 border-r shadow-sm flex flex-col bg-[#f3f3f3] h-full  ${
        isNavOpen ? "left-0" : "left-[-300px]"
      } duration-300 ease-in-out fixed top-0 bottom-0`}
    >
      <div className="flex relative  items-center gap-x-1 sm:gap-x-2 md:gap-x-2 w-full mt-6">
        <img src={Logo} className="h-auto w-12" alt="paw logo" />
        <h3 className="font-bold text-[32px] bg-gradient-to-b from-orange-400 to-yellow-300 text-transparent bg-clip-text">
          Glocal
        </h3>
        <div className="absolute right-2 mt-1">
          <CloseIcon
            onClick={() => setNavOpen(!isNavOpen)}
            className="cursor-pointer "
            sx={{ fontSize: "27px" }}
          />
        </div>
      </div>

      <div className="w-full h-auto">
        <ul className="flex flex-col gap-y-1 w-full py-6">
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-semibold bg-[#ffaa0037]   cursor-pointer duration-100">
            <HomeIcon className="text-[#FFAA00]" />
            Home
          </li>
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-medium text-[#2f2f2fde] hover:bg-[#ffaa0037]  cursor-pointer duration-100">
            <CategoryIcon className="text-[#FFAA00]" />
            Categories
          </li>
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-medium text-[#2f2f2fde] hover:bg-[#ffaa0037]  cursor-pointer duration-100">
            <InfoIcon className="text-[#FFAA00]" />
            About Us
          </li>
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-medium text-[#2f2f2fde] hover:bg-[#ffaa0037]  cursor-pointer duration-100">
            <InventoryIcon className="text-[#FFAA00]" />
            Products
          </li>
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-medium text-[#2f2f2fde] hover:bg-[#ffaa0037]  cursor-pointer duration-100">
            <PetsIcon className="text-[#FFAA00]" />
            Pet Care
          </li>
          <li className="font-roboto w-full h-14 flex items-center gap-2 pl-2 font-medium text-[#2f2f2fde] hover:bg-[#ffaa0037]  cursor-pointer duration-100">
            <PhoneIcon className="text-[#FFAA00]" />
            Contact
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SideBar;
