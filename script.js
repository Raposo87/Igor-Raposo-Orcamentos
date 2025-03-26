document.addEventListener('DOMContentLoaded', () => {
    // GSAP Text Split Animation for Header
    gsap.from('.header h1', {
      duration: 1,
      opacity: 0,
      y: -50,
      ease: 'power3.out'
    });
  
    gsap.from('.header p', {
      duration: 1,
      opacity: 0,
      y: 50,
      delay: 0.5,
      ease: 'power3.out'
    });
  
    // Stagger Animation for Main Section List Items
    gsap.from('.main-section li', {
      duration: 0.7,
      opacity: 0,
      x: -50,
      stagger: 0.2,
      ease: 'back.out(1.7)'
    });
  
    // Hover Effects for Pricing Table Rows
    gsap.utils.toArray('table tr').forEach(row => {
      if (row.querySelector('th')) return; // Skip header row
      
      row.addEventListener('mouseenter', () => {
        gsap.to(row, {
          backgroundColor: '#e6f2ff',
          scale: 1.02,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });
  
      row.addEventListener('mouseleave', () => {
        gsap.to(row, {
          backgroundColor: 'transparent',
          scale: 1,
          duration: 0.3,
          ease: 'power1.inOut'
        });
      });
    });
  
    // Social Icons Pulse Animation
    gsap.to('.social-icons a', {
      scale: 1.1,
      repeat: -1,
      yoyo: true,
      duration: 0.5,
      ease: 'power1.inOut'
    });
  
    // Scroll Trigger Animations for Sections
    if (ScrollTrigger) {
      gsap.utils.toArray(['.main-section', '.pricing-section']).forEach(section => {
        gsap.from(section, {
          scrollTrigger: {
            trigger: section,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          },
          opacity: 0,
          y: 100,
          duration: 1,
          ease: 'power3.out'
        });
      });
    }
  });