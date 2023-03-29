

// mobile navbar 
const openMobileNavbar = document.querySelector('.mobile-navbar-open');
const mobileNavbarContents = document.querySelector('.mobile-navbar-contents')
const closeMobileNavbar = document.querySelector('.mobile-navbar-close')


openMobileNavbar.addEventListener('click', () =>{
    console.log('toggle');
    mobileNavbarContents.setAttribute("style", "top:55px !important");
    openMobileNavbar.classList.add('remove')
    closeMobileNavbar.classList.remove('remove')
    closeMobileNavbar.classList.add('show')
})

closeMobileNavbar.addEventListener('click', () =>{
    mobileNavbarContents.setAttribute("style", "display:none !important");
    mobileNavbarContents.setAttribute("style", "top:-300px !important");
    openMobileNavbar.classList.remove('remove')
    openMobileNavbar.classList.add('show')
    closeMobileNavbar.classList.add('remove')


} )



// education and work roadmap toggle
const workButton = document.querySelector(".work-btn");
const workRoadMap = document.querySelector(".work-roadmap");
const workButtonText = document.querySelector(".work-btn h2");
const workButtonTextLight = document.querySelector('.light-mode .work-btn h2')
const educationButton = document.querySelector(".education-btn");
const educationRoadMap = document.querySelector(".education-roadmap");
const educationButtonText = document.querySelector(".education-btn h2");

workButton.addEventListener("click", () => {
  workExp();
});

educationButton.addEventListener("click", () => {
  educationExp();
});

function workExp() {
  workRoadMap.classList.remove("remove");
  workRoadMap.classList.add("show");
  workButtonText.setAttribute("style", "color:#170b53 !important");
  educationRoadMap.classList.add("remove");
  educationButtonText.setAttribute("style", "color:#000 !important");
}

function educationExp() {
  educationRoadMap.classList.remove("remove");
  educationRoadMap.classList.add("show");
  educationButtonText.setAttribute("style", "color:#170b53 !important");
  workRoadMap.classList.add("remove");
  workButtonText.setAttribute("style", "color:#000 !important");
  workButtonTextLight.setAttribute("style", "color:#000 !important");
}
// education and work roadmap toggle END
