import PropTypes from "prop-types";
import { IoIosEye } from "react-icons/io";

const Hero = ({ theme }) => {
  return (
    <div className="relative">
      <picture>
        <source
          srcSet={
            theme === "dark"
              ? "./src/images/hero-landscape-dark.jpg"
              : "./src/images/hero-landscape-light.jpg"
          }
          media="(min-width: 768px)"
        />
        <img
          src={
            theme === "dark"
              ? "./src/images/hero-portrait-dark.jpg"
              : "./src/images/hero-portrait-light.jpg"
          }
          alt=""
          className="z-0 md:transform md:scale-x-[-1] h-screen w-full object-cover"
        />
      </picture>

      <section className="z-0 absolute top-[5vh] left-[10vw] md:top-[10vh] md:left-[15vw] xl:top-[12vh] xl:left-[20vw]  container flex justify-between items-center mx-auto">
        <div className="flex flex-wrap md:flex-nowrap">
          {/* Hero content */}
          <div className="flex flex-wrap justify-center max-w-xl md:justify-start md:ml-[5%]">
            <div className="grid grid-cols-6 gap-x-4 gap-y-3 font-bold text-black dark:text-white text-5xl md:text-6xl lg:text-7xl md:text-left">
              <h1 className="col-span-1">A</h1>
              <h1 className="col-span-5">Creative</h1>
              <h1 className="col-span-1 align-middle">+</h1>
              <h1 className="col-span-5 text-left">Coder</h1>
              <h1 className="col-span-1">=</h1>
              <h1 className="col-span-5">Developer.</h1>
              <div className="col-span-6 text-xl flex justify-center items-center">
                <div className="flex justify-center md:justify-start">
                  <button
                    className="px-8 py-4 bg-theme text-white dark:bg-theme-dark font-bold mt-12 flex items-center space-x-3"
                    onClick={() => {
                      window.location.href = "#projects";
                    }}
                  >
                    <IoIosEye size="1.7em" />
                    <span>View my projects.</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

Hero.propTypes = {
  theme: PropTypes.string.isRequired,
};

export default Hero;
