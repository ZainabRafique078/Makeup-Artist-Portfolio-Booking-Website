// Global Variables
let currentSlide = 0;
let currentBookingStep = 1;
let selectedService = null;
let bookingData = {};

// Portfolio data for lightbox
const portfolioData = [
    {
        title: "Romantic Bridal Look",
        description: "Soft glam with rose gold highlights perfect for a garden wedding",
        details: "Products used: Charlotte Tilbury Pillow Talk palette, Fenty Beauty foundation, Laura Mercier setting powder. Technique: Soft smoky eyes with champagne highlights, natural flush, glossy nude lips.",
        image: "Romantic Bridal Look.jpg"
    },
    {
        title: "Editorial Fantasy",
        description: "Bold artistic expression with creative color play",
        details: "Products used: Pat McGrath Labs eyeshadow, NARS blush, MAC lipstick. Technique: Graphic liner, bold color blocking, artistic placement for high-fashion photography.",
        image: "Editorial Fantasy.jpg"
    },
    {
        title: "Glamorous Night Out",
        description: "Dramatic smoky eyes with sophisticated elegance",
        details: "Products used: Urban Decay Naked palette, Too Faced Better Than Sex mascara, Anastasia Beverly Hills brow gel. Technique: Classic smoky eye with winged liner and bold lashes.",
        image: "Glamorous Night Out.jpg"
    },
    {
        title: "Natural Radiance",
        description: "Effortless beauty enhancement for everyday glow",
        details: "Products used: Glossier Cloud Paint, Rare Beauty foundation, Tower 28 cream blush. Technique: 'No-makeup makeup' look focusing on skin prep and natural enhancement.",
        image: "Natural Radiance.jpg"
    },
    {
        title: "Classic Bridal Elegance",
        description: "Timeless sophistication for the traditional bride",
        details: "Products used: Tom Ford foundation, Chanel rouge, YSL mascara. Technique: Classic beauty with defined eyes, sculpted brows, and romantic lips.",
        image: "Classic Bridal Elegance.jpg"
    },
    {
        title: "Avant-Garde Beauty",
        description: "Creative artistic vision pushing beauty boundaries",
        details: "Products used: Kryolan professional makeup, Ben Nye color wheel, Mehron setting spray. Technique: Experimental color theory and unconventional application methods.",
        image: "Avant-Garde Beauty.jpg"
    },
    {
        title: "Red Carpet Ready",
        description: "Bold and glamorous for special events",
        details: "Products used: Giorgio Armani Luminous Silk, Huda Beauty eyeshadow, Charlotte Tilbury contouring. Technique: Full glam with contouring, highlight, and statement eyes.",
        image: "Red Carpet Ready.jpg"
    },
    {
        title: "Everyday Elegance",
        description: "Fresh and natural glow for daily wear",
        details: "Products used: ILIA foundation, Milk Makeup cream products, Westman Atelier blush. Technique: Clean girl aesthetic with enhanced natural features.",
        image: "Everyday Elegance.jpg"
    },
    {
        title: "Garden Party Bride",
        description: "Soft romantic styling for outdoor celebrations",
        details: "Products used: Dior Backstage foundation, Flower Beauty blush, Glossier lip balm. Technique: Soft romance with peach tones and dewy finish.",
        image: "Garden Party Bride.jpg"
    },
    {
        title: "Fashion Forward",
        description: "Modern editorial style for contemporary shoots",
        details: "Products used: Make Up For Ever Artist Rouge, Shiseido foundation, Shu Uemura eyelash curler. Technique: Modern minimalism with precision application.",
        image: "Fashion Forward.jpg"
    }
];

