import { Outlet } from "react-router";
import NavBar from "../nav/NavBar";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center border">
      <NavBar />
      <Outlet />
    </div>
  );
};

export default MainLayout;
