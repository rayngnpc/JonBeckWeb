// ============================================
// JON BECK PHOTOGRAPHY WEBSITE SCRIPT
// ============================================

document.addEventListener('DOMContentLoaded', function() {
    initPageLoadAnimation();
    initEnhancedNavigation();
    initScrollEffects();
    initHeroSlideshow();
    initPortfolioFilter();
    initEnhancedAnimations();
    initLazyLoading();
    initScrollToTopButton();
    initFormValidation();
});

// 1. Page Load Animation
function initPageLoadAnimation() {
    const loader = document.getElementById('pageLoader');

    window.addEventListener('load', () => {
        document.body.classList.add('page-loaded');

        if (loader) {
            loader.classList.add('hidden');
        }
    });
}

// 2. Enhanced Navigation & Mobile Menu
function initEnhancedNavigation() {
    const navbar = document.querySelector('.custom-navbar');
    const navLinks = document.querySelectorAll('.navbar-nav .nav-link');
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('.navbar-collapse');

    // Handle mobile menu opening/closing for body scroll
    if (navbarToggler) {
        navbarToggler.addEventListener('click', function() {
            if (navbarCollapse.classList.contains('show')) {
                document.body.style.overflow = 'hidden';
            } else {
                document.body.style.overflow = '';
            }
        });
    }

    // Function to handle scroll-based navbar changes
    function handleScroll() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    }

    // Function to close mobile menu
    function closeMenu() {
        if (navbarCollapse.classList.contains('show')) {
            navbarToggler.click(); // Simulate click to trigger Bootstrap's collapse
            document.body.style.overflow = '';
        }
    }

    // Smooth scroll for anchor links & close menu on click
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const href = this.getAttribute('href');
            // Check if it's an on-page link
            if (href.startsWith('#') && href.length > 1) {
                const targetElement = document.querySelector(href);
                if (targetElement) {
                    e.preventDefault();
                    targetElement.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    closeMenu();
                }
            }
        });
    });

    // Highlight active nav link on scroll
    function highlightNavOnScroll() {
        let currentSection = '';
        const sections = document.querySelectorAll('section[id]');
        
        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            if (scrollY >= sectionTop - 150) {
                currentSection = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${currentSection}`) {
                link.classList.add('active');
            }
        });
    }

    window.addEventListener('scroll', () => {
        handleScroll();
        highlightNavOnScroll();
    });
    
    // Initial check
    handleScroll();
    highlightNavOnScroll();
}

// 3. Scroll Effects (for elements other than navbar)
function initScrollEffects() {
    // This can be expanded with more scroll-triggered animations if needed
}

// 4. Hero Slideshow
function initHeroSlideshow() {
    const slides = document.querySelectorAll('.hero-slide');
    if (slides.length <= 1) return;

    let currentSlide = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            if (i === index) {
                slide.classList.add('active');
            } else {
                slide.classList.remove('active');
            }
        });
    }

    showSlide(currentSlide);

    setInterval(() => {
        currentSlide = (currentSlide + 1) % slides.length;
        showSlide(currentSlide);
    }, 7000); // Change slide every 7 seconds
}

// 5. Portfolio Filter
function initPortfolioFilter() {
    const filterButtons = document.querySelectorAll('.filter-buttons .btn-filter');
    const portfolioCollections = document.querySelectorAll('.portfolio-collection');

    if (filterButtons.length === 0 || portfolioCollections.length === 0) return;

    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            filterButtons.forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');

            const filterValue = this.getAttribute('data-filter');

            portfolioCollections.forEach(collection => {
                const matchesFilter = filterValue === 'all' || collection.dataset.category === filterValue;

                if (matchesFilter) {
                    collection.classList.remove('collection-hidden');
                } else {
                    collection.classList.add('collection-hidden');
                }
            });
        });
    });
}

// 6. Enhanced Animations on Scroll
function initEnhancedAnimations() {
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('fade-in-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);
    
    document.querySelectorAll('.fade-in-section').forEach(section => {
        observer.observe(section);
    });
}

// 7. Lazy Loading for Images
function initLazyLoading() {
    if ('IntersectionObserver' in window) {
        const imageObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                    }
                    img.classList.remove('lazy');
                    img.classList.add('loaded');
                    observer.unobserve(img);
                }
            });
        });

        document.querySelectorAll('img[data-src]').forEach(img => {
            img.classList.add('lazy');
            imageObserver.observe(img);
        });
    }
}

// 8. Scroll to Top Button
function initScrollToTopButton() {
    let scrollBtn = null;

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            if (!scrollBtn) {
                scrollBtn = document.createElement('button');
                scrollBtn.id = 'scrollToTopBtn';
                scrollBtn.innerHTML = '↑';
                scrollBtn.style.cssText = `
                    position: fixed;
                    bottom: 20px;
                    right: 20px;
                    width: 45px;
                    height: 45px;
                    background-color: var(--charcoal);
                    color: var(--pure-white);
                    border: none;
                    border-radius: 50%;
                    cursor: pointer;
                    font-size: 22px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    z-index: 1000;
                    opacity: 0;
                    transform: translateY(10px);
                    transition: all 0.3s ease;
                `;
                document.body.appendChild(scrollBtn);
                
                setTimeout(() => {
                    scrollBtn.style.opacity = '1';
                    scrollBtn.style.transform = 'translateY(0)';
                }, 10);

                scrollBtn.addEventListener('click', function() {
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                });
            }
        } else {
            if (scrollBtn) {
                scrollBtn.style.opacity = '0';
                scrollBtn.style.transform = 'translateY(10px)';
                setTimeout(() => {
                    if (scrollBtn) {
                        scrollBtn.remove();
                        scrollBtn = null;
                    }
                }, 300);
            }
        }
    });
}

// 9. Form Validation
function initFormValidation() {
    const contactForm = document.querySelector('#contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const requiredFields = contactForm.querySelectorAll('[required]');
            let isValid = true;
            
            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    field.classList.add('is-invalid');
                    isValid = false;
                } else {
                    field.classList.remove('is-invalid');
                }
            });
            
            if (isValid) {
                const submitBtn = contactForm.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;
                
                // Simulate form submission
                setTimeout(() => {
                    submitBtn.textContent = 'Message Sent!';
                    submitBtn.classList.add('btn-success');
                    
                    setTimeout(() => {
                        submitBtn.textContent = originalText;
                        submitBtn.disabled = false;
                        submitBtn.classList.remove('btn-success');
                        contactForm.reset();
                        requiredFields.forEach(field => field.classList.remove('is-invalid'));
                    }, 2500);
                }, 1500);
            }
        });
    }
}