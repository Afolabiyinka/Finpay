import LearningCard from "@/components/custom/LearningCard";
import { motion } from "framer-motion";

const Learn = () => {
  return (
    <div className="h-full flex justify-center items-center p-3">
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ scale: 0.9 }}
        viewport={{ amount: 0.6 }}
        className="md:h-[80vh] w-full bg-white shadow  rounded-xl flex  gap-6 flex-col p-4 md:p-16"
      >
        <span className="h-full md:h-1/2 w-full">
          <p className="text-primary text-2xl mb-3">STEP</p>
          <h1 className="text-xl md:text-4xl">
            Maximise your account returns with a reserve account with a <br />{" "}
            Reserve account that generates .
          </h1>
        </span>
        <span className="w-full h-full md:h-1/2 grid md:grid-cols-3 gap-10">
          <LearningCard
            step={1}
            title="Open your account"
            desc="Sign up to finpay and setup your account from the dashboard"
          />
          <LearningCard
            step={2}
            title="Tranfer your money"
            desc="Move money from to another account into finpay and start earning up"
          />
          <LearningCard
            step={3}
            title="Watch your balance grow"
            desc="Accesed instantly and remain insulated from market volatility"
          />
        </span>
      </motion.div>
    </div>
  );
};

export default Learn;
