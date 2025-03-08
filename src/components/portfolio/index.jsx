import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import RThree from '../../assets/image/r-one.png';
import RTwo from '../../assets/image/r-two.png';
import ROne from '../../assets/image/r-three.png';

const Portfolio = () => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  const portfolioItems = [
    { image: ROne, name: "Project 1", category: "Website Design" },
    { image: RTwo, name: "Project 2", category: "App Mobile Design" },
    { image: RThree, name: "Project 3", category: "App Desktop" },
    { image: RTwo, name: "Project 4", category: "Braiding" },
    { image: ROne, name: "Project 5", category: "Website Design" },
    { image: RThree, name: "Project 6", category: "App Mobile Design" },
    { image: ROne, name: "Project 7", category: "App Desktop" },
    { image: RThree, name: "Project 8", category: "Braiding" },
    { image: RTwo, name: "Project 9", category: "Website Design" },
  ];

  // Filter projects based on selected category
  const filteredItems = selectedCategory === "All"
    ? portfolioItems
    : portfolioItems.filter(item => item.category === selectedCategory);

  const categories = ["All", "Website Design", "App Mobile Design", "App Desktop", "Braiding"];

  return (
    <>
      <h1 className="text-center mt-24 text-white font-bold text-3xl font-lato">Portfolio</h1>

      {/* Buttons for Large Screens (Centered) */}
      <div className="hidden lg:flex justify-center gap-4 mt-6">
        {categories.map((category) => (
          <button
            key={category}
            className={`py-2 px-5 text-white font-bold text-lg font-lato rounded-sm transition ${
              selectedCategory === category 
                ? "bg-gradient-to-r from-[#00A0FA] to-[#0500FD]" 
                : "bg-white/8 hover:bg-white/15"
            }`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      
      {/* Scrollable Category Buttons */}
      <div className="lg:hidden mt-4 overflow-x-auto whitespace-nowrap scrollbar-hide px-5">
        <div className="flex gap-3 pl-3 pr-4"> {/* Added pl-5 and pr-5 for spacing */}
          {categories.map((category, index) => (
            <button
              key={category}
              className={`py-2 px-5 text-white font-bold text-lg font-lato rounded-sm transition ${
                selectedCategory === category 
                  ? "bg-gradient-to-r from-[#00A0FA] to-[#0500FD]" 
                  : "bg-white/8 hover:bg-white/15"
              } ${index === 0 ? "ml-5" : ""}`} // Only add ml-5 to the first button
              onClick={() => setSelectedCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>
      </div>




      {/* Desktop: Grid Layout (3 Columns) */}
      <div className="hidden lg:grid grid-cols-3 gap-y-6 gap-x-4 mt-10 mx-auto max-w-[970px]">
        {filteredItems.map((item, index) => (
          <div key={index} className="w-72 transition-transform transform hover:scale-105 hover:shadow-lg hover:shadow-[#00A0FA]/40 rounded-2xl">
            <img src={item.image} className="w-72 h-72" />
            <div className="flex justify-between p-3 bg-white/8 rounded-b-xl">
              <p className="text-[#C6C6C6] font-lato font-bold text-xs">{item.name}</p>
              <p className="text-[#C6C6C6] font-lato font-bold text-xs">{item.category}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Swiper Slider (Without Navigation & Pagination) */}
      <div className="lg:hidden mt-10">
        <Swiper 
        slidesPerView={1.39} 
        spaceBetween={0} 
        slidesOffsetBefore={40} 
        slidesOffsetAfter={40}
        className="mySwiper">
          {filteredItems.map((item, index) => (
            <SwiperSlide key={index}>
              <div className="w-72 mx-auto">
                <img src={item.image} className="w-72 h-72" />
                <div className="flex justify-between p-3 bg-white/8 rounded-b-xl">
                  <p className="text-[#C6C6C6] font-lato font-bold text-xs">{item.name}</p>
                  <p className="text-[#C6C6C6] font-lato font-bold text-xs">{item.category}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Portfolio;
