import PropTypes from "prop-types";
import { useState } from "react";
import { ScrollContext } from "./ScrollContext";

export const ScrollProvider = ({ children }) => {
  const [activeSection, setActiveSection] = useState(null);

  const setSection = (sectionId) => {
    setActiveSection(sectionId);
  };

  return (
    <ScrollContext.Provider value={{ activeSection, setSection }}>
      {children}
    </ScrollContext.Provider>
  );
};

ScrollProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
