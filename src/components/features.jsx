import React from 'react';

const coreFeatures = [
    { 
        title: "Effortless Ticket Management.", 
        icon: "🎫", 
        details: "Create, track, and update repair tickets in seconds. Keep customers informed with automated status updates from start to finish.",
        imageUrl: "/fe1.png"
    },
    { 
        title: "Never Lose a Part.", 
        icon: "📦", 
        details: "Real-time inventory tracking links directly to your repairs. Know what you have, what you need, and what you've used, automatically.",
        imageUrl: "/fe2.png"
    },
    { 
        title: "Seamless Point of Sale.", 
        icon: "💳", 
        details: "Process payments, manage invoices, and handle returns directly from the repair ticket. A faster checkout means happier customers.",
        imageUrl: "/fe3.png"
    },
    { 
        title: "Mobile Team & Vendor Control", 
        icon: "👥", 
        details: "Manage employee profiles, geo-fenced status tracking, salary, and employment history. Comprehensive vendor database with ratings and payment terms.",
        imageUrl: "/fe4.png"
    },
    { 
        title: "Geo-Location & Cross-Platform", 
        icon: "🌐", 
        details: "Built on React Native/Expo for flawless performance on iOS, Android, and Web. Includes customer location tracking and is ready for offline support.",
        imageUrl: "/fe5.png"
    },
    { 
        title: "Technical Foundation & Security", 
        icon: "🛠️", 
        details: "Modern stack (TypeScript, Supabase/PostgreSQL, TanStack Query), Zod form validation, professional UI, and deployment readiness (EAS Build, CI/CD).",
        imageUrl: "/fe6.png"
    },
];

const Features = () => (
    <section id="features" className="feature-section"> 
        <div className="container">
            
            <div style={{ marginBottom: '80px' }}>
                <h2 
                    style={{
                        color: 'var(--accent-color)',
                        fontSize: '4rem', 
                        fontWeight: '300',
                        lineHeight: '1.1',
                        margin: '0 0 20px 0',
                        letterSpacing: '-0.02em'
                    }}
                >
                    Command Every Repair,<br />From Check-In to Cash-Out.
                </h2>
                <p 
                    className="section-sub-text" 
                    style={{margin: '0 auto', maxWidth: '600px'}}
                >
                    if you're a field service professional, you're already a step ahead. every experience you unlock takes you higher up the pedestal.
                </p>
            </div>

            <div className="feature-grid">
                {coreFeatures.map((feature, index) => (
                    <div 
                        key={index} 
                        className="feature-card-new"
                        style={{
                            backgroundImage: `url(${feature.imageUrl})`,
                            zIndex: coreFeatures.length - index // Stack cards properly
                        }}
                    >
                        <h3>{feature.icon} {feature.title}</h3>
                        <p>{feature.details}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
);

export default Features;