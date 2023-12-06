// slider annimation
let currentSlide = 0;
let slides = document.querySelectorAll(".slider");
let prevBtn = document.getElementById("prevBtn");
let nextBtn = document.getElementById("nextBtn");
function next(){
  let nextSlide = (currentSlide + 1)%slides.length;
  slides[currentSlide].style.display = "none";
  slides[nextSlide].style.display = "block";
  currentSlide = nextSlide;
}
nextBtn.addEventListener("click", next)
prevBtn.addEventListener("click", function(){
  let prevSlide = currentSlide == 0?slides.length-1:currentSlide-1;
  slides[currentSlide].style.display = "none";
  slides[prevSlide].style.display = "block";
  currentSlide = prevSlide;
})
setInterval(next, 3000);