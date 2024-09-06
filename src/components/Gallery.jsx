import { useState } from "react";
import InfoIcon from "./InfoIcon";  // Import the InfoIcon component

const Gallery = () => {
  const [images, setImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const imagesPerPage = 3;

  const handleAddImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImageURL = URL.createObjectURL(file);
      setImages([...images, newImageURL]);
    }
  };

  const handleNext = () => {
    if (currentIndex + imagesPerPage < images.length) {
      setCurrentIndex(currentIndex + imagesPerPage);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - imagesPerPage);
    }
  };

  return (
    
    <div className="bg-gray-800 p-6 rounded-xl shadow-lg relative">
      <div className="absolute top-6 left-1">
        <InfoIcon />
      </div>

      <div className="flex justify-between items-center mb-4 pl-4">
        <h2 className="text-lg font-semibold bg-black px-4 py-2 rounded-lg">Gallery</h2>

        {/* Add Image and Navigation */}
        <div className="flex items-center space-x-2">
          <label
            htmlFor="fileInput"
            className="flex items-center space-x-2 bg-gray-700 px-4 py-2 rounded-full shadow-lg hover:bg-gray-600 transition cursor-pointer"
          >
            <svg
              className="w-4 h-4 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              ></path>
            </svg>
            <span>ADD IMAGE</span>
          </label>
          <input
            id="fileInput"
            type="file"
            accept="image/*"
            onChange={handleAddImage}
            className="hidden"
          />
          <button
            onClick={handlePrev}
            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              ></path>
            </svg>
          </button>
          <button
            onClick={handleNext}
            className="w-10 h-10 flex items-center justify-center bg-gray-700 rounded-full shadow-lg hover:bg-gray-600 transition"
          >
            <svg
              className="w-6 h-6 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </button>
        </div>
      </div>

      {/* Gallery Items */}
      <div className="flex overflow-hidden justify-center mt-6 space-x-4 pl-4">
        {images
          .slice(currentIndex, currentIndex + imagesPerPage)
          .map((image, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-64 h-64"
            >
              <img
                src={image}
                alt={`Gallery item ${index}`}
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
          ))}
      </div>
    </div>
  );
};

export default Gallery;
