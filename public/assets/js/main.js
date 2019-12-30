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

//const navigation = document.querySelector('.navigation__button');

// function showNavigationItems (){
//   if(navigation.classList.contains('expandedWidth')){
//     navigation.classList.remove('expandedWidth')
//     //navigation.classList.remove('expandedHeight')
//   } else {
//     navigation.classList.add('expandedWidth');
//     //navigation.classList.add('expandedHeight')
//   }
// }
// navigation.addEventListener('click', showNavigationItems);


///////////

const author = document.getElementById('author');

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

//window.addEventListener(resizeAuthor);


////////////////////
const navigationButton = document.querySelector('#navigation__button')
const navigationBackground = document.querySelector('#navigation-background');
const aboutSection = document.querySelector('#about');
const firstProjectSection = document.querySelector('#first-project');
const secondProjectSection = document.querySelector('#second-project');
const thirdProjectSection = document.querySelector('#third-project');
const fourthProjectSection = document.querySelector('#fourth-project');
let firstProjectTop = firstProjectSection.getBoundingClientRect().top;

let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
let aboutSectionyPos = aboutSection.getBoundingClientRect().top;
let arrowNavigationWorks = document.querySelector('.arrowNavigationWorks');

function carousel () {

  if(firstProjectSection.style.zIndex = "1") {
    secondProjectSection.style.zIndex = "1";
    // secondProjectSection.style.position = "absolute";
    // secondProjectSection.style.top = "0";
    // secondProjectSection.style.right = "0";
    // secondProjectSection.style.left = "0";
    console.log(secondProjectSection);
    //firstProjectSection.remove();
    
    
  }
  if(secondProjectSection.style.zIndex = "1") {
    thirdProjectSection.style.zIndex = "1";
    //secondProjectSection.remove();
    //secondProjectSection.style.display = "none";
    thirdProjectSection.style.position = "absolute";
    thirdProjectSection.style.top = "0";
    thirdProjectSection.style.right = "0";
    thirdProjectSection.style.left = "0";
    console.log(thirdProjectSection);
  }
}

arrowNavigationWorks.addEventListener('click', carousel);


function changeNavigationColor () {

  //console.log( firstProjectTop);
  let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
  let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
  let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
  let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
  let aboutSectionyPos = aboutSection.getBoundingClientRect().top;

  if (Math.sign(firstProjectyPos) === -1 ) {
    const navigationBackground = document.querySelector('#navigation-background');
    console.log( firstProjectyPos);
    navigationBackground.style.backgroundColor = "#2a4d68";
    navigationButton.style.backgroundColor = "#2a4d68";
  }
  if
    (Math.sign(secondProjectyPos) === -1 ) {
      const navigationBackground = document.querySelector('#navigation-background');
      console.log( secondProjectyPos);
      navigationBackground.style.backgroundColor = "#1d4e4e";
      navigationButton.style.backgroundColor = "#1d4e4e";
  }

  if
    (Math.sign(thirdProjectyPos) === -1 ) {
      const navigationBackground = document.querySelector('#navigation-background');
      console.log(thirdProjectyPos);
      navigationBackground.style.backgroundColor = "#6b1607";
      navigationButton.style.backgroundColor = "#6b1607";
  }

  if
    (Math.sign(fourthProjectyPos) === -1 ) {
      const navigationBackground = document.querySelector('#navigation-background');
      console.log(fourthProjectyPos);
      navigationBackground.style.backgroundColor = "#377e65";
      navigationButton.style.backgroundColor = "#377e65";
  }

  // else {
  //   // (Math.sign(aboutSectionyPos) === -1 ) {
  //   //   const navigationBackground = document.querySelector('#navigation-background');
  //     console.log(aboutSectionyPos);
  //     navigationBackground.style.backgroundColor = "#f7484e";
  //     navigationButton.style.backgroundColor = "#f7484e";
  // }

  window.addEventListener("DOMContentLoaded" , () => {
  document.addEventListener("scroll", changeNavigationColor) });

    
// window.onscroll = () => {
//   /* Obtenemos la posición absoluta del elemento en cuestión */
//   var div = document.getElementById('pp');
//   var yPos = div.getBoundingClientRect().top;
//   /* Si está cerca del borde superior (pondremos un margen de 20px) mostramos el texto */
//   if (Math.abs(yPos) < 20) {
//     div.innerHTML = "Altura es: " + yPos;
//   }
// }


    // let top =  firstProjectSection.offsetTop;
    // let left =  firstProjectSection.offsetLeft;
    //   while ( firstProjectSection= firstProjectSection.offsetParent) left +=  firstProjectSection.offsetLeft;
    //   while( firstProjectSection= firstProjectSection.offsetParent) top+= firstProjectSection.offsetTop;
    //   return [left,top];
  // if (windowSize.matches) { // If media query matches
  //   author.innerHTML="AB | "
  // } else {
  //   author.innerHTML="Ángela Benavente | "
  // }
}

window.addEventListener("DOMContentLoaded" , () => {
  document.addEventListener("scroll", changeNavigationColor) });


// Call listener function at run time
//window.addEventListener('scroll', changeNavigationColor)
//# sourceMappingURL=main.js.map
