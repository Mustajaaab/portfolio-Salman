import Behance from "../../assets/image/behance.png";
import Dribble from "../../assets/image/dribble.png";
import Insta from "../../assets/image/insta.png";
import Linkedin from "../../assets/image/linkedin.png";
import Salu from "../../assets/image/salu.png";

function SectionOne() {

    return (
        <section className="text-center pt-10 pb-20">

            <div className="lg:hidden">
                <p className="font-semibold text-lg text-[#707070] font-lato">Hi I am</p>
                <p className="mt-2 font-bold text-2xl text-[#959595] font-lato">Salman Shah</p>
                <h1 className="mt-4 font-extrabold lg:text-5xl text-[44px] text-[#00A0FA] font-lato">UI/UX Designer</h1>

                <div className="flex justify-center gap-6 mt-5">
                    <div 
                    className="border-[#575757] bg-[#FFFFFF]/4 p-2 border-2 rounded-full">
                        <img src={Insta} alt="" className="w-6 h-6"/>
                    </div>
                    <div 
                    className="border-[#575757] bg-[#FFFFFF]/4 p-2 border-2 rounded-full">
                        <img src={Linkedin} alt="" className="w-6 h-6"/>
                    </div>
                    <div 
                    className="border-[#575757] bg-[#FFFFFF]/4 p-2 border-2 rounded-full">
                        <img src={Dribble} alt="" className="w-6 h-6"/>
                    </div>
                    <div 
                    className="border-[#575757] bg-[#FFFFFF]/4 p-2 border-2 rounded-full">
                        <img src={Behance} alt="" className="w-6 h-6"/>
                    </div>
                </div>

                <div className="flex gap-5 justify-center mt-8">
                    <button className="text-white font-medium text-sm border-2 border-[#0500FD] bg-[#0500FD] lg:px-6 px-4 lg:py-2 py-1 rounded-lg cursor-pointer font-lato">Hire Me</button>
                    <button className="text-[#959595] font-medium text-sm border-2 bg-transparent lg:px-6 px-4 lg:py-2 py-1 rounded-lg cursor-pointer font-lato">Download CV</button>
                </div>
            </div>
            <div className="flex justify-center">
                <div className="relative flex items-center justify-center mt-28 group">
                    {/* Animated Border Effect */}
                    <div className="absolute w-72 h-72 lg:w-96 lg:h-96 rounded-full animate-border-wave group-hover:scale-110 transition-transform duration-500"></div>

                    {/* Background with Image */}
                    <div className="bg-[#FFFFFF]/10 w-64 h-64 lg:w-88 lg:h-88 relative rounded-full flex items-center justify-center before:absolute before:inset-0 before:rounded-full before:border-[6px] before:border-transparent before:animate-pulse-border before:content-[''] group-hover:scale-105 transition-transform duration-500">
                        <img src={Salu} alt="" className="w-64 h-88 lg:w-88 lg:h-123 grayscale transition-all absolute bottom-0 group-hover:scale-100 duration-700 hover:grayscale-0 "/>
                    </div>
                </div>
            </div>


        </section>
    );
}

export default SectionOne;
