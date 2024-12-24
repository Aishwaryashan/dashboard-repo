import React, { useState } from "react";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { ImCross } from "react-icons/im";
import { AiFillThunderbolt } from "react-icons/ai";
import { SiTicktick } from "react-icons/si";
import { FaRegStar } from "react-icons/fa";


const LayerCard = ({ title, vulnerability, soc, hardening, content }) => {
  // Local state to manage dropdown visibility
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="mx-10 my-6">
      {/* Card */}
      <div
        onClick={toggleDropdown}
        className={`bg-indigo-900 cursor-pointer hover:border-l-4 transition-all duration-300 
                  bg-opacity-50 py-6 border border-indigo-500 border-l-8 text-white 
                  p-4 rounded-lg flex justify-between items-center group`}
      >
        {/* Card Title */}
        <h3 className="text-lg font-semibold group-hover:translate-x-3 transition-transform duration-300">
          {title}
        </h3>

        {/* Buttons Section */}
        <div className="flex space-x-5">
          <div className="flex space-x-4">
            {/* Vulnerability Button */}
            <button
              className={`px-3 py-1 flex rounded-md transition-transform duration-300 group-hover:-translate-x-2 ${
                vulnerability ? "bg-gray-600" : "bg-gray-600"
              }`}
            >
              <div className="my-auto mr-1 rounded-full bg-green-600">
                <SiTicktick />
              </div>
              Vulnerability
            </button>

            {/* SOC Button */}
            <button
              className={`px-3 py-1 flex rounded-md transition-transform duration-500 group-hover:-translate-x-2 ${
                soc ? "bg-gray-600" : "bg-gray-600"
              }`}
            >
              <div className="my-auto mr-1 p-1 rounded-full bg-orange-600">
                <ImCross size={10} />
              </div>
              SOC
            </button>

            {/* Hardening Button */}
            <button
              className={`px-3 py-1 flex rounded-md transition-transform duration-700 group-hover:-translate-x-2 ${
                hardening ? "bg-gray-400" : "bg-gray-600"
              }`}
            >
              <div className="my-auto mr-1 text-sm p-0.5 text-gray-700 rounded-full bg-gray-200">
                <AiFillThunderbolt />
              </div>
              Hardening
            </button>
          </div>

          {/* Dropdown Icon */}
          <button className="text-purple-300 text-lg font-bold">
            {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}
          </button>
        </div>
      </div>

      {/* Dropdown Content */}
      <div
        className={`overflow-hidden transition-all duration-700 ease-in-out ${
          isOpen ? "max-h-60 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        
        <div className="bg-indigo-800 bg-opacity-50 mt-2 p-4 rounded-md text-white">
          <div className="flex">
        <div className="ml-5 my-5">
          <button className="flex gap-1 border text-sm rounded-lg px-6 font-thin py-1 hover:bg-indigo-300 hover:text-gray-800 transition-all duration-300"> <div className="m-auto"> <FaRegStar size={18}/> </div> Top 5</button>
        </div>
        <div className="mx-10 my-5">
          <button className="flex gap-1 border text-sm rounded-lg px-6 font-thin py-1 hover:bg-indigo-300 hover:text-gray-800 transition-all duration-300"> <div className="m-auto"> <FaRegStar size={18}/> </div>Enabler</button>
        </div>
        </div>
          <p>{content}</p>
        </div>
      </div>
    </div>
  );
};

export default LayerCard;
