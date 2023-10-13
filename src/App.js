import MainSection from "./assets/components/appSection/MainSection";
import PostLink from "./assets/components/appSection/PostLink";
import Hero from "./assets/components/hero/Hero";
import Navbar from "./assets/components/navbar/Navbar";

function App() {
  return (
    <div className="App bg-background">
      <Navbar />
      <Hero />
      <MainSection />
      <PostLink />
      <PostLink />
      <PostLink />
    </div>
  );
}

export default App;
