import { Outlet } from "react-router-dom";
import Footer from "../pages/Footer/Footer";
import NavBar from "../pages/NavBar/NavBar";

const Main = () => {
  return (
    <div className="md:mx-24 mtg-4">
      <NavBar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
