const showBtn = document.querySelector('.menu-mb-tb-1')
const hideBtn = document.querySelector('.menu-mb-tb-2')
const div = document.querySelector('.header-mb-tb')
showBtn.addEventListener('click', () => {
  div.style.display = "block";
})
hideBtn.addEventListener('click', () => {
  div.style.display = "none";
})