import ProjectCard from "./ProjectCard";
import { projects } from "../data/projectsData";

const Projects = () => {
  return (
    <div className="container mt-64 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24 w-full">
      <section className="w-full">
        <h2 id="projects" className="secondary-title">
          My projects
        </h2>
        {/* <h2
          id="projects"
          className="before:content-[''] before:block before:w-12 before:h-2 before:bg-theme before:rounded-full before:mb-1 text-3xl font-bold"
        >
          My projects
        </h2> */}
        <p className="section-paragraph">
          I've had the privilege of crafting and implementing a wide range of
          projects, seamlessly blending front-end and back-end technologies.
        </p>

        {/* <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          <img
            className="w-full bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
          />
          <img
            className="w-full bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1545235617-9465d2a55698?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1558655146-d09347e92766?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=764&q=80"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1547119957-637f8679db1e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1559028012-481c04fa702d?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1336&q=80"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1603969072881-b0fc7f3d77d7?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80s"
          />
          <img
            className="w-full hidden md:block bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1618761714954-0b8cd0026356?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
          />
          <img
            className="w-full hidden md:block md:col-span-2 lg:col-span-1 bg-nav h-36 lg:h-72 object-cover"
            src="https://images.unsplash.com/photo-1545235617-7a424c1a60cc?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=880&q=80"
          />
        </div> */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mt-6">
          {/* <ProjectCard
            image="https://images.unsplash.com/photo-1576153192396-180ecef2a715?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1374&q=80"
            title="Meme Generator"
            description="React JS"
          />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard image="" title="" />
          <ProjectCard
            image=""
            title=""
            spanClasses="md:col-span-2 lg:col-span-1"
          /> */}

          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
