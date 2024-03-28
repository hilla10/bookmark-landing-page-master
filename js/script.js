const tabLinks = document.querySelectorAll('.tab-link');
const tabs = document.querySelectorAll('.tab');

// Add click event listener to tab links

tabLinks.forEach((tabLink) => {
  tabLink.addEventListener('click', (e) => {
    e.preventDefault();

    // Get Id of the target tab from the href attribute
    const targetTabId = e.target.getAttribute('href');

    // Loop through all tabs

    tabs.forEach((tab) => {
      // If the current tab matches the target tab ID, show it; otherWise hide show
      if ('#' + tab.id === targetTabId) {
        tab.classList.add('show');
      } else {
        tab.classList.remove('show');
      }
    });

    // Remove 'show' class from all tab links

    tabLinks.forEach((link) => {
      link.classList.remove('show');
    });

    // Add 'show' class to the clicked tab link

    e.target.classList.add('show');
  });
});

// Accordion

const accordionItems = document.querySelectorAll('.accordion-item');

accordionItems.forEach((item) => {
  const header = item.querySelector('.accordion-header');
  const content = item.querySelector('.accordion-content');

  header.addEventListener('click', () => {
    accordionItems.forEach((otherItem) => {
      if (otherItem !== item) {
        otherItem.querySelector('.accordion-header').classList.remove('active');
        otherItem
          .querySelector('.accordion-content')
          .classList.remove('active');
      }
    });
    header.classList.toggle('active');
    content.classList.toggle('active');
  });
});

// Validation

const emailInput = document.querySelector('.email');
const submit = document.querySelector('#submit');
const errMsg = document.querySelector('.err-msg');
const regex = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/;

submit.addEventListener('click', (e) => {
  e.preventDefault();
  if (!regex.test(emailInput.value)) {
    emailInput.classList.add('error');
    errMsg.classList.add('error');
  } else {
    emailInput.classList.remove('error');
    errMsg.classList.remove('error');
    emailInput.style.outline = '2px solid #34cf2fab';
  }
});

// Hamburger
const hamburger = document.querySelector('.hamburger');
const navbar = document.querySelector('.navbar');
const header = document.querySelector('.header');

hamburger.addEventListener('click', (e) => {
  e.stopPropagation();
  hamburger.classList.toggle('active');
  navbar.classList.toggle('active');
  header.classList.toggle('active');
});

document.body.addEventListener('click', () => {
  if (hamburger.classList.contains('active')) {
    hamburger.classList.remove('active');
    navbar.classList.remove('active');
    header.classList.remove('active');
  }
});
