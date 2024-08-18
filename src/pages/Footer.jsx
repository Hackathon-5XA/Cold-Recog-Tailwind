import React from "react";

const Footer = () => {
  return (
    <footer className="bg-[#212121] p-4 flex flex-col items-center md:flex-row md:justify-between md:px-10 md:py-6">
      <nav className="flex flex-wrap justify-center space-x-6 md:space-x-8">
        <a
          href="https://github.com/Hackathon-5XA/Cold-Recog-UI/issues"
          className="text-white text-sm md:text-base no-underline"
        >
          <button className="bg-[#212121] text-[#eeeeee] border-0 font-bakbak text-base md:text-lg cursor-pointer">
            Issues
          </button>
        </a>
        <a
          href="https://github.com/Hackathon-5XA"
          className="text-white text-sm md:text-base no-underline"
        >
          <button className="bg-[#212121] text-[#eeeeee] border-0 font-bakbak text-base md:text-lg cursor-pointer">
            Repo
          </button>
        </a>
        <a
          href="/"
          className="text-white text-sm md:text-base no-underline"
        >
          <button className="bg-[#212121] text-[#eeeeee] border-0 font-bakbak text-base md:text-lg cursor-pointer">
            Privacy Policy
          </button>
        </a>
      </nav>
      <h1 className="text-[#0bf5d6] text-sm md:text-base font-light opacity-50 font-bakbak mt-4 md:mt-0">
        CopyRight &copy; 5XA
      </h1>
    </footer>
  );
};

export default Footer;
