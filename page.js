const animatedSections = document.querySelectorAll('section.animate');

function checkVisible() {
  const triggerBottom = window.innerHeight * 0.85;

  animatedSections.forEach(section => {
    const sectionTop = section.getBoundingClientRect().top;
    if (sectionTop < triggerBottom) {
      section.classList.add('visible');
    }
  });
}

window.addEventListener('scroll', checkVisible);
window.addEventListener('load', checkVisible);
