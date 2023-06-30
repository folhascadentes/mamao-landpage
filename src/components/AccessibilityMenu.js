import React from "react";
import { MdContrast, MdKeyboardArrowDown } from "react-icons/md";
import { Button, Menu, MenuButton, MenuList, MenuItem } from "@chakra-ui/react";

function AccessibilityMenu({
  handleGoToApp,
  handleHightConstast,
  handleIncreaseFontSize,
  handleDecreaseFontSize,
  handleChangeLanguage,
  language,
  messages,
  backgroundColor,
  buttonHoverColorWeight,
}) {
  const languages = ["pt", "en", "es", "fr", "de", "jp"];

  return (
    <div className="flex flex-col md:flex-row md:space-x-4 md:space-y-0 space-y-4 items-center">
      <button
        onClick={handleGoToApp}
        className="bg-indigo-600 hover:bg-indigo-700 text-white py-6 px-8 rounded-xl text-2xl hidden md:inline"
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
        className={`hover:bg-gray-${buttonHoverColorWeight} rounded-xl px-4 `}
        onClick={handleDecreaseFontSize}
        style={{ fontSize: "24px" }}
      >
        A-
      </button>
      <Menu>
        <MenuButton
          as={Button}
          rightIcon={<MdKeyboardArrowDown />}
          style={{ fontSize: "24px", marginLeft: "24px" }}
        >
          {language.toLocaleUpperCase()}
        </MenuButton>
        <MenuList
          minWidth="80px"
          style={{
            boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
            padding: "12px 16px",
            borderRadius: "1rem",
            fontSize: "24px",
            backgroundColor,
          }}
        >
          {languages.map((language) => (
            <MenuItem my={4} onClick={() => handleChangeLanguage(language)}>
              {language.toUpperCase()}
            </MenuItem>
          ))}
        </MenuList>
      </Menu>
    </div>
  );
}

export default AccessibilityMenu;
