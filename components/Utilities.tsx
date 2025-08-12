'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

interface Message {
  sender: "user" | "bot";
  text: string;
}

export const Utilities = () => {
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) { // Shift+Enter won't trigger send
      e.preventDefault();
      handleSend();
    }
  };
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);
  const [conversation, setConversation] = useState<Message[]>([]);
  const [userMessage, setUserMessage] = useState("");
  const [loading, setLoading] = useState(false);

  const settingsData = [
    { label: "Inclusive Settings", items: ["Language", "Accessibility Options"] },
  ];

  async function fetchGeminiResponse(history: Message[]) {
    try {
      const response = await fetch(
        `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${"AIzaSyBH_iEDqQdkOCFIER5Vk79mWLTMP3UgfBQ"}`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            contents: [
              {
                parts: history.map((msg) => ({
                  text: `${msg.sender === "user" ? "User" : "Bot"}: ${msg.text}`,
                })),
              },
            ],
          }),
        }
      );

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(
          `HTTP error! Status: ${response.status}, Response: ${errorText}`
        );
      }

      const data = await response.json();

      if (
        !data.candidates?.length ||
        !data.candidates[0].content?.parts?.length
      ) {
        throw new Error("Invalid API response structure");
      }

      return data.candidates[0].content.parts[0].text;
    } catch (error) {
      console.error("Error fetching Gemini response:", error);
      return "Sorry, I couldn't process that request.";
    }
  }

  async function handleSend() {
    if (!userMessage.trim()) return;

    const newHistory: Message[] = [
      ...conversation,
      { sender: "user", text: userMessage }
    ];
    
    setConversation(newHistory);
    setUserMessage("");
    setLoading(true);

    const botReply = await fetchGeminiResponse(newHistory);
    
    setConversation([
      ...newHistory,
      { sender: "bot", text: botReply }
    ]);
    
    setLoading(false);
  }

  const toggleChatbot = () => {
    setChatbotOpen(prev => !prev);
    setSettingsOpen(false); // close settings if open
    setOpenDropdownIndex(null);
  };

  const toggleSettings = () => {
    setSettingsOpen(prev => !prev);
    setChatbotOpen(false); // close chatbot if open
    setOpenDropdownIndex(null);
  };

  const toggleDropdown = (index: number) =>
    setOpenDropdownIndex(openDropdownIndex === index ? null : index);

  return (
    <>
      <div className="fixed bottom-6 right-6 flex flex-col gap-4 z-[9999]">
        <button
          onClick={toggleChatbot}
          aria-label={chatbotOpen ? "Close chatbot menu" : "Open chatbot menu"}
          className="flex items-center justify-center rounded-full"
        >
          {chatbotOpen ? (
            <img src="/backBtn.png" alt="Close" className="h-16" />
          ) : (
            <img src="/chatbot.png" alt="Chatbot" className="h-16" />
          )}
        </button>

        <button
          onClick={toggleSettings}
          aria-label={settingsOpen ? "Close settings menu" : "Open settings menu"}
          className="flex items-center justify-center rounded-full"
        >
          {settingsOpen ? (
            <img src="/backBtn.png" alt="Close" className="h-16" />
          ) : (
            <img src="/setting.png" alt="Settings" className="h-16" />
          )}
        </button>
      </div>

      {/* ----- MOBILE FULLSCREEN MENUS ----- */}
      {chatbotOpen && (
        <div className="fixed inset-0 bg-[#FFD475] z-[100] flex flex-col items-center h-3/4 m-4 p-3 justify-between rounded-3xl border-8 border-earthy lg:hidden">
          <div className="shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl space-x-4 w-full h-1/6 flex justify-center items-center">
            <img
              src="/chatbot.png"
              alt="Chatbot Logo"
              className="lg:h-12 h-10 flex mt-2"
            />
            <h3 className="text-3xl font-black font-komikax text-center">Chatbot</h3>
          </div>
          {/* Messages */}
          <div className="w-full flex flex-col max-w-md space-y-4 overflow-y-auto my-2">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.sender === "bot"
                    ? "bg-white text-black border-2 border-black"
                    : "bg-earthy text-black border-2 border-black self-end"
                } rounded-2xl px-4 py-2 text-sm shadow-inner w-2/3`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="bg-white text-gray-800 border-4 w-2/3 border-earthy rounded-3xl px-4 py-3 text-sm shadow-inner">
                Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="w-full max-w-md my-4 flex gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full border-2 border-gray-400 focus:outline-none focus:border-yellow-600"
            />
            <button
              onClick={handleSend}
              className="bg-yellow-500 px-4 py-2 rounded-full text-black font-extrabold hover:bg-yellow-600 border-2 border-black"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="fixed inset-0 bg-[#FFD475] z-[100] flex flex-col items-center justify-start m-7 p-3 rounded-3xl border-8 border-earthy overflow-y-auto lg:hidden">
          <img src="/setting.png" alt="Settings Logo" className="lg:h-20 h-16 self-end flex mb-8" />
          {settingsData.map((dropdown, index) => (
            <div key={index} className="w-full max-w-md mb-4 px-6">
              <div
                className="bg-white rounded-full flex items-center justify-between px-4 py-3 border-4 border-earthy cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-base font-bold text-gray-800">{dropdown.label}</span>
                <ChevronDown className="w-5 h-5 text-gray-600" />
              </div>
              {openDropdownIndex === index && dropdown.items.length > 0 && (
                <div className="mt-2 space-y-2">
                  {dropdown.items.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-yellow-100 rounded-3xl px-4 py-3 text-sm text-gray-800 shadow-inner border-4 border-earthy hover:bg-yellow-300 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}

      {/* ----- DESKTOP DROPDOWN MENUS ----- */}
      {chatbotOpen && (
        <div className="fixed font-nexa bottom-24 right-[7.5rem] shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl p-4 w-1/3 h-2/3 hidden lg:flex flex-col">
          <div className="shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl space-x-4 w-full h-1/5 flex justify-center items-center">
            <img
              src="/chatbot.png"
              alt="Chatbot Logo"
              className="lg:h-12 h-10 flex mt-2"
            />
            <h3 className="text-3xl font-black font-komikax text-center">Chatbot</h3>
          </div>
          <div className="flex-1 flex flex-col overflow-y-auto mt-2 space-y-4 px-2">
            {conversation.map((msg, i) => (
              <div
                key={i}
                className={`${
                  msg.sender === "bot"
                    ? "bg-white text-black border-2 border-black"
                    : "bg-earthy text-black border-2 border-black self-end"
                } rounded-2xl px-4 py-2 text-sm shadow-inner w-2/3`}
              >
                {msg.text}
              </div>
            ))}
            {loading && (
              <div className="bg-white text-black border-2 border-black w-2/3 rounded-3xl px-4 py-2 text-sm shadow-inner">
                Typing...
              </div>
            )}
          </div>

          {/* Input */}
          <div className="mt-4 flex gap-2">
            <input
              type="text"
              value={userMessage}
              onChange={(e) => setUserMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Type your message..."
              className="flex-1 px-4 py-2 rounded-full border-2 border-gray-400 focus:outline-none focus:border-yellow-600"
            />
            <button
              onClick={handleSend}
              className="bg-yellow-500 px-4 py-2 rounded-full text-black font-extrabold hover:bg-yellow-600 border-2 border-black"
            >
              Send
            </button>
          </div>
        </div>
      )}

      {settingsOpen && (
        <div className="fixed font-nexa bottom-24 right-[7.5rem] shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl p-8 w-72 space-y-4 hidden lg:block">
          {settingsData.map((dropdown, index) => (
            <div key={index}>
              <div
                className="bg-white rounded-full flex items-center justify-between px-4 py-2 border-4 border-earthy cursor-pointer"
                onClick={() => toggleDropdown(index)}
              >
                <span className="text-sm font-bold text-gray-800">{dropdown.label}</span>
                <ChevronDown className="w-4 h-4 text-gray-600" />
              </div>
              {openDropdownIndex === index && dropdown.items.length > 0 && (
                <div className="mt-2 space-y-2">
                  {dropdown.items.map((item, subIndex) => (
                    <div
                      key={subIndex}
                      className="bg-yellow-100 rounded-3xl px-4 py-2 text-sm text-gray-800 shadow-inner border-4 border-earthy hover:bg-yellow-300 cursor-pointer"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </>
  );
};
