import React from 'react';
import { useLanguage } from '../App';

function Footer() {
    const { language } = useLanguage();

    const content = {
        en: {
            copyright: "© 2024 Teacher Website. All rights reserved.",
            privacyPolicy: "Privacy Policy",
            termsOfService: "Terms of Service"
        },
        zh: {
            copyright: "© 2024 教師網站。保留所有權利。",
            privacyPolicy: "隱私政策",
            termsOfService: "服務條款"
        }
    };

    return (
        <footer className="bg-dark text-light py-4">
            <div className="container">
                <div className="row">
                    <div className="col-md-6">
                        <p>{content[language].copyright}</p>
                    </div>
                    <div className="col-md-6 text-md-end">
                        <a href="#" className="text-light me-3">{content[language].privacyPolicy}</a>
                        <a href="#" className="text-light">{content[language].termsOfService}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;