// Blog posts data
const blogPosts = [
    {
        title: "10 Essential Bridal Makeup Tips",
        date: "March 15, 2025",
        category: "Bridal",
        image: "10 Essential Bridal Makeup Tips.jpg",
        content: `
            <p>Your wedding day is one of the most important days of your life, and your makeup should be nothing short of perfection. Here are my top 10 tips for achieving flawless bridal makeup that will photograph beautifully and last throughout your special day.</p>
            
            <h3>1. Start with Skincare</h3>
            <p>Great makeup begins with great skin. Start a skincare routine at least 3 months before your wedding. Focus on hydration, gentle exfoliation, and addressing any specific concerns.</p>
            
            <h3>2. Book a Trial</h3>
            <p>Never skip the makeup trial! This is your chance to test the look, ensure it photographs well, and make any necessary adjustments. Schedule it 4-6 weeks before the wedding.</p>
            
            <h3>3. Consider the Venue and Lighting</h3>
            <p>Indoor vs. outdoor weddings require different makeup approaches. Outdoor weddings need more definition to show up in natural light, while indoor venues may require different color choices.</p>
            
            <h3>4. Choose Long-Wearing Formulas</h3>
            <p>Your makeup needs to last 12+ hours through tears, kisses, and dancing. Invest in primer, setting spray, and waterproof formulas for eyes and lips.</p>
            
            <h3>5. Don't Forget Your Neck and Chest</h3>
            <p>Extend your foundation and any bronzing down to your neckline to ensure seamless coverage in your dress.</p>
        `
    },
    {
        title: "Pre-Makeup Skincare Routine",
        date: "March 10, 2025",
        category: "Skincare",
        image: "Pre-Makeup Skincare Routine.jpg",
        content: `
            <p>The secret to flawless makeup isn't just in the application—it's in the preparation. A proper skincare routine creates the perfect canvas for makeup application and ensures longevity.</p>
            
            <h3>Morning Routine</h3>
            <p>Start with a gentle cleanser, followed by a hydrating toner, lightweight moisturizer, and always finish with SPF. This creates a smooth, protected base.</p>
            
            <h3>Evening Routine</h3>
            <p>Double cleanse to remove all makeup, use a treatment serum targeting your specific concerns, and finish with a nourishing night moisturizer.</p>
            
            <h3>Weekly Treatments</h3>
            <p>Incorporate gentle exfoliation 2-3 times per week and a hydrating mask once weekly. Avoid harsh treatments 48 hours before important events.</p>
            
            <h3>Day-of Preparation</h3>
            <p>On the day of your makeup application, use a gentle cleanser, lightweight moisturizer, and primer. Avoid trying new products that might cause reactions.</p>
        `
    },
    {
        title: "Understanding Color Theory in Makeup",
        date: "March 5, 2025",
        category: "Tutorial",
        image: "Color Theory in Makeup.jpg",
        content: `
            <p>Color theory is fundamental to creating harmonious, flattering makeup looks. Understanding how colors work together can elevate your makeup game significantly.</p>
            
            <h3>Understanding Your Undertones</h3>
            <p>Determine whether you have warm, cool, or neutral undertones. This affects everything from foundation matching to eyeshadow and lip color selection.</p>
            
            <h3>Complementary Colors</h3>
            <p>Colors opposite on the color wheel enhance each other. Blue eyes pop with orange-toned shadows, while green eyes are enhanced by reds and purples.</p>
            
            <h3>Monochromatic Looks</h3>
            <p>Using different shades of the same color family creates sophisticated, cohesive looks. Try varying intensities of the same color across eyes, cheeks, and lips.</p>
            
            <h3>Seasonal Color Adaptation</h3>
            <p>Adjust your color palette seasonally. Warmer tones work beautifully in autumn, while cooler tones complement winter's crisp atmosphere.</p>
        `
    },
    {
        title: "Essential Makeup Tools Every Woman Needs",
        date: "February 28, 2025",
        category: "Tools",
        image: "Essential Makeup Tools .jpg",
        content: `
            <p>Having the right tools can make the difference between amateur and professional-looking makeup. Here's my curated list of essential brushes and tools for every makeup enthusiast.</p>
            
            <h3>Face Brushes</h3>
            <p>Foundation brush or beauty sponge, powder brush, blush brush, and contour brush. Quality matters more than quantity—invest in a few excellent brushes rather than many mediocre ones.</p>
            
            <h3>Eye Brushes</h3>
            <p>Flat shader, blending brush, small detail brush, and angled liner brush. These four brushes can create virtually any eye look when used correctly.</p>
            
            <h3>Essential Tools</h3>
            <p>Eyelash curler, tweezers, makeup sponges, and spoolie brushes. These tools help perfect your application and maintain your look throughout the day.</p>
            
            <h3>Brush Care</h3>
            <p>Clean brushes weekly with gentle soap or brush cleanser. Well-maintained brushes perform better and last longer, making them a worthwhile investment.</p>
        `
    },
    {
        title: "Spring 2025 Makeup Trends",
        date: "February 25, 2025",
        category: "Trends",
        image: "Spring 2025 Makeup Trends.jpg",
        content: `
            <p>Spring 2025 brings fresh, optimistic beauty trends that celebrate natural radiance and playful creativity. Here are the key trends to watch this season.</p>
            
            <h3>Dewy Glass Skin</h3>
            <p>The glass skin trend continues with an emphasis on healthy, hydrated complexions that glow from within. Focus on skincare and light coverage foundations.</p>
            
            <h3>Soft Color Washes</h3>
            <p>Watercolor-inspired makeup with soft, blended edges. Think diffused pastels across eyes and cheeks for an ethereal, romantic effect.</p>
            
            <h3>Bold Lower Lashes</h3>
            <p>Dramatic lower lash emphasis with colored mascaras and creative liner placement. This trend adds unexpected drama while keeping the overall look fresh.</p>
            
            <h3>Glossy Everything</h3>
            <p>High-shine finishes on lips, lids, and even cheeks. The key is strategic placement to avoid looking overdone while embracing the lustrous trend.</p>
        `
    },
    {
        title: "Making Your Makeup Last All Day",
        date: "February 20, 2025",
        category: "Tips",
        image: "Making Your Makeup Last All Day.jpg",
        content: `
            <p>Long-wearing makeup is essential for busy days, special events, and humid weather. Here are professional techniques to ensure your makeup stays perfect from morning to night.</p>
            
            <h3>Prime Everything</h3>
            <p>Use face primer, eye primer, and lip primer. These create a grippy base that helps makeup adhere better and last longer throughout the day.</p>
            
            <h3>Layering Technique</h3>
            <p>Apply products in thin layers rather than one thick application. This prevents caking and creates a more natural, long-lasting finish.</p>
            
            <h3>Setting Strategy</h3>
            <p>Use powder to set cream products, then finish with setting spray. The sandwich method (spray, powder, spray) provides maximum staying power.</p>
            
            <h3>Touch-Up Kit</h3>
            <p>Carry lipstick, powder, and blotting papers for quick touch-ups. Sometimes a simple refresh is all you need to look perfect again.</p>
        `
    },
    {
        title: "Top 10 Foundations for Every Skin Type",
        date: "February 15, 2025",
        category: "Reviews",
        image: "Foundations for Every Skin Type.jpg",
        content: `
            <p>After testing hundreds of foundations, here are my top recommendations for different skin types and coverage preferences. These have been tested on real clients with various skin concerns.</p>
            
            <h3>For Dry Skin</h3>
            <p>Giorgio Armani Luminous Silk and NARS Natural Radiant Longwear provide beautiful hydration while maintaining coverage throughout the day.</p>
            
            <h3>For Oily Skin</h3>
            <p>Estée Lauder Double Wear and Fenty Beauty Pro Filt'r offer excellent oil control without looking cakey or settling into pores.</p>
            
            <h3>For Sensitive Skin</h3>
            <p>BareMinerals Original and ILIA Super Serum Skin Tint provide coverage while being gentle on reactive skin types.</p>
            
            <h3>For Mature Skin</h3>
            <p>Charlotte Tilbury Magic Foundation and Laura Mercier Flawless Lumière provide coverage without settling into fine lines.</p>
        `
    },
    {
        title: "Mastering the Perfect Smoky Eye",
        date: "February 10, 2025",
        category: "Tutorial",
        image: "Mastering the Perfect Smoky Eye.jpg",
        content: `
            <p>The smoky eye is a timeless look that works for any occasion when executed properly. Master these techniques to create various smoky eye intensities.</p>
            
            <h3>Classic Black Smoky Eye</h3>
            <p>Start with eyeshadow primer, build color gradually from light to dark, blend thoroughly between each step. The key is patience and proper blending.</p>
            
            <h3>Colorful Smoky Variations</h3>
            <p>Try navy for blue eyes, burgundy for green eyes, or bronze for brown eyes. The same technique applies—just substitute colors while maintaining the gradient effect.</p>
            
            <h3>Daytime Smoky Eye</h3>
            <p>Use neutral browns and taupes for a softer, work-appropriate version. Focus on technique rather than intensity for professional settings.</p>
            
            <h3>Common Mistakes to Avoid</h3>
            <p>Don't use too much product at once, always blend upward and outward, and remember that less is more when building intensity.</p>
        `
    },
    {
        title: "Common Makeup Mistakes to Avoid",
        date: "February 5, 2025",
        category: "Tips",
        image: "Common Makeup Mistakes to Avoid.jpg",
        content: `
            <p>Even experienced makeup enthusiasts make common mistakes that can undermine their look. Here are the most frequent errors I see and how to fix them.</p>
            
            <h3>Wrong Foundation Shade</h3>
            <p>Test foundation on your jawline in natural light, not on your hand or wrist. The right shade should disappear into your skin seamlessly.</p>
            
            <h3>Over-Powdering</h3>
            <p>Too much powder can make you look cakey and aged. Use powder only where you need it—typically T-zone and under eyes—and blend well.</p>
            
            <h3>Harsh Blush Placement</h3>
            <p>Blush should enhance your natural flush. Smile and apply to the apples of your cheeks, blending upward toward your temples for a lifting effect.</p>
            
            <h3>Neglecting Eyebrow Grooming</h3>
            <p>Well-groomed brows frame your face and can make or break your makeup look. Trim, tweeze, and fill as needed for polished results.</p>
        `
    },
    {
        title: "The Clean Beauty Movement",
        date: "January 30, 2025",
        category: "Beauty",
        image: "The Clean Beauty.jpg",
        content: `
            <p>Clean beauty has evolved from a trend to a movement, with consumers increasingly conscious about ingredients and sustainability. Here's what you need to know about clean makeup.</p>
            
            <h3>Understanding Clean Beauty</h3>
            <p>Clean beauty emphasizes non-toxic, sustainably sourced ingredients without compromising performance. It's about transparency and environmental responsibility.</p>
            
            <h3>Key Ingredients to Avoid</h3>
            <p>Parabens, sulfates, phthalates, and synthetic fragrances are commonly avoided in clean formulations. However, remember that natural doesn't always mean better for everyone.</p>
            
            <h3>Top Clean Beauty Brands</h3>
            <p>RMS Beauty, ILIA, Kjaer Weis, and Westman Atelier offer high-performance clean formulations that rival traditional makeup in quality and longevity.</p>
            
            <h3>Making the Transition</h3>
            <p>Switch gradually, starting with products that touch your skin most (foundation, concealer) and working toward color cosmetics as you replace items.</p>
        `
    }
];

