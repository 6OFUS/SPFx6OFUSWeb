'use client';

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";

const chatbotData = [
  { label: "Chatbot", items: ["Start Chat", "Previous Conversations"] },
];

const settingsData = [
  { label: "Inclusive Settings", items: ["Language", "Accessibility Options"] },
];

export const Utilities = () => {
  const [chatbotOpen, setChatbotOpen] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [openDropdownIndex, setOpenDropdownIndex] = useState<number | null>(null);

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
        <div className="fixed inset-0 bg-[#FFD475] z-[100] flex flex-col items-center justify-start m-7 p-3 rounded-3xl border-8 border-earthy overflow-y-auto lg:hidden">
          <img src="/chatbot.png" alt="Chatbot Logo" className="lg:h-20 h-16 self-end flex mb-8" />
          {chatbotData.map((dropdown, index) => (
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
        <div className="fixed font-nexa bottom-24 right-[7.5rem] shadow-lg z-40 bg-[#FFD475] border-8 border-earthy rounded-3xl p-8 w-72 space-y-4 hidden lg:block">
          {chatbotData.map((dropdown, index) => (
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
