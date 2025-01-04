const ContactPage = () => {
    return (
        <div className="container-fluid pt-5">
            <div className="d-flex flex-column text-center mb-5">
                <h5 className="text-primary mb-3">Contact Us</h5>
                <h1 className="m-0">Contact For Any Query</h1>
            </div>
            <div className="row">
                <div className="col-12 p-0">
                    <iframe
                        style={{ width: "100%", height: "500px", border: 0 }}
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3001156.4288297426!2d-78.01371936852176!3d42.72876761954724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4ccc4bf0f123a5a9%3A0xddcfc6c1de189567!2sNew%20York%2C%20USA!5e0!3m2!1sen!2sbd!4v1603794290143!5m2!1sen!2sbd"
                        allowFullScreen
                        aria-hidden="false"
                        tabIndex={0}
                    ></iframe>
                </div>
                <div className="col-12">
                    <div className="contact-form bg-white">
                        <form name="sentMessage" id="contactForm" noValidate>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="name"
                                    placeholder="Your Name"
                                    required
                                    data-validation-required-message="Please enter your name"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="email"
                                    className="form-control"
                                    id="email"
                                    placeholder="Your Email"
                                    required
                                    data-validation-required-message="Please enter your email"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <input
                                    type="text"
                                    className="form-control"
                                    id="subject"
                                    placeholder="Subject"
                                    required
                                    data-validation-required-message="Please enter a subject"
                                />
                                <p className="help-block text-danger"></p>
                            </div>
                            <div className="control-group">
                                <textarea
                                    className="form-control"
                                    rows={6}
                                    id="message"
                                    placeholder="Message"
                                    required
                                    data-validation-required-message="Please enter your message"
                                ></textarea>
                                <p className="help-block text-danger"></p>
                            </div>
                            <div>
                                <button className="btn btn-primary" type="submit" id="sendMessageButton">
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ContactPage;