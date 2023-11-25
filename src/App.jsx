import Header from "./components/Header";

const App = () => {
  return (
    <div className="dark">
      {/* Main Container (Simulating Body) */}
      <div className="min-h-screen font-poppins pb-12 text-black dark:text-white bg-body dark:bg-body-dark">
        <Header />
      </div>
    </div>
  );
};
export default App;
