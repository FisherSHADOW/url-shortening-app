import MainSection from "./assets/components/appSection/MainSection";
import PostLink from "./assets/components/appSection/PostLink";
import Article from "./assets/components/article/Article";
import Footer from "./assets/components/footer/Footer";
import Hero from "./assets/components/hero/Hero";
import Navbar from "./assets/components/navbar/Navbar";
import SignUpSection from "./assets/components/signUpSection/SignUpSection";

function App() {
  return (
    <div className="App bg-background">
      <Navbar />
      <Hero />
      <MainSection />
      <PostLink />
      <Article />
      <SignUpSection />
      <Footer />
    </div>
  );
}

export default App;
