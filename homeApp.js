//var countries = ["Brazil" , "Caribbean" , "Egypt" , "Finland" , "Greece" , "Holland" , "India" , 
                //"Italy" , "Macau" , "France" , "Scotland" , "Spain" , "Thailand" , "Venice"];
//auto complete?

// var slideIndex = 0;
// showSlides();

// function showSlides() {
//   var i;
//   var slides = document.getElementsByClassName("mySlides");
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = "none";
//   }
//   slideIndex++;
//   if (slideIndex > slides.length) {slideIndex = 1}
//   slides[slideIndex-1].style.display = "inline-block";
//   setTimeout(showSlides, 3000);
// }

// var slideIndex = 1;
// showDivs(slideIndex);

// function plusDivs(n) {
//     showDivs (slideIndex += n);
// }

// function showDivs(n) {
//     var i;
//     var x = document.getElementsByClassName("mySlides");
//     if (n > x.length) {slideIndex = 1}
//     if (n < 1) {slideIndex = x.length};
//     for (i = 0; i < x.length; i++) {
//         x[i].getElementsByClassName.display = "none";
//     }
//     x[slideIndex-1].style.display = "block";
// }

var slideIndex = 0;
showSlides();

function showSlides() {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}