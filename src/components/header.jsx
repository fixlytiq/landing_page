import React from 'react';

const Header = () => (
    <header className="header">
        <div className="container nav">
            {/* Logo */}
            <a href="#" className="logo">
                <img src="/logoo.jpg" alt="Fixlytiq Logo" className="logo-img" />
                <span className="logo-text">fixlytiq</span>
            </a>
            
            {/* Navigation Links */}
            <nav className="header-nav-links">
                <a href="#features" className="nav-link">features</a>
                <a href="#about" className="nav-link">about</a>
                <a href="#contact" className="nav-link">contact</a>
            </nav>

            {/* CTA Button */}
            <a href="#" className="btn btn-primary btn-small">try demo</a>
        </div>
    </header>
);

export default Header;