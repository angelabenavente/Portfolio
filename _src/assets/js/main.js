'use strict';

console.log('>> Ready :)');
//$('.menu-burger, .menu-items').on('click', function() {
  //$('.menu-bg, .menu-items, .menu-burger').toggleClass('fs');
  //$('.menu-burger').text() == "☰" ? $('.menu-burger').text('✕') : $('.menu-burger').text('☰');
//});

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
const shareCardButton =  document.querySelector("#share-card");
const validateInputsSection = document.querySelector(".validateInputsSection");

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
    shareCardButton.classList.add('hidden');
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
      shareCardButton.classList.add('hidden');
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

document.getElementById('author');

// function header(){
// if (window.matchMedia("(min-width: 400px)").matches) {
//   autor.innerHTML('AB');
// } else {
//   autor.innerHTML('Ángela Benavente');
// }
// }

// window.addEventListener(header)


//////////////////




courses.addEventListener('click', toggleCourses);

//Desplegar ventana de compartir card
function removeClass () {
  shareCardButton.classList.remove('hidden');
}

//formationCardButton.addEventListener('click',removeClass);

const navigation = document.querySelector('.navigation__button');

function showNavigationItems (){
  navigation.style.width = '200%';
}
navigation.addEventListener('click', showNavigationItems);
