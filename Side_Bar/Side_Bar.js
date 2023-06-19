const aside = document.querySelector('.fa-bars');
const side_list = document.querySelector('.side-list');
const side_list_back = document.querySelector('.fa-arrow-right');

aside.addEventListener('click',()=>{
  side_list.classList.toggle('visible-true');
  aside.style.display = 'none';
  side_list_back.style.display = 'block';
});

side_list_back.addEventListener('click',()=>{
  side_list.classList.toggle('visible-true');
  aside.style.display = 'block';
  side_list_back.style.display = 'none';
});

fetch('https://jsonplaceholder.typicode.com/posts')
  .then((response) => response.json())
  .then((json) => console.log(json));