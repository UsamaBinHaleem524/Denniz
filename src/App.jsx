import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Partners from "./components/Partners";
import Features from "./components/Features";
import HowWeDoIt from "./components/HowWeDoIt";
import Reviews from "./components/Reviews";
import Introduction from "./components/Introduction";
import CaseStudies from "./components/CaseStudies";
import OfficialVideos from "./components/OfficialVideos";
import Genres from "./components/Genres";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <Navbar />
      <Hero />
      <Partners />
      <Features />
      <HowWeDoIt />
      <Reviews />
      <Introduction />
      <CaseStudies />
      <OfficialVideos />
      <Genres />
      <Footer />
    </div>
  );
}

export default App;
