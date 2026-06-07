import Feautures from "../main/Feautures";
import Home from "../main/Home";
import About from "../main/About";
import Learn from "../main/Learn";
import Pricing from "../main/Pricing";
import TryItNow from "../main/TryItNow";

const LandingPage = () => {
  return (
    <div className="flex flex-col justify-center items-center w-full">
      <Home />
      <Feautures />
      <About />
      <Learn />
      <Pricing />
      <TryItNow />
    </div>
  );
};

export default LandingPage;
