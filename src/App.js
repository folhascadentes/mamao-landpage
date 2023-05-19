import "./App.css";
import logo from "./assets/papaya.png";
import imageModel from "./assets/model.png";
import imageSigns from "./assets/signs.svg";
// import imageProtection from "./assets/protection.png";
import React, { useState, useRef } from "react";
import { HotKeys } from "react-hotkeys";
// import { bionicReading } from "bionic-reading";
import { messages } from "./i18n.js";
import { MdContrast } from "react-icons/md";

function App() {
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const [fontSize, setFontSize] = useState(100);
  let _fontSize = 100;
  const [textColor, setTextColor] = useState("rgb(31 41 55)");
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");
  let _backgroundColor = "#f5f5f5";
  const [buttonHoverColorWeight, setButtonHoverColorWeight] = useState("200");
  const language = "pt";

  const handleGoToApp = () => {
    window.location.href = "https://app.mamao.dev.br";
  };

  const handleHightConstast = () => {
    if (_backgroundColor === "#f5f5f5") {
      _backgroundColor = "#000000";
      setBackgroundColor("#000000");
      setTextColor("#ffffff");
      setButtonHoverColorWeight("800");
    } else {
      _backgroundColor = "#f5f5f5";
      setBackgroundColor("#f5f5f5");
      setTextColor("rgb(31 41 55)");
      setButtonHoverColorWeight("200");
    }
  };

  const handleIncreaseFontSize = () => {
    setFontSize(_fontSize + 10);
    _fontSize += 10;
  };

  const handleDecreaseFontSize = () => {
    setFontSize(_fontSize - 10);
    _fontSize -= 10;
  };

  const keyMap = {
    increaseFontSize: "+",
    decreaseFontSize: "-",
    goToApp: "a",
    highContrast: "c",
    section0: "0",
    section1: "1",
    section2: "2",
    section3: "3",
    section4: "4",
  };

  const shortcutHandlers = {
    increaseFontSize: handleIncreaseFontSize,
    decreaseFontSize: handleDecreaseFontSize,
    goToApp: handleGoToApp,
    highContrast: handleHightConstast,
    section0: () => {
      section0Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section1: () => {
      section1Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section2: () => {
      section2Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section3: () => {
      section3Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section4: () => {
      section4Ref.current.scrollIntoView({ behavior: "smooth" });
    },
  };

  return (
    <HotKeys keyMap={keyMap} handlers={shortcutHandlers} scoped={true}>
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
                className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl text-2xl"
              >
                {messages.ctaButton1[language]}{" "}
                <span className="text-base hidden md:inline">[A]</span>
              </button>
              <button
                title="Autocontraste"
                aria-describedby="Autocontraste"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4`}
                onClick={handleHightConstast}
                style={{ fontSize: "24px" }}
              >
                <div className="flex space-x-2">
                  <MdContrast size={32} />{" "}
                  <span className="text-sm hidden md:inline">[C]</span>
                </div>
              </button>
              <button
                title="Ação de aumentar tamanho do texto [Ctrl+]"
                aria-describedby="Ação de aumentar tamanho do texto"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4`}
                onClick={handleIncreaseFontSize}
                style={{ fontSize: "24px" }}
              >
                A+
              </button>
              <button
                title="Ação de aumentar diminuir do texto [Ctrl-]"
                aria-describedby="Ação de aumentar diminuir do texto"
                className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4`}
                onClick={handleDecreaseFontSize}
                style={{ fontSize: "24px" }}
              >
                A-
              </button>
            </div>
          </div>
        </nav>
        <div className="container mx-auto px-6 pt-24">
          <div className="flex flex-col md:flex-row space-x-10">
            <div ref={section0Ref} className="md:w-2/3">
              <h1 className="text-5xl md:text-7xl xl:text-8xl">
                <span className="text-orange-600 font-medium">
                  {messages.slogan[language]}
                </span>{" "}
                {messages.mainHeading[language]}{" "}
                <span className="text-base hidden md:inline">[0]</span>
              </h1>
              <div
                className="text-xl md:text-2xl mt-4 md:w-2/3"
                dangerouslySetInnerHTML={{
                  __html: messages.mainText[language],
                }}
              ></div>
              <section ref={section1Ref} className="pt-16 md:py-16 md:w-5/6">
                <h2 className="text-3xl md:text-4xl">
                  <span className="text-orange-600 font-black">
                    {messages.collaborate[language]}
                  </span>{" "}
                  {messages.collaborateText[language]}{" "}
                  <span className="text-base hidden md:inline">[1]</span>
                </h2>
                <div
                  className="text-lg md:text-xl mt-6"
                  dangerouslySetInnerHTML={{
                    __html: messages.collaborateDescription[language],
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
      <main className="container flex flex-col mx-auto px-6 pb-40">
        <section
          ref={section2Ref}
          className="flex flex-col md:flex-row pb-16 md:pl-6 flex justify-end"
        >
          <div className="md:w-1/2 hidden md:block">
            <div className="flex justify-center">
              <img
                src={imageModel}
                style={{ height: "450px" }}
                alt="Model Imgs"
              />
            </div>
          </div>
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl font-medium">
              {messages.howItWorks[language]}{" "}
              <span className="text-base hidden md:inline">[2]</span>
            </h2>
            <div
              className="text-lg md:text-xl mt-6"
              dangerouslySetInnerHTML={{
                __html: messages.howItWorksDescription1[language],
              }}
            ></div>
            <div
              className="text-lg md:text-xl mt-6"
              dangerouslySetInnerHTML={{
                __html: messages.howItWorksDescription2[language],
              }}
            ></div>
          </div>
        </section>
        <div className="flex justify-center md:w-1/2">
          <button
            onClick={handleGoToApp}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl text-2xl"
          >
            {messages.ctaButton2[language]}{" "}
            <span className="text-base hidden md:inline">[A]</span>
          </button>
        </div>
        <section ref={section3Ref} className="py-16 md:pr-6 flex">
          <div className="md:w-1/2">
            <h2 className="text-3xl md:text-4xl xl:text-5xl">
              {messages.contribute[language]}{" "}
              <span className="text-orange-600 font-black">
                {messages.contributeHighlight[language]}
              </span>{" "}
              <span className="text-base hidden md:inline">[3]</span>
            </h2>
            <div
              className="text-lg md:text-xl mt-6"
              dangerouslySetInnerHTML={{
                __html: messages.contributeDescription[language],
              }}
            ></div>
          </div>
        </section>
        <section
          ref={section4Ref}
          className="pb-16 md:pr-6 flex flex-col space-y-6 md:space-y-0 md:flex-row"
        >
          <div className="md:w-1/2">
            <h2 className="text-2xl md:text-3xl">
              {messages.dataPrivacy[language]}{" "}
              <span className="text-base hidden md:inline">[4]</span>
            </h2>
            <div
              className="text-lg md:text-xl mt-6"
              dangerouslySetInnerHTML={{
                __html: messages.dataPrivacyDescription[language],
              }}
            ></div>
          </div>
          <div className="md:w-1/2">
            <div className="flex justify-center">
              {/* <img
                src={imageProtection}
                style={{ height: "400px" }}
                alt="Protection Imgs"
              /> */}
            </div>
          </div>
        </section>
        <div className="flex justify-center">
          <button
            onClick={handleGoToApp}
            className="bg-indigo-600 hover:bg-indigo-700 text-white py-4 px-8 rounded-xl text-2xl"
          >
            {messages.ctaButton3[language]}{" "}
            <span className="text-base hidden md:inline">[A]</span>
          </button>
        </div>
      </main>
    </HotKeys>
  );
}

export default App;
