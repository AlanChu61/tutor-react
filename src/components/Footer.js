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
            copyright: "© 2024 教师网站。保留所有权利。",
            privacyPolicy: "隐私政策",
            termsOfService: "服务条款"
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
                        <a href="/privacy-policy" className="text-light me-3">{content[language].privacyPolicy}</a>
                        <a href="/terms-of-service" className="text-light">{content[language].termsOfService}</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;