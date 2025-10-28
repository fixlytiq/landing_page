// Dynamic animations and interactions for Fixlytiq

// Animated Counter
export class AnimatedCounter {
    constructor(element, target, duration = 2000) {
        this.element = element;
        this.target = target;
        this.duration = duration;
        this.startTime = null;
        this.startValue = 0;
    }

    animate() {
        const animate = (currentTime) => {
            if (!this.startTime) this.startTime = currentTime;
            const progress = Math.min((currentTime - this.startTime) / this.duration, 1);
            
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            const currentValue = Math.floor(this.startValue + (this.target - this.startValue) * easeOutQuart);
            
            this.element.textContent = currentValue;
            
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        
        requestAnimationFrame(animate);
    }
}

// Scroll Reveal Animation
export class ScrollReveal {
    constructor() {
        this.elements = document.querySelectorAll('.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right');
        this.init();
    }

    init() {
        this.createObserver();
        this.elements.forEach(el => this.observer.observe(el));
    }

    createObserver() {
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('revealed');
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });
    }
}

// Parallax Effect
export class ParallaxEffect {
    constructor() {
        this.elements = document.querySelectorAll('[data-parallax]');
        this.init();
    }

    init() {
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        this.elements.forEach(el => {
            const speed = el.dataset.parallax || 0.5;
            const yPos = -(scrolled * speed);
            el.style.transform = `translateY(${yPos}px)`;
        });
    }
}

// Typewriter Effect
export class TypewriterEffect {
    constructor(element, text, speed = 100) {
        this.element = element;
        this.text = text;
        this.speed = speed;
        this.index = 0;
    }

    start() {
        this.element.textContent = '';
        this.type();
    }

    type() {
        if (this.index < this.text.length) {
            this.element.textContent += this.text.charAt(this.index);
            this.index++;
            setTimeout(() => this.type(), this.speed);
        }
    }
}

// Dynamic Text Replacement (Cred-style)
export class DynamicTextReplacement {
    constructor(element, texts, interval = 3000) {
        this.element = element;
        this.texts = texts;
        this.interval = interval;
        this.currentIndex = 0;
        this.isAnimating = false;
    }

    start() {
        this.element.textContent = this.texts[0];
        this.currentIndex = 0;
        
        setInterval(() => {
            this.nextText();
        }, this.interval);
    }

    nextText() {
        if (this.isAnimating) return;
        
        this.isAnimating = true;
        this.currentIndex = (this.currentIndex + 1) % this.texts.length;
        
        // Add glitch effect during transition
        this.element.classList.add('text-glitch');
        
        setTimeout(() => {
            this.element.textContent = this.texts[this.currentIndex];
            this.element.classList.remove('text-glitch');
            this.isAnimating = false;
        }, 300);
    }
}

// Text Morphing Effect
export class TextMorphingEffect {
    constructor(element, morphTexts, duration = 2000) {
        this.element = element;
        this.morphTexts = morphTexts;
        this.duration = duration;
        this.currentIndex = 0;
    }

    start() {
        this.element.textContent = this.morphTexts[0];
        
        setInterval(() => {
            this.morphToNext();
        }, this.duration);
    }

    morphToNext() {
        this.currentIndex = (this.currentIndex + 1) % this.morphTexts.length;
        
        // Add morphing animation
        this.element.classList.add('text-morph');
        
        setTimeout(() => {
            this.element.textContent = this.morphTexts[this.currentIndex];
            this.element.classList.remove('text-morph');
        }, 1000);
    }
}

// Glitch Text Effect
export class GlitchTextEffect {
    constructor(element, glitchInterval = 5000) {
        this.element = element;
        this.glitchInterval = glitchInterval;
        this.originalText = element.textContent;
    }

    start() {
        setInterval(() => {
            this.triggerGlitch();
        }, this.glitchInterval);
    }

    triggerGlitch() {
        this.element.classList.add('text-glitch');
        
        setTimeout(() => {
            this.element.classList.remove('text-glitch');
        }, 300);
    }
}

// Shimmer Text Effect
export class ShimmerTextEffect {
    constructor(element, shimmerInterval = 4000) {
        this.element = element;
        this.shimmerInterval = shimmerInterval;
    }

    start() {
        setInterval(() => {
            this.triggerShimmer();
        }, this.shimmerInterval);
    }

    triggerShimmer() {
        this.element.classList.add('text-shimmer');
        
        setTimeout(() => {
            this.element.classList.remove('text-shimmer');
        }, 2000);
    }
}

// Particle System
export class ParticleSystem {
    constructor(container) {
        this.container = container;
        this.particles = [];
        this.canvas = null;
        this.ctx = null;
        this.init();
    }

    init() {
        this.createCanvas();
        this.createParticles();
        this.animate();
    }

