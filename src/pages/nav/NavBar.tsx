import { NavItems } from "./nav";
import { NavLink } from "react-router";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";

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
    <div
      className={`p-2 hidden md:flex justify-around items-center transition-all  w-full ${isScrolled && "fixed border w-full top-0 duration-300 bg-white z-50"}`}
    >
      <a
        href="/"
        className="flex items-center gap-1 tracking-widest font-bold text-xl shadow px-8 p-2 rounded-2xl"
      >
        <Wallet fill="teal" />
        FinPay
      </a>
      <span className="flex gap-10">
        {NavItems.map((link) => (
          <NavLink
            key={link.path}
            to={link.path}
            className={({ isActive }) =>
              `${isActive && "underline underline-offset-4"}`
            }
          >
            {link.title}
          </NavLink>
        ))}
      </span>
      <span className="flex gap-5">
        <Button variant={`outline`} size={`lg`}>
          Login
        </Button>
        <Button size={`lg`}>Sign Up</Button>
      </span>
    </div>
  );
};

export default NavBar;
