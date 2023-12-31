import MainSection from "./components/appSection/MainSection";
import PostLink from "./components/appSection/PostLink";
import Article from "./components/article/Article";
import Footer from "./components/footer/Footer";
import Hero from "./components/hero/Hero";
import Navbar from "./components/navbar/Navbar";
import SignUpSection from "./components/signUpSection/SignUpSection";
import { BrowserRouter as Router } from "react-router-dom";
import { NextUIProvider } from "@nextui-org/react";

function App() {
  return (
    <NextUIProvider>
      <Router>
        <div className="App bg-background">
          <Navbar />
          <Hero />
          <MainSection />
          <PostLink />
          <Article />
          <SignUpSection />
          <Footer />
        </div>
      </Router>
    </NextUIProvider>
  );
}

export default App;
