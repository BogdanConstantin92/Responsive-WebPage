const navSlider = () =>{
    const burger = document.querySelector('.burger');
    const navUl = document.querySelector('nav ul');
    const navLi = document.querySelectorAll('nav li')
    burger.addEventListener('click', () =>{
        burger.classList.toggle('animate-lines');
        navUl.classList.toggle('slide-back');
        navLi.forEach((item, index) =>{
            if(item.style.animation){
                item.style.animation = '';
            } else{
                item.style.animation = `fade-back 500ms ease forwards ${index /7}s`
            }
        })
    })
   
}
navSlider();






const backgroundSlider = () => {
    let slider = document.querySelector('.slider');
    const btnPrev = document.querySelector('.prev');
    const btnNext = document.querySelector('.next');

    let num = 0;
    btnNext.addEventListener('click', () =>{
        if(num == '4'){
            num = '-1';
        }
        num++;
        slider.style.background = `url(./images/car-${num}.jpg) center/cover`;
   
        
    })
    btnPrev.addEventListener('click', () =>{
        if(num == '0'){
            num = '5';
        }
        num--;
        slider.style.background = `url(./images/car-${num}.jpg) center/cover`;
    })

}
backgroundSlider()