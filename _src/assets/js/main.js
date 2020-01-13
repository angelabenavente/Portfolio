'use strict';

// TOOGLE PALETA COLORES 
const designArrowButton = document.querySelector('.bootcamp-arrow-button');
const div = document.querySelector('#js-toggle');
const elementHidden = document.querySelector('#toggle');

function hideNotDesignElements () {
  form.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  //shareCardButton.classList.add('hidden')
}

function toggle () {
  
  if (elementHidden.classList.contains('hidden')) {
  hideNotDesignElements ()
    div.style.borderBottom = "none";
    elementHidden.classList.remove('hidden');
    designArrowButton.classList.remove('fa-chevron-down');
    designArrowButton.classList.add('fa-chevron-up');
    formationIntroElement.style.borderBottom = "1px solid #33323242";
    courses.style.borderBottom = "1px solid #33323242";
    headerForm.style.borderBottom = "1px solid #33323242";
    coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  } else {
    elementHidden.classList.add('hidden'); 
    div.style.borderBottom = "1px solid #33323242";
    designArrowButton.classList.remove('fa-chevron-up');
    designArrowButton.classList.add('fa-chevron-down');
    coursesHidden.classList.add('hidden');
  }
}

div.addEventListener('click', toggle);

//Desplegar formulario
const arrowActiveForm = document.querySelector('.arrow-button-form');
const form = document.querySelector('.master__form')
const headerForm = document.querySelector('.master__header-container')
const formationmaster = document.querySelector('.formation__fill');

function hideNotFormElements () {
  elementHidden.classList.add('hidden');
  div.style.borderBottom = "1px solid #33323242";
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  courses.style.borderBottom = "1px solid #33323242";
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
  //shareCardButton.classList.add('hidden')
}

function showOrHideForm () {
  hideNotFormElements()
  if (form.classList.contains('hidden')) {
    form.classList.remove('hidden');
    headerForm.style.borderBottom = "none";
    arrowActiveForm.classList.remove('fa-chevron-down');
    arrowActiveForm.classList.add('fa-chevron-up');
  } else {
    form.classList.add('hidden');
    headerForm.style.borderBottom = "1px solid #33323242";
    arrowActiveForm.classList.remove('fa-chevron-up');
    arrowActiveForm.classList.add('fa-chevron-down');
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
    courses.style.borderBottom = "1px solid #33323242";
  }
}

headerForm.addEventListener('click', showOrHideForm);

//Desplegar share card
const formationButton = document.querySelector('.formation-button');
const shareSection = document.querySelector('.formation__share');
const formationIntroElement = document.querySelector('.formation-container');
const arrowActiveShare = document.querySelector('.arrow-button-share');
const formationCardButton = document.querySelector('#formation-button');
const formationCardSection = document.querySelector('#formation-button-section');

function hiddeNotShareElements() {
  form.classList.add('hidden');
  headerForm.style.borderBottom = "1px solid #33323242";
  div.style.borderBottom = "1px solid #33323242";
  designArrowButton.classList.remove('fa-chevron-up');
  designArrowButton.classList.add('fa-chevron-down');
  elementHidden.classList.add('hidden');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  courses.style.borderBottom = "1px solid #33323242";
  coursesHidden.classList.add('hidden'); 
  coursesArrowButton.classList.remove('fa-chevron-up');
  coursesArrowButton.classList.add('fa-chevron-down');
}

function showOrHideShare() {
  hiddeNotShareElements();
  if (formationCardSection.classList.contains('hidden')){
    formationCardSection.classList.remove('hidden');
    formationIntroElement.style.borderBottom = "none";
    arrowActiveShare.classList.remove('fa-chevron-down');
    arrowActiveShare.classList.add('fa-chevron-up');
  } else {
    formationCardSection.classList.add('hidden');
    formationIntroElement.style.borderBottom = "1px solid #33323242";
    arrowActiveShare.classList.remove('fa-chevron-up');
    arrowActiveShare.classList.add('fa-chevron-down');
    //shareCardButton.classList.add('hidden');
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
    coursesHidden.classList.add('hidden'); 
    coursesArrowButton.classList.remove('fa-chevron-up');
    coursesArrowButton.classList.add('fa-chevron-down');
  }
  //validateInputs(); 
}

formationIntroElement.addEventListener('click', showOrHideShare);

