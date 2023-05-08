import './style.scss';

//slider
const slidersBlock = document.querySelector(".sliders")
const slides = slidersBlock.querySelectorAll(".slide");
const nextSlide = slidersBlock.querySelector(".btn-next");
const prevSlide = slidersBlock.querySelector(".btn-prev");
const nextSliderIcon = slidersBlock.querySelectorAll(".slider__icon__next_item");
const prevSliderIcon = slidersBlock.querySelectorAll(".slider__icon__prev_item");

let curSlide = 0;
let maxSlide = slides.length - 1;

window.onload = function() {
  slides.forEach((slide, i) => {
    slide.style.transform = `translateX(${110 * (i - curSlide)}%)`;
  });
}

function transformSlide() {
  slides.forEach((slide, i) => {
    slide.style.transition = 'all 0.5s';
    slide.style.transform = `translateX(${110 * (i - curSlide)}%)`;
  });
}

function addClassSladerIcon(sladerIcon, color1, color2) {
  sladerIcon.forEach((icon, i) => {
    icon.classList.add(color1);
    icon.classList.remove(color2)
  });
}

nextSlide.addEventListener("click", () => {
  (curSlide === maxSlide) ? addClassSladerIcon(nextSliderIcon, 'stroke__light', 'stroke__color') : curSlide++;
  
  if(curSlide === 1) {
    addClassSladerIcon(prevSliderIcon, 'stroke__color', 'stroke__light');
  }
  transformSlide();
});

prevSlide.addEventListener("click", () => {
  (curSlide === 0) ? addClassSladerIcon(prevSliderIcon, 'stroke__light', 'stroke__color') : curSlide--;

  if(curSlide === maxSlide-1) {
    addClassSladerIcon(nextSliderIcon, 'stroke__color', 'stroke__light');
  }
  transformSlide();
});


//like button
const cards = document.querySelector(".tours__cards")
const likes = cards.querySelectorAll(".btn__like");
const hearts = cards.querySelectorAll(".like__heart");

let itemcСunter = [];

likes.forEach((like, i) => {
  itemcСunter.push(0);

  like.addEventListener("click", (e) => {
    console.log(e.target.id)
    console.log(e.target)
    if(+(e.target.id) === i + 1) {
      if(itemcСunter[i] === 0) {
        itemcСunter[i] += 1;
        hearts[i].classList.add("like__heart_color");
        likes[i].classList.add("btn__display_add");
        likes[i].classList.remove("btn__display_none");
      } else {
        itemcСunter[i] -= 1;
        likes[i].classList.add("btn__display_none");
        hearts[i].classList.remove("like__heart_color");
        likes[i].classList.remove("btn__display_add");
      }
    } 
  })
})


