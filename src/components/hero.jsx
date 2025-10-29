import React from 'react';

const Hero = () => {
    const handleDemoClick = () => {
        console.log("Starting trial...");
    };

    return (
        <section className="hero">
            {/* Phone Assembly Animation */}
            <div className="phone-assembly">
                {/* Phone Screen */}
                <div className="phone-part phone-screen">
                    <div className="screen-content">
                        <div className="status-bar"></div>
                        <div className="app-grid">
                            <div className="app-icon"></div>
                            <div className="app-icon"></div>
                            <div className="app-icon"></div>
                            <div className="app-icon"></div>
                        </div>
                    </div>
                </div>
                
                {/* Phone Body */}
                <div className="phone-part phone-body">
                    <div className="camera-module"></div>
                    <div className="home-button"></div>
                </div>
                
                {/* Internal Components */}
                <div className="phone-part phone-battery"></div>
                <div className="phone-part phone-motherboard"></div>
                <div className="phone-part phone-camera"></div>
                <div className="phone-part phone-speaker"></div>
            </div>

            {/* The Main Content, which is absolutely centered */}
            <div className="container hero-content">
                <h1>A REFLECTION<br />OF EFFICIENCY.</h1>
                <p>Fixlytiq is the all-in-one command center for your repair business. Stop juggling spreadsheets, lost tickets, and clunky payment systems. Our integrated platform gives you total control over your workflow, from creating a repair ticket and tracking parts to processing payments and understanding your profits—all in one place.</p>
                
                <button 
                  className="btn btn-primary hero-cta" 
                  onClick={handleDemoClick}
                  style={{fontSize: '1rem', marginTop: '20px'}}
                >
                  LEARN MORE
                </button>
                
                <p style={{fontSize: '0.9rem', color: 'var(--secondary-text)', marginTop: '30px'}}>
                  crafted for the<br />field service professional
                </p>
            </div>
        </section>
    );
};

export default Hero;