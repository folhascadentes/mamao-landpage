import "./App.css";
import logo from "./assets/papaya.png";
import imageModel from "./assets/model.png";
import imageSigns from "./assets/signs.svg";
import imageProtection from "./assets/protection.png";
import React, { useState } from "react";
import { bionicReading } from "bionic-reading";
import { messages } from "./i18n.js";
import { MdContrast } from "react-icons/md";

function App() {
  const [fontSize, setFontSize] = useState(100);
  const [textColor, setTextColor] = useState("rgb(31 41 55)");
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");
  const [buttonHoverColorWeight, setButtonHoverColorWeight] = useState("200");
  const [language, setLanguage] = useState("pt");

  const handleGoToApp = () => {
    window.location.href = "https://app.mamao.dev.br";
  };

  const handleHightConstast = () => {
    if (backgroundColor === "#f5f5f5") {
      setBackgroundColor("#000000");
      setTextColor("#ffffff");
      setButtonHoverColorWeight("800");
    } else {
      setBackgroundColor("#f5f5f5");
      setTextColor("rgb(31 41 55)");
      setButtonHoverColorWeight("200");
    }
  };

  const handleIncreaseFontSize = () => {
    setFontSize(fontSize + 10);
  };

  const handleDecreaseFontSize = () => {
    setFontSize(fontSize - 10);
  };

  return (
    <div className="pb-20">
      <style>{`html {font-size: ${fontSize}%; color: ${textColor}; background-color: ${backgroundColor}; }`}</style>
      <header>
        <nav className="container mx-auto px-6 py-8">
          <div className="flex flex-wrap space-y-6 justify-between items-center">
            <div className="flex items-center space-x-4">
              <img src={logo} alt="Papaya Logo" style={{ height: "80px" }} />
              <p className="text-4xl font-light text-orange-600">MAMÃO</p>
            </div>
            <div className="flex space-x-4">
              <button
                onClick={handleGoToApp}
                className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium"
              >
                {messages.ctaButton1[language]}
              </button>
              <button
                title="Autocontraste"
                aria-describedby="Autocontraste"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4`}
                onClick={handleHightConstast}
                style={{ fontSize: "24px" }}
              >
                <MdContrast size={32} />
              </button>
              <button
                title="Ação de aumentar tamanho do texto"
                aria-describedby="Ação de aumentar tamanho do texto"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4 font-bold`}
                onClick={handleIncreaseFontSize}
                style={{ fontSize: "24px" }}
              >
                A+
              </button>
              <button
                title="Ação de aumentar diminuir do texto"
                aria-describedby="Ação de aumentar diminuir do texto"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4 font-bold`}
                onClick={handleDecreaseFontSize}
                style={{ fontSize: "24px" }}
              >
                A-
              </button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 pt-16">
          <div className="flex flex-col md:flex-row space-x-10">
            <div className="md:w-2/3">
              <h1
                className="text-4xl md:text-6xl font-medium leading-3 leading-tight"
                style={{ lineHeight: 1 }}
              >
                <span className="text-orange-600 font-black">
                  {messages.slogan[language]}
                </span>{" "}
                {messages.mainHeading[language]}
              </h1>
              <div
                className="text-xl md:text-2xl mt-4 md:w-2/3"
                dangerouslySetInnerHTML={{
                  __html: bionicReading(messages.mainText[language]),
                }}
              ></div>
              <section className="pt-16 md:py-16 md:w-5/6">
                <h2 className="text-2xl md:text-4xl font-medium">
                  <span className="text-orange-600 font-black">
                    {messages.collaborate[language]}
                  </span>{" "}
                  {messages.collaborateText[language]}
                </h2>
                <div
                  className="text-lg md:text-xl mt-2"
                  dangerouslySetInnerHTML={{
                    __html: bionicReading(
                      messages.collaborateDescription[language]
                    ),
                  }}
                ></div>
              </section>
            </div>
            <div>
              <img
                src={imageSigns}
                style={{ height: "450px" }}
                alt="Signs Imgs"
              />
            </div>
          </div>
        </div>
      </header>
      <main className="container flex flex-col mx-auto px-6">
        <section className="flex flex-col md:flex-row pb-16 md:pl-6 flex justify-end">
          <div className="md:w-1/2 hidden md:block">
            <div className="flex justify-center">
              <img
                src={imageModel}
                style={{ height: "325px" }}
                alt="Model Imgs"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-3xl font-medium">
              {messages.howItWorks[language]}
            </h2>
            <div
              className="text-lg md:text-xl mt-2"
              dangerouslySetInnerHTML={{
                __html: bionicReading(
                  messages.howItWorksDescription1[language]
                ),
              }}
            ></div>
            <div
              className="text-lg md:text-xl mt-2"
              dangerouslySetInnerHTML={{
                __html: bionicReading(
                  messages.howItWorksDescription2[language]
                ),
              }}
            ></div>
          </div>
        </section>
        <div className="flex justify-center md:w-1/2">
          <button
            onClick={handleGoToApp}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium"
          >
            {messages.ctaButton2[language]}
          </button>
        </div>
        <section className="py-16 md:pr-6 flex">
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-4xl font-medium">
              {messages.contribute[language]}{" "}
              <span className="text-orange-600 font-black">
                {messages.contributeHighlight[language]}
              </span>
            </h2>
            <div
              className="text-lg md:text-xl mt-2"
              dangerouslySetInnerHTML={{
                __html: bionicReading(messages.contributeDescription[language]),
              }}
            ></div>
          </div>
        </section>
        <section className="pb-16 md:pr-6 flex flex-col space-y-6 md:space-y-0 md:flex-row">
          <div className="md:w-1/2">
            <h2 className="text-xl md:text-3xl font-medium">
              {messages.dataPrivacy[language]}
            </h2>
            <div
              className="text-lg md:text-xl mt-2"
              dangerouslySetInnerHTML={{
                __html: bionicReading(
                  messages.dataPrivacyDescription[language]
                ),
              }}
            ></div>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center">
              <img
                src={imageProtection}
                style={{ height: "325px" }}
                alt="Protection Imgs"
              />
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <button
            onClick={handleGoToApp}
            className="bg-blue-600 hover:bg-blue-700 text-white py-4 px-8 rounded-xl text-2xl font-medium"
          >
            {messages.ctaButton3[language]}
          </button>
        </div>
      </main>
    </div>
  );
}

export default App;
