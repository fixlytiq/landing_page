import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Lenis from 'lenis';

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Initialize Lenis smooth scrolling
let lenis;

// Initialize GSAP animations with ScrollTrigger
export function initGSAPAnimations() {
    // Initialize Lenis smooth scrolling
    initLenis();
    
    // Set default ease for all animations
    gsap.defaults({ ease: "power4.out" });

    // Hero section animations
    initHeroAnimations();
    
    // Features section with scrollytelling
    initFeaturesScrollytelling();
    
    // About section animations
    initAboutAnimations();
    
    // POS section animations
    initPOSAnimations();
    
    // CTA section animations
    initCTAAnimations();
    
    // Header scroll effect
    initHeaderScrollEffect();
    
    // Dynamic text effects (keeping the subtle ones)
    initDynamicTextEffects();
}

// Initialize Lenis smooth scrolling
function initLenis() {
    lenis = new Lenis({
        duration: 1.2,
        easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
        direction: 'vertical',
        gestureDirection: 'vertical',
        smooth: true,
        mouseMultiplier: 1,
        smoothTouch: false,
        touchMultiplier: 2,
        infinite: false,
    });

    // Connect Lenis with GSAP ScrollTrigger
    lenis.on('scroll', ScrollTrigger.update);

    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);
}

// Hero section animations
function initHeroAnimations() {
    const tl = gsap.timeline();
    
    // Initialize phone assembly animation
    initPhoneAssemblyAnimation();
    
    // Animate hero elements on load with smoother timing
    tl.fromTo('.hero h1', 
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 1.5, ease: "power3.out" }
    )
    .fromTo('.hero p', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.2, ease: "power2.out" },
        '-=1.2'
    )
    .fromTo('.hero-cta', 
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.2, delay: 0.4, ease: "power2.out" },
        '-=0.8'
    )
    .fromTo('.hero h1::after', 
        { width: 0 },
        { width: '100%', duration: 2.5, delay: 0.8, ease: "power2.out" },
        '-=0.6'
    );

    // Hero heading hover effect (glow removed)
    // Removed text-shadow animation for cleaner look

    // Add hover event listeners
    document.querySelector('.hero h1')?.addEventListener('mouseenter', () => {
        gsap.to('.hero h1', { duration: 0.3, scale: 1.02 });
    });
    
    document.querySelector('.hero h1')?.addEventListener('mouseleave', () => {
        gsap.to('.hero h1', { duration: 0.3, scale: 1 });
    });
}

// Phone Assembly Animation - Realistic Technical Diagram Style
function initPhoneAssemblyAnimation() {
    const phoneAssembly = document.querySelector('.phone-assembly');
    if (!phoneAssembly) return;

    // Set initial state: Technical diagram style with organized Z-axis positioning
    gsap.set('.phone-body', { 
        z: -100, // Back layer
        opacity: 0
    });
    
    gsap.set('.phone-motherboard', { 
        z: -50, // Middle layer
        opacity: 0
    });
    
    gsap.set('.phone-battery', { 
        z: -50, // Middle layer
        opacity: 0
    });
    
    gsap.set('.phone-camera', { 
        z: -25, // Front-middle layer
        opacity: 0
    });
    
    gsap.set('.phone-speaker', { 
        z: -25, // Front-middle layer
        opacity: 0
    });
    
    gsap.set('.phone-screen', { 
        z: 100, // Front layer
        opacity: 0
    });

    // Create a single GSAP timeline linked to ScrollTrigger
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: '.hero',
            start: 'top top',
            end: 'bottom top',
            scrub: 1,
            pinSpacing: false,
            invalidateOnRefresh: true
        }
    });

    // Realistic assembly sequence: Back to front, like real phone assembly
    tl.to('.phone-body', { 
        z: 0, 
        opacity: 1,
        duration: 0.3
    }, 0) // First: Phone body foundation
      .to('.phone-motherboard, .phone-battery', { 
        z: 0, 
        opacity: 1,
        duration: 0.3
      }, 0.2) // Second: Internal components
      .to('.phone-camera, .phone-speaker', { 
        z: 0, 
        opacity: 1,
        duration: 0.3
      }, 0.4) // Third: Camera and speaker modules
      .to('.phone-screen', { 
        z: 0, 
        opacity: 1,
        duration: 0.3
      }, 0.6) // Finally: Screen seals the device
      .to(phoneAssembly, { 
        scale: 1.05, // Subtle growth as it assembles
        duration: 0.2
      }, 0.8); // Final touch: Scale up slightly
}

