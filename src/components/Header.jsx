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
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 16 12"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h14M1 6h14M1 11h7"
            />
          </svg>
          
        </div>
      </div>
    </header>
  );
};
export default Header;
