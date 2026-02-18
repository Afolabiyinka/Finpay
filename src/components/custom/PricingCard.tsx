import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

interface Props {
  type: "solid" | "default";
  title: string;
  price: string;
}
const PricingCard = ({ price, title, type }: Props) => {
  return (
    <motion.div
      initial={{ y: 50, opacity: -1 }}
      whileInView={{ y: 1, opacity: 1 }}
      viewport={{ amount: 0.2 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className={`w-full rounded-xl flex flex-col justify-between items-start  h-52 p-8 ${type === "solid" ? "bg-primary text-white" : "bg-white"}`}
    >
      <h1 className="text-3xl w-full">{title}</h1>

      <span className="w-full flex justify-between">
        <p>{price}</p>

        <span className="bg-primary hover:p-2 h-14 w-14 flex justify-center items-center cursor-pointer rounded-2xl group-[translate-x-12]:hover overflow-hidden shadow">
          <ArrowRight
            size={40}
            className="stroke-[1px]  hover:text-white hover:stroke-[2px] transition-all duration-1000"
          />
        </span>
      </span>
    </motion.div>
  );
};

export default PricingCard;