// DOM Content Loaded Event
document.addEventListener('DOMContentLoaded', function() {
    initializeWebsite();
    setupEventListeners();
    startHeroSlideshow();
    handleScrollEffects();
});

// Initialize Website
function initializeWebsite() {
    // Hide loading screen after 2 seconds
    setTimeout(() => {
        const loadingScreen = document.getElementById('loading-screen');
        loadingScreen.classList.add('hidden');
    }, 2000);
    
    // Set minimum date for booking to today
    const today = new Date().toISOString().split('T')[0];
    const bookingDate = document.getElementById('booking-date');
    if (bookingDate) {
        bookingDate.min = today;
    }
}

// Setup Event Listeners
function setupEventListeners() {
    // Mobile menu toggle
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('nav-menu');
    
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });
    
    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                navMenu.classList.remove('active');
                hamburger.classList.remove('active');
            }
        });
    });
    
    // Portfolio filtering
    const filterBtns = document.querySelectorAll('.filter-btn');
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');
            
            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');
            
            // Filter portfolio items
            portfolioItems.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => {
                        item.style.opacity = '1';
                        item.style.transform = 'scale(1)';
                    }, 100);
                } else {
                    item.style.opacity = '0';
                    item.style.transform = 'scale(0.8)';
                    setTimeout(() => {
                        item.style.display = 'none';
                    }, 300);
                }
            });
        });
    });
    
    // Service selection in booking
    const serviceOptions = document.querySelectorAll('.service-option');
    serviceOptions.forEach(option => {
        option.addEventListener('click', function() {
            serviceOptions.forEach(opt => opt.classList.remove('selected'));
            this.classList.add('selected');
            selectedService = {
                name: this.querySelector('h4').textContent,
                price: this.getAttribute('data-price')
            };
        });
    });
    
    // Contact form submission
    const contactForm = document.getElementById('contact-form');
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        handleContactFormSubmission();
    });
    
    // Scroll buttons
    const scrollTopBtn = document.getElementById('scroll-top');
    const scrollBottomBtn = document.getElementById('scroll-bottom');
    
    scrollTopBtn.addEventListener('click', () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
    
    scrollBottomBtn.addEventListener('click', () => {
        window.scrollTo({ top: document.body.scrollHeight, behavior: 'smooth' });
    });
}

