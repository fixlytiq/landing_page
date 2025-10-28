import React, { useEffect } from 'react';
import Header from './components/header';
import Hero from './components/hero';
import Features from './components/features';
import POS from './components/pos';
import CallToAction from './components/calltoaction';
import Footer from './components/footer';
import './styles/app.css';
import { initGSAPAnimations } from './utils/gsapAnimations';

const App = () => {
    useEffect(() => {
        // Initialize GSAP animations when component mounts
        initGSAPAnimations();
    }, []);

    return (
        <div className="fixlytiq-app">
            <Header />
            <main>
                <section id="hero" className="full-height-section">
                    <Hero />
                </section>
                <section id="features" className="full-height-section">
                    <Features />
                </section>
                <section id="pos" className="full-height-section">
                    <POS />
                </section>
                <section id="cta" className="full-height-section">
                    <CallToAction />
                </section>
            </main>
            <Footer />
        </div>
    );
};

export default App;