import React from 'react';

const Footer = () => (
    <footer className="footer">
        <div className="container" style={{ padding: '60px 20px', textAlign: 'center' }}>
            
            <div style={{ marginBottom: '40px' }}>
                <p style={{ color: 'var(--accent-color)', fontSize: '24px', fontWeight: '600', marginBottom: '20px', letterSpacing: '-0.02em' }}>fixlytiq</p>
                <p style={{ color: 'var(--secondary-text)', fontSize: '0.9rem', marginBottom: '40px' }}>complete security. no asterisks.</p>
            </div>

            {/* Navigation Links */}
            <div style={{ display: 'flex', justifyContent: 'center', gap: '60px', marginBottom: '40px', flexWrap: 'wrap' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <a href="#features" className="nav-link" style={{fontSize: '14px'}}>features</a>
                    <a href="#about" className="nav-link" style={{fontSize: '14px'}}>about</a>
                    <a href="#" className="nav-link" style={{fontSize: '14px'}}>careers</a>
                </div>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                    <a href="#" className="nav-link" style={{fontSize: '14px'}}>privacy policy</a>
                    <a href="#" className="nav-link" style={{fontSize: '14px'}}>terms and conditions</a>
                    <a href="#" className="nav-link" style={{fontSize: '14px'}}>customer care</a>
                </div>
            </div>

            {/* Copyright Line */}
            <div style={{ color: 'var(--secondary-text)', fontSize: '0.8rem' }}>
                <p>copyright © 2025 fixlytiq solutions. all rights reserved.</p>
            </div>
        </div>
    </footer>
);

export default Footer;