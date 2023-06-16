// ///////////////////////////////////////////////////////////
// // Sticky navigation

const about = document.querySelector('.section-about');
const nav = document.querySelector('.header');

function handleNavbarVisibility() {
  const isHeroVisible = window.scrollY <= about.offsetHeight + nav.offsetHeight;
  const isNavVisible = window.scrollY <= nav.offsetHeight;

  document.body.classList.toggle('sticky', !isNavVisible);
  document.body.style.paddingTop = isNavVisible ? 0 : `${nav.offsetHeight}px`;
  nav.style.top = isHeroVisible ? `-${nav.offsetHeight}px` : '0';
}

window.addEventListener('scroll', handleNavbarVisibility);

// ///////////////////////////////////////////////////////////
// // Make mobile navigation work

const btnNavEl = document.querySelector('.btn-mobile-nav');
const headerEl = document.querySelector('.header');

btnNavEl.addEventListener('click', function () {
  headerEl.classList.toggle('nav-open');
});

///////////////////////////////////////////////////////////
// FAQ Buttons

const btnFaqEl = document.getElementsByClassName('collapse-expand');

for (let i = 0; i < btnFaqEl.length; i++) {
  btnFaqEl[i].addEventListener('click', function () {
    const icon = this.querySelector('i');
    icon.classList.toggle('icon-collapse');
    this.classList.toggle('expanded');
    const answer = this.nextElementSibling;
    if (answer.style.maxHeight) {
      answer.style.maxHeight = null;
    } else {
      answer.style.maxHeight = answer.scrollHeight + 'px';
    }
  });
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach(function (link) {
  link.addEventListener('click', function (e) {
    e.preventDefault();
    const href = link.getAttribute('href');

    // Scroll back to top
    if (href === '#')
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });

    // Scroll to other links
    if (href !== '#' && href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    // Close mobile naviagtion
    if (link.classList.contains('nav-bar-link')) headerEl.classList.toggle('nav-open');
  });
});
function calculateDaysBetweenDates(begin, end) {}
