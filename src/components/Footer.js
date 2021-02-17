import React from 'react';

function Footer(props) {
    return (
        <div className="footer">
            <div className="footer__container container">
                <ul className="footer__information">
                    <li className="footer__item">(c) {new Date().getFullYear()}</li>
                    <li className="footer__item">by grage</li>
                </ul>
            </div>
        </div>
    );
}

export default Footer;