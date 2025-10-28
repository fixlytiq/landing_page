import React from 'react';

const CallToAction = () => (
    <section className="cta-section">
        <div className="container">
            <div>
                <h2 style={{color: 'var(--accent-color)', fontSize: '4rem', fontWeight: '300', marginBottom: '30px', letterSpacing: '-0.02em'}}>
                    not everyone<br />gets it
                </h2>
                <p style={{color: 'var(--secondary-text)', fontSize: '1.25rem', maxWidth: '600px', margin: '0 auto 40px', lineHeight: '1.5'}}>
                    like all good things in life, earning a fixlytiq membership is not easy; but the possibility of unlocking a greater future makes the effort worthwhile.
                </p>
                <a href="#" className="btn btn-primary" style={{fontSize: '1rem'}}>DOWNLOAD FIXLYTIQ</a>
            </div>
        </div>
    </section>
);

export default CallToAction;