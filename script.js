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


const acHeader = document.querySelectorAll(".acheader");
acHeader.forEach((ach) => {
  ach.addEventListener("click", toggleItem, false);
});
function toggleItem(){
  const currentElement = this.nextElementSibling;
  const isCollapsed = currentElement.classList.contains("collapsed");

  acHeader.forEach(ach=>{
    const contentElement = ach.nextElementSibling;
    if(!contentElement.classList.contains("collapsed")){
      contentElement.classList.add("collapsed")
    }
  })
  if(isCollapsed){
    currentElement.classList.remove("collapsed");
  }
}


//reviews animations
let currentReview = 0;
let reviews = document.querySelectorAll(".review");
let prevBtn1 = document.getElementById("prevBtn1");
let nextBtn1 = document.getElementById("nextBtn1");
function nextReview(){
  let nextReview = (currentReview + 1)%reviews.length;
  reviews[currentReview].style.display = "none";
  reviews[nextReview].style.display = "block";
  currentReview = nextReview;

}
nextBtn1.addEventListener("click", nextReview)
prevBtn1.addEventListener("click", function(){
  let prevReview = currentReview == 0?reviews.length-1:currentReview-1;
  reviews[currentReview].style.display = "none";
  reviews[prevReview].style.display = "block";
  currentReview = prevReview;
})
  setInterval(nextReview, 5000);

  //Navbar animations
function openNav() {
  document.getElementById("sideNav").style.display = "block";
  document.getElementById("sideNav").style.width = "100vw";
  const togglex = document.getElementsByClassName("fa-xmark")[0];
  togglex.style.display = "block";
  const togglebars = document.getElementsByClassName("fa-bars")[0];
  togglebars.style.display = "none";
}
function closeNav() {
  document.getElementById("sideNav").style.display = "none";
  document.getElementById("sideNav").style.width = "0px";
  const togglebars = document.getElementsByClassName("fa-xmark")[0];
  togglebars.style.display = "none";
  const togglex = document.getElementsByClassName("fa-bars")[0];
  togglex.style.display = "block";
}