var slides = document.querySelectorAll('.slider li');
var dotted = document.querySelectorAll('.slider-dot div');
var k = 0;

document.querySelector('.slider').onclick = slide;

setInterval(slide, 4000);

function slide () {
  if (k == slides.length-1){
      k = 0;
      slides[slides.length-1].style.opacity = 0;
      dotted[slides.length-1].classList.remove('active');
      slides[k].style.opacity = 1;
      dotted[k].classList.add('active');
      
      
    }
    else{
      k++;
      slides[k-1].style.opacity = 0;
      dotted[k-1].classList.remove('active');
      slides[k].style.opacity = 1;
      dotted[k].classList.add('active');
      }
}
