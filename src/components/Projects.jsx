import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="section__layout">
      <section className="w-full">
        <h2 id="projects" className="section__title">
          My projects
        </h2>
        <p className="section__paragraph">
          I&lsquo;ve had the privilege of crafting and implementing a wide range
          of projects, seamlessly blending front-end and back-end technologies.
        </p>
        <div className="flex flex-wrap justify-around text-center">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
