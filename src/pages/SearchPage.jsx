import React, { useCallback, useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
import { useNavigate } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import AnimationComponent from "./AnimationComponent";
import LoadingMessage from "./LoadingMessage";

const SearchPage = () => {
  const navigate = useNavigate();
  const [previewUrl, setPreviewUrl] = useState("");
  const [matchedImages, setMatchedImages] = useState([]);
  const [isFileProcessing, setIsFileProcessing] = useState(false);
  const [uploadCompleted, setUploadCompleted] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 767);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 767);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const onDrop = useCallback(async (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setIsFileProcessing(true);
      const file = acceptedFiles[0];
      const formData = new FormData();
      formData.append("file", file);

      try {
        const response = await fetch("http://localhost:5000/upload", {
          method: "POST",
          body: formData,
        });

        if (response.ok) {
          const data = await response.json();
          const matchedImagesData = data.matched_images || [];
          const matchedImagesUrls = matchedImagesData.map((imageData) => ({
            url: `http://localhost:5000/matched-images/${imageData.file_name}`,
            matchRate: imageData.match_rate,
          }));
          setMatchedImages(matchedImagesUrls);
          setUploadCompleted(true);
        } else {
          console.error("Failed to upload image");
        }
      } catch (error) {
        console.error("Error uploading image:", error);
      }

      const preview = URL.createObjectURL(file);
      setPreviewUrl(preview);

      // Cleanup URL on component unmount
      return () => URL.revokeObjectURL(preview);
    }
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: "image/jpeg, image/png, image/jpg",
  });

  const handleSearch = () => {
    navigate("/result", {
      state: { uploadedImage: previewUrl, matchedImages },
    });
  };

  useEffect(() => {
    if (previewUrl) {
      setIsFileProcessing(false);
    }

    return () => {
      if (previewUrl) {
        URL.revokeObjectURL(previewUrl);
      }
    };
  }, [previewUrl]);

  return (
    <div className="flex flex-col min-h-screen bg-gray-100 text-gray-800 overflow-hidden">
      <Header />
      <main className="flex flex-col items-center justify-center flex-1 p-4 md:p-8 bg-gray-100">
        {isFileProcessing ? (
          <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-lg mx-auto">
            <AnimationComponent />
            <LoadingMessage />
          </div>
        ) : uploadCompleted ? (
          <div className="flex flex-col items-center justify-center space-y-4 w-full max-w-lg mx-auto">
            <div className="flex flex-col items-center justify-center w-full max-w-[90%] mb-4">
              <img src={previewUrl} alt="Uploaded file preview" className="w-full h-auto max-w-[400px] object-contain" />
            </div>
            <button
              className="px-8 py-4 text-lg font-bold bg-gray-800 text-teal-400 rounded-full shadow-md hover:bg-gray-700 transition duration-300"
              onClick={handleSearch}
            >
              GET RESULTS
            </button>
          </div>
        ) : (
          <div
            {...getRootProps({
              className: "flex items-center justify-center w-full max-w-lg h-48 border-2 border-teal-400 border-dashed rounded-lg bg-gray-200 text-black text-lg font-bold text-center cursor-pointer relative",
            })}
          >
            <input {...getInputProps()} />
            {isDragActive ? (
              <p className="text-lg">{isMobile ? "Upload or Capture" : "Drop the files here ..."}</p>
            ) : (
              <p className="text-lg">{isMobile ? "Upload or Capture" : "DRAG & DROP"}</p>
            )}
          </div>
        )}
      </main>
      <Footer />
    </div>
  );
};

export default SearchPage;
