import React from "react";
import { useNavigate } from "react-router-dom";

const Success = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white bg-black px-4 text-center">
      <h1 className="text-3xl font-bold mb-4">🎉 Your Message Has Been Sent Successfully!</h1>
      <p className="text-lg mb-6">Thank you for reaching out. I’ll get back to you soon.</p>
      <button
        onClick={() => navigate(-1)}
        className="bg-[#00A0FA] hover:bg-[#008bd1] text-white font-bold py-2 px-6 rounded-md transition-all duration-200"
      >
        Go Back
      </button>
    </div>
  );
};

export default Success;