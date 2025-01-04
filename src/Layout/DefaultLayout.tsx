import { Outlet, useLocation } from "react-router-dom";
import TopBar from "../Components/TopBar";
import Navbar from "../Components/Navbar";
import Feature from "../Components/Feature";
import Footer from "../Components/Footer";
import NavbarPage from "../Components/NavbarPage";
import RouterLink from "../Untils/RouterLink";

const DefaultLayout = () => {
  const url = useLocation();
  const renderNavBar = () => {
    switch (url.pathname) {
      case RouterLink.Home:
        return (
          <>
            <Navbar />
            <Feature />
          </>
        );
      default:
        return <NavbarPage />;
    }
  };
  return (
    <>
      <TopBar />
      {renderNavBar()}
      <Outlet />
      <Footer />
    </>
  );
};

export default DefaultLayout;
