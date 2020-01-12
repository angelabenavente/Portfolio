

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
// const shareCardButton =  document.querySelector("#share-card");
// const validateInputsSection = document.querySelector(".validateInputsSection");

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

//window.addEventListener(resizeAuthor);

////////////////////
//const aboutSection = document.querySelector('#about');
const navigationButton = document.querySelector('#navigation__button')
const navigationBackground = document.querySelector('#navigation-background');
const aboutSection = document.querySelector('#about');
const firstProjectSection = document.querySelector('#anchor-1');
const secondProjectSection = document.querySelector('#second-project');
const thirdProjectSection = document.querySelector('#third-project');
const fourthProjectSection = document.querySelector('#fourth-project');
//let firstProjectTop = firstProjectSection.getBoundingClientRect().top;
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
// let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
// let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
// let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
// let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
// let aboutSectionyPos = aboutSection.getBoundingClientRect().top;
let arrowNavigationWorks = document.querySelector('.arrowNavigationWorks');
let arrowNavigationWorksNext = document.querySelector('.arrowNavigationWorksNext');

// const IMAGENES = [
//   '/assets/images/proxyCover.jpg',
//   '/assets/images/CardsImageCover.jpg',
//   '/assets/images/diceGameCover.jpg',
//   '/assets/images/fourthProjectCover.jpg'
// ];
// let posicionActual = 0;

// function pasarFoto() {
//   console.log(posicionActual);

  
//   if(posicionActual >= IMAGENES.length - 1) {
//       posicionActual = 0;
//   } else {
//       posicionActual++;
//   }
 
//   renderizarImagen();
// }

// /**
// * Funcion que cambia la foto en la anterior posicion
// */
// function retrocederFoto() {
//   if(posicionActual <= 0) {
//       posicionActual = IMAGENES.length - 1;
//   } else {
//       posicionActual--;
//   }
//   renderizarImagen();
// }

// const workDescription = document.querySelector('#project-description')
// /**
// * Funcion que actualiza la imagen de imagen dependiendo de posicionActual
// */
// function renderizarImagen () {


