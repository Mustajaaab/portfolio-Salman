import React from "react";
import CircularProgress from "./CircularProgress";
import Figma from "../../assets/image/figma.png";
import AXd from "../../assets/image/adobe-xd.png";
import APhoto from "../../assets/image/adobe-photo.png";
import AIll from "../../assets/image/adobe-ill.png";
import APre from "../../assets/image/adobe-pre.png";

const Skills = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:flex lg:justify-center lg:gap-12 xl:gap-19 gap-6 mt-20">
      <CircularProgress percentage={100} image={Figma} title={'Figma'} />
      <CircularProgress percentage={100} image={AXd} title={'Adobe XD'} />
      <CircularProgress percentage={85} image={APhoto} title={'Adobe Photoshop'} />
      <CircularProgress percentage={60} image={AIll} title={'Adobe Illustrator'} />
      <CircularProgress percentage={70} image={APre} title={'Adobe Premiere'} />
    </div>
  );
};

export default Skills;
