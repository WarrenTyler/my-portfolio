import { useState } from "react";

const About = () => {
  const [showMore, setShowMore] = useState(false);

  return (
    <section className="section__layout">
      <section className="w-full">
        <h2 id="about" className="section__title">
          About
        </h2>
        <p className="section__paragraph">
          Greetings! I&lsquo;m Warren, an aspiring Front-end web developer eager
          to bring my skills and creativity to the world of web development. My
          journey into this exciting field began with a three-month bootcamp,
          where I immersed myself in HTML, CSS, Tailwind, JavaScript, React, and
          the intricacies of version control through GitHub.
        </p>
        <p className="section__paragraph">
          I possess a solid foundation in HTML, CSS, JavaScript, React, and
          Figma, along with proficiency in MongoDB. My background in Computer
          Science, including AI, Java, SQL database design, Software Engineering
          with Objects, and game programming, 3D modeling, and creative coding,
          further enhance my ability to translate creative concepts into
          interactive web experiences.
        </p>
        {showMore && (
          <>
            <p className="section__paragraph">
              I approach front-end development as a creative endeavor,
              seamlessly merging technology and artistry to craft visually
              stunning and user-friendly experiences. My passion lies in
              bridging the digital and tangible worlds, breathing life into
              interfaces that engage and inspire.
            </p>
            <p className="section__paragraph">
              Beyond the screen, I find immense satisfaction in sharing my
              knowledge with the next generation. As a Code Club Tutor,
              I&lsquo;ve introduced children to the wonders of coding through
              Scratch, Python, and graphics, nurturing a love for technology
              from an early age.
            </p>
            <p className="section__paragraph">
              Away from the keyboard, I embrace a balanced lifestyle, fueled by
              my passion for cycling, tai chi, and qigong. These practices not
              only enhance my well-being but also provide the mental clarity and
              focus required for my work.
            </p>
          </>
        )}
        <button
          className="text-theme dark:text-theme-dark hover:underline focus:outline-none"
          onClick={() => setShowMore(!showMore)}
        >
          {showMore ? "Read less" : "Read more"}
        </button>
      </section>
    </section>
  );
};

export default About;