// Hero Slideshow
function startHeroSlideshow() {
    const slides = document.querySelectorAll('.slide');
    const totalSlides = slides.length;
    
    setInterval(() => {
        slides[currentSlide].classList.remove('active');
        currentSlide = (currentSlide + 1) % totalSlides;
        slides[currentSlide].classList.add('active');
    }, 5000);
}

// Scroll Effects
function handleScrollEffects() {
    window.addEventListener('scroll', function() {
        const navbar = document.getElementById('navbar');
        const scrollTop = window.pageYOffset;
        const scrollTopBtn = document.getElementById('scroll-top');
        const scrollBottomBtn = document.getElementById('scroll-bottom');
        
        // Navbar background change
        if (scrollTop > 100) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Show/hide scroll buttons
        if (scrollTop > 300) {
            scrollTopBtn.classList.add('visible');
        } else {
            scrollTopBtn.classList.remove('visible');
        }
        
        if (scrollTop < document.body.scrollHeight - window.innerHeight - 300) {
            scrollBottomBtn.classList.add('visible');
        } else {
            scrollBottomBtn.classList.remove('visible');
        }
        
        // Parallax effect for hero section
        const hero = document.querySelector('.hero');
        const heroContent = document.querySelector('.hero-content');
        if (scrollTop < window.innerHeight) {
            heroContent.style.transform = `translateY(${scrollTop * 0.5}px)`;
        }
    });
}

