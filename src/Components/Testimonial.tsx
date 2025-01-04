import React from 'react';
import testimonial1 from '@/Assests/img/testimonial-1.jpg';
import testimonial2 from '@/Assests/img/testimonial-2.jpg';
import testimonial3 from '@/Assests/img/testimonial-3.jpg';
import testimonial4 from '@/Assests/img/testimonial-4.jpg';

const Testimonial: React.FC = () => {
  return (
    <div className="container-fluid my-5 p-0 py-5" style={{ background: '#f6f6f6' }}>
      <div className="container p-0 py-5">
        <div className="d-flex flex-column text-center mb-5">
          <h5 className="text-primary mb-3">Testimonial</h5>
          <h1 className="m-0">What Our Clients Say</h1>
        </div>
        <div className=" flex testimonial-carousel">
          <div className="testimonial-item px-3">
            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita.
            </div>
            <div className="d-flex align-items-center">
              <img className="img-thumbnail bg-light rounded-circle" src={testimonial1} style={{ width: '80px', height: '80px', padding: '12px' }} alt="Image" />
              <div className="pl-4">
                <h6 className="text-primary">Client Name</h6>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item px-3">
            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita.
            </div>
            <div className="d-flex align-items-center">
              <img className="img-thumbnail bg-light rounded-circle" src={testimonial2} style={{ width: '80px', height: '80px', padding: '12px' }} alt="Image" />
              <div className="pl-4">
                <h6 className="text-primary">Client Name</h6>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item px-3">
            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita.
            </div>
            <div className="d-flex align-items-center">
              <img className="img-thumbnail bg-light rounded-circle" src={testimonial3} style={{ width: '80px', height: '80px', padding: '12px' }} alt="Image" />
              <div className="pl-4">
                <h6 className="text-primary">Client Name</h6>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
          <div className="testimonial-item px-3">
            <div className="testimonial-text position-relative border bg-light mb-4 py-3 px-4">
              Sed ea amet kasd elitr stet nonumy, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolores tempor voluptua ipsum sanctus clita.
            </div>
            <div className="d-flex align-items-center">
              <img className="img-thumbnail bg-light rounded-circle" src={testimonial4} style={{ width: '80px', height: '80px', padding: '12px' }} alt="Image" />
              <div className="pl-4">
                <h6 className="text-primary">Client Name</h6>
                <p className="m-0">Profession</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
