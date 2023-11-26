import Header from "./components/Header";
import Hero from "./components/Hero";

const App = () => {
  return (
    <div className="dark">
      {/* Main Container (Simulating Body) */}
      <div className="min-h-screen font-poppins pb-12 text-black dark:text-white bg-body dark:bg-body-dark">
        <Header />
        <Hero />
      </div>
    </div>
  );
};
export default App;
