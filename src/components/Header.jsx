import PropTypes from "prop-types";
import { useState } from "react";
import { IoMenu } from "react-icons/io5";
import { useScroll } from "../context/ScrollContext";
import ThemeSwitch from "./ThemeSwitch";
import { IoMdClose } from "react-icons/io";

const Header = ({ theme, toggleTheme }) => {
  const { activeSection = "home", setSection } = useScroll();
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleMobileMenuToggle = () => {
    setMobileMenuOpen((prevState) => !prevState);
  };

  const handleClick = (sectionId) => {
    setSection(sectionId);
    // Close the mobile menu after clicking a link
    setMobileMenuOpen(false);
  };

  return (
    <>
      {/* Placeholder for fixed header height */}
      <div className="h-20 bg-red-500"></div>
      <header className="z-50 h-20 py-6 fixed top-0 left-0 right-0 bg-white dark:bg-black shadow-md">
        <div className="container flex justify-between items-center mx-auto px-8 md:px-0 lg:px-24">
          <div className="text-lg font-bold">warrenTyler</div>
          <nav className="hidden md:flex items-center space-x-12">
            <a
              href="#"
              className={`${
                activeSection === "home" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                activeSection === "about" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("about")}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("projects")}
            >
              My projects
            </a>
            <a
              href="#skills"
              className={`${
                activeSection === "skills" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("skills")}
            >
              My skills
            </a>
            <a href="#hire" onClick={() => handleClick("hire")}>
              <button
                className={`${
                  activeSection === "hire"
                    ? "outline outline-1 text-selected-text bg-body outline-theme dark:text-selected-text-dark dark:bg-body-dark dark:outline-theme-dark"
                    : "bg-theme dark:bg-theme-dark text-white"
                } px-6 py-2 font-bold`}
              >
                Hire me
              </button>
            </a>
          </nav>
          <div className="flex space-x-3">
            <ThemeSwitch theme={theme} toggleTheme={toggleTheme} />
            <div className="md:hidden">
              <IoMenu
                size="2rem"
                className={`${
                  isMobileMenuOpen ? "hidden" : ""
                } text-gray-800 dark:text-white`}
                onClick={handleMobileMenuToggle}
              />
              <IoMdClose
                size="2rem"
                className={`${
                  !isMobileMenuOpen ? "hidden" : ""
                } text-gray-800 dark:text-white`}
                onClick={handleMobileMenuToggle}
              />
            </div>
          </div>
        </div>
        {/* Mobile Menu */}
        <div
          className={
            isMobileMenuOpen
              ? "absolute z-20 bg-body dark:bg-body-dark w-full px-16 pt-8 pb-16 md:hidden"
              : "hidden"
          }
        >
          <nav className="flex flex-col justify-around space-y-8">
            <a
              href="#"
              className={`${
                activeSection === "home" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("home")}
            >
              Home
            </a>
            <a
              href="#about"
              className={`${
                activeSection === "about" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("about")}
            >
              About
            </a>
            <a
              href="#projects"
              className={`${
                activeSection === "projects" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("projects")}
            >
              My projects
            </a>
            <a
              href="#skills"
              className={`${
                activeSection === "skills" ? "header__link--selected" : ""
              }`}
              onClick={() => handleClick("skills")}
            >
              My skills
            </a>
            <a href="#hire" onClick={() => handleClick("hire")}>
              <button
                className={`${
                  activeSection === "hire"
                    ? "outline outline-1 text-selected-text bg-body outline-theme dark:text-selected-text-dark dark:bg-body-dark dark:outline-theme-dark"
                    : "bg-theme dark:bg-theme-dark text-white"
                } px-6 py-2 font-bold`}
              >
                Hire me
              </button>
            </a>
          </nav>
        </div>
      </header>
    </>
  );
};

Header.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default Header;
