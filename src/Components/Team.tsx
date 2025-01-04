import React from 'react';
import team1 from '@/Assests/img/team-1.jpg';
import team2 from '@/Assests/img/team-2.jpg';
import team3 from '@/Assests/img/team-3.jpg';
import team4 from '@/Assests/img/team-4.jpg';

const Team: React.FC = () => {
  return (
    <div className="container pt-5 pb-3">
      <div className="d-flex flex-column text-center mb-5">
        <h5 className="text-primary mb-3">Security Officers</h5>
        <h1 className="m-0">Meet Our Security Officers</h1>
      </div>
      <div className="row">
        <div className="col-lg-6 mb-4">
          <div className="row mb-2 align-items-center">
            <div className="col-6 text-right">
              <h6>Officer Name</h6>
              <h6 className="text-muted font-weight-normal text-capitalize mb-2">Designation</h6>
              <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
              <div className="d-flex justify-content-end">
                <a href=""><i className="fab fa-twitter mr-3"></i></a>
                <a href=""><i className="fab fa-facebook-f mr-3"></i></a>
                <a href=""><i className="fab fa-linkedin-in mr-3"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-6">
              <img className="img-thumbnail p-3" src={team1} alt="Team Member 1" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="row mb-2 align-items-center">
            <div className="col-6">
              <img className="img-thumbnail p-3" src={team2} alt="Team Member 2" />
            </div>
            <div className="col-6 text-left">
              <h6>Officer Name</h6>
              <h6 className="text-muted font-weight-normal text-capitalize mb-2">Designation</h6>
              <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
              <div className="d-flex justify-content-start">
                <a href=""><i className="fab fa-twitter mr-3"></i></a>
                <a href=""><i className="fab fa-facebook-f mr-3"></i></a>
                <a href=""><i className="fab fa-linkedin-in mr-3"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="row mb-2 align-items-center">
            <div className="col-6 text-right">
              <h6>Officer Name</h6>
              <h6 className="text-muted font-weight-normal text-capitalize mb-2">Designation</h6>
              <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
              <div className="d-flex justify-content-end">
                <a href=""><i className="fab fa-twitter mr-3"></i></a>
                <a href=""><i className="fab fa-facebook-f mr-3"></i></a>
                <a href=""><i className="fab fa-linkedin-in mr-3"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
              </div>
            </div>
            <div className="col-6">
              <img className="img-thumbnail p-3" src={team3} alt="Team Member 3" />
            </div>
          </div>
        </div>
        <div className="col-lg-6 mb-4">
          <div className="row mb-2 align-items-center">
            <div className="col-6">
              <img className="img-thumbnail p-3" src={team4} alt="Team Member 4" />
            </div>
            <div className="col-6 text-left">
              <h6>Officer Name</h6>
              <h6 className="text-muted font-weight-normal text-capitalize mb-2">Designation</h6>
              <p>Ipsum tempor tempor dolor no est diam duo dolore, dolor eos dolor amet erat clita amet.</p>
              <div className="d-flex justify-content-start">
                <a href=""><i className="fab fa-twitter mr-3"></i></a>
                <a href=""><i className="fab fa-facebook-f mr-3"></i></a>
                <a href=""><i className="fab fa-linkedin-in mr-3"></i></a>
                <a href=""><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Team;
