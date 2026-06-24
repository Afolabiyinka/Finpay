import { NavItems } from "./nav";
import { NavLink } from "react-router";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const NavBar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsScrolled(scrollPosition > 13);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [window.location]);

  return (
    <motion.div
      className={`p-3 hidden md:flex justify-around items-center transition-all w-full ${isScrolled && "fixed top-0 mt-1 rounded-full z-50 max-w-7xl bg-white shadow"}`}
    >
      <a
        href="/"
        className="flex items-center gap-1 tracking-widest font-bold text-xl px-8 p-2 rounded-2xl"
      >
        <Wallet fill="teal" />
        FinPay
      </a>
      <span className="flex gap-4">
        {NavItems.map((navlink) => (
          <NavLink
            key={navlink.path}
            to={navlink.path}
            className="relative px-6 py-1.5"
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{
                      type: "spring",
                      stiffness: 400,
                      damping: 30,
                      duration: 1,
                    }}
                  />
                )}

                <motion.span
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className={`relative z-10 ${isActive ? "text-white" : ""}`}
                >
                  {navlink.title}
                </motion.span>
              </>
            )}
          </NavLink>
        ))}
      </span>
      <span className="flex gap-3">
        <Button variant={`link`} size={`lg`}>
          Login
        </Button>
        <Button size={`lg`}>Sign Up</Button>
      </span>
    </motion.div>
  );
};

export default NavBar;
