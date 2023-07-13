//======= scrool reveal =======//
const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
    } else {
      entry.target.classList.remove('show');
    }
  })
});

const hiddenElements = document.querySelectorAll('.hidden');
hiddenElements.forEach((el) => observer.observe(el));


//====== header sticky =====//
window.onscroll = () => {
  let header = document.querySelector('header');
  
  header.classList.toggle('sticky', window.scrollY > 100);
  };