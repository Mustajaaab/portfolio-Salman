import Saluu from "../../assets/image/salu-2.png";
import Download from "../../assets/image/download.png";

function AboutMe() {

  return (
    <div>
        <h2 className="text-center font-bold lg:text-3xl text-2xl text-white mt-24 font-lato">About Me</h2>
        <p className="text-center font-medium lg:text-lg text-sm text-[#959595] mt-2 font-lato">User Interface and User Experience and <br className="lg:hidden"/> Also video editing</p>

        <div className="lg:flex justify-center items-end lg:mt-38 mx-5 gap-14">
            <div className="flex justify-center">
                <div className="bg-[#FFFFFF]/4 w-88 h-130 lg:w-88 lg:h-88 lg:mt-0 mt-15 relative rounded-t-full">
                    <img src={Saluu} alt="" className="w-88 h-120 lg:w-88 lg:h-123 grayscale absolute bottom-0"/>
                </div>
            </div>
            <div className="mx-4 mt-7 xl:w-[30%]">
                <p className="text-[#959595] font-medium  whitespace-normal font-lato ">
                A software engineer, the modern-day architect of digital realms, navigates the ethereal landscapes of code, sculpting intangible structures that shape our technological world. With fingers poised over keyboards like virtuoso pianists, they compose symphonies of logic, their minds a labyrinth of algorithms and solutions.Their canvas is a screen, a vast expanse where lines of code dance in intricate patterns, weaving the fabric of programs and applications. Each keystroke is a brushstroke, crafting intricate architectures and breathing life into innovative designs.In this digital atelier, they don the mantle of problem solvers, confronting bugs and glitches like valiant knights in an ever-evolving quest for perfection. Debugging becomes a noble pursuit, unraveling the mysteries hidden within the tangled webs of code. designs.In this digital atelier. 
                </p>
                <button className="flex items-center gap-2 py-2 px-4 bg-gradient-to-r from-[#00A0FA] to-[#0500FD] rounded-lg mx-auto mt-7">
                    <img src={Download} alt="" className="w-4 h-4"/>
                    <p className="font-bold text-sm text-white font-lato">Download CV</p>
                </button>
            </div>
        </div>
    </div>
  );
  
}

export default AboutMe
