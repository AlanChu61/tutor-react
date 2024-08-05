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
            title: "聯繫我",
            name: "姓名",
            email: "郵箱",
            message: "留言",
            send: "發送"
        }
    };

    return (
        <section id="contact" className="py-5 bg-light">
            <div className="container">
                <h2 className="text-center mb-4">{content[language].title}</h2>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <form>
                            <div className="mb-3">
                                <input type="text" className="form-control" placeholder={content[language].name} />
                            </div>
                            <div className="mb-3">
                                <input type="email" className="form-control" placeholder={content[language].email} />
                            </div>
                            <div className="mb-3">
                                <textarea className="form-control" rows="5" placeholder={content[language].message}></textarea>
                            </div>
                            <button type="submit" className="btn btn-primary">{content[language].send}</button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Contact;