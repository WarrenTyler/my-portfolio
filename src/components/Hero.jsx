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
                  <svg
                    viewBox="0 0 1000 1000"
                    fill="currentColor"
                    height="1.7em"
                    width="1.7em"
                  >
                    <path d="M500 220c61.333 0 120.333 8.333 177 25s103.667 37.333 141 62 70.333 50.333 99 77 49.667 50.333 63 71c13.333 20.667 20 35.667 20 45 0 9.333-6.667 24-20 44s-34.333 43.667-63 71-61.667 53.333-99 78-84.333 45.333-141 62-115.667 25-177 25-120.333-8.333-177-25-103.667-37.333-141-62-70.333-50.667-99-78-49.667-51-63-71C6.667 524 0 509.333 0 500c0-9.333 6.667-24.333 20-45s34.333-44.333 63-71 61.667-52.333 99-77 84.333-45.333 141-62 115.667-25 177-25m0 494c61.333 0 113.667-21 157-63s65-92.333 65-151c0-60-21.667-111-65-153s-95.667-63-157-63-113.667 21-157 63-65 93-65 153c0 58.667 21.667 109 65 151s95.667 63 157 63m0-214c5.333 5.333 17.667 6 37 2s36-7.667 50-11 22.333-.333 25 9c0 29.333-11 54.333-33 75s-48.333 31-79 31-56.667-10.333-78-31-32-45.667-32-75c0-30.667 10.667-56.333 32-77s47.333-31 78-31c9.333 0 12.667 7.667 10 23s-6.667 31-12 47-4.667 28.667 2 38" />
                  </svg>
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
