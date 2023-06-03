import "./App.css";
import database3d from "./assets/database3d.png";
import law3d from "./assets/law3d.png";
import papaya3d from "./assets/papaya3d.png";
import person3d from "./assets/person3d.png";
import shooting3d from "./assets/shooting3d.png";
import React, { useEffect, useState, useRef } from "react";
import { HotKeys } from "react-hotkeys";
import { messages } from "./i18n.js";
import { MdContrast } from "react-icons/md";

function App() {
  const focusRef = useRef(null);
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);
  const [fontSize, setFontSize] = useState(100);
  const [textColor, setTextColor] = useState("rgb(31 41 55)");
  const [backgroundColor, setBackgroundColor] = useState("#f5f5f5");
  const [buttonHoverColorWeight, setButtonHoverColorWeight] = useState("200");
  const language = "pt";

  useEffect(() => {
    if (focusRef.current) {
      setTimeout(() => {
        focusRef.current.focus();
      }, 0);
    }
  }, []);

  const handleGoToApp = () => {
    window.location.href = "https://app.mamao.dev.br";
  };

  const handleHightConstast = () => {
    setBackgroundColor((bg) => (bg === "#000000" ? "#f5f5f5" : "#000000"));
    setTextColor((text) => (text === "#ffffff" ? "#000000" : "#ffffff"));
    setButtonHoverColorWeight((weight) => (weight === "800" ? "200" : "800"));
  };

  const handleIncreaseFontSize = () => {
    setFontSize((fontSize) => fontSize + 10);
  };

  const handleDecreaseFontSize = () => {
    setFontSize((fontSize) => fontSize - 10);
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
    section5: "5",
    section6: "6",
    section7: "7",
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
    section5: () => {
      section5Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section6: () => {
      section6Ref.current.scrollIntoView({ behavior: "smooth" });
    },
    section7: () => {
      section7Ref.current.scrollIntoView({ behavior: "smooth" });
    },
  };

  return (
    <HotKeys keyMap={keyMap} handlers={shortcutHandlers}>
      <div ref={focusRef} tabIndex="-1" style={{ outline: "none" }}>
        <style>{`html {font-size: ${fontSize}%; color: ${textColor}; background-color: ${backgroundColor}; }`}</style>
        <header>
          <nav className="container mx-auto px-6 py-8">
            <div className="flex flex-wrap space-y-6 justify-between items-center">
              <div className="flex items-center space-x-4">
                <img
                  src={papaya3d}
                  alt="Logo da Mamao"
                  title="Logo da Mamao"
                  style={{ height: "80px" }}
                />
                <p className="text-4xl font-light md:font-thin text-orange-600">
                  MAMÃO
                </p>
              </div>
              <div className="flex space-x-4">
                <button
                  onClick={handleGoToApp}
                  className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 px-8 rounded-xl text-2xl"
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
          <div className="container mx-auto px-6 pt-24 pb-16">
            <div className="flex flex-col md:flex-row space-x-10">
              <div ref={section0Ref} className="md:w-2/3">
                <h1 className="text-5xl md:text-7xl xl:text-8xl">
                  <span className="text-orange-600 font-light md:font-thin">
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
                    <span className="text-orange-600 font-light">
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
              <div className="md:w-1/3 flex hidden md:inline justify-center">
                <img src={papaya3d} style={{ height: "450px" }} alt="" />
              </div>
            </div>
          </div>
        </header>
        <main className="container flex flex-col mx-auto px-6">
          <section
            ref={section2Ref}
            className="flex flex-col md:flex-row pb-16 md:pl-6 flex justify-end"
          >
            <div className="md:w-1/2 hidden md:block">
              <div className="flex justify-center mr-10">
                <img src={person3d} style={{ height: "450px" }} alt="" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-2xl md:text-3xl">
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
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 px-8 rounded-xl text-2xl"
            >
              {messages.ctaButton2[language]}{" "}
              <span className="text-base hidden md:inline">[A]</span>
            </button>
          </div>
          <section className="py-16 md:pr-6 flex">
            <div className="md:w-1/2">
              <h2
                ref={section3Ref}
                className="text-3xl md:text-4xl xl:text-5xl"
              >
                {messages.contribute[language]}{" "}
                <span className="text-orange-600 font-light">
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
              <h2 ref={section4Ref} className="text-2xl md:text-3xl pt-16">
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
              <div className="justify-center hidden md:flex">
                <img src={shooting3d} style={{ height: "400px" }} alt="" />
              </div>
            </div>
          </section>
          <div className="flex md:w-1/2 justify-center pb-16">
            <button
              onClick={handleGoToApp}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 px-8 rounded-xl text-2xl"
            >
              {messages.ctaButton3[language]}{" "}
              <span className="text-base hidden md:inline">[A]</span>
            </button>
          </div>
          <section
            ref={section5Ref}
            className="flex flex-col md:flex-row pb-16 md:pl-6 flex justify-end"
          >
            <div className="md:w-1/2 hidden md:block">
              <div className="flex justify-center">
                <img src={law3d} style={{ height: "325px" }} alt="" />
              </div>
            </div>
            <div className="md:w-1/2">
              <h2 className="text-3xl md:text-4xl xl:text-5xl">
                {messages.accessibilityLawPreHighlight[language]}{" "}
                <span className="text-orange-600 font-light">
                  {messages.accessibilityLawHighlight[language]}{" "}
                </span>
                {messages.accessibilityLawPosHighlight[language]}{" "}
                <span className="text-base hidden md:inline">[5]</span>
              </h2>
              <div
                className="text-lg md:text-xl mt-6"
                dangerouslySetInnerHTML={{
                  __html: messages.accessibilityLawDescription[language],
                }}
              ></div>
            </div>
          </section>
          <section className="flex flex-col md:flex-row pb-16 md:pl-6 flex justify-end">
            <div className="md:w-1/2">
              <h2 ref={section6Ref} className="text-2xl md:text-3xl">
                {messages.openData[language]}{" "}
                <span className="text-base hidden md:inline">[6]</span>
              </h2>
              <div
                className="text-lg md:text-xl mt-6"
                dangerouslySetInnerHTML={{
                  __html: messages.openDataDescription[language],
                }}
              ></div>
              <h2 ref={section7Ref} className="text-2xl md:text-3xl pt-16">
                {messages.translationModel[language]}{" "}
                <span className="text-base hidden md:inline">[7]</span>
              </h2>
              <div
                className="text-lg md:text-xl mt-6"
                dangerouslySetInnerHTML={{
                  __html: messages.translationModelDescription[language],
                }}
              ></div>
            </div>
            <div className="md:w-1/2 hidden md:block">
              <div className="flex justify-center mt-20">
                <img src={database3d} style={{ height: "400px" }} alt="" />
              </div>
            </div>
          </section>
          <div className="flex justify-center mb-32">
            <button
              onClick={handleGoToApp}
              className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 px-8 rounded-xl text-2xl"
            >
              {messages.ctaButton1[language]}{" "}
              <span className="text-base hidden md:inline">[A]</span>
            </button>
          </div>
        </main>
      </div>
    </HotKeys>
  );
}

export default App;
