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
    <div className="section__layout">
      <section className="w-full">
        <h2 id="skills" className="section__title">
          My skills
        </h2>
          <div
            className="flex flex-wrap justify-around text-center"
          >
            <div className="skill__div">
              <BiLogoHtml5 className="skill__logo" />
              <h3>HTML 5</h3>
            </div>
            <div className="skill__div">
              <BiLogoCss3 className="skill__logo" />
              <h3>CSS 3</h3>
            </div>
            <div className="skill__div">
              <BiLogoJavascript className="skill__logo" />
              <h3>Javascript</h3>
            </div>
            <div className="skill__div">
              <BiLogoReact className="skill__logo" />
              <h3>React JS</h3>
            </div>
            <div className="skill__div">
              <BiLogoTailwindCss className="skill__logo" />
              <h3>Tailwind CSS</h3>
            </div>
            <div className="skill__div">
              <BiLogoMongodb className="skill__logo" />
              <h3>MongoDB</h3>
            </div>
            <div className="skill__div">
              <BiLogoFigma className="skill__logo" />
              <h3>Figma</h3>
            </div>
            <div className="skill__div">
              <BiLogoGithub className="skill__logo" />
              <h3>GitHub</h3>
            </div>
          </div>
      </section>
    </div>
  );
};
export default Skills;
