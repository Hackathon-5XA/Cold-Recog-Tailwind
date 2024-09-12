import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import detectiveImage from "../assets/detective.png";

const LandingPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem("token");
    if (!token) {
      navigate("/login"); // Redirect to login if not authenticated
    }
  }, [navigate]);

  return (
    <div className="flex flex-col min-h-screen bg-[#212121] text-white overflow-hidden">
      <Header />
      <main className="flex-1 flex flex-col md:flex-row items-center justify-center md:justify-between p-4 md:p-8 bg-[#eeeeee] text-center md:text-left">
        <div className="flex flex-col justify-center items-center md:items-start w-full md:w-1/2 max-w-lg md:max-w-xl px-4 md:px-8">
          <h1 className="text-[3.75rem] font-[100] font-glitch text-teal-500 mb-5">
            COLD RECOG
          </h1>
          <h2 className="text-base md:text-lg lg:text-xl font-extrabold text-[#474444] opacity-90 mb-6">
            Our innovative system provides rapid, accurate identification of
            unclaimed bodies, ensuring respect and closure for families. Access
            this breakthrough technology easily through our user-friendly web
            app.
          </h2>
          <button
            className="px-6 py-3 text-lg md:text-xl font-extrabold bg-[#332B2B] text-[#3AE4C9] rounded-full shadow-md hover:opacity-80 transition duration-300"
            onClick={() => navigate("/search")}
          >
            SEARCH
          </button>
        </div>
        <div className="flex justify-center items-center w-full md:w-1/2 max-w-md md:max-w-lg px-4 md:px-8">
          <img
            src={detectiveImage}
            alt="Detective"
            className="w-full h-auto object-cover"
          />
        </div>
      </main>
      <Footer className="mt-auto" />
    </div>
  );
};

export default LandingPage;
