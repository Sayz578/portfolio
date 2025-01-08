const burger= document.querySelector(".burger")
const nav= document.querySelector(".nav")

burger.addEventListener("click", function(){
    burger.classList.toggle("active")
    nav.classList.toggle("active")
})

$(document).ready(function () {
    $('.portfolio-slider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1
      });
});