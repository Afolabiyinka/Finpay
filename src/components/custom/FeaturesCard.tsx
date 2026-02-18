import type { LucideProps } from "lucide-react";
import React from "react";
import { motion } from "framer-motion";

interface Props {
  icon: React.ForwardRefExoticComponent<
    Omit<LucideProps, "ref"> & React.RefAttributes<SVGSVGElement>
  >;
  title: string;
  desc: string;
}
const FeaturesCard = ({ desc, icon: Icon, title }: Props) => {
  return (
    <motion.div
      className="p-2"
      initial={{ y: 50, opacity: -1 }}
      whileInView={{ y: 1, opacity: 1 }}
      viewport={{ amount: "some" }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Icon size={50} className="stroke-[1px]" />
      <span>
        <h1 className="text-xl font-bold mb-2">{title}</h1>
        <p className="text-lg leading-relaxed text-muted-foreground">{desc}</p>
      </span>
    </motion.div>
  );
};

export default FeaturesCard;
