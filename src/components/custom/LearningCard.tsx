import { motion } from "framer-motion";

interface Props {
  step: number;
  title: string;
  desc: string;
}
const LearningCard = ({ desc, step, title }: Props) => {
  return (
    <motion.div
      initial={{ x: 50, opacity: -1 }}
      whileInView={{ x: 1, opacity: 1 }}
      viewport={{ amount: "some" }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="bg-[#023347] shadow rounded-xl flex flex-col justify-center items-start md:p-10 p-4 text-white"
    >
      <h1 className="text-2xl md:text-6xl font-bold">{step}</h1>
      <h4 className="md:text-xl text-lg font-semibold">{title}</h4>
      <p className="md:text-md text-sm font-light">{desc} </p>
    </motion.div>
  );
};

export default LearningCard;
