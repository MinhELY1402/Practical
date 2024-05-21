function navbar(){
const showBtn = document.querySelector('.menu--mbtb')
const hideBtn = document.querySelector('.menu--mbtb2')
const div1 = document.querySelector('.header--mbtb')
const div2= document.querySelector('.mbtb--display')
showBtn.addEventListener('click', () => {
  div1.style.display = "block";
  div2.style.display = "none";
})
hideBtn.addEventListener('click', () => {
  div1.style.display = "none";
  div2.style.display = "block";
})
}