import { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Projects = () => {
  const [colSpan, setColSpan] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;

      // Determine colSpan based on the screen size
      if (windowWidth >= 768 && windowWidth < 1280) {
        setColSpan(2);
      } else if (windowWidth >= 1280) {
        setColSpan(3);
      } else {
        setColSpan(1);
      }
    };

    // Initial check on mount
    handleResize();

    // Attach the event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Function to calculate the col-span class for a ProjectCard based on its position in the array
  const calculateColSpan = (colSpan, projectsLength, itemIndex) => {
    // Calculate the number of remaining columns after evenly distributing projects
    const remainingColumns = projectsLength % colSpan;

    // Check if there are remaining columns and if the current item is within the range of remaining columns
    // If true, return the col-span class, otherwise, return an empty string
    return remainingColumns > 0 && itemIndex < remainingColumns
      ? `col-span-${colSpan}`
      : "";
  };

  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="projects" className="secondary-title">
          My projects
        </h2>
        <p className="section-paragraph">
          I've had the privilege of crafting and implementing a wide range of
          projects, seamlessly blending front-end and back-end technologies.
        </p>
        {/* Dynamic grid content */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {projects.map((project, index) => (
            <ProjectCard
              spanClass={calculateColSpan(colSpan, projects.length, index)}
              key={project.id}
              {...project}
            />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
