import React from "react";
import carousel1 from "@/Assests/img/carousel-1.jpg";
import carousel2 from "@/Assests/img/carousel-2.jpg";
import { Link } from "react-router-dom";
import RouterLink from "../Untils/RouterLink";
import LoginForm from "./Form/LoginForm";
import { useAppDispatch } from "../Hooks/Store";
import { setOpenModal } from "../Redux/Slice/HomeSlice";
import ResgisterForm from "./Form/ResgisterForm";
const Navbar: React.FC = () => {
  const dispath=useAppDispatch();
  const clickLogin=()=>{
    dispath(setOpenModal(1));
  }
  return (
    <>
      <div className="container-fluid p-0 nav-bar">
        <nav className="navbar navbar-expand-lg bg-none navbar-dark py-0">
          <a href="/" className="navbar-brand d-block d-lg-none">
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
            className=" navbar-collapse justify-content-between"
            id="navbarCollapse"
          >
            <div className="navbar-nav m-auto py-4">
              <Link to={RouterLink.Home} className="nav-item nav-link active">
                Home
              </Link>
              <Link to={RouterLink.About} className="nav-item nav-link">
                About
              </Link>
              <Link to={RouterLink.Service} className="nav-item nav-link">
                Services
              </Link>
              <Link to={RouterLink.Guards} className="nav-item nav-link">
                Guards
              </Link>
              <Link to={RouterLink.Contact} className="nav-item nav-link">
                Contact
              </Link>
              <a onClick={clickLogin} className="nav-item nav-link hover:cursor-pointer">Đăng nhập</a>
            </div>
          </div>
        </nav>
      </div>
      <LoginForm></LoginForm>
      <ResgisterForm></ResgisterForm>
      <div className="container-fluid p-0">
        <div id="blog-carousel" className="carousel slide" data-ride="carousel">
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img className="w-100" src={carousel1} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
                <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">
                  Best Security Service
                </h4>
                <a
                  href="/"
                  className="btn btn-lg btn-primary mt-3 mt-md-4 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
            <div className="carousel-item">
              <img className="w-100" src={carousel2} alt="Image" />
              <div className="carousel-caption d-flex flex-column align-items-center justify-content-center">
                <h4 className="text-primary m-0">Your Safety, Our Efforts</h4>
                <h4 className="display-4 m-0 mt-2 mt-md-3 text-white">
                  Highly Trained Guards
                </h4>
                <a
                  href="/"
                  className="btn btn-lg btn-primary mt-3 mt-md-4 px-4"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <a
            className="carousel-control-prev"
            href="#blog-carousel"
            data-slide="prev"
          >
            <div
              className="btn btn-primary rounded-circle"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-prev-icon mb-n2"></span>
            </div>
          </a>
          <a
            className="carousel-control-next"
            href="#blog-carousel"
            data-slide="next"
          >
            <div
              className="btn btn-primary rounded-circle"
              style={{ width: "45px", height: "45px" }}
            >
              <span className="carousel-control-next-icon mb-n2"></span>
            </div>
          </a>
        </div>
      </div>
    </>
  );
};

export default Navbar;
