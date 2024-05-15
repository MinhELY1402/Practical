function navbar(){
const showBtn = document.querySelector('.menu--mbtb')
const hideBtn = document.querySelector('.menu--mbtb2')
const div = document.querySelector('.header--mbtb')
showBtn.addEventListener('click', () => {
  div.style.display = "block";
})
hideBtn.addEventListener('click', () => {
  div.style.display = "none";
})
}