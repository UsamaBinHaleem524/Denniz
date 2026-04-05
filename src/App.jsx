import { Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CursorCloud from "./components/CursorCloud";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import Promotions from "./pages/Promotions";
import ContactUs from "./pages/ContactUs";
import GetFunded from "./pages/GetFunded";

function App() {
  return (
    <div className="bg-[#0d0d0d] text-white min-h-screen">
      <CursorCloud />
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/promotions" element={<Promotions />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/get-funded" element={<GetFunded />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
