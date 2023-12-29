import { useEffect } from "react";
import { useScroll } from "../context/ScrollContext";

const ScrollListener = () => {
  const { setSection } = useScroll();

  useEffect(() => {
    const updateNavigation = () => {
      const titles = [...document.querySelectorAll("h1, h2")].sort((a, b) => {
        return (
          Math.abs(a.getBoundingClientRect().top) -
          Math.abs(b.getBoundingClientRect().top)
        );
      });

      // Check if titles array is not empty before accessing its elements
      if (titles.length > 0) {
        document
          .querySelectorAll(".side-nav__link--selected")
          .forEach((c) => c.classList.remove("side-nav__link--selected"));

        const activeTitle = titles[0];
        let sideNav__link;

        // Check if the active title has an id
        if (activeTitle.id) {
          sideNav__link = document.querySelector(
            `.side-nav__link[href="#${activeTitle.id}"]`
          );
        } else {
          // Special case for Home section
          sideNav__link = document.querySelector('.side-nav__link[href="#"]');
        }

        if (sideNav__link) {
          sideNav__link.classList.add("side-nav__link--selected");
          setSection(activeTitle.id || "home"); // Update the active section in the ScrollContext
        }
      }
    };

    updateNavigation();

    window.addEventListener("scroll", updateNavigation);

    return () => {
      window.removeEventListener("scroll", updateNavigation);
    };
  }, [setSection]);

  return null;
};

export default ScrollListener;
