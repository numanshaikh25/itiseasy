const Contact = () => {
    return (
        <section id="contact" className="contact">
            <div className="container" data-aos="fade-up">
                <div className="section-title"><br />
                    <h3><span>Contact Us</span></h3>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-6">
                        <div className="info-box mb-4">
                            <i className="bx bx-map" />
                            <h3>Our Address</h3>
                            <p>Mumbai, IN</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-envelope" />
                            <h3>Email Us</h3>
                            <p>info@itiseasy.in</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-phone-call" />
                            <h3>Call Us</h3>
                            <p>+91 8855008810</p>
                        </div>
                    </div>
                    <div className="col-lg-2 col-md-6">
                        <div className="info-box  mb-4">
                            <i className="bx bx-chat" />
                            <h3>WhatsApp</h3>
                            <p>+91 8855007701</p>
                        </div>
                    </div>
                </div>
                <div className="row" data-aos="fade-up" data-aos-delay={100}>
                    <div className="col-lg-6 ">
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d241317.11609823277!2d72.74109995709657!3d19.08219783958221!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c6306644edc1%3A0x5da4ed8f8d648c69!2sMumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1649221833876!5m2!1sen!2sin" style={{ border: 0 }} allowFullScreen loading="lazy" referrerPolicy="no-referrer-when-downgrade" width="100%" height={400} />
                    </div>
                    <div className="col-lg-6">
                        <form action="send" method="post" role="form" className="php-email-form" id="contact-form">
                            <div className="row">
                                <div className="col form-group">
                                    <input type="text" name="name" className="form-control" id="name" placeholder="Your Name" required />
                                </div>
                                <div className="col form-group">
                                    <input type="email" className="form-control" name="email" id="email" placeholder="Your Email" required />
                                </div>
                            </div>
                            <div className="form-group">
                                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required />
                            </div>
                            <div className="form-group">
                                <textarea className="form-control" name="message" rows={5} placeholder="Message" required defaultValue={""} />
                            </div>
                            <div className="my-3">
                                <div className="loading">Loading</div>
                                <div className="error-message" />
                                <div className="sent-message">Your message has been sent. Thank you!</div>
                            </div>
                            {/* <div class="text-center"><button type="button" onclick="onSendMsg($('#contact-form').serializeArray())">Send Message</button></div> */}
                            <div className="text-center"><button style={{ background: '#4D4D4D', border: 0, padding: '10px 30px', color: '#fff', transition: '0.4s', borderRadius: '4px' }}>Send Message</button></div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;