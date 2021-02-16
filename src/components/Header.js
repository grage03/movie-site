import React from 'react';

function Header() {
    return (
        <div className="header">
            <div className="header__container container">
                <nav className="header__nav nav">
                    <ul className="nav__inner">
                        <li className="nav__item">movies</li>
                        <li className="nav__item">serials</li>
                    </ul>
                </nav>
            </div>
        </div>
    );
}

export default Header;
