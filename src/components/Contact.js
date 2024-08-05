import React from 'react';
import { useLanguage } from '../App';

function Contact() {
    const { language } = useLanguage();

    const content = {
        en: {
            title: "Contact Me",
            name: "Name",
            email: "Email",
            message: "Message",
            send: "Send"
        },
        zh: {
            title: "联系我",  // Simplified Chinese
            name: "姓名",
            email: "邮箱",
            message: "留言",
            send: "发送"
        }
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form
                            name="contact" // Form name should match the name used for Netlify
                            method="POST" // Use POST method
                            data-netlify="true" // Enables Netlify form handling
                            data-netlify-honeypot="bot-field" // Honeypot field for spam prevention
                        >
                            {/* Hidden field for Netlify's honeypot spam filter */}
                            <input type="hidden" name="form-name" value="contact" />

                            {/* Honeypot field (invisible to users) */}
                            <p hidden>
                                <label>
                                    Don't fill this out: <input name="bot-field" />
                                </label>
                            </p>

                            <div className="mb-3">
                                <input
                                    type="text"
                                    name="name" // Name attributes should match the form data
                                    className="form-control"
                                    placeholder={content[language].name}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <input
                                    type="email"
                                    name="email" // Name attributes should match the form data
                                    className="form-control"
                                    placeholder={content[language].email}
                                    required
                                />
                            </div>
                            <div className="mb-3">
                                <textarea
                                    name="message" // Name attributes should match the form data
                                    className="form-control"
                                    rows="5"
                                    placeholder={content[language].message}
                                    required
                                ></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">
                                {content[language].send}
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;