//Desplegar courses card

const coursesArrowButton = document.querySelector('.courses-arrow-button');
const courses = document.querySelector('#js-toggle-courses');
const coursesHidden = document.querySelector('#toggle-courses');

function hideNotDesignElements () {
  form.classList.add('hidden');
  arrowActiveForm.classList.remove('fa-chevron-up');
  arrowActiveForm.classList.add('fa-chevron-down');
  formationCardSection.classList.add('hidden');
  arrowActiveShare.classList.remove('fa-chevron-up');
  arrowActiveShare.classList.add('fa-chevron-down');
  formationIntroElement.style.borderBottom = "1px solid #33323242";
  headerForm.style.borderBottom = "1px solid #33323242";
  elementHidden.style.borderBottom = "1px solid #33323242";
  div.style.borderBottom = "1px solid #33323242";
  //shareCardButton.classList.add('hidden')
}

function toggleCourses () {
  hideNotDesignElements ()
  if (coursesHidden.classList.contains('hidden')) {
      coursesHidden.classList.remove('hidden');
      courses.style.borderBottom = "none";
      coursesArrowButton.classList.remove('fa-chevron-down');
      coursesArrowButton.classList.add('fa-chevron-up');
      elementHidden.classList.add('hidden'); 
      //shareCardButton.classList.add('hidden');
      formationCardSection.classList.add('hidden');
      formationIntroElement.style.borderBottom = "1px solid #33323242";
      elementHidden.style.borderBottom = "1px solid #33323242";
      headerForm.style.borderBottom = "1px solid #33323242";
  } else {
      coursesHidden.classList.add('hidden'); 
      courses.style.borderBottom = "1px solid #33323242";
      coursesArrowButton.classList.remove('fa-chevron-up');
      coursesArrowButton.classList.add('fa-chevron-down');
  }
}

////////////////HEADER///////////////

courses.addEventListener('click', toggleCourses);

const author = document.getElementById('author');
const pageCategory = document.querySelector('.pageCategory');

function resizeAuthor () {
  if (windowSize.matches) { // If media query matches
    author.innerHTML="AB | "
  } else {
    author.innerHTML="Ángela Benavente | "
  }
}

let windowSize = window.matchMedia("(max-width: 550px)")
resizeAuthor(windowSize) // Call listener function at run time
windowSize.addListener(resizeAuthor)

////////////////////
//const aboutSection = document.querySelector('#about');
const navigationButton = document.querySelector('#navigation__button')
const navigationBackground = document.querySelector('#navigation-background');
const aboutSection = document.querySelector('#about');
const firstProjectSection = document.querySelector('#anchor-1');
const secondProjectSection = document.querySelector('#second-project');
const thirdProjectSection = document.querySelector('#third-project');
const fourthProjectSection = document.querySelector('#fourth-project');
const projectImage = document.querySelector('#project-image');
const projectDescription = document.querySelector('#project-description');
const worksPosition = document.querySelector('#worksNavigationPosition');
const firstPosition = document.querySelector('#firstProjectPosition');
const secondPosition = document.querySelector('#secondProjectPosition');
const thirdPosition = document.querySelector('#thirdProjectPosition');
const fourthPosition = document.querySelector('#fourthProjectPosition');
const projectTitle = document.querySelector('#projectTitle');
const projectInformation = document.querySelector('#projectDescription');
const projectSkills = document.querySelector('#projectSkills');
const seePlaceButton = document.querySelector('#seePlaceButton');
const seeCodeButton = document.querySelector('#seeCodeButton');
const contactLinksHeader = document.querySelector('#contactLinksHeader');

function showList(){
  const listNavigation = document.querySelector('.navigation__list');
  if(listNavigation.classList.contains('showItems')){
  listNavigation.classList.remove('showItems');
  listNavigation.style.width = '0';
 
} else {
    listNavigation.classList.add('showItems')
    listNavigation.style.width = '100vw'
  }
}
navigationButton.addEventListener('click', showList)
let arrowNavigationWorks = document.querySelector('.arrowNavigationWorks');
let arrowNavigationWorksNext = document.querySelector('.arrowNavigationWorksNext');

//////////////////////////
let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
const headerTitle = document.querySelector('.header__logo');