//   if (posicionActual === 0 ) {
//     workDescription.style.backgroundImage = "url('/assets/images/firstWorkImage.png')";
//     navigationBackground.style.backgroundColor = "#1a3446";
//     navigationButton.style.backgroundColor = "#1a3446";
//     projectDescription.style.backgroundColor = "#1a3446";
//     arrowNavigationWorksNext.style.backgroundColor = "#1a3446e8";
//     arrowNavigationWorks.style.backgroundColor = "#1a3446e8";
//     worksPosition.style.backgroundColor = "#1a3446e8";
//     contactLinksHeader.style.backgroundColor = "#1a3446e8";
//     projectImage.style.backgroundSize = "cover";
//     projectTitle.innerHTML = "Anonymous Proxy";
//     projectInformation.innerHTML = "Responsive design project"
//     projectSkills.innerHTML = "HTML | SASS | JS | GULP"
//     seePlaceLink.href = "http://beta.adalab.es/evaluacion-final-modulo-1-angelabenavente/"
//     seeCodeLink.href = "https://github.com/angelabenavente/evaluacion-final-modulo-1-angelabenavente"
//     if (firstPosition.classList.contains('far')){
//       firstPosition.classList.remove('far');
//       firstPosition.classList.add('fas');
//       secondPosition.classList.remove('fas');
//       secondPosition.classList.add('far');
//       thirdPosition.classList.remove('fas');
//       thirdPosition.classList.add('far');
//       fourthPosition.classList.remove('fas');
//       fourthPosition.classList.add('far');  
//     }
//   }
//   else if(posicionActual === 1) {
//     workDescription.style.backgroundImage = "url('/assets/images/secondWorkImage.png')";
//     navigationBackground.style.backgroundColor = "#173d31";
//     navigationButton.style.backgroundColor = "#173d31";
//     projectDescription.style.backgroundColor = "#173d31";
//     arrowNavigationWorksNext.style.backgroundColor = "#173d31e8";
//     arrowNavigationWorks.style.backgroundColor = "#173d31e8";
//     worksPosition.style.backgroundColor = "#173d31e8";
//     contactLinksHeader.style.backgroundColor = "#173d31e8";
//     projectImage.style.backgroundSize = "cover";
//     projectTitle.innerHTML = "Awesome Profile Cards";
//     projectInformation.innerHTML = "App to generare & share proffesional cards";
//     projectSkills.innerHTML = "REACT | APIs | SASS | JS | GULP";
//     seePlaceLink.href = "http://beta.adalab.es/project-promo-h-module-3-team-2-afternoon/"
//     seeCodeLink.href = "https://github.com/Adalab/project-promo-h-module-3-team-2-afternoon"
//     if (secondPosition.classList.contains('far')){
//       secondPosition.classList.remove('far');
//       secondPosition.classList.add('fas');
//       thirdPosition.classList.remove('fas');
//       thirdPosition.classList.add('far');
//       fourthPosition.classList.remove('fas');
//       fourthPosition.classList.add('far'); 
//       firstPosition.classList.remove('fas');
//       firstPosition.classList.add('far'); 
//     }
// } else if (posicionActual === 2) {
//   workDescription.style.backgroundImage = "url('/assets/images/thirdWorkImage.png')"
//   navigationBackground.style.backgroundColor = "#3e0c15";
//   navigationButton.style.backgroundColor = "#3e0c15";
//   projectDescription.style.backgroundColor = "#3e0c15";
//   arrowNavigationWorksNext.style.backgroundColor = "#3e0c15e8";
//   arrowNavigationWorks.style.backgroundColor = "#3e0c15e8";
//   worksPosition.style.backgroundColor = "#3e0c15e8";
//   contactLinksHeader.style.backgroundColor = "#3e0c15e8";
//   projectImage.style.backgroundSize = "cover";
//   projectTitle.innerHTML = "Dice Pig Game";
//   projectInformation.innerHTML = "Dice game for two";
//   projectSkills.innerHTML = "HTML | CSS | JS";
//   seePlaceLink.href = "https://angelabenavente.github.io/DicePigGame/"
//   seeCodeLink.href = "https://github.com/angelabenavente/DicePigGame"
//   if (thirdPosition.classList.contains('far')){
//     thirdPosition.classList.remove('far');
//     thirdPosition.classList.add('fas');
//     firstPosition.classList.remove('fas');
//     firstPosition.classList.add('far');
//     secondPosition.classList.remove('fas');
//     secondPosition.classList.add('far');
//     fourthPosition.classList.remove('fas');
//     fourthPosition.classList.add('far'); 
//   }
// } else if (posicionActual === 3) {
//   workDescription.style.backgroundImage = "url('/assets/images/fourthWorkImage.png')"
//   navigationBackground.style.backgroundColor = "#1a4127";
//   navigationButton.style.backgroundColor = "#1a4127";
//   projectDescription.style.backgroundColor = "#1a4127";
//   arrowNavigationWorksNext.style.backgroundColor = "#1a4127e8";
//   arrowNavigationWorks.style.backgroundColor = "#1a4127e8";
//   worksPosition.style.backgroundColor = "#1a4127e8";
//   contactLinksHeader.style.backgroundColor = "#1a4127e8";
//   projectImage.style.backgroundSize = "contain";
//   projectImage.style.backgroundSize = "cover";
//   projectImage.style.backgroundColor = "#c1d0d3";
//   projectTitle.innerHTML = "Contact us!";
//   projectInformation.innerHTML = "Web for contact work teams";
//   projectSkills.innerHTML = "HTML | CSS | JS | GULP";
//   seePlaceLink.href = "http://beta.adalab.es/project-promo-h-module-1-team-2-afternoon-sprint-2-/"
//   seeCodeLink.href = "https://github.com/Adalab/project-promo-h-module-1-team-2-afternoon-sprint-2-"
//   if (fourthPosition.classList.contains('far')){
//     fourthPosition.classList.remove('far');
//     fourthPosition.classList.add('fas');
//     firstPosition.classList.remove('fas');
//     firstPosition.classList.add('far');
//     secondPosition.classList.remove('fas');
//     secondPosition.classList.add('far');
//     thirdPosition.classList.remove('fas');
//     thirdPosition.classList.add('far'); 
//   }
// } 

//   projectImage.style.backgroundImage = `url(${IMAGENES[posicionActual]})`;

// }
// function showFirstProject () {
//   posicionActual = 0;
//   renderizarImagen();
// }

// function showSecondProject () {
//   posicionActual = 1;
//   renderizarImagen();
// }

// function showThirdProject () {
//   posicionActual = 2;
//   renderizarImagen();
// }

// function showFourthProject () {
//   posicionActual = 3;
//   renderizarImagen();
// }
// arrowNavigationWorksNext.addEventListener('click', pasarFoto);
// arrowNavigationWorks.addEventListener('click', retrocederFoto);
// firstPosition.addEventListener('click', showFirstProject )
// secondPosition.addEventListener('click', showSecondProject )
// thirdPosition.addEventListener('click', showThirdProject )
// fourthPosition.addEventListener('click', showFourthProject )
// renderizarImagen();

