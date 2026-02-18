import Feautures from "../main/Feautures";
import Home from "../main/Home";
import About from "../main/About";
import Learn from "../main/Learn";
import Pricing from "../main/Pricing";
import Footer from "../main/Footer";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center">
      <Home />
      <Feautures />
      <About />
      <Learn />
      <Pricing />
      <Footer />
    </div>
  );
};

export default LandingPage;
