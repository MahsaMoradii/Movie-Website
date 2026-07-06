var homeSwiper = new Swiper(".home-swiper", {
  loop: true,
  parallax: true,
  effect: "fade",
  slidesPreview: 1,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  },
});
/*==================== MENU SHOW & HIDDEN ====================*/
let navMenu = document.getElementById("nav-menu");
let navToggle = document.getElementById("nav-toggle");
let navClose = document.getElementById("nav-close");
/*===== MENU SHOW =====*/
/* Validate if constant exists */
if (navToggle){
  navToggle.addEventListener("click" , ()=>{
    navMenu.classList.add("show-menu");
  })
}
/*===== MENU HIDE =====*/
/* Validate if constant exists */
if (navClose){
  navClose.addEventListener("click" , ()=>{
    navMenu.classList.remove("show-menu");
  })
}
/*==================== SCROLL HEADER ====================*/
let header = document.querySelector("header");
window.addEventListener("scroll", ()=>{
  if(window.scrollY >= 50){
    header.classList.add("bg-header")
  }else{
    header.classList.remove("bg-header")
  }
})
/*==================== NAVBAR SEARCH ====================*/
let navSearch = document.getElementById("nav-search");
let search = document.getElementById("search");
navSearch.addEventListener("click", () => {
  search.classList.toggle("show-search");

  if (navSearch.classList.contains("ri-search-line")) {
    navSearch.classList.replace("ri-search-line", "ri-close-line");
  } else {
    navSearch.classList.replace("ri-close-line", "ri-search-line");
  }
});
