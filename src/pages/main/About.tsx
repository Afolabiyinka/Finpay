import image from "@/assets/credit-card-payments.svg";
import { motion } from "framer-motion";

const About = () => {
  return (
    <div className="h-full w-full flex flex-col  justify-center items-center p-6 md:p-20 bg-white">
      <p className="text-primary">WHY US</p>
      <h1 className="text-3xl md:text-5xl mb-10">Why they prefer finpay</h1>
      <div className="flex flex-col md:flex-row gap-8 w-full justify-center items-center p-3">
        <motion.span
          initial={{ y: 50, opacity: -1 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border p-6 rounded-xl w-full"
        >
          <h1 className="text-6xl text-primary mb-4">3K+</h1>
          <p className="text-xl">
            Business already running <br /> on finpay
          </p>
        </motion.span>
        <motion.span
          initial={{ y: 50, opacity: -1 }}
          whileInView={{ y: 1, opacity: 1 }}
          viewport={{ amount: "some" }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="border p-6 rounded-xl w-full"
        >
          <h1 className="text-2xl text-primary mb-4">
            Instant withdraw your funds <br />
            at any time
          </h1>
          <p className="text-xl">
            Business already running <br /> on finpay
          </p>
        </motion.span>
      </div>
      <motion.div
        initial={{ x: 50, opacity: -1 }}
        whileInView={{ x: 1, opacity: 1 }}
        viewport={{ amount: "some" }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="flex flex-col md:flex-row border w-full rounded-xl justify-center items-center"
      >
        <span className="h-full w-full md:w-1/2 p-6 flex justify-center items-start flex-col">
          <h1 className="text-5xl font-bold mb-3">No asset volatility</h1>
          <p className="text-xl tracking-wider">
            Generate returns on your <br />
            cash revenues without making <br />
            any investments.
          </p>
        </span>
        <span className="w-1/2 flex justify-center items-center">
          <img
            src={image}
            alt="Credit Card Image"
            className="w-full max-w-md lg:max-w-md h-auto rounded-3xl p-4"
            fetchPriority="high"
          />
        </span>
      </motion.div>
    </div>
  );
};

export default About;
