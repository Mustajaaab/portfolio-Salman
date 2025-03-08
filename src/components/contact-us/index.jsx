import { div } from "framer-motion/client";
import React, { useState } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
  });

  const services = [
    "Website Design",
    "App Design",
    "Braiding"
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Data Submitted:", formData);
    // Handle form submission logic here
  };

  return (
        <div className="max-w-[800px] mx-auto mt-28">
            <h2 className="text-[#FEFEFE] text-3xl font-lato font-bold text-center">Contact me</h2>
            <h2 className="text-[#707070] text-lg font-lato font-medium text-center mt-3.5">
                Cultivating Connections: Reach Out and Connect with Me</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
            {/* Name Input */}
            <div>
                <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
                placeholder="Name"
                required
                />
            </div>

            {/* Email Input */}
            <div>
                <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
                placeholder="Email"
                required
                />
            </div>

            {/* Phone Number Input */}
            <div>
                <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
                placeholder="Phone Number"
                required
                />
            </div>

            {/* Service Dropdown */}
            <div className="relative">
                <select
                    name="service"
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none  pr-15"
                    required
                >
                    
                    {services.map((service, index) => (
                        <option key={index} value={service} className="bg-white/4">
                            {service}
                        </option>
                    ))}
                </select>

                {/* Custom Dropdown Arrow */}
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="#959595" xmlns="http://www.w3.org/2000/svg">
                        <path d="M7 10l5 5 5-5H7z"></path>
                    </svg>
                </div>
            </div>


            {/* Submit Button */}
            <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#00A0FA] to-[#0500FD] text-white py-3 rounded-md font-bold hover:opacity-90 transition"
            >
                Submit
            </button>
            </form>
        </div>
  );
};

export default Contact;
