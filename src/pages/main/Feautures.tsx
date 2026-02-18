import { Building, CreditCard, ShieldHalf } from "lucide-react";
import { motion } from "framer-motion";
import FeaturesCard from "@/components/custom/FeaturesCard";

const Feautures = () => {
  return (
    <div className="h-full  w-full flex flex-col justify-center items-center md:p-20 p-4">
      <motion.div
        initial={{ scale: 0.9 }}
        whileInView={{ scale: 1 }}
        transition={{ duration: 0.7 }}
        exit={{ scale: 0.9 }}
        viewport={{ amount: 0.6 }}
        className="bg-white w-full p-6 md:p-16 rounded-xl"
      >
        <div className=" w-full flex flex-col md:flex-row justify-between items-center p-2 mb-10">
          <span className="w-full">
            <p className="text-primary text-xl mb-4">FUTURE PAYMENT</p>
            <h1 className=" text-2xl md:text-4xl font-semibold">
              Experience that grows <br /> with your scale
            </h1>
          </span>
          <span className="w-full">
            <p className="text-muted-foreground leading-relaxed tracking-wide text-lg">
              Design a financial operating system that works for <br /> your
              business and streamlined cash flow <br /> management
            </p>
          </span>
        </div>
        <div className="grid md:grid-cols-3 gap-4 md:gap-16">
          <FeaturesCard
            icon={CreditCard}
            title="Free Transfers"
            desc={` Create a financial experience and automate repeat purchases by
                scheduling recurring payments`}
          />
          <FeaturesCard
            icon={Building}
            title="Unmatched Security"
            desc={`Run your operations with cash from your account and generate
                yield on funds stored in your account`}
          />
          <FeaturesCard
            icon={ShieldHalf}
            title="Multiple Acount"
            desc={` Securely manage your finances with organisation-wide MFA,
                card-locking and account-level controls.`}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default Feautures;
