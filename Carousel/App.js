import reviewInfo from './review.js';

class App{
  
  constructor(){
    this.index = 0;
    this.image = document.querySelector('.image img');
    this.name = document.querySelector('.name');
    this.reviews = document.querySelector('.reviews');
    this.btn_left= document.querySelector('.left');
    this.btn_right= document.querySelector('.right');
    this.render();
  }

  render(){
    this.btn_left.addEventListener('click',()=>{
      this.left();
    });
    this.btn_right.addEventListener('click',()=>{
      this.right();
    });
    this.setState(this.index);
  }

  setState(index) {
    const img = reviewInfo[index].img;
    const name = reviewInfo[index].name;
    const reivew = reviewInfo[index].review;
    this.image.setAttribute('src',img)
    this.name.textContent = name;
    this.reviews.textContent = reivew; 
  }

  right(){
    this.index++;
    this.index = this.index > reviewInfo.length-1 ? this.index - reviewInfo.length : this.index;
    this.setState(this.index);
  }

  left(){
    this.index--;
    this.index = this.index < 0 ? this.index + reviewInfo.length : this.index;
    this.setState(this.index);
  }
}

const app = new App('main');