import React from 'react';

const coreFeatures = [
    { 
        title: "Integrated Ticket Management", 
        icon: "🎫", 
        details: "Comprehensive ticket creation, real-time status tracking (Open, Resolved, Closed), priority levels, liability form uploads, and immediate technician assignment.",
        imageUrl: "/fe1.png" // FIXED: Changed to .png
    },
    { 
        title: "Intelligent Inventory & Stock", 
        icon: "📦", 
        details: "Complete tracking (parts, tools, accessories), financial valuation, category organization, and automated low stock alerts directly linked to vendor procurement.",
        imageUrl: "/fe2.png" // FIXED: Changed to .png
    },
    { 
        title: "Advanced Analytics & Reporting", 
        icon: "📈", 
        details: "Data-driven business overview reports, ticket analysis charts, status distribution, team productivity metrics, and customizable time range filtering.",
        imageUrl: "/fe3.png" // FIXED: Changed to .png
    },
    { 
        title: "Mobile Team & Vendor Control", 
        icon: "👥", 
        details: "Manage employee profiles, geo-fenced status tracking, salary, and employment history. Comprehensive vendor database with ratings and payment terms.",
        imageUrl: "/fe4.png" // FIXED: Changed to .png
    },
    { 
        title: "Geo-Location & Cross-Platform", 
        icon: "🌐", 
        details: "Built on React Native/Expo for flawless performance on iOS, Android, and Web. Includes customer location tracking and is ready for offline support.",
        imageUrl: "/fe5.png" // FIXED: Changed to .png
    },
    { 
        title: "Technical Foundation & Security", 
        icon: "🛠️", 
        details: "Modern stack (TypeScript, Supabase/PostgreSQL, TanStack Query), Zod form validation, professional UI, and deployment readiness (EAS Build, CI/CD).",
        imageUrl: "/fe6.png" // FIXED: Changed to .png
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
                    all that you<br />deserve. and<br />some more.
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