import { IoIosEye } from "react-icons/io";

const Hero = () => {
  return (
    <div className="relative">
      <picture>
        <source
          srcSet="./src/images/hero-landscape-dark.jpg"
          media="(min-width: 768px)"
        />
        <img
          src="./src/images/hero-portrait-dark.jpg"
          alt=""
          className="z-0 mx-auto w-full md:transform md:scale-x-[-1] md:mt-24 lg:mt-12 xl:mt-4 max-w-[1920px] max-h-[1280px]"
        />
      </picture>

      <section className="absolute top-0 container mt-16 flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24">
        <div className="flex flex-wrap md:flex-nowrap">
          <nav className="z-10 hidden lg:block lg:mr-24 lg:w-4 fixed left-[5%]">
            <div className="absolute left-[50%] transform -translate-x-1/2 space-y-6 mt-36">
              <a
                href="#"
                className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-nav-dark selected-circle dark:selected-circle"
              >
                <span className="bg-nav-tip-bg text-nav-tip-text dark:bg-nav-tip-bg-dark dark:text-nav-tip-text-dark px-2 py-1 rounded-md ml-10 opacity-0">
                  Home
                </span>
              </a>
              <a
                href="#work"
                className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-nav-dark"
              >
                <span className="bg-nav-tip-bg text-nav-tip-text dark:bg-nav-tip-bg-dark dark:text-nav-tip-text-dark px-2 py-1 rounded-md ml-10 opacity-0">
                  Work
                </span>
              </a>
              <a
                href="#clients"
                className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-nav-dark"
              >
                <span className="bg-nav-tip-bg text-nav-tip-text dark:bg-nav-tip-bg-dark dark:text-nav-tip-text-dark px-2 py-1 rounded-md ml-10 opacity-0">
                  Clients
                </span>
              </a>
              <a
                href="#hire"
                className="nav-dot block w-7 h-7 rounded-full border-4 border-nav dark:border-nav-dark"
              >
                <span className="bg-nav-tip-bg text-nav-tip-text dark:bg-nav-tip-bg-dark dark:text-nav-tip-text-dark px-2 py-1 rounded-md ml-10 opacity-0">
                  Hire
                </span>
              </a>
            </div>
          </nav>

          {/* Hero content */}
          <div className="flex flex-wrap justify-center max-w-xl md:justify-start md:ml-[5%]">
            <div className="z-50">
              <h1 className="font-bold text-black dark:text-white text-5xl md:text-6xl lg:text-7xl text-center md:text-left">
                Building
                <br /> beautiful web experiences.
              </h1>
              <div className="w-full flex justify-center md:justify-start">
                <button className="px-8 py-4 bg-theme text-white dark:bg-theme-dark font-bold mt-12 flex items-center space-x-3">
                  <IoIosEye size="1.7em" />
                  <span>View my work.</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
export default Hero;
