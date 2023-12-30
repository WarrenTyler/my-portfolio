import PropTypes from "prop-types";

const ProjectCard = ({ image, title, description, view, github }) => {
  return (
    <div className="md:basis-1/2 xl:basis-1/3 relative flex justify-center items-center w-full">
      <div className="h-auto w-full mx-2 my-2 shadow-lg shadow-gray-400 dark:shadow-none rounded-xl group hover:bg-gradient-to-r from-gray-200 to-theme dark:to-theme-dark">
        <img
          className="rounded-xl group-hover:opacity-10 max-h-72 lg:max-h-none w-full object-cover"
          src={image}
          alt={title}
        />
        <div className="hidden group-hover:block absolute top-[50%] px-10 mx-auto translate-y-[-50%]">
          <h3 className="text-2xl font-bold text-white tracking-wider text-center [text-shadow:_3px_3px_3px_rgb(0_0_0_/_50%)]">
            {title}
          </h3>
          <p className="pb-4 pt-2 text-white text-center [text-shadow:_2px_2px_2px_rgb(0_0_0_/_50%)]">
            {description}
          </p>
          <div className="flex justify-around">
            {view !== "" && (
              <a href={view}>
                <p className="text-center mr-2 px-6 py-2 rounded-lg bg-theme text-white dark:bg-theme-dark font-semibold tracking-wide cursor-pointer">
                  View
                </p>
              </a>
            )}
            <a href={github}>
              <p className="text-center px-6 py-2 rounded-lg bg-theme text-white dark:bg-theme-dark font-bold tracking-wide cursor-pointer">
                GitHub
              </p>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

ProjectCard.propTypes = {
  image: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  view: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
};

export default ProjectCard;