//////////////////////////
let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
  let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
  let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
  let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
  // let aboutSectionyPos = aboutSection.getBoundingClientRect().top;
const headerTitle = document.querySelector('.header__logo');
// function changeNavigationColor () {
//   let aboutSectionyPos = aboutSection.getBoundingClientRect().top;
//   //console.log(aboutSectionyPos);
  
//   if
//   (Math.sign(aboutSectionyPos) === 0 || Math.sign(aboutSectionyPos) === -1 ) {
//     // const navigationBackground = document.querySelector('#navigation-background');
//    console.log(aboutSectionyPos);
//     navigationBackground.style.backgroundColor = "#252525";
//     navigationButton.style.backgroundColor = "#252525";
//     contactLinksHeader.style.backgroundColor = "#252525e8";
//     headerTitle.style.color = "white";
//     pageCategory.innerHTML= "about"
//     pageCategory.style.textTransform = "none"
    
//   }

//   var firstTop=firstProjectSection.offsetTop;

//   if (firstTop===0 || firstTop === -1){
//     console.log(firstProjectyPos);
//       pageCategory.innerHTML= "projects"
//       navigationBackground.style.backgroundColor = "#1a3446";
//       navigationButton.style.backgroundColor = "#1a3446";
//       projectDescription.style.backgroundColor = "#1a3446";
//       contactLinksHeader.style.backgroundColor = "#1a3446e8";
//       //pageCategory.style.textTransform = "capitalize";
//     }
//     var secondTop=secondProjectSection.offsetTop;
//     if (secondTop===0 || secondTop === -1 ){
//       console.log(firstProjectyPos);
//         pageCategory.innerHTML= "projects"
//         navigationBackground.style.backgroundColor = "red";
//         navigationButton.style.backgroundColor = "red";
//         projectDescription.style.backgroundColor = "#1a3446";
//         contactLinksHeader.style.backgroundColor = "#1a3446e8";
//         //pageCategory.style.textTransform = "capitalize";
//       }


// }


///////////////
// function carousel () {

//   if(firstProjectSection.style.zIndex = "1") {
//     projectImage.style.backgroundImage = "url('/assets/images/cardsCover.svg')";
//     projectImage.style.backgroundSize = "contain";
//     projectImage.style.backgroundColor = "#eef5f7";
//     // firstProjectSection.style.zIndex = "0";
//     // secondProjectSection.style.zIndex = "1";
//     // secondProjectSection.style.position = "absolute";
//     // secondProjectSection.style.top = "0";
//     // secondProjectSection.style.right = "0";
//     // secondProjectSection.style.left = "0";
//     console.log(secondProjectSection);
//     //firstProjectSection.remove();
//     // firstProjectSection.style.left = "100%";
//     // secondProjectSection.style.left = "0";
    
//   }
//   // if(secondProjectSection.style.left = "0") {
//   //   //secondProjectSection.style.zIndex = "0";
//   //   thirdProjectSection.style.zIndex = "200";
//   //   //secondProjectSection.remove();
//   //   //secondProjectSection.style.display = "none";
//   //   thirdProjectSection.style.position = "absolute";
// //   //   thirdProjectSection.style.top = "0";
// //   //   thirdProjectSection.style.right = "0";
// //   //   thirdProjectSection.style.left = "0";
// //   //   console.log(thirdProjectSection);
// //   // }
// // }

// // arrowNavigationWorks.addEventListener('click', carousel);


