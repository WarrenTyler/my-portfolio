import { IoMenu } from "react-icons/io5";

const Header = () => {
  return (
    <header className="py-6">
      <div className="container flex justify-between items-center mx-auto px-8 md:px-14 lg:px-24">
        <div className="text-lg font-bold">warrenTyler</div>
        <nav className="hidden md:flex items-center space-x-12">
          <a
            href="#"
            className="text-selected-text dark:text-selected-text-dark"
          >
            Home
          </a>
          <a href="#work">My work</a>
          <a href="#clients">Clients</a>
          <a href="#hire">
            <button className="px-6 py-2 bg-theme text-white dark:bg-theme-dark  font-bold">
              Hire me
            </button>
          </a>
        </nav>
        <div className="md:hidden">
          <IoMenu size="2rem" className="text-gray-800 dark:text-white" />
        </div>
      </div>
    </header>
  );
};
export default Header;
