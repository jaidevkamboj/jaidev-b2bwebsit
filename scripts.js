  // Enhanced JavaScript for interactive elements
        document.addEventListener('DOMContentLoaded', function() {
            // Hide loader when page is loaded
            setTimeout(function() {
                document.querySelector('.loader').style.opacity = '0';
                setTimeout(function() {
                    document.querySelector('.loader').style.display = 'none';
                }, 500);
            }, 1000);
            
            // Mobile menu toggle
            const mobileMenuBtn = document.getElementById('mobileMenuBtn');
            const mainNav = document.getElementById('mainNav');
            
            mobileMenuBtn.addEventListener('click', function() {
                mainNav.classList.toggle('active');
                const icon = mobileMenuBtn.querySelector('i');
                if (mainNav.classList.contains('active')) {
                    icon.classList.remove('fa-bars');
                    icon.classList.add('fa-times');
                } else {
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
            
            // Category buttons
            const categoryButtons = document.querySelectorAll('.category-btn');
            categoryButtons.forEach(button => {
                button.addEventListener('click', function() {
                    categoryButtons.forEach(btn => btn.classList.remove('active'));
                    this.classList.add('active');
                    // In a real application, this would filter products
                    showToast('Products filtered by ' + this.textContent, 'success');
                });
            });
            
            // Add to cart functionality
            const addToCartButtons = document.querySelectorAll('.add-to-cart');
            const cartCount = document.querySelector('.cart-count');
            let count = 3;
            
            addToCartButtons.forEach(button => {
                button.addEventListener('click', function() {
                    count++;
                    cartCount.textContent = count;
                    
                    // Show added feedback
                    const originalText = this.innerHTML;
                    this.innerHTML = '<i class="fas fa-check"></i> Added';
                    
                    // Show toast notification
                    showToast('Product added to cart successfully!', 'success');
                    
                    setTimeout(() => {
                        this.innerHTML = originalText;
                    }, 2000);
                });
            });
            
            // Quick view buttons
            const quickViewButtons = document.querySelectorAll('.quick-view');
            quickViewButtons.forEach(button => {
                button.addEventListener('click', function() {
                    showToast('Quick view feature would open product details', 'success');
                });
            });
            
            // Back to top button
            const backToTopBtn = document.getElementById('backToTop');
            
            window.addEventListener('scroll', function() {
                if (window.pageYOffset > 300) {
                    backToTopBtn.classList.add('visible');
                } else {
                    backToTopBtn.classList.remove('visible');
                }
            });
            
            backToTopBtn.addEventListener('click', function() {
                window.scrollTo({
                    top: 0,
                    behavior: 'smooth'
                });
            });
            
            // Toast notification function
            function showToast(message, type = 'success') {
                const toast = document.getElementById('toast');
                toast.textContent = message;
                toast.className = `toast ${type}`;
                toast.innerHTML = `
                    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
                    <span>${message}</span>
                `;
                toast.classList.add('show');
                
                setTimeout(() => {
                    toast.classList.remove('show');
                }, 3000);
            }
            
            // Animation on scroll
            function animateOnScroll() {
                const elements = document.querySelectorAll('.feature-card, .product-card, .b2b-feature, .testimonial-card');
                
                elements.forEach(element => {
                    const position = element.getBoundingClientRect();
                    
                    // If element is in viewport
                    if(position.top < window.innerHeight - 100) {
                        element.style.opacity = 1;
                        element.style.transform = 'translateY(0)';
                    }
                });
            }
            
            // Initialize elements for animation
            const animatedElements = document.querySelectorAll('.feature-card, .product-card, .b2b-feature, .testimonial-card');
            animatedElements.forEach(element => {
                element.style.opacity = 0;
                element.style.transform = 'translateY(20px)';
                element.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            });
            
            // Listen for scroll events
            window.addEventListener('scroll', animateOnScroll);
            // Initial check
            animateOnScroll();
        });
    