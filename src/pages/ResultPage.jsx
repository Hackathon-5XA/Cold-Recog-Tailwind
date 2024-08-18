import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ResultPage = () => {
  const location = useLocation();
  const { uploadedImage, matchedImages } = location.state || {};
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % matchedImages.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + matchedImages.length) % matchedImages.length);
  };

  return (
    <div className="flex flex-col min-h-screen max-w-full overflow-hidden bg-gray-100">
      <Header />

      <main className="flex flex-1 flex-col md:flex-row items-center justify-center p-4 bg-gray-200 overflow-hidden">
        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full max-h-[50%]">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-teal-400 font-bold mb-2 text-center">Uploaded Image</h1>
          {uploadedImage ? (
            <img
              src={uploadedImage}
              alt="Uploaded file preview"
              className="w-full max-w-xs h-auto rounded-lg object-contain"
              style={{ maxHeight: '50%' }} // Limit height to avoid overflow
            />
          ) : (
            <p className="text-lg text-gray-500">No uploaded image</p>
          )}
        </div>

        <div className="flex flex-col items-center justify-center w-full md:w-1/2 h-full max-h-[50%] relative">
          <h1 className="text-xl md:text-2xl lg:text-3xl text-teal-400 font-bold mb-2 text-center">Matched Results</h1>
          {matchedImages && matchedImages.length > 0 ? (
            <div className="relative flex flex-col items-center justify-center w-full h-full max-h-[50%]">
              <button
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-700 text-2xl md:text-3xl flex items-center justify-center w-10 h-10"
                onClick={handlePrev}
              >
                <FontAwesomeIcon icon={faArrowLeft} />
              </button>
              <div className="flex flex-col items-center justify-center w-full max-w-xs h-auto text-center">
                <img
                  src={matchedImages[currentIndex].url}
                  alt={`Matched file preview ${currentIndex + 1}`}
                  className="w-full max-w-xs h-auto rounded-lg object-contain"
                  style={{ maxHeight: '50%' }} // Limit height to avoid overflow
                />
                <p className="font-bold text-lg md:text-xl lg:text-2xl text-gray-700 mt-2">
                  Match Rate: <br />
                  {matchedImages[currentIndex].matchRate}%
                </p>
              </div>
              <button
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-transparent border-none cursor-pointer text-gray-700 text-2xl md:text-3xl flex items-center justify-center w-10 h-10"
                onClick={handleNext}
              >
                <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          ) : (
            <p className="text-lg text-gray-500">No Match Found</p>
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default ResultPage;
