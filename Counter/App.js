let value = document.querySelector('#value');
let count = 0;
const btns = document.querySelectorAll('.btn');
btns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    const className = e.target.className.split(' ')[1];
    if (className === 'decrease') {
      count--;
    } else if (className === 'increase') {
      count++;
    } else if (className === 'reset') {
      count = 0;
    }
    if(count > 0) value.style.color = "rgb(60,255,95)";
    else if(count < 0) value.style.color = "red"
    else value.style.color = 'black'
    value.textContent = count;
  });
});
