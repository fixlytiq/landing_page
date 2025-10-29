import React from 'react';

const CallToAction = () => (
    <section className="cta-section">
        <div className="container">
            <div>
                <h2 style={{color: 'var(--accent-color)', fontSize: '4rem', fontWeight: '300', marginBottom: '30px', letterSpacing: '-0.02em'}}>
                    Ready to Stop<br />Juggling and Start Growing?
                </h2>
                <p style={{color: 'var(--secondary-text)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.5'}}>
                    Leave the chaos of paperwork and disconnected apps behind. See how Fixlytiq can streamline your operations, impress your customers, and give you the data you need to build a more profitable business.
                </p>
                <a href="#" className="btn btn-primary" style={{fontSize: '1rem'}}>Request a Live Demo</a>
            </div>
        </div>
    </section>
);

export default CallToAction;