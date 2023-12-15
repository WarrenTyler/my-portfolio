import {
  BiLogoCss3,
  BiLogoFigma,
  BiLogoGithub,
  BiLogoHtml5,
  BiLogoJavascript,
  BiLogoMongodb,
  BiLogoReact,
  BiLogoTailwindCss,
} from "react-icons/bi";

const Skills = () => {
  return (
    <section id="skills">
      <div className="w-[80%] mx-auto mt-24">
        <h2 id="skills" className="secondary-title">
          My Skills
        </h2>
        <div id="skills-list">
          <div
            id="skills-highlight"
            className="flex flex-wrap justify-around text-center"
          >
            <div className="box">
              <BiLogoHtml5 size="8rem" className="text-black" />
              <h3>HTML 5</h3>
            </div>
            <div className="box">
              <BiLogoCss3 size="8rem" />
              <h3>CSS 3</h3>
            </div>
            <div className="box">
              <BiLogoJavascript size="8rem" />
              <h3>Javascript</h3>
            </div>
            <div className="box">
              <BiLogoReact size="8rem" />
              <h3>React JS</h3>
            </div>
            <div className="box">
              <BiLogoTailwindCss size="8rem" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="box">
              <BiLogoMongodb size="8rem" />
              <h3>MongoDB</h3>
            </div>
            <div className="box">
              <BiLogoFigma size="8rem" />
              <h3>Figma</h3>
            </div>
            <div className="box">
              <BiLogoGithub size="8rem" />
              <h3>GitHub</h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Skills;
