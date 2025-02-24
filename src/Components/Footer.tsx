import React from 'react';

const Footer: React.FC = () => {
  return (
    <div className="container-fluid bg-secondary text-white mt-5 py-5 px-sm-3 px-md-5">
      <div className="row pt-5">
        <div className="col-lg-4 col-md-12 mb-5">
          <h1 className="mb-3 display-5 text-capitalize font-italic text-white">
            <span className="text-primary">Safety</span>First
          </h1>
          <p className="m-0">
            Ipsum amet sed vero et lorem stet eos ut, labore sed sed stet sea est ipsum ut. Volup amet ea sanct
            ipsum, dolore vero lorem no duo eirmod. Eirmod amet ipsum no ipsum lorem clita ut. Ut sed sit lorem ea
            lorem sed, amet stet sit sea ea diam tempor kasd kasd. Diam nonumy etsit tempor ut sed diam sed et ea
          </p>
        </div>
        <div className="col-lg-8 col-md-12">
          <div className="row">
            <div className="col-md-4 mb-5">
              <h5 className="text-primary mb-4">Quick Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Home
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>About Us
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Our Services
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Our Team
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-primary mb-4">Popular Links</h5>
              <div className="d-flex flex-column justify-content-start">
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Home
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>About Us
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Our Services
                </a>
                <a className="text-white mb-2" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Our Team
                </a>
                <a className="text-white" href="#">
                  <i className="fa fa-angle-right mr-2"></i>Contact Us
                </a>
              </div>
            </div>
            <div className="col-md-4 mb-5">
              <h5 className="text-primary mb-4">Get In Touch</h5>
              <p>
                <i className="fa fa-map-marker-alt mr-2"></i>123 Street, New York, USA
              </p>
              <p>
                <i className="fa fa-phone-alt mr-2"></i>+012 345 67890
              </p>
              <p>
                <i className="fa fa-envelope mr-2"></i>info@example.com
              </p>
              <div className="d-flex justify-content-start mt-4">
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#">
                  <i className="fab fa-twitter"></i>
                </a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#">
                  <i className="fab fa-linkedin-in"></i>
                </a>
                <a className="btn btn-outline-light rounded-circle text-center mr-2 px-0" style={{ width: '40px', height: '40px' }} href="#">
                  <i className="fab fa-instagram"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row pt-3">
        <div className="col-md-6 text-center text-md-left mb-3 mb-md-0">
          <p className="m-0 text-white">
            &copy; <a className="text-white font-weight-bold" href="#">Your Site Name</a>. All Rights Reserved. Designed by
            <a className="text-white font-weight-bold" href="https://htmlcodex.com">HTML Codex</a>
          </p>
        </div>
        <div className="col-md-6 text-center text-md-right">
          <ul className="nav d-inline-flex">
            <li className="nav-item">
              <a className="nav-link text-white py-0" href="#">Privacy</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white py-0" href="#">Terms</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white py-0" href="#">FAQs</a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white py-0" href="#">Help</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