    createCanvas() {
        this.canvas = document.createElement('canvas');
        this.canvas.style.position = 'absolute';
        this.canvas.style.top = '0';
        this.canvas.style.left = '0';
        this.canvas.style.width = '100%';
        this.canvas.style.height = '100%';
        this.canvas.style.pointerEvents = 'none';
        this.canvas.style.zIndex = '1';
        
        this.container.appendChild(this.canvas);
        this.ctx = this.canvas.getContext('2d');
        
        this.resize();
        window.addEventListener('resize', () => this.resize());
    }

    resize() {
        this.canvas.width = this.container.offsetWidth;
        this.canvas.height = this.container.offsetHeight;
    }

    createParticles() {
        const particleCount = 50;
        for (let i = 0; i < particleCount; i++) {
            this.particles.push({
                x: Math.random() * this.canvas.width,
                y: Math.random() * this.canvas.height,
                vx: (Math.random() - 0.5) * 0.5,
                vy: (Math.random() - 0.5) * 0.5,
                size: Math.random() * 2 + 1,
                opacity: Math.random() * 0.5 + 0.1
            });
        }
    }

    animate() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
        
        this.particles.forEach(particle => {
            particle.x += particle.vx;
            particle.y += particle.vy;
            
            if (particle.x < 0 || particle.x > this.canvas.width) particle.vx *= -1;
            if (particle.y < 0 || particle.y > this.canvas.height) particle.vy *= -1;
            
            this.ctx.beginPath();
            this.ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
            this.ctx.fillStyle = `rgba(255, 255, 255, ${particle.opacity})`;
            this.ctx.fill();
        });
        
        requestAnimationFrame(() => this.animate());
    }
}

// Header Scroll Effect
export class HeaderScrollEffect {
    constructor() {
        this.header = document.querySelector('.header');
        this.init();
    }

    init() {
        if (!this.header) return;
        
        window.addEventListener('scroll', this.handleScroll.bind(this));
    }

    handleScroll() {
        const scrolled = window.pageYOffset;
        
        if (scrolled > 100) {
            this.header.classList.add('scrolled');
        } else {
            this.header.classList.remove('scrolled');
        }
    }
}

// Initialize all animations
export function initAnimations() {
    // Initialize scroll reveal
    new ScrollReveal();
    
    // Initialize parallax
    new ParallaxEffect();
    
    // Initialize header scroll effect
    new HeaderScrollEffect();
    
    // Initialize animated counters
    const counters = document.querySelectorAll('[data-counter]');
    counters.forEach(counter => {
        const target = parseInt(counter.dataset.counter);
        const animatedCounter = new AnimatedCounter(counter, target);
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    animatedCounter.animate();
                    observer.unobserve(entry.target);
                }
            });
        });
        
        observer.observe(counter);
    });
    
    // Initialize particle system for hero
    const heroSection = document.querySelector('.hero');
    if (heroSection) {
        new ParticleSystem(heroSection);
    }

    // Initialize Cred-style dynamic text effects
    initializeDynamicTextEffects();
}

// Initialize dynamic text effects
function initializeDynamicTextEffects() {
    // Subtle dynamic text replacement for CTA buttons (less frequent)
    const ctaButtons = document.querySelectorAll('.btn-primary');
    ctaButtons.forEach(button => {
        const dynamicTexts = [
            'LEARN MORE',
            'GET STARTED',
            'TRY DEMO'
        ];
        new DynamicTextReplacement(button, dynamicTexts, 8000).start(); // Increased interval
    });

    // Very subtle glitch effect for hero heading (much less frequent)
    const heroHeading = document.querySelector('.hero h1');
    if (heroHeading) {
        new GlitchTextEffect(heroHeading, 15000).start(); // Much less frequent
    }

    // Remove shimmer effect from hero paragraph - too distracting
    // const heroParagraph = document.querySelector('.hero p');
    // if (heroParagraph) {
    //     new ShimmerTextEffect(heroParagraph, 5000).start();
    // }

    // Remove text morphing for feature section heading - too distracting
    // const featureHeading = document.querySelector('.feature-section h2');
    // if (featureHeading) {
    //     const morphTexts = [
    //         'EFFICIENCY REDEFINED',
    //         'INNOVATION UNLEASHED',
    //         'PERFORMANCE OPTIMIZED',
    //         'TECHNOLOGY EVOLVED'
    //     ];
    //     new TextMorphingEffect(featureHeading, morphTexts, 3000).start();
    // }

    // Keep typewriter effect but make it more subtle
    const tagline = document.querySelector('.hero p');
    if (tagline) {
        const originalText = tagline.textContent;
        setTimeout(() => {
            const typewriter = new TypewriterEffect(tagline, originalText, 80); // Slower typing
            typewriter.start();
        }, 3000); // Delay longer
    }
}
