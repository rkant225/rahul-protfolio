import React from 'react'

const Contact = () => {
    return (
        <>
            <a name="CONTACT" ></a>
            <div className="contact-section-container">

                <div className="contact-me-header">Contact Me</div>

                <div className="contact-data-container">
                    <div className="contact-left-container">

                        {/* <div className="get-in-touch-header">Get in Touch</div> */}

                        <div className="get-in-touch-description">
                            Feel free to contact me via any of below mentioned ways. It will be great if I get a chance to help you or your organization.
                        </div>

                        <div className="all-contact-methods">

                            <a href="https://www.linkedin.com/in/rahul-singh-364830a4/" target="_blank">
                                <div className="contact-method-container">
                                    <i className="fa fa-user-o" aria-hidden="true"></i>
                                    <div className="contact-me-field-container">
                                        <div className="contact-me-key">Name</div>
                                        <div className="contact-me-value">Rahul Singh</div>
                                    </div>
                                </div>
                            </a>

                            <a href="mailto:rkant225@gmail.com" target="_blank">
                                <div className="contact-method-container">
                                    <i className="fa fa-envelope-o" aria-hidden="true"></i>
                                    <div className="contact-me-field-container">
                                        <div className="contact-me-key">E-Mail</div>
                                        <div className="contact-me-value">rkant225@gmail.com</div>
                                    </div>
                                </div>
                            </a>

                            <a href="tel:+919876416884" target="_blank">
                                <div className="contact-method-container">
                                    <i className="fa fa-mobile" aria-hidden="true"></i>
                                    <div className="contact-me-field-container">
                                        <div className="contact-me-key">Contact no.</div>
                                        <div className="contact-me-value">+91-9876416884</div>
                                    </div>
                                </div>
                            </a>

                            <a href="https://api.whatsapp.com/send?phone=919876416884&text=Hi Rahul...!!!" target="_blank">
                                <div className="contact-method-container">
                                    <i className="fa fa-whatsapp" aria-hidden="true"></i>
                                    <div className="contact-me-field-container">
                                        <div className="contact-me-key">Whatsapp no.</div>
                                        <div className="contact-me-value">+91-9876416884</div>
                                    </div>
                                </div>
                            </a>

                            <a href="https://github.com/rkant225" target="_blank">
                                <div className="contact-method-container">
                                    <i className="fa fa-github" aria-hidden="true"></i>
                                    <div className="contact-me-field-container">
                                        <div className="contact-me-key">GitHub</div>
                                        <div className="contact-me-value">@rkant225</div>
                                    </div>
                                </div>
                            </a>
                        </div>

                    </div>
                    <div className="contact-right-container">
                        

                    </div>
                </div>
            </div>
        </>
    )
}

export default Contact;