import React, { useState } from "react";
import emailjs from "@emailjs/browser"; // Import EmailJS

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    timeline: "",
    service: "",
    projectDetails: "",
  });

  const [isSent, setIsSent] = useState(false); // State to track email sent status
  const services = ["Website Design", "App Design", "Braiding"];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // EmailJS Configuration
    const serviceID = "service_4ul1c6w"; // Replace with your EmailJS Service ID
    const templateID = "template_wy7y5ed"; // Replace with your EmailJS Template ID
    const publicKey = "6KhzXO54mk6ZHwtbd"; // Replace with your EmailJS Public Key

    const templateParams = {
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      timeline: formData.timeline,
      service: formData.service,
      projectDetails: formData.projectDetails,
    };

    // Send email using EmailJS
    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then((response) => {
        console.log("Email Sent Successfully!", response.status, response.text);
        setIsSent(true); // Set state to show success message
      })
      .catch((error) => {
        console.error("Email Sending Failed!", error);
      });
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

      <div className="max-w-[800px] mx-auto flex flex-col lg:flex-row gap-6 mt-8 px-5">
        <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-[50%]">
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

          <div>
            <input
              type="text"
              name="timeline"
              value={formData.timeline}
              onChange={handleChange}
              className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
              placeholder="Timeline"
              required
            />
          </div>
        </form>

        <form onSubmit={handleSubmit} className="space-y-4 w-full lg:w-[50%]">
          <div>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full py-3 px-6 bg-white/4 text-white  rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA]"
              placeholder="Email"
              required
            />
          </div>

          <div className="relative">
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-[#00A0FA] appearance-none pr-12"
              required
            >
              <option value="" className="text-[#959595]" disabled>
                Select a service
              </option>
              {services.map((service, index) => (
                <option key={index} value={service}>
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

          <div>
            <textarea
              name="projectDetails"
              value={formData.projectDetails}
              onChange={handleChange}
              rows="6"
              className="w-full py-3 px-6 bg-white/4 text-white rounded-md focus:outline-none  focus:ring-2 focus:ring-[#00A0FA]"
              placeholder="Project Details"
              required
            ></textarea>
          </div>

          <div className="flex justify-end">
            <button
              type="submit"
              onClick={handleSubmit}
              className="border-[#959595] font-lato border-[1px] text-white py-2 px-8 rounded-md font-bold"
            >
              Send
            </button>
          </div>

          {isSent && (
            <p className="text-green-500 text-center mt-3">
              ✅ Email Sent Successfully!
            </p>
          )}
        </form>
      </div>
    </>
  );
};

export default Contact;
