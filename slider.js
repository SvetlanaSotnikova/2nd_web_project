const slides = document.querySelector('.slides');
const sliderWidth = document.querySelector('.slider-container').offsetWidth;

slides.addEventListener('scroll', function() {
  const scrollPosition = slides.scrollLeft;
  const slideWidth = sliderWidth / 3; // Вычисляем ширину одного слайда (1/3 ширины контейнера)
  const selectedIndex = Math.round(scrollPosition / slideWidth);
  const selectedSlide = slides.children[selectedIndex];
  
  // Удаляем класс "selected" у всех слайдов
  Array.from(slides.children).forEach(slide => {
    slide.classList.remove('selected');
  });

  // Добавляем класс "selected" к выбранному слайду
  selectedSlide.classList.add('selected');

  // Вычисляем новую позицию прокрутки для центрирования выбранного слайда
  const newPosition = selectedIndex * slideWidth - sliderWidth / 2 + slideWidth / 2;
  slides.scrollTo({
    left: newPosition,
    behavior: 'smooth'
  });
});
