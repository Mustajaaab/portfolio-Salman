import React from "react";
import { useNavigate } from "react-router-dom"; // import this

const Contact = () => {
  const navigate = useNavigate();
  const services = ["Website Design", "App Design", "Braiding"];
  const onSubmit = async (event) => {
    event.preventDefault();
  
    const formData = new FormData(event.target);
    formData.append("access_key", "687f4d25-ab01-4c35-88d7-a9e42ea7ceec");
  
    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);
  
    try {
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
  
      const result = await response.json();
  
      if (result.success) {
        navigate("/success"); // 👈 navigate to success page
        event.target.reset();
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (error) {
      alert("Error submitting the form. Please try again later.");
    }
  };

  
  return (
    <>
      <h2 className="text-[#FEFEFE] text-3xl font-lato font-bold text-center mt-28">
        Contact me
      </h2>
      <h2 className="text-[#707070] text-lg font-lato font-medium text-center mt-3.5">
        Cultivating Connections: Reach Out and <br className="lg:hidden" />
        Connect with Me
      </h2>

      <form className="max-w-[800px] mx-auto flex flex-col lg:flex-row gap-6 mt-8 px-5" onSubmit={onSubmit}>
        <div className="space-y-4 w-full lg:w-[50%]">
          <input
            type="text"
            name="name"
            className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
            placeholder="Name"
            required
          />

          <input
            type="tel"
            name="phone"
            className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
            placeholder="Phone Number"
            required
          />

          <input
            type="text"
            name="timeline"
            className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
            placeholder="Timeline"
            required
          />
        </div>

        <div className="space-y-4 w-full lg:w-[50%] mt-4 lg:mt-0">
          <input
            type="email"
            name="email"
            className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
            placeholder="Email"
            required
          />

          <div className="relative">
            <select
              name="service"
              className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA] appearance-none pr-12"
              required
            >
              <option
                value=""
                className="text-[#959595] bg-[rgba(255,255,255,0.04)]"
              >
                Select a service
              </option>
              {services.map((service, index) => (
                <option
                  key={index}
                  value={service}
                  className="text-black bg-[rgba(255,255,255,0.04)] "
                >
                  {service}
                </option>
              ))}

            </select>

            <div className="absolute right-4 top-1/2 transform -translate-y-1/2 pointer-events-none">
              <svg
                width="16"
                height="16"
                viewBox="0 0 24 24"
                fill="#959595"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M7 10l5 5 5-5H7z"></path>
              </svg>
            </div>
          </div>

          <textarea
            name="projectDetails"
            rows="6"
            className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
            placeholder="Project Details"
            required
          ></textarea>

          <div className="flex justify-end">
            <button
              type="submit"
              className="border-[#959595] font-lato border-[1px] text-white py-2 px-8 rounded-md font-bold"
            >
              Send
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default Contact;
