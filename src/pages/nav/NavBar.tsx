import { NavItems } from "./nav";
import { NavLink } from "react-router";
import { Wallet } from "lucide-react";
import { Button } from "@/components/ui/button";

const NavBar = () => {
  return (
    <div className="p-4 hidden md:flex justify-around items-center w-full">
      <a
        href="/"
        className="flex items-center gap-1 tracking-widest font-bold text-xl text-primary"
      >
        <Wallet />
        FinPay
      </a>
      <span className="flex gap-10">
        {NavItems.map((link) => (
          <NavLink key={link.path} to={link.path} className={``}>
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
