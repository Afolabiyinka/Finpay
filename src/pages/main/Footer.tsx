import { motion } from "framer-motion";
import { Wallet } from "lucide-react";



const SOCIAL_LINKS = [
  { name: "Small Business", link: "#" },
  { name: "Freelancers", link: "#" },
  { name: "Customers", link: "#" },
  { name: "Taxes", link: "#" },
] as const;

const FOOTER_LINKS = [
  { name: "About", link: "#" },
  { name: "Career", link: "#" },
  { name: "Contact", link: "#" },
] as const;

const LEARN_LINKS = [
  { name: "Blog", link: "#" },
  { name: "Ebooks", link: "#" },
  { name: "Guides", link: "#" },
  { name: "Templates", link: "#" },
] as const;

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="w-full border-t border-gray-200 dark:border-gray-800 bg-white dark:bg-black p-10">
      <div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-4 md:py-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-12 mb-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col gap-3"
          >
            <a
              href="/"
              className="flex items-center gap-1 tracking-widest font-bold text-xl px-8 p-2 rounded-2xl"
            >
              <Wallet fill="teal" />
              FinPay
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">
              Solutions
            </h3>
            <nav className="flex flex-col gap-3">
              {FOOTER_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">
              Comapany
            </h3>
            <nav className="flex flex-col gap-3">
              {SOCIAL_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col gap-4"
          >
            <h3 className="text-sm font-medium text-black dark:text-white">
              Learn
            </h3>
            <nav className="flex flex-col gap-3">
              {LEARN_LINKS.map((item) => (
                <a
                  key={item.name}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white transition-colors duration-200"
                >
                  {item.name}
                </a>
              ))}
            </nav>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="h-px bg-gray-200 dark:bg-gray-800 mb-8" />

        <div className="flex flex-col md:flex-row items-center text-center justify-between gap-6">
          <p className="text-xs text-gray-500 dark:text-gray-500 uppercase tracking-wide">
            © {currentYear} Finpay. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
