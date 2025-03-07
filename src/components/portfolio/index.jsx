import React from "react";

const Portfolio = () => {
  return (
    <>
    <h1 className="text-center mt-24 text-white font-bold text-3xl font-lato">Portfolio</h1>
    <div className="lg:flex mx-auto gap-5 justify-center mt-7">
        <button className="bg-gradient-to-r from-[#00A0FA] to-[#0500FD] py-1 px-4 rounded-sm text-white font-bold text-lg font-lato">All</button>
        <button className="bg-white/8 py-1 px-4 rounded-sm text-white font-bold text-lg font-lato">Website Design</button>
        <button className="bg-white/8 py-1 px-4 rounded-sm text-white font-bold text-lg font-lato">App Mobile Design</button>
        <button className="bg-white/8 py-1 px-4 rounded-sm text-white font-bold text-lg font-lato">App Desktop</button>
        <button className="bg-white/8 py-1 px-4 rounded-sm text-white font-bold text-lg font-lato">Braiding</button>
    </div>
    <div>
        <div>
            <img src="" alt="" />
        </div>
    </div>
    </>
  );
};

export default Portfolio;
