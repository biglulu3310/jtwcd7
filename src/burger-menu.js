var icon = document.getElementById("burger-menu");
var icon1 = document.getElementById("burger-menu1");
var icon2 = document.getElementById("burger-menu2");
var icon3 = document.getElementById("burger-menu3");

icon.addEventListener('click', function() {
  icon1.classList.toggle('burger-menu1');
  icon2.classList.toggle('burger-menu3');
  icon3.classList.toggle('burger-menu2');
});