import { useEffect, useState } from "react";
import About from "./components/About";
import Header from "./components/Header";
import Hero from "./components/Hero";
import HireMe from "./components/HireMe";
import Projects from "./components/Projects";
import SideNav from "./components/SideNav";
import Skills from "./components/Skills";
import { ScrollProvider } from "./context/ScrollProvider";
import ScrollListener from "./utilities/ScrollListener";

const App = () => {
  const [theme, setTheme] = useState("light");

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    const userTheme = localStorage.getItem("theme");
    const systemTheme = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    const initialTheme = userTheme || (systemTheme ? "dark" : "light");
    setTheme(initialTheme);
  }, []);

  return (
    <div className={theme === "dark" ? "dark" : ""}>
      {/* Main Container (Simulating Body) */}
      <div className="min-h-screen font-poppins pb-12 text-black dark:text-white bg-body dark:bg-body-dark">
        <ScrollProvider>
          <Header theme={theme} toggleTheme={toggleTheme} />
          <SideNav />
          <Hero theme={theme} />
          <About />
          <Projects />
          <Skills />
          <HireMe />
          <ScrollListener /> {/* Explicitly include it */}
        </ScrollProvider>
      </div>
    </div>
  );
};
export default App;
