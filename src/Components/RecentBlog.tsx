import React from 'react';
import blog1 from '@/Assests/img/blog-1.jpg';
import blog2 from '@/Assests/img/blog-2.jpg';
import blog3 from '@/Assests/img/blog-3.jpg';

const RecentBlog: React.FC = () => {
  return (
    <div className="container pt-5">
      <div className="d-flex flex-column text-center mb-5">
        <h5 className="text-primary mb-3">Recent Blog</h5>
        <h1 className="m-0">Latest From Our Blog</h1>
      </div>
      <div className="row pb-3">
        <div className="col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={blog1} alt="Blog 1" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h6 className="card-title text-white text-truncate m-0 ml-3">Diam amet eos at no eos</h6>
              <a href="" className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto" style={{ width: '45px', height: '45px' }}></a>
            </div>
            <div className="card-footer py-3 px-4">
              <div className="d-flex mb-2">
                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
              </div>
              <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={blog2} alt="Blog 2" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h6 className="card-title text-white text-truncate m-0 ml-3">Diam amet eos at no eos</h6>
              <a href="" className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto" style={{ width: '45px', height: '45px' }}></a>
            </div>
            <div className="card-footer py-3 px-4">
              <div className="d-flex mb-2">
                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
              </div>
              <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.</p>
            </div>
          </div>
        </div>
        <div className="col-lg-4 mb-4">
          <div className="card mb-2 p-3">
            <img className="card-img-top" src={blog3} alt="Blog 3" />
            <div className="card-body bg-secondary d-flex align-items-center p-0">
              <h6 className="card-title text-white text-truncate m-0 ml-3">Diam amet eos at no eos</h6>
              <a href="" className="fa fa-link d-flex flex-shrink-0 align-items-center justify-content-center bg-primary text-white text-decoration-none m-0 ml-auto" style={{ width: '45px', height: '45px' }}></a>
            </div>
            <div className="card-footer py-3 px-4">
              <div className="d-flex mb-2">
                <small className="mr-3"><i className="fa fa-user text-primary"></i> Admin</small>
                <small className="mr-3"><i className="fa fa-folder text-primary"></i> Web Design</small>
                <small className="mr-3"><i className="fa fa-comments text-primary"></i> 15</small>
              </div>
              <p className="m-0">Diam amet eos at no eos sit lorem, amet rebum ipsum clita stet, diam sea est magna diam eos, rebum sit vero stet ipsum justo et.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecentBlog;
