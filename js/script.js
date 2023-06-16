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

for (const btn of btnFaqEl) {
  btn.addEventListener('click', function () {
    const icon = this.querySelector('i');
    icon.classList.toggle('icon-collapse');
    this.classList.toggle('expanded');
    const answer = this.nextElementSibling;
    answer.style.maxHeight = answer.style.maxHeight ? null : `${answer.scrollHeight}px`;
  });
}

///////////////////////////////////////////////////////////
// Smooth scrolling animation

const allLinks = document.querySelectorAll('a:link');

allLinks.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();
    const href = link.getAttribute('href');

    if (href === '#') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else if (href.startsWith('#')) {
      const sectionEl = document.querySelector(href);
      sectionEl.scrollIntoView({ behavior: 'smooth' });
    }

    if (link.classList.contains('nav-bar-link')) {
      headerEl.classList.toggle('nav-open');
    }
  });
});
