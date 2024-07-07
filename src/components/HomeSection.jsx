import React, { useState } from "react";
import bgVector from "../assets/Images/Vector 1.png";
import dog1 from "../assets/Images/dog 1.png";
import dog2 from "../assets/Images/dog 2.png";
import dog3 from "../assets/Images/dog 3.png";
import dog4 from "../assets/Images/dog 4.png";
import dog5 from "../assets/Images/dog 5.png";

import Paw1 from "../assets/Images/paw1.png";
import Paw2 from "../assets/Images/paw2.png";
import Paw3 from "../assets/Images/paw3.png";
import Paw4 from "../assets/Images/paw4.png";
import Paw5 from "../assets/Images/paw5.png";
import Paw6 from "../assets/Images/paw6.png";
import Paw7 from "../assets/Images/paw7.png";
import Paw8 from "../assets/Images/paw8.png";

const HomeSection = () => {
  const [scrollCount, setScrollCount] = useState(0);

  const [textTop, setTextTop] = useState(
    "-translate-y-[17rem] text-[20px] opacity-0 invisible"
  );
  const [textTranslate, setTextTranslate] = useState("translate-x-[25rem]");
  const [greenDog, setGreenDog] = useState("translate-y-0");
  const [blackDog, setBlackBog] = useState("translate-y-0");
  const [yellowDog, setYellowDog] = useState("translate-y-0");
  const [cat, setCat] = useState("translate-x-0");
  const [mainDog, setMainDog] = useState("scale-[1]");

  const handleScroll = () => {
    const newScrollCount = scrollCount + 1;
    setScrollCount(newScrollCount);

    switch (newScrollCount) {
      case 1:
        setTextTranslate("-translate-x-[10.5rem] duration-1000");
        setGreenDog("-translate-y-[7.7rem]");
        setYellowDog("translate-y-[2rem]");
        break;
      case 2:
        setTextTranslate("-translate-x-[21rem] duration-500");
        setBlackBog("-translate-y-[6.7rem]");
        setCat("translate-x-[4rem]");
        break;
      case 3:
        setTextTranslate("-translate-x-[61rem] duration-700");
        setTextTop("translate-y-0 text-[40px] opacity-100 visible");
        setMainDog("scale-[1.04]");
        setCat("translate-x-[14rem] -rotate-6");
        setBlackBog("-translate-y-[6.9rem] translate-x-[10rem] rotate-6");
        setYellowDog("translate-y-[2rem] -translate-x-[11rem] rotate-6");
        setGreenDog("-translate-y-[8rem] -translate-x-[9rem] -rotate-6 ");
        break;
      case 4:
        setMainDog(
          "scale-[1.04] -rotate-12 -translate-x-[26rem] translate-y-[4rem] "
        );
        setTextTop("translate-y-10 text-[40px] opacity-100 visible");
        setCat("-rotate-6 translate-x-[3rem]");
        setYellowDog("z-40");
        setBlackBog("-translate-y-[14rem] translate-x-[8rem] rotate-6");
        setYellowDog("translate-y-[20rem] -translate-x-[11rem] z-10 rotate-12");
        setGreenDog("-translate-y-[6rem] -translate-x-[9rem] -z-10 rotate-12");
      default:
        break;
    }
  };

  return (
    <div
      onClick={handleScroll}
      className="flex justify-center  items-center w-full h-[calc(100vh-96px)]"
      style={{
        backgroundImage: `url(${bgVector})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
    >
      <img src={Paw1} alt="paw 1" className="absolute top-12 right-5" />
      <img src={Paw2} alt="paw 2" className="absolute top-14 left-52" />
      <img src={Paw3} alt="paw 3" className="absolute top-44 left-20" />
      <img src={Paw4} alt="paw 4" className="absolute top-48 left-52" />
      <img src={Paw5} alt="paw 5" className="absolute top-60 left-64" />
      <img src={Paw6} alt="paw 6" className="absolute top-72 right-10" />
      <img src={Paw7} alt="paw 7" className="absolute bottom-28 left-12" />
      <img src={Paw8} alt="paw 8" className="absolute bottom-28 right-12" />

      <div className="flex overflow-hidden relative w-full min-h-[640px] h-auto">
        <div className="flex overflow-hidden flex-1 items-center justify-center">
          <p
            className={`font-bold absolute ml-20 ${textTop} whitespace-nowrap text-center transition-all duration-1000 ease-out font-playfair tracking-wide`}
          >
            Get various services personlized <br /> for your pets like
          </p>
          {scrollCount <= 3 && (
            <p
              className={`font-bold ${textTranslate} whitespace-nowrap  ease-linear transition text-[70px] font-playfair tracking-wide`}
            >
              Taking care for your pets !
            </p>
          )}
        </div>
        <div className="flex flex-col p-4  h-full flex-1">
          <img
            src={dog2}
            className={`absolute top-4 ${cat} duration-700 transition-transform ease-linear  z-10 mt-4" alt="dog pic`}
          />
          <img
            src={dog1}
            className={`absolute ${blackDog} duration-700 transition-transform ease-linear bottom-0 ml-16 mb-5`}
            alt="dog pic"
          />
          <img
            src={dog3}
            className={`absolute ${yellowDog} duration-700 transition-transform ease-linear -top-4 right-0 z-10 w-[14rem] h-auto`}
            alt="dog pic"
          />
          <img
            src={dog4}
            className={`absolute ${mainDog} duration-700 transition-transform ease-linear right-48 z-30 w-[21rem] h-auto`}
            alt="dog pic"
          />
          <img
            src={dog5}
            className={`absolute ${greenDog} duration-700 transition-transform ease-linear   bottom-1 w-[19rem] h-auto right-9`}
            alt="dog pic"
          />
        </div>
      </div>
    </div>
  );
};

export default HomeSection;
