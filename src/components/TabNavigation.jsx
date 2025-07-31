import { useState } from "react";
import Projects from "./Projects";
import Resume from "./Resume";

const TabNavigation = () => {
  const [activeTab, setActiveTab] = useState("projects");

  return (
    <div className="lg:w-[70rem] px-3">
      {/* Tab Navigation */}
      <div className="flex justify-center mb-12">
        <div className="flex bg-[#242424] rounded-lg p-1">
          <button
            onClick={() => setActiveTab("projects")}
            className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
              activeTab === "projects"
                ? "bg-[#4EE1A0] text-[#151515]"
                : "text-[#D9D9D9] hover:text-white hover:bg-[#2a2a2a]"
            }`}
          >
            Projects
          </button>
          <button
            onClick={() => setActiveTab("resume")}
            className={`px-8 py-3 rounded-md font-medium transition-all duration-200 ${
              activeTab === "resume"
                ? "bg-[#4EE1A0] text-[#151515]"
                : "text-[#D9D9D9] hover:text-white hover:bg-[#2a2a2a]"
            }`}
          >
            Resume
          </button>
        </div>
      </div>

      {/* Tab Content */}
      <div className="min-h-[600px]">
        {activeTab === "projects" && <Projects />}
        {activeTab === "resume" && <Resume />}
      </div>
    </div>
  );
};

export default TabNavigation;
