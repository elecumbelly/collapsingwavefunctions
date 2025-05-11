document.addEventListener('DOMContentLoaded', () => {
  console.log("Collapsing Wave Functions - Site Loaded");
  
  // Ensure navigation links work properly
  const navLinks = document.querySelectorAll('nav a');
  
  // Glow effect on navigation links
  navLinks.forEach(link => {
    link.addEventListener('mouseenter', () => {
      link.style.textShadow = '0 0 8px silver';
    });
    
    link.addEventListener('mouseleave', () => {
      link.style.textShadow = 'none';
    });
  });
  
  // Smooth fade-in for hero text
  const headline = document.querySelector('.headline');
  const tagline = document.querySelector('.tagline');
  
  if (headline && tagline) {
    headline.classList.add('fade-in');
    tagline.classList.add('fade-in');
    
    // Initial opacity and transform
    headline.style.opacity = '0';
    headline.style.transform = 'translateY(20px)';
    tagline.style.opacity = '0';
    tagline.style.transform = 'translateY(20px)';
    
    // Remove inline styles after fade-in
    setTimeout(() => {
      headline.style.opacity = '';
      headline.style.transform = '';
      tagline.style.opacity = '';
      tagline.style.transform = '';
    }, 1500);
  }
  
  // Add logo click handler
  const logo = document.querySelector('.logo');
  if (logo) {
    logo.addEventListener('click', function(e) {
      e.preventDefault();
      window.location.href = 'the-back-door.html';
    });
  }
  
  // Check if video loaded correctly and add Safari fixes
  const bgVideo = document.getElementById('bg-video');
  if (bgVideo) {
    // Set playback rate to 1.9x
    bgVideo.playbackRate = 1.9;
    
    // Force play on all browsers
    bgVideo.play().catch(error => {
      console.error('Video play failed:', error);
    });
    
    // Safari-specific fixes
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    if (isSafari) {
      // Extra timeout for Safari
      setTimeout(() => {
        bgVideo.play();
      }, 300);
      
      // Fix video when tab becomes visible again
      document.addEventListener('visibilitychange', () => {
        if (document.visibilityState === 'visible') {
          bgVideo.play();
        }
      });
    }
    
    // Original error handler
    bgVideo.addEventListener('error', () => {
      console.error('Video failed to load. Check the path and format.');
      document.body.style.backgroundColor = '#111';
    });
  }
});