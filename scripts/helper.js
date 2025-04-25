/**
 * Resino Box Website Helper Functions
 * Contains utility functions for enhancing the website user experience
 */

// Handles smooth scrolling for anchor links
function initSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      
      const targetId = this.getAttribute('href');
      const targetElement = document.querySelector(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 100, // Offset for fixed header
          behavior: 'smooth'
        });
      }
    });
  });
}

// Create a back-to-top button that appears when scrolling down
function initBackToTopButton() {
  // Create button element
  const backToTopBtn = document.createElement('button');
  backToTopBtn.innerHTML = '<i class="fas fa-arrow-up"></i>';
  backToTopBtn.className = 'back-to-top';
  backToTopBtn.title = 'Back to Top';
  document.body.appendChild(backToTopBtn);
  
  // Show/hide button based on scroll position
  window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
      backToTopBtn.classList.add('visible');
    } else {
      backToTopBtn.classList.remove('visible');
    }
  });
  
  // Scroll to top when clicked
  backToTopBtn.addEventListener('click', () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  });
}

// Create image hover zoom effect for product items
function initProductImageZoom() {
  const productImages = document.querySelectorAll('.product-image-container img');
  
  productImages.forEach(img => {
    img.addEventListener('mousemove', function(e) {
      const { left, top, width, height } = this.getBoundingClientRect();
      const x = (e.clientX - left) / width * 100;
      const y = (e.clientY - top) / height * 100;
      
      this.style.transformOrigin = `${x}% ${y}%`;
    });
  });
}

// Add loading animation when page is loaded
function initPageLoadAnimation() {
  window.addEventListener('load', () => {
    document.body.classList.add('loaded');
  });
}

// Create a touch-friendly image gallery for mobile users
function initMobileGallery() {
  // Only initialize on mobile devices
  if (window.innerWidth <= 768) {
    const productItems = document.querySelectorAll('.product-item, .necklace-product');
    
    productItems.forEach(item => {
      const img = item.querySelector('img');
      if (!img) return;
      
      // Create fullscreen gallery when image is clicked
      img.addEventListener('click', function(e) {
        e.preventDefault();
        
        // Create gallery overlay
        const overlay = document.createElement('div');
        overlay.className = 'mobile-gallery-overlay';
        
        // Create image container
        const imgContainer = document.createElement('div');
        imgContainer.className = 'mobile-gallery-container';
        
        // Create close button
        const closeBtn = document.createElement('button');
        closeBtn.className = 'mobile-gallery-close';
        closeBtn.innerHTML = '<i class="fas fa-times"></i>';
        
        // Create image element
        const galleryImg = document.createElement('img');
        galleryImg.src = this.src;
        galleryImg.alt = this.alt;
        
        // Create caption with product details
        const caption = document.createElement('div');
        caption.className = 'mobile-gallery-caption';
        const title = item.querySelector('h3') ? item.querySelector('h3').textContent : '';
        const price = item.querySelector('.product-price') ? item.querySelector('.product-price').textContent : '';
        caption.innerHTML = `<h3>${title}</h3><p>${price}</p>`;
        
        // Append elements
        imgContainer.appendChild(galleryImg);
        overlay.appendChild(closeBtn);
        overlay.appendChild(imgContainer);
        overlay.appendChild(caption);
        document.body.appendChild(overlay);
        
        // Add animation
        setTimeout(() => {
          overlay.classList.add('active');
        }, 10);
        
        // Prevent body scrolling
        document.body.style.overflow = 'hidden';
        
        // Close gallery when close button is clicked
        closeBtn.addEventListener('click', closeGallery);
        
        // Close gallery when clicking outside image
        overlay.addEventListener('click', function(e) {
          if (e.target === overlay) {
            closeGallery();
          }
        });
        
        // Close gallery function
        function closeGallery() {
          overlay.classList.remove('active');
          setTimeout(() => {
            document.body.removeChild(overlay);
            document.body.style.overflow = '';
          }, 300);
        }
        
        // Enable swipe gestures
        let touchStartX = 0;
        let touchEndX = 0;
        
        overlay.addEventListener('touchstart', e => {
          touchStartX = e.changedTouches[0].screenX;
        });
        
        overlay.addEventListener('touchend', e => {
          touchEndX = e.changedTouches[0].screenX;
          handleSwipe();
        });
        
        function handleSwipe() {
          const swipeThreshold = 100;
          if (touchEndX < touchStartX - swipeThreshold) {
            // Swipe left - next image
            closeGallery();
          }
          if (touchEndX > touchStartX + swipeThreshold) {
            // Swipe right - previous image
            closeGallery();
          }
        }
      });
    });
  }
}

// Create a page transition effect
function initPageTransition() {
  const transition = document.querySelector('.page-transition');
  if (!transition) return;
  
  // Store links for page navigation
  const links = document.querySelectorAll('a:not([href^="#"]):not([target="_blank"])');
  
  links.forEach(link => {
    link.addEventListener('click', function(e) {
      const href = this.getAttribute('href');
      
      // Only for internal links
      if (href && href.indexOf('http') !== 0) {
        e.preventDefault();
        
        // Show transition
        transition.classList.add('active');
        
        // Navigate after transition
        setTimeout(() => {
          window.location.href = href;
        }, 500);
      }
    });
  });
  
  // Hide transition on page load
  window.addEventListener('pageshow', function() {
    transition.classList.remove('active');
  });
}

// Initialize all helper functions when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  initSmoothScroll();
  initBackToTopButton();
  initProductImageZoom();
  initPageLoadAnimation();
  initMobileGallery();
  initPageTransition();
  
  // Log initialization message
  console.log('Resino Box website enhancements initialized');
}); 