/* Código limpio START */
const navigationProperties = {
  'anchor-1': {
    navigationBackgroundColor: '#1a3446',
    navigationButtonColor: '#1a3446',
    contactLinkColor: '#1a3446e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff',
    navLinkId: 'firstProjectPosition'
  },
  'anchor-2': {
    navigationBackgroundColor: '#173d31',
    navigationButtonColor: '#173d31',
    contactLinkColor: '#173d31e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff',
    navLinkId: 'secondProjectPosition'
  },
  'anchor-3': {
    navigationBackgroundColor: '#3e0c15',
    navigationButtonColor: '#3e0c15',
    contactLinkColor: '#3e0c15e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff',
    navLinkId: 'thirdProjectPosition'
  },
  'anchor-4': {
    navigationBackgroundColor: '#1a4127',
    navigationButtonColor: '#1a4127',
    contactLinkColor: '#1a4127e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff',
    navLinkId: 'fourthProjectPosition'
  },
  'about': {
    navigationBackgroundColor: '#252525',
    navigationButtonColor: '#252525',
    contactLinkColor: '#252525e8',
    pageCategoryText: 'about',
    headerTitleColor: '#504b4b'
  }
};

const navigationConfig = {
  currentSection: 'anchor-1'
};

const SELECTED_NAV_CLASS = 'selected';
const UNSELECTED_NAV_CLASS = 'unselected';

const selectNavLink = (navLinkId) => {
  // first, we unselect current selected nav link
  const selectedNavs = document.querySelectorAll(`.nav-work-link.${SELECTED_NAV_CLASS}`);

  selectedNavs.forEach((nav) => {
    nav.classList.remove(SELECTED_NAV_CLASS);
    nav.classList.add(UNSELECTED_NAV_CLASS);
  });

  // then we select desired nav link
  const nextSelectedNav = navLinkId && document.getElementById(navLinkId);

  if (nextSelectedNav) {
    nextSelectedNav.classList.add(SELECTED_NAV_CLASS);
    nextSelectedNav.classList.remove(UNSELECTED_NAV_CLASS);
  }
};

const changeHeaderProperties = (intersectionEntry) => {
  const targetId = intersectionEntry.target.id;
  const config = navigationProperties[targetId];

  if (navigationConfig.currentSection === targetId || !config) {
    return;
  }

  navigationConfig.currentSection = targetId;

  // change colors
  navigationBackground.style.backgroundColor = config.navigationBackgroundColor;
  navigationButton.style.backgroundColor = config.navigationButtonColor;
  contactLinksHeader.style.backgroundColor = config.contactLinkColor;
  headerTitle.style.color = config.headerTitleColor;
  pageCategory.innerHTML = config.pageCategoryText;

  selectNavLink(config.navLinkId);
};

const HEADER_SIZE = 60;

const isVisibleAndTop = (entry) => {
  const top = entry.boundingClientRect.top;
  const minTop = (window.innerHeight - HEADER_SIZE) * -1;

  return entry.isIntersecting && top <= HEADER_SIZE && top >= minTop;
}

const changeNavigation = (entries) => {
  const visibleTopEntry = entries.reverse().find(isVisibleAndTop);

  if (visibleTopEntry) {
    changeHeaderProperties(visibleTopEntry);
  }

};

const calcThreshold = (interval) => {
  const threshold = [];

  for (let current = 0; current < 1; current += interval) {
    threshold.push(current);
  }
  threshold.push(1);

  return threshold;
};

const startIntersectionObserver = () => {
  const targets = document.querySelectorAll('.listen-scroll');
  const observerOptions = {
    rootMargin: '0px',
    threshold: calcThreshold(0.02)
  };

  const observer = new IntersectionObserver(changeNavigation, observerOptions);

  targets.forEach((target) => {
    observer.observe(target);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  setTimeout(() => {
    document.querySelector('#home').classList.add('hidden'); // hide hero
    document.querySelector('.works-scroll').style.display = "block"
  
    startIntersectionObserver();
  }, 7000);
});

function loadFunction() {
  document.querySelector('.intro').classList.add('go'); // hero

  if (!("scrollBehavior" in document.documentElement.style)) {
    // scroll-behavior: smooth - is not supported
    const scroll = new SmoothScroll('a[data-scroll]', {
      speed: 600
    });
  }
}

window.addEventListener('load', loadFunction);
