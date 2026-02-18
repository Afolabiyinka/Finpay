import { Button } from "@/components/ui/button";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";
import { ArrowUpRight } from "lucide-react";
import creditImage from "@/assets/undraw_transfer-money_h9s3.svg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <div className="h-full flex flex-col md:flex-row w-full justify-center items-center md:p-20">
      <div className="w-full md:max-w-2xl  h-full flex flex-col justify-center p-5">
        <span className="text-4xl md:text-6xl flex flex-col gap-4 mb-6">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-semibold"
          >
            Get paid early
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            save automatically
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            all your pay
          </motion.h1>
        </span>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl text-foreground/80 mb-5 leading-relaxed tracking-wide"
        >
          Supports small business with simple invoicing, <br />
          powerful integrations, and cash flow managements tools.
        </motion.p>

        <motion.span
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <InputGroup className="">
            <InputGroupInput placeholder="Your business email" />

            <InputGroupAddon align="inline-end">
              <Button size={`lg`}>
                Get Started <ArrowUpRight />
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </motion.span>

        <div className="w-full p-6 bg-muted-foreground/10 animate-pulse mt-7 rounded-full"></div>
      </div>
      <div className="w-full md:w-1/2 h-full flex justify-center items-center">
        <img
          src={creditImage}
          alt="Credit Card Image"
          className="w-full max-w-md lg:max-w-md h-auto rounded-3xl p-4"
          fetchPriority="high"
        />
      </div>
    </div>
  );
};

export default Home;
