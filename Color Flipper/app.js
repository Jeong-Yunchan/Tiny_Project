const Back_ground = document.querySelector(".color"); 
const Btn = document.querySelector('.ChangeBtn');
const text = document.querySelector('#color-text');

Btn.addEventListener('click', () =>{
  let color = ['blue', 'yellow','red','orange','green','pink'];
  let random =  Math.floor(Math.random()* color.length);

  Back_ground.style.backgroundColor = color[random];
  text.textContent = `Background Color : ${color[random]}`;
});