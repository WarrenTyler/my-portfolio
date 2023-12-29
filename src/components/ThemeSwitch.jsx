import PropTypes from "prop-types";
import { BiSolidMoon, BiSolidSun } from "react-icons/bi";

const ThemeSwitch = ({ theme, toggleTheme }) => {
  return (
    <div>
      {theme === "dark" ? (
        <BiSolidSun className="w-8 h-8" onClick={toggleTheme} />
      ) : (
        <BiSolidMoon className="w-8 h-8" onClick={toggleTheme} />
      )}
    </div>
  );
};

ThemeSwitch.propTypes = {
  theme: PropTypes.string.isRequired,
  toggleTheme: PropTypes.func.isRequired,
};

export default ThemeSwitch;
