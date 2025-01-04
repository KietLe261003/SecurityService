import { Link, useLocation } from "react-router-dom";
import RouterLink from "../Untils/RouterLink";
import { useAppDispatch } from "../Hooks/Store";
import { setOpenModal } from "../Redux/Slice/HomeSlice";
import LoginForm from "./Form/LoginForm";
import ResgisterForm from "./Form/ResgisterForm";

const NavbarPage = () => {
    const url = useLocation();
    const dispath=useAppDispatch();
      const clickLogin=()=>{
        dispath(setOpenModal(1));
      }
  return (
    <>
        <div className="container-fluid p-0 mb-5">
        <nav className="navbar navbar-expand-lg bg-secondary navbar-dark py-0">
            <a href="" className="navbar-brand d-block d-lg-none">
            <h1 className="m-0 display-5 text-capitalize font-italic text-white">
                <span className="text-primary">Safety</span>First
            </h1>
            </a>
            <button
            type="button"
            className="navbar-toggler"
            data-toggle="collapse"
            data-target="#navbarCollapse"
            >
            <span className="navbar-toggler-icon"></span>
            </button>
            <div
            className="navbar-collapse justify-content-between"
            id="navbarCollapse"
            >
            <div className="navbar-nav m-auto py-4">
                <Link to={RouterLink.Home} className={`nav-item nav-link ${url.pathname===RouterLink.Home && 'active'}`}>
                Home
                </Link>
                <Link to={RouterLink.About} className={`nav-item nav-link ${url.pathname===RouterLink.About && 'active'}`}>
                About
                </Link>
                <Link to={RouterLink.Service} className={`nav-item nav-link ${url.pathname===RouterLink.Service && 'active'}`}>
                Services
                </Link>
                <Link to={RouterLink.Guards} className={`nav-item nav-link ${url.pathname===RouterLink.Guards && 'active'}`}>
                Guards
                </Link>
                <Link to={RouterLink.Contact} className={`nav-item nav-link ${url.pathname===RouterLink.Contact && 'active'}`}>
                Contact
                </Link>
                <a onClick={clickLogin} className="nav-item nav-link hover:cursor-pointer">Đăng nhập</a>
            </div>
            </div>
        </nav>
        </div>
        <LoginForm></LoginForm>
      <ResgisterForm></ResgisterForm>
    </>
  );
};

export default NavbarPage;
