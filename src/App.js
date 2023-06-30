import "./App.css";
import React, { useEffect, useState, useRef } from "react";
import {
  IconButton,
  useDisclosure,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerCloseButton,
  DrawerOverlay,
  Flex,
} from "@chakra-ui/react";
import AccessibilityMenu from "./components/AccessibilityMenu.js";
import { messages } from "./i18n.js";
import { HotKeys } from "react-hotkeys";
import { MdMenu } from "react-icons/md";
import worldDatabase from "./assets/worldDatabase.png";
import scale from "./assets/scale.png";
import papaya3d from "./assets/papaya3d.jpeg";
import person3dPt from "./assets/person3d_pt.jpeg";
import person3dEn from "./assets/person3d_en.jpeg";
import person3dEs from "./assets/person3d_es.jpeg";
import person3dFr from "./assets/person3d_fr.jpeg";
import person3dDe from "./assets/person3d_de.jpeg";
import person3dJp from "./assets/person3d_jp.jpeg";
import world from "./assets/world.png";

function App() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const focusRef = useRef(null);
  const section0Ref = useRef(null);
  const section1Ref = useRef(null);
  const section2Ref = useRef(null);
  const section3Ref = useRef(null);
  const section4Ref = useRef(null);
  const section5Ref = useRef(null);
  const section6Ref = useRef(null);
  const section7Ref = useRef(null);

  const [fontSize, setFontSize] = useState(
    localStorage.getItem("fontSize")
      ? Number(localStorage.getItem("fontSize"))
      : 100
  );
  const [textColor, setTextColor] = useState(
    localStorage.getItem("textColor")
      ? localStorage.getItem("textColor")
      : "#fffff"
  );
  const [backgroundColor, setBackgroundColor] = useState(
    localStorage.getItem("backgroundColor")
      ? localStorage.getItem("backgroundColor")
      : "#f5f5f5"
  );
  const [buttonHoverColorWeight, setButtonHoverColorWeight] = useState(
    localStorage.getItem("buttonHoverColorWeight")
      ? localStorage.getItem("buttonHoverColorWeight")
      : "200"
  );
  const [language, setLanguage] = useState(
    localStorage.getItem("language") ? localStorage.getItem("language") : "pt"
  );

  const personMapper = {
    pt: person3dPt,
    en: person3dEn,
    es: person3dEs,
    fr: person3dFr,
    de: person3dDe,
    jp: person3dJp,
  };

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
    setBackgroundColor((bg) => {
      const value = bg === "#000000" ? "#f5f5f5" : "#000000";
      localStorage.setItem("backgroundColor", value);
      return value;
    });
    setTextColor((text) => {
      const value = text === "#ffffff" ? "#000000" : "#ffffff";
      localStorage.setItem("textColor", value);

      return value;
    });
    setButtonHoverColorWeight((weight) => {
      const value = weight === "800" ? "200" : "800";
      localStorage.setItem("buttonHoverColorWeight", value);
      return value;
    });
  };

  const handleChangeLanguage = (lg) => {
    setLanguage(lg);
    localStorage.setItem("language", lg);
  };

  const handleIncreaseFontSize = () => {
    setFontSize((fontSize) => {
      const value = fontSize + 10;
      localStorage.setItem("fontSize", value);
      return value;
    });
  };

  const handleDecreaseFontSize = () => {
    setFontSize((fontSize) => {
      const value = fontSize - 10;
      localStorage.setItem("fontSize", value);
      return value;
    });
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
            <div className="flex space-y-6 justify-between items-center">
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
              <div className="flex md:hidden pb-6">
                <IconButton
                  aria-label="Open menu"
                  icon={<MdMenu size={32} />}
                  variant="outline"
                  onClick={onOpen}
                />
              </div>
              <div className="hidden md:flex">
                <AccessibilityMenu
                  handleGoToApp={handleGoToApp}
                  handleHightConstast={handleHightConstast}
                  handleIncreaseFontSize={handleIncreaseFontSize}
                  handleDecreaseFontSize={handleDecreaseFontSize}
                  handleChangeLanguage={handleChangeLanguage}
                  language={language}
                  messages={messages}
                  backgroundColor={backgroundColor}
                  buttonHoverColorWeight={buttonHoverColorWeight}
                />
              </div>
            </div>
          </nav>

          <Drawer isOpen={isOpen} placement="top" onClose={onClose}>
            <DrawerOverlay>
              <DrawerContent
                className="p-6"
                style={{
                  backgroundColor,
                  boxShadow: "rgba(0, 0, 0, 0.45) 0px 25px 20px -20px",
                }}
              >
                <DrawerBody>
                  <Flex justifyContent="flex-end">
                    <DrawerCloseButton />
                  </Flex>
                  <AccessibilityMenu
                    handleGoToApp={handleGoToApp}
                    handleHightConstast={handleHightConstast}
                    handleIncreaseFontSize={handleIncreaseFontSize}
                    handleDecreaseFontSize={handleDecreaseFontSize}
                    handleChangeLanguage={handleChangeLanguage}
                    language={language}
                    messages={messages}
                    backgroundColor={backgroundColor}
                    buttonHoverColorWeight={buttonHoverColorWeight}
                  />
                </DrawerBody>
              </DrawerContent>
            </DrawerOverlay>
          </Drawer>

          <div className="container mx-auto px-6 pt-8 md:pt-24 md:pb-16">
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
            <div className="md:w-1/2 md:block py-6 md:py-0">
              <div className="flex justify-center mr-10">
                <img
                  src={personMapper[language]}
                  style={{
                    height: window.innerWidth <= 500 ? "300px" : "500px",
                  }}
                  alt=""
                />
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
          <section className="block md:flex py-16 md:pr-6">
            <div className="w-100 md:w-1/2">
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
            <div className="w-100 md:w-1/2 md:block">
              <div className="flex justify-center mt-16">
                <img
                  src={world}
                  style={{
                    height: window.innerWidth <= 500 ? "300px" : "560px",
                  }}
                  alt=""
                />
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
                <img src={scale} style={{ height: "360px" }} alt="" />
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
            <div className="md:w-1/2 md:block">
              <div className="flex justify-center mt-8 md:mt-20">
                <img
                  src={worldDatabase}
                  style={{
                    height: window.innerWidth <= 500 ? "300px" : "460px",
                  }}
                  alt=""
                />
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
