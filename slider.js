// Поиск необходимых элементов DOM
const slides = document.querySelector('.slides');
const sliderContainer = document.querySelector('.slider-container');
const sliderWidth = sliderContainer.offsetWidth;
const dotsContainer = document.querySelector('.dots');

// Создание точек для каждого слайда
slides.querySelectorAll('.slide').forEach((slide, index) => {
  const dot = document.createElement('span');
  dot.classList.add('dot');
  dot.setAttribute('data-index', index);
  dotsContainer.appendChild(dot);
});

// Обработчик события прокрутки слайдера
slides.addEventListener('scroll', function() {
  const scrollPosition = slides.scrollLeft;
  const slideWidth = sliderWidth / 3; // Вычисляем ширину одного слайда (1/3 ширины контейнера)
  const selectedIndex = Math.round(scrollPosition / slideWidth);
  
  // Удаляем класс "active" у всех точек
  dotsContainer.querySelectorAll('.dot').forEach(dot => {
    dot.classList.remove('active');
  });
  
  // Добавляем класс "active" к активной точке
  const activeDot = dotsContainer.querySelector(`.dot[data-index="${selectedIndex}"]`);
  activeDot.classList.add('active');
});
const dots = document.querySelectorAll('.dot');

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        slides.scrollTo({
            left: slides.offsetWidth * index, // Прокрутка к нужному слайду
            behavior: 'smooth' // Плавная анимация прокрутки
        });
    });
});

slides.addEventListener('scroll', () => {
    const selectedIndex = Math.round(slides.scrollLeft / slides.offsetWidth);
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === selectedIndex);
    });
});
