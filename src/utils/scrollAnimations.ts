// Simple scroll animation utility for ultra-modern tech design
export const initScrollAnimations = () => {
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('animate');
        
        // Add stagger effect for children
        const children = entry.target.querySelectorAll('.fade-in-up');
        children.forEach((child, index) => {
          (child as HTMLElement).style.setProperty('--stagger-delay', index.toString());
          setTimeout(() => {
            child.classList.add('animate');
          }, index * 100);
        });
      }
    });
  }, observerOptions);

  // Observe all elements with fade-in-up class
  document.querySelectorAll('.fade-in-up').forEach((el) => {
    observer.observe(el);
  });

  return observer;
};

// Initialize on DOM content loaded
if (typeof window !== 'undefined') {
  document.addEventListener('DOMContentLoaded', initScrollAnimations);
}