  import React, { useState } from "react";
  import bgVector from "../assets/Images/Vector 1.png";
  import Logo from "../assets/Images/Logo.png";
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

  import fmBg1 from "../assets/Images/fmbg1.png";
  import fmBg2 from "../assets/Images/fmbg2.png";
  import fmBg3 from "../assets/Images/fmbg3.png";
  import fmBg4 from "../assets/Images/fmbg4.png";

  const HomeSection = () => {
    const [scrollCount, setScrollCount] = useState(0);

    const [textTop, setTextTop] = useState(
      "-translate-y-[17rem] text-[20px] opacity-0 invisible"
    );
    const [textTranslate, setTextTranslate] = useState("translate-x-[25rem]");
    const [sections, setSections] = useState([
      "PetGrooming",
      "PetClinic",
      "Pet Daycare",
      "Pet Training",
    ]);
    const [greenDog, setGreenDog] = useState("translate-y-0");
    const [blackDog, setBlackBog] = useState("translate-y-0");
    const [yellowDog, setYellowDog] = useState("translate-y-0");
    const [cat, setCat] = useState("translate-x-0");
    const [mainDog, setMainDog] = useState("scale-[1]");

    const [pdFrame, setPdFrame] = useState("translate-x-[42rem] opacity-40");
    const [rotatingImg1, setRotatingImg1] = useState(
      "transform translate-x-[40%] -translate-y-[55%] opacity-50 origin-center rotate-[60deg]"
    );
    const [rotatingImg2, setRotatingImg2] = useState(
      "transform translate-x-[40%] -translate-y-[55%] opacity-50 origin-center rotate-[60deg]"
    );
    const [rotatingImg3, setRotatingImg3] = useState(
      "transform translate-x-[40%] -translate-y-[55%] opacity-50 origin-center rotate-[60deg]"
    );

    const [title, setTitle] = useState("Pet Grooming");
    const [discription, setDiscription] = useState(
      "Pet grooming is the process of maintaining your pet’s hygiene and enhancing their physical appearance, which includes tasks like washing, brushing, trimming fur, and clipping nail"
    );
    const [slide, setSlide] = useState("-translate-x-[42rem] opacity-0");

    const handleScroll = () => {
      let newScrollCount = scrollCount + 1;

      if (newScrollCount <= 8) {
        setScrollCount(newScrollCount);
      }

      switch (newScrollCount) {
        case 1:
          setTextTranslate("-translate-x-[10.5rem] duration-[820ms]");
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
          break;
        case 5:
          setTimeout(() => {
            setSlide("translate-x-0 opacity-100");
            setPdFrame("translate-x-0 opacity-100");
          }, 50);
          break;
        case 6:
          setTitle("Pet Clinic");
          setDiscription(
            "The pet clinic offers comprehensive veterinary services, including medical consultations, vaccinations, and surgical procedures, ensuring the well-being of furry companions. The clinic provides compassionate care and support to pets and their owners."
          );
          setPdFrame("opacity-0");
          setRotatingImg1(
            "transform -translate-x-[50%] opacity-100 translate-y-0 origin-center rotate-[3deg]"
          );
          break;
        case 7:
          setTitle("Pet DayCare");
          setDiscription(
            "Pet daycare offers a safe and stimulating environment for pets while their owners are away, providing companionship, exercise, and socialization opportunities. Supervised by trained staff, pets engage."
          );
          setRotatingImg1(
            "transform translate-x-[40%] opacity-50 translate-y-[70%] origin-center -rotate-[60deg]"
          );
          setRotatingImg2(
            "transform -translate-x-[50%] opacity-100 translate-y-0 origin-center rotate-[3deg]"
          );
          break;
        case 8:
          setTitle("Pet Training");
          setDiscription(
            "Pet training encompasses teaching animals essential behaviors and commands, fostering obedience and good manners. Training sessions focus on positive reinforcement techniques, such as rewards and praise."
          );
          setRotatingImg3(
            "transform -translate-x-[50%] opacity-100 translate-y-0 origin-center rotate-[3deg]"
          );

          setRotatingImg2(
            "transform translate-x-[40%] opacity-50 translate-y-[70%] origin-center -rotate-[60deg]"
          );

          break;
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
        <img src={Paw1} alt="paw 1" className="absolute -z-50 top-12 right-5" />
        <img src={Paw2} alt="paw 2" className="absolute -z-50 top-14 left-52" />
        <img src={Paw3} alt="paw 3" className="absolute -z-50 top-44 left-20" />
        <img src={Paw4} alt="paw 4" className="absolute -z-50 top-48 left-52" />
        <img src={Paw5} alt="paw 5" className="absolute -z-50 top-60 left-64" />
        <img src={Paw6} alt="paw 6" className="absolute -z-50 top-72 right-10" />
        <img src={Paw7} alt="paw 7" className="absolute -z-50 bottom-28 left-12" />
        <img src={Paw8} alt="paw 8" className="absolute -z-50 bottom-28 right-12" />

        {scrollCount <= 4 ? (
          <div className="flex overflow-hidden relative w-full min-h-[640px] h-auto">
            <div className="flex overflow-hidden flex-1 items-center justify-center">
              <p
                className={`font-bold absolute ml-20 ${textTop} whitespace-nowrap text-center transition-all duration-700 ease-out font-playfair tracking-wide`}
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
        ) : (
          <div className="flex px-[0rem]  md:px-[2rem] lg:px-[5rem] overflow-hidden overflow-y-auto flex-col lg:flex-row w-full h-full">
            <div className="w-full lg:w-[60%]  px-10 py-2 h-full">
              <h3 className="font-semibold font-playfair text-[32px]">
                Categories
              </h3>
              <h6
                className={`ease-linear transition-all duration-200 font-medium mt-20 text-[24px] font-roboto`}
              >
                {title}
              </h6>
              <p className="font-[400] my-4 font-roboto text-[20px] ">
                {discription}
              </p>
              <button className="px-7 font-semibold text-[1.1rem] py-4 text-[##124c5f] bg-[#c7e7e1]">
                Get Started
              </button>
              {scrollCount > 4 && (
                <div
                  className={`flex ${slide} duration-300 ease-linear transition-all flex-wrap h-auto my-10 gap-4`}
                >
                  {sections.map((text, index) => (
                    <button
                      key={index}
                      className={`flex pr-4 ${
                        index + 5 == scrollCount
                          ? "bg-[#124C5F] text-white"
                          : "text-black"
                      } rounded-md py-1 min-w-[2rem] items-center gap-1 font-bold font-roboto`}
                    >
                      <img src={Logo} className="h-auto w-9" alt="paw logo" />
                      {text}
                    </button>
                  ))}
                </div>
              )}
            </div>
            <div className="relative min-h-[600px] overflow-hidden h-auto flex justify-center items-center w-full lg:w-[60%] ">
              <img
                src={fmBg2}
                className={`w-auto ${pdFrame} h-auto duration-500 transition-all ease-linear`}
                alt="fmBgNome2"
              />
              <div className="h-[48rem] -right-[24rem] w-[48rem] absolute rounded-full">
                <img
                  src={fmBg1}
                  alt=""
                  className={`absolute inset-0 m-auto duration-500 ease-linear transition-all w-[40rem] ${rotatingImg1} h-auto`}
                />
              </div>
              <div className="h-[48rem] -right-[24rem] w-[48rem] absolute rounded-full">
                <img
                  src={fmBg3}
                  alt=""
                  className={`absolute inset-0 m-auto duration-500 ease-linear transition-all w-[40rem] ${rotatingImg2} h-auto`}
                />
              </div>
              <div className="h-[48rem] -right-[24rem] w-[48rem] absolute rounded-full">
                <img
                  src={fmBg4}
                  alt=""
                  className={`absolute inset-0 m-auto duration-500 ease-linear transition-all w-[40rem] ${rotatingImg3} h-auto`}
                />
              </div>
            </div>
          </div>
        )}
      </div>
    );
  };

  export default HomeSection;
