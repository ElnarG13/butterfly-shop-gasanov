$(document).ready(function () {

// Открытие,закрытие мобильного меню

 $('.burger').on('click', function () {
   $('.main-nav').slideToggle();
 })

 //Табы на странице контактов
 $('.tabs-link').on('click', function (e) {
  e.preventDefault();
  const activeClass = 'active';
  let index = $(this).index('.tabs-link');

  $('.tabs-link').removeClass(activeClass);
  $(this).addClass(activeClass);

  $('.contacts-content').removeClass(activeClass);
  $('.contacts-content').eq(index).addClass(activeClass);
});

 // Аккардеоны на странице FAQ
 let prevIndex;
 $('.accordeon-question').on('click', function () {
   const currentIndex = $(this).index('.accordeon-question');

   if (prevIndex === currentIndex) {
     $(this).next().slideToggle();
     return;
   }

   $('.accordeon-answear').slideUp();
   $(this).next().slideDown();

   prevIndex = currentIndex;
 })

 // Галерея отзывов , слайдер
 if ($('.reviews-wrap').length) {
  $('.reviews-wrap').slick({
    dots: true
  });
}



})