// Lightbox Functions
function openLightbox(index) {
    const lightbox = document.getElementById('lightbox');
    const lightboxImage = document.getElementById('lightbox-image');
    const lightboxTitle = document.getElementById('lightbox-title');
    const lightboxDescription = document.getElementById('lightbox-description');
    const lightboxDetails = document.getElementById('lightbox-details');
    
    const item = portfolioData[index];
    
    lightboxImage.src = item.image;
    lightboxTitle.textContent = item.title;
    lightboxDescription.textContent = item.description;
    lightboxDetails.textContent = item.details;
    
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.getElementById('lightbox');
    lightbox.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Blog Functions
function openBlogPost(index) {
    const blogModal = document.getElementById('blog-modal');
    const blogModalImage = document.getElementById('blog-modal-image');
    const blogModalTitle = document.getElementById('blog-modal-title');
    const blogModalDate = document.getElementById('blog-modal-date');
    const blogModalCategory = document.getElementById('blog-modal-category');
    const blogModalBody = document.getElementById('blog-modal-body');
    
    const post = blogPosts[index];
    
    blogModalImage.src = post.image;
    blogModalTitle.textContent = post.title;
    blogModalDate.textContent = post.date;
    blogModalCategory.textContent = post.category;
    blogModalBody.innerHTML = post.content;
    
    blogModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeBlogPost() {
    const blogModal = document.getElementById('blog-modal');
    blogModal.classList.remove('active');
    document.body.style.overflow = 'auto';
}

// Booking System Functions
function nextStep() {
    if (!validateCurrentStep()) {
        return;
    }
    
    // Hide current step
    document.getElementById(`step-${currentBookingStep}`).classList.remove('active');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.add('completed');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.remove('active');
    
    // Show next step
    currentBookingStep++;
    document.getElementById(`step-${currentBookingStep}`).classList.add('active');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.add('active');
    
    // Update booking summary if on final step
    if (currentBookingStep === 4) {
        updateBookingSummary();
    }
}

function previousStep() {
    // Hide current step
    document.getElementById(`step-${currentBookingStep}`).classList.remove('active');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.remove('active');
    
    // Show previous step
    currentBookingStep--;
    document.getElementById(`step-${currentBookingStep}`).classList.add('active');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.add('active');
    document.querySelector(`[data-step="${currentBookingStep}"]`).classList.remove('completed');
}

function validateCurrentStep() {
    switch (currentBookingStep) {
        case 1:
            if (!selectedService) {
                alert('Please select a service');
                return false;
            }
            break;
        case 2:
            const date = document.getElementById('booking-date').value;
            const time = document.getElementById('booking-time').value;
            if (!date || !time) {
                alert('Please select both date and time');
                return false;
            }
            bookingData.date = date;
            bookingData.time = time;
            break;
        case 3:
            const name = document.getElementById('client-name').value;
            const email = document.getElementById('client-email').value;
            const phone = document.getElementById('client-phone').value;
            if (!name || !email || !phone) {
                alert('Please fill in all required fields');
                return false;
            }
            bookingData.name = name;
            bookingData.email = email;
            bookingData.phone = phone;
            bookingData.eventType = document.getElementById('event-type').value;
            bookingData.specialRequests = document.getElementById('special-requests').value;
            break;
    }
    return true;
}

function updateBookingSummary() {
    document.getElementById('summary-service').textContent = selectedService.name;
    document.getElementById('summary-date').textContent = new Date(bookingData.date).toLocaleDateString();
    document.getElementById('summary-time').textContent = bookingData.time;
    document.getElementById('summary-name').textContent = bookingData.name;
    document.getElementById('summary-price').textContent = `$${selectedService.price}`;
}

function confirmBooking() {
    // Here you would typically send the booking data to your backend
    alert(`Thank you ${bookingData.name}! Your booking for ${selectedService.name} on ${new Date(bookingData.date).toLocaleDateString()} at ${bookingData.time} has been submitted. You'll receive a confirmation email shortly with payment instructions.`);
    
    // Reset booking form
    resetBookingForm();
}

function resetBookingForm() {
    currentBookingStep = 1;
    selectedService = null;
    bookingData = {};
    
    // Reset UI
    document.querySelectorAll('.booking-step').forEach(step => step.classList.remove('active'));
    document.querySelectorAll('.progress-step').forEach(step => {
        step.classList.remove('active', 'completed');
    });
    
    document.getElementById('step-1').classList.add('active');
    document.querySelector('[data-step="1"]').classList.add('active');
    
    // Clear form fields
    document.querySelectorAll('.service-option').forEach(opt => opt.classList.remove('selected'));
    document.getElementById('booking-date').value = '';
    document.getElementById('booking-time').value = '';
    document.getElementById('client-name').value = '';
    document.getElementById('client-email').value = '';
    document.getElementById('client-phone').value = '';
    document.getElementById('event-type').value = '';
    document.getElementById('special-requests').value = '';
}

// Contact Form Handler
function handleContactFormSubmission() {
    const name = document.getElementById('contact-name').value;
    const email = document.getElementById('contact-email').value;
    const subject = document.getElementById('contact-subject').value;
    const message = document.getElementById('contact-message').value;
    
    if (!name || !email || !subject || !message) {
        alert('Please fill in all required fields');
        return;
    }
    
    // Here you would typically send the form data to your backend
    alert(`Thank you ${name}! Your message has been sent successfully. I'll get back to you within 24 hours.`);
    
    // Reset form
    document.getElementById('contact-form').reset();
}

// Close modals when clicking outside
document.addEventListener('click', function(e) {
    const lightbox = document.getElementById('lightbox');
    const blogModal = document.getElementById('blog-modal');
    
    if (e.target === lightbox) {
        closeLightbox();
    }
    
    if (e.target === blogModal) {
        closeBlogPost();
    }
});

// Keyboard navigation for modals
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeLightbox();
        closeBlogPost();
    }
});

