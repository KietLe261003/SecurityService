import React from 'react';
import service1 from '@/Assests/img/service-1.jpg';
import service2 from '@/Assests/img/service-2.jpg';
import service3 from '@/Assests/img/service-3.jpg';
import service4 from '@/Assests/img/service-4.jpg';
import service5 from '@/Assests/img/service-5.jpg';
import service6 from '@/Assests/img/service-6.jpg';
const Services: React.FC = () => {
  return (
    <div className="container pt-5">
      <div className="d-flex flex-column text-center mb-5">
        <h5 className="text-primary mb-3">Our Services</h5>
        <h1 className="m-0">Premium Security Services</h1>
      </div>
      <div className="row pb-3">
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service1} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-desk font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Office Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service2} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-home font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Home Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service3} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-factory font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Industry Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service4} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-transportation font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Transport Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service5} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-desk font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Objects Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
        <div className="col-md-6 col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={service6} alt="" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h3 className="flaticon-bodyguard font-weight-normal d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white m-0 mr-3" style={{ width: '45px', height: '45px' }}></h3>
              <h6 className="card-title text-white text-truncate m-0">Private Security</h6>
            </div>
            <div className="card-footer">
              Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
