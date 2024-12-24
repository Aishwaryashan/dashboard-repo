import React, { useState } from "react";
import { SiTicktick } from "react-icons/si";
import { AiOutlineCaretRight, AiOutlineCaretDown } from "react-icons/ai";
import { PieChart, Pie, Cell, BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, Label, CartesianGrid, Legend } from "recharts";

const dataPie = [
  { name: "Windows", value: 65, color: "#4F46E5" },
  { name: "Linux", value: 20, color: "#F59E0B" },
  { name: "Other OS", value: 15, color: "#9CA3AF" },
];

const dataBar = [
  { name: "Firewall", value: 65 },
  { name: "Windows", value: 80 },
  { name: "O365", value: 40 },
];

const dataBartwo = [
  { name: "HR Management", Vulnerability: 5, SOC: 10 },
  { name: "CRM", Vulnerability: 4, SOC: 2 },
  { name: "Websites", Vulnerability: 10, SOC: 3 },
];

const TopStats = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [activeSection, setActiveSection] = useState("summary"); // Default section: "summary"


  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you with your cybersecurity needs today?" },
  ]);

  const [inputMessage, setInputMessage] = useState("");
  const [isTyping, setIsTyping] = useState(false);

  // Simulate bot reply
  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    // Append user message
    const newUserMessage = { sender: "user", text: inputMessage };
    setMessages((prev) => [...prev, newUserMessage]);
    setInputMessage("");
    setIsTyping(true);

    // Simulate bot "thinking" with a delay
    setTimeout(() => {
      const botReply = {
        sender: "bot",
        text: "Sure! Based on the latest assessments:\n- **Threat Protection**: 85% secure.\n- **Access Control**: 70% secure.\n- **Data Protection**: 90% secure.\n- **Incident Response**: 75% secure.",
      };
      setMessages((prev) => [...prev, botReply]);
      setIsTyping(false);
    }, 2000); // Bot reply delay
  };


  return (
    <div className="mx-10">
      {/* Header Section */}
      <div className="flex cursor-pointer justify-between items-center bg-gradient-to-r from-indigo-900 to-indigo-800 p-4 rounded-lg">
        <div className="flex items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-purple-600 hover:bg-opacity-40 transition-all duration-200 flex justify-between text-white px-4 py-2 rounded-md"
          >
            Knowledge Assessment Results{" "}
            <span className="my-auto pl-1">
              {isOpen ? <AiOutlineCaretDown /> : <AiOutlineCaretRight />}
            </span>
          </button>
        </div>

        {/* Stats */}
        <div className="flex space-x-6 bg-indigo-900 hover:scale-95 py-2 px-4 rounded-lg text-indigo-300 text-opacity-60 hover:text-opacity-100 transition-all duration-200 mr-20">
          <div>
            <p className="text-lg font-bold">65%</p>
            <p className="text-sm">Correct</p>
          </div>
          <div>
            <p className="text-lg font-bold">20%</p>
            <p className="text-sm">Incorrect</p>
          </div>
          <div>
            <p className="text-lg font-bold">15%</p>
            <p className="text-sm">Don't Know</p>
          </div>
        </div>
      </div>

      <div
        className={`transition-all duration-700 ease-in-out overflow-hidden ${
          isOpen ? "h-fit opacity-100 mt-2" : "max-h-0 opacity-0"
        }`}
      >
      {/* Buttons to Toggle Between Sections */}
      <div className="bg-indigo-800 rounded-lg">
        <div className="flex gap-5 pt-5 justify-center">
          <h2
            className={`text-lg text-center font-bold  border rounded-lg px-6 py-1 cursor-pointer transition-all duration-300 ${
              activeSection === "summary" ? "bg-gray-300 text-black" : "hover:bg-gray-300 hover:text-black"
            }`}
            onClick={() => setActiveSection("summary")}
          >
            SUMMARY
          </h2>
          <h2
            className={`text-lg text-center font-bold border rounded-lg px-6 py-1 cursor-pointer transition-all duration-300 ${
              activeSection === "cyberkarma" ? "bg-gray-300 text-black" : "hover:bg-gray-300 hover:text-black"
            }`}
            onClick={() => setActiveSection("cyberkarma")}
          >
            CyberKarma GPT
          </h2>
        </div>

        {/* Conditionally Rendered Sections */}
        <div className="p-6">
          {activeSection === "summary" ? (
            // Summary Section (Charts)
            <div className="grid grid-cols-2 gap-6 p-6 rounded-lg shadow-lg">
              {/* Pie Chart 1 */}
              <div className="flex flex-col justify-center items-center bg-indigo-900 p-4 rounded-lg">
                <label className="w-full rounded-md text-2xl font-mono text-center">
                  Unpatched Assets since 30 days
                </label>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Tooltip />
                    <Pie data={dataPie} dataKey="value" outerRadius={80} label>
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Bar Chart 1 */}
              <div className="flex flex-col justify-center items-center bg-indigo-900 p-4 rounded-lg">
                <label className="w-full rounded-md text-2xl font-mono text-center">
                  Unresolved Critical SOC Incident
                </label>
                <ResponsiveContainer width="100%" height={250}>
                  <BarChart data={dataBar}>
                    <XAxis dataKey="name" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Bar dataKey="value" fill="#6366F1" barSize={80} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              {/* Pie Chart 2 */}
              <div className="flex flex-col justify-center items-center bg-indigo-900 p-4 rounded-lg">
                <label className="w-full rounded-md text-2xl font-mono text-center">
                  Weak Points (EMP & Machines)
                </label>
                <ResponsiveContainer width="100%" height={250}>
                  <PieChart>
                    <Tooltip />
                    <Pie
                      data={dataPie}
                      dataKey="value"
                      innerRadius={50}
                      outerRadius={80}
                      fill="#6D28D9"
                    >
                      {dataPie.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                  </PieChart>
                </ResponsiveContainer>
              </div>

              {/* Bar Chart 2 */}
              <div className="flex flex-col justify-center items-center bg-indigo-900 p-4 rounded-lg">
                <label className="w-full rounded-md text-2xl font-mono text-center">
                  Weak (Apps & Softwares)
                </label>
                <ResponsiveContainer width="100%" height={300}>
                  <BarChart
                    data={dataBartwo}
                    margin={{ top: 10, right: 30, left: 0, bottom: 10 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" stroke="#3B3F75" />
                    <XAxis dataKey="name" tick={{ fill: "#FFFFFF" }} />
                    <YAxis tick={{ fill: "#FFFFFF" }} />
                    <Legend verticalAlign="top" align="center" />
                    <Bar dataKey="Vulnerability" fill="#ad3737" barSize={40} />
                    <Bar dataKey="SOC" fill="#498f39" barSize={40} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>
          ) : (
            // CyberKarma GPT Section
            <div className="p-4 bg-indigo-900 text-white rounded-lg  mx-auto shadow-lg">
      <p className="text-center text-2xl mb-4 font-bold">CyberKarma GPT</p>

      {/* Chat Window */}
      <div className="h-[400px] w-full bg-indigo-800 p-4 rounded-lg space-y-4">
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-xs px-4 py-2 rounded-lg shadow-md ${
                msg.sender === "user"
                  ? "bg-blue-500 text-white"
                  : "bg-gray-700 text-gray-100"
              }`}
            >
              {msg.text.split("\n").map((line, i) => (
                <p key={i}>{line}</p>
              ))}
            </div>
          </div>
        ))}

        {/* Typing Indicator */}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-gray-700 px-4 py-2 rounded-lg max-w-xs">
              <div className="flex gap-1 items-center">
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0s" }}></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.2s" }}></span>
                <span className="w-2 h-2 bg-gray-300 rounded-full animate-bounce" style={{ animationDelay: "0.4s" }}></span>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Message Input */}
      <div className="mt-4 flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          value={inputMessage}
          onChange={(e) => setInputMessage(e.target.value)}
          className="flex-1 p-2 rounded-md bg-indigo-700 text-white placeholder-gray-300 focus:outline-none"
        />
        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-semibold transition"
        >
          Send
        </button>
      </div>
    </div>
          )}
        
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopStats;