function changeNavigationColor () {

  //console.log( firstProjectTop);
  let firstProjectyPos = firstProjectSection.getBoundingClientRect().top;
  let secondProjectyPos = secondProjectSection.getBoundingClientRect().top;
  let thirdProjectyPos = thirdProjectSection.getBoundingClientRect().top;
  let fourthProjectyPos = fourthProjectSection.getBoundingClientRect().top;
  let aboutSectionyPos = aboutSection.getBoundingClientRect().top;

  if (Math.sign(firstProjectyPos) === -1 ) {
    // const navigationBackground = document.querySelector('#navigation-background');
    console.log( firstProjectyPos);
    navigationBackground.style.backgroundColor = "#1a3446";
    navigationButton.style.backgroundColor = "#1a3446";
    contactLinksHeader.style.backgroundColor = "#1a3446";
    pageCategory.innerHTML= "projects"
    headerTitle.style.color = "white";
    if (firstPosition.classList.contains('far')){
            firstPosition.classList.remove('far');
            firstPosition.classList.add('fas');
            secondPosition.classList.remove('fas');
            secondPosition.classList.add('far');
            thirdPosition.classList.remove('fas');
            thirdPosition.classList.add('far');
            fourthPosition.classList.remove('fas');
            fourthPosition.classList.add('far');  
          }
  }
  if
    (Math.sign(secondProjectyPos) === -1 ) {
      // const navigationBackground = document.querySelector('#navigation-background');
      console.log( secondProjectyPos);
      navigationBackground.style.backgroundColor = "#173d31";
      navigationButton.style.backgroundColor = "#173d31";
      contactLinksHeader.style.backgroundColor = "#173d31";
      pageCategory.innerHTML= "projects"
      headerTitle.style.color = "white";
      if (secondPosition.classList.contains('far')){
              secondPosition.classList.remove('far');
              secondPosition.classList.add('fas');
              thirdPosition.classList.remove('fas');
              thirdPosition.classList.add('far');
              fourthPosition.classList.remove('fas');
              fourthPosition.classList.add('far'); 
              firstPosition.classList.remove('fas');
              firstPosition.classList.add('far'); 
            }
  }

  if
    (Math.sign(thirdProjectyPos) === -1 ) {
      // const navigationBackground = document.querySelector('#navigation-background');
      console.log(thirdProjectyPos);
      navigationBackground.style.backgroundColor = "#3e0c15";
      navigationButton.style.backgroundColor = "#3e0c15";
      contactLinksHeader.style.backgroundColor = "#3e0c15";
      pageCategory.innerHTML= "projects"
      headerTitle.style.color = "white";
      if (thirdPosition.classList.contains('far')){
            thirdPosition.classList.remove('far');
            thirdPosition.classList.add('fas');
            firstPosition.classList.remove('fas');
            firstPosition.classList.add('far');
            secondPosition.classList.remove('fas');
            secondPosition.classList.add('far');
            fourthPosition.classList.remove('fas');
            fourthPosition.classList.add('far'); 
          }
  }

  if
    (Math.sign(fourthProjectyPos) === -1 ||Math.sign(fourthProjectyPos) === 0  ) {
      // const navigationBackground = document.querySelector('#navigation-background');
      console.log(fourthProjectyPos);
      navigationBackground.style.backgroundColor = "#1a4127";
      navigationButton.style.backgroundColor = "#1a4127";
      contactLinksHeader.style.backgroundColor = "#1a4127";
      pageCategory.innerHTML= "projects"
      headerTitle.style.color = "white";
      if (fourthPosition.classList.contains('far')){
            fourthPosition.classList.remove('far');
            fourthPosition.classList.add('fas');
            firstPosition.classList.remove('fas');
            firstPosition.classList.add('far');
            secondPosition.classList.remove('fas');
            secondPosition.classList.add('far');
            thirdPosition.classList.remove('fas');
            thirdPosition.classList.add('far'); 
          }
  }

    // let aboutSectionyPos = aboutSection.getBoundingClientRect().top;
    //console.log(aboutSectionyPos);
    
    if
    (Math.sign(aboutSectionyPos) === -1 ) {
      // const navigationBackground = document.querySelector('#navigation-background');
     console.log(aboutSectionyPos);
      navigationBackground.style.backgroundColor = "#252525";
      navigationButton.style.backgroundColor = "#252525";
      contactLinksHeader.style.backgroundColor = "#252525e8";
      headerTitle.style.color = "#504b4b";
      pageCategory.innerHTML= "about"
      //pageCategory.style.textTransform = "none"
      
    }

function changeNavigationItem() {
  if (fourthPosition.classList.contains('far')){
    fourthPosition.classList.remove('far');
    fourthPosition.classList.add('fas');
    firstPosition.classList.remove('fas');
    firstPosition.classList.add('far');
    secondPosition.classList.remove('fas');
    secondPosition.classList.add('far');
    thirdPosition.classList.remove('fas');
    thirdPosition.classList.add('far'); 
  }
}
  fourthPosition.addEventListener("click", changeNavigationItem);
  // firstPosition.addEventListener("click", changeNavigationColor);
  // secondPosition.addEventListener("click", changeNavigationColor);
  // thirdPosition.addEventListener("click", changeNavigationColor);

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

/* Código limpio START */
const navigationProperties = {
  'anchor-1': {
    navigationBackgroundColor: '#1a3446',
    navigationButtonColor: '#1a3446',
    contactLinkColor: '#1a3446e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff'
  },
  'anchor-2': {
    navigationBackgroundColor: '#173d31',
    navigationButtonColor: '#173d31',
    contactLinkColor: '#173d31e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff'
  },
  'anchor-3': {
    navigationBackgroundColor: '#3e0c15',
    navigationButtonColor: '#3e0c15',
    contactLinkColor: '#3e0c15e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff'
  },
  'anchor-4': {
    navigationBackgroundColor: '#1a4127',
    navigationButtonColor: '#1a4127',
    contactLinkColor: '#1a4127e8',
    pageCategoryText: 'projects',
    headerTitleColor: '#fff'
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

const changeHeaderProperties = (intersectionEntry) => {
  const targetId = intersectionEntry.target.id;
  const config = navigationProperties[targetId];

  if (navigationConfig.currentSection === targetId || !config) {
    console.log('ES EL MISMO, LOCO');
    return;
  }

  navigationConfig.currentSection = targetId;

  // change colors
  navigationBackground.style.backgroundColor = config.navigationBackgroundColor;
  navigationButton.style.backgroundColor = config.navigationButtonColor;
  contactLinksHeader.style.backgroundColor = config.contactLinkColor;
  headerTitle.style.color = config.headerTitleColor;
  pageCategory.innerHTML = config.pageCategoryText;
};

const changeNavigation = (entries, observer) => {
  const [first, second] = entries; // get first and second

  if (first.intersectionRatio >= 0.10) { // if first is visible at least 10%
    changeHeaderProperties(first);
  } else if (second.intersectionRatio >= 0.80) {
    changeHeaderProperties(second);
  }

  console.log(entries);
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
    // root: document.querySelector('.main'),
    rootMargin: '0px',
    threshold: calcThreshold(0.05)
  };

  const observer = new IntersectionObserver(changeNavigation, observerOptions);

  targets.forEach((target) => {
    observer.observe(target);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // document.addEventListener('scroll', changeNavigationColor);
  setTimeout(() => {
    document.querySelector('#home').classList.add('hidden'); // hide hero
  
    startIntersectionObserver();
  }, 7000);
});

/* Código limpio END */

////////////
//////////////
const intro = document.querySelector('.intro');
const reload = document.querySelector('.reload');
function colors () {
  document.querySelector('.intro').classList.add('go');


  function toogleHero() {
    intro.classList.remove('go');delay(0);

  }
}

window.addEventListener('load', colors);

///////////////




/*
To prevent the flashing of unstyled content (FOUC) I created a class ".no-fouc"
which hides the slider.  When everything is ready to roll, I simply remove the
.no-fouc class from the slider section using the script below.  I placed the CSS snippet in the head of the HTML
page so that it's loaded before other things for obvious reasons.  What about folks with JS turned off?  
Well, I don't worry about them too much anymore.  Oh my.  I feel the heat from the flames already.  :) 
*/

function ready () {
  const noF = document.querySelector('.no-fouc');
  noF.classList.remove('no-fouc');
}

//////////
function currentYPosition() {
  // Firefox, Chrome, Opera, Safari
  if (self.pageYOffset) return self.pageYOffset;
  // Internet Explorer 6 - standards mode
  if (document.documentElement && document.documentElement.scrollTop)
      return document.documentElement.scrollTop;
  // Internet Explorer 6, 7 and 8
  if (document.body.scrollTop) return document.body.scrollTop;
  return 0;
}


function elmYPosition(eID) {
  var elm = document.getElementById(eID);
  var y = elm.offsetTop;
  var node = elm;
  while (node.offsetParent && node.offsetParent != document.body) {
      node = node.offsetParent;
      y += node.offsetTop;
  } return y;
}


function smoothScroll(eID) {
  var startY = currentYPosition();
  var stopY = elmYPosition(eID);
  var distance = stopY > startY ? stopY - startY : startY - stopY;
  if (distance < 100) {
      scrollTo(0, stopY); return;
  }
  var speed = Math.round(distance / 100);
  if (speed >= 20) speed = 20;
  var step = Math.round(distance / 25);
  var leapY = stopY > startY ? startY + step : startY - step;
  var timer = 0;
  if (stopY > startY) {
      for ( var i=startY; i<stopY; i+=step ) {
          setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
          leapY += step; if (leapY > stopY) leapY = stopY; timer++;
      } return;
  }
  for ( var i=startY; i>stopY; i-=step ) {
      setTimeout("window.scrollTo(0, "+leapY+")", timer * speed);
      leapY -= step; if (leapY < stopY) leapY = stopY; timer++;
  }
return false;
}



//# sourceMappingURL=main.js.map