// Animate elements on scroll
function animateOnScroll() {
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    });
    
    // Observe elements for animation
    document.querySelectorAll('.service-card, .portfolio-item, .blog-card').forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
}

// Initialize animations when DOM is loaded
document.addEventListener('DOMContentLoaded', animateOnScroll);

// Form validation helper
function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function validatePhone(phone) {
    const phoneRegex = /^\(\d{3}\)\s?\d{3}-\d{4}$/;
    return phoneRegex.test(phone) || phone.length >= 10;
}

// Performance optimization - lazy loading for images
function lazyLoadImages() {
    const images = document.querySelectorAll('img[data-src]');
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.classList.remove('lazy');
                imageObserver.unobserve(img);
            }
        });
    });
    
    images.forEach(img => imageObserver.observe(img));
}

// Initialize lazy loading
document.addEventListener('DOMContentLoaded', lazyLoadImages);

// Accessibility: Focus management for modals
function trapFocus(element) {
    const focusableElements = element.querySelectorAll(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const firstElement = focusableElements[0];
    const lastElement = focusableElements[focusableElements.length - 1];
    
    element.addEventListener('keydown', function(e) {
        if (e.key === 'Tab') {
            if (e.shiftKey && document.activeElement === firstElement) {
                e.preventDefault();
                lastElement.focus();
            } else if (!e.shiftKey && document.activeElement === lastElement) {
                e.preventDefault();
                firstElement.focus();
            }
        }
    });
    
    // Focus first element
    firstElement.focus();
}

// Enhanced lightbox with focus trap
function openLightboxEnhanced(index) {
    openLightbox(index);
    const lightbox = document.getElementById('lightbox');
    trapFocus(lightbox);
}

// Enhanced blog modal with focus trap
function openBlogPostEnhanced(index) {
    openBlogPost(index);
    const blogModal = document.getElementById('blog-modal');
    trapFocus(blogModal);
}

// Preload critical images for better performance
function preloadImages() {
    const criticalImages = [
        'https://images.pexels.com/photos/3992656/pexels-photo-3992656.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/3373714/pexels-photo-3373714.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop',
        'https://images.pexels.com/photos/3018845/pexels-photo-3018845.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop'
    ];
    
    criticalImages.forEach(src => {
        const img = new Image();
        img.src = src;
    });
}

// Initialize image preloading
document.addEventListener('DOMContentLoaded', preloadImages);

// Service worker registration for performance (optional)
if ('serviceWorker' in navigator) {
    window.addEventListener('load', function() {
        // Service worker would be registered here for caching
        console.log('Service worker support detected');
    });
}

// Analytics and tracking placeholder
function trackEvent(eventName, properties) {
    // Analytics tracking would be implemented here
    console.log(`Event: ${eventName}`, properties);
}

// Track important user interactions
document.addEventListener('click', function(e) {
    if (e.target.matches('.cta-button, .btn-primary')) {
        trackEvent('CTA_Click', { button: e.target.textContent });
    }
    
    if (e.target.matches('.portfolio-item, .view-btn')) {
        trackEvent('Portfolio_View', { item: e.target.closest('.portfolio-item')?.querySelector('h3')?.textContent });
    }
});

// Error handling for images
document.addEventListener('error', function(e) {
    if (e.target.tagName === 'IMG') {
        e.target.src = 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" width="400" height="300" viewBox="0 0 400 300"><rect width="400" height="300" fill="%23f3f4f6"/><text x="200" y="150" text-anchor="middle" fill="%239ca3af" font-family="Arial" font-size="14">Image not available</text></svg>';
    }
}, true);

// Smooth reveal animations for sections
function createScrollReveal() {
    const revealElements = document.querySelectorAll('.section-header, .about-text, .contact-info');
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.15
    });
    
    revealElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(50px)';
        el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
        revealObserver.observe(el);
    });
}

// Initialize scroll reveal
document.addEventListener('DOMContentLoaded', createScrollReveal);