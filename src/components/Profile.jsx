/* eslint-disable react/no-unescaped-entities */
import { useState } from "react";
import InfoIcon from "./InfoIcon"; // Ensure you have imported the icon

const Profile = () => {
  const [activeTab, setActiveTab] = useState("aboutme");

  return (
    
    <div className="bg-gray-800 p-6 rounded-lg shadow-lg font-['Plus_Jakarta_Sans'] relative">
      {/* Icon positioned in the top-left corner */}
      <div className="absolute top-10 left-1">
        <InfoIcon style={{ color: "white" }} />
      </div>

      {/* Tab Navigation */}
      <div className="bg-[#09090b] rounded-full mx-auto mt-4 max-w-lg p-2 flex justify-between items-center">
        {["About Me", "Experiences", "Recommended"].map((tab, index) => (
          <button
            key={index}
            onClick={() => setActiveTab(tab.toLowerCase().replace(" ", ""))}
            className={`px-8 py-2 rounded-full font-medium transition-all duration-300 ${
              activeTab === tab.toLowerCase().replace(" ", "")
                ? "bg-[#09090b] text-white hover:bg-gray-900"
                : "bg-[#09090b] text-gray-400 hover:bg-gray-900 hover:text-white hover:shadow-[0_20px_50px_rgba(0,_0,_0,_0.7)]"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Content Area */}
      <div className="bg-gray mt-5 rounded-lg text-sm leading-relaxed text-white pl-4">
        {activeTab === "aboutme" && (
          <p className="font-['Plus_Jakarta_Sans'] text-[20px] font-normal leading-[25.2px] text-left">
            Hello! I'm Dave, your sales rep here from Salesforce. I've been
            working at this awesome company for 3 years now.
            <span className="block mt-7">
              I was born and raised in Albany, NY & have been living in Santa
              Carla for the past 10 years with my wife Tiffany and my 4-year-old
              twin daughters, Emma and Ella. Both of them are just starting
              school, so my calendar is usually blocked between 9–10 AM. This is
              a ...
            </span>
          </p>
        )}
        {activeTab === "experiences" && (
          <p>Your experiences content goes here...</p>
        )}
        {activeTab === "recommended" && (
          <p>Your recommended content goes here...</p>
        )}
      </div>
    </div>
    
  );
};

export default Profile;