// REFACTORED Features section (Reveal and Stay)
function initFeaturesScrollytelling() {
    const featuresSection = document.querySelector('#features');
    const featureCards = gsap.utils.toArray('.feature-card-new');
    if (!featuresSection || featureCards.length === 0) return;

    gsap.to(featureCards, {
        opacity: 1,
        y: 0,
        stagger: 0.2,
        duration: 1,
        ease: "power2.out",
        scrollTrigger: {
            trigger: featuresSection,
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
}


// REFINED About section animations (Reveal and Stay)
function initAboutAnimations() {
    const aboutSection = document.querySelector('#about');
    const aboutLines = gsap.utils.toArray('.about-line');
    if (!aboutSection || aboutLines.length === 0) return;

    gsap.to(aboutLines, {
        opacity: 1,
        y: 0,
        duration: 1.5,
        ease: "power2.out",
        stagger: 0.2,
        scrollTrigger: {
            trigger: aboutSection,
            start: "top 70%",
            toggleActions: "play none none none"
        }
    });
}

// DYNAMIC & VISUALLY ENGAGING POS section animations
function initPOSAnimations() {
    const posSection = document.querySelector('#pos');
    const printerSlot = document.querySelector('.printer-slot');
    const receiptContent = document.querySelector('.receipt-content');
    const receiptLines = gsap.utils.toArray('.receipt-line'); // Get all lines
    if (!posSection || !receiptContent || receiptLines.length === 0) return;

    // Animate heading and subtitle as before
    gsap.to(['.pos-heading', '.pos-subtitle'], {
        opacity: 1, y: 0, duration: 1, stagger: 0.2, ease: "power2.out",
        scrollTrigger: {
            trigger: posSection, start: "top 70%", toggleActions: "play none none none"
        }
    });

    // --- Create a Master Timeline for the Receipt ---
    const tl = gsap.timeline({
        scrollTrigger: {
            trigger: printerSlot,
            start: "top 80%",
            toggleActions: "play none none none",
            invalidateOnRefresh: true
        }
    });

    // 1. Animate the receipt paper sliding up into view
    tl.fromTo(receiptContent,
        {
            y: () => printerSlot.offsetHeight,
            opacity: 1 // Keep paper visible
        },
        {
            y: 0,
            duration: 2.5,
            ease: "circ.out"
        }
    );

    // 2. Animate the lines appearing one-by-one, like they are being printed
    // The "<0.5" starts this animation 0.5s after the paper starts sliding up.
    tl.to(receiptLines, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        stagger: 0.05, // This is the magic: animates each line 0.05s after the last
        ease: "power1.inOut"
    }, "<0.5");
}

// CTA section animations
function initCTAAnimations() {
    const ctaSection = document.querySelector('#cta');
    const ctaHeading = document.querySelector('#cta h2');
    const ctaText = document.querySelector('#cta p');
    const ctaButton = document.querySelector('#cta .btn');

    if (!ctaSection) return;

    ScrollTrigger.create({
        trigger: ctaSection,
        start: "top 80%",
        end: "bottom 20%",
        onEnter: () => {
            gsap.fromTo(ctaHeading, 
                { opacity: 0, y: 50 },
                { opacity: 1, y: 0, duration: 1, ease: "expo.out" }
            );
            gsap.fromTo(ctaText, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 0.3, ease: "power4.out" }
            );
            gsap.fromTo(ctaButton, 
                { opacity: 0, y: 30 },
                { opacity: 1, y: 0, duration: 1, delay: 0.6, ease: "power4.out" }
            );
        }
    });

    // CTA button pulse effect
    gsap.to(ctaButton, {
        scale: 1.05,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: "power2.inOut"
    });
}

// Header scroll effect
function initHeaderScrollEffect() {
    const header = document.querySelector('.header');
    if (header) {
        ScrollTrigger.create({
            start: 'top -100', // When scroll passes 100px
            onUpdate: (self) => {
                if (self.direction === 1) { // Scrolling down
                    header.classList.add('scrolled');
                } else { // Scrolling up
                    header.classList.remove('scrolled');
                }
            }
        });
    }
}

// Dynamic text effects (keeping the subtle ones)
function initDynamicTextEffects() {
    // Skip dynamic text effects for now to avoid import issues
    console.log('Dynamic text effects disabled for stability');
}