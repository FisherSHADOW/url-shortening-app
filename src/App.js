import MainSection from "./assets/components/appSection/MainSection";
import Hero from "./assets/components/hero/Hero";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <div className="App bg-background">
      <Navbar />
      <Hero />
      <MainSection />
    </div>
  );
}

export default App;
