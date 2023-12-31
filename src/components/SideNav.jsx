import { useScroll } from "../context/ScrollContext";

const SideNav = () => {
  const { activeSection, setSection } = useScroll();

  const handleClick = (sectionId) => {
    setSection(sectionId);
  };

  return (
    <nav className="z-10 hidden lg:block lg:w-8 fixed top-[20vh] left-[5vw]">
      <div className="absolute space-y-6 mt-36">
        <a
          href="#"
          aria-label="Home"
          className={`side-nav__link ${
            activeSection === "home"
              ? "side-nav__link--selected"
              : "side-nav__link--not-selected"
          }`}
          onClick={() => handleClick("home")}
        >
          <span className="side-nav__tooltip">Home</span>
        </a>
        <a
          href="#about"
          aria-label="About"
          className={`side-nav__link ${
            activeSection === "about"
              ? "side-nav__link--selected"
              : "side-nav__link--not-selected"
          }`}
          onClick={() => handleClick("about")}
        >
          <span className="side-nav__tooltip">About</span>
        </a>
        <a
          href="#projects"
          aria-label="Projects"
          className={`side-nav__link ${
            activeSection === "projects"
              ? "side-nav__link--selected"
              : "side-nav__link--not-selected"
          }`}
          onClick={() => handleClick("projects")}
        >
          <span className="side-nav__tooltip">Projects</span>
        </a>
        <a
          href="#skills"
          aria-label="Skills"
          className={`side-nav__link ${
            activeSection === "skills"
              ? "side-nav__link--selected"
              : "side-nav__link--not-selected"
          }`}
          onClick={() => handleClick("skills")}
        >
          <span className="side-nav__tooltip">Skills</span>
        </a>
        <a
          href="#hire"
          aria-label="Hire"
          className={`side-nav__link ${
            activeSection === "hire"
              ? "side-nav__link--selected"
              : "side-nav__link--not-selected"
          }`}
          onClick={() => handleClick("hire")}
        >
          <span className="side-nav__tooltip">Hire</span>
        </a>
      </div>
    </nav>
  );
};

export default SideNav;
