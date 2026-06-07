import { Outlet } from "react-router";
import NavBar from "../nav/NavBar";
import Footer from "../main/Footer";

const MainLayout = () => {
  return (
    <div className="w-full h-full flex flex-col justify-center items-center border">
      <NavBar />
      <Outlet />
      <Footer />

    </div>
  );
};

export default MainLayout;
