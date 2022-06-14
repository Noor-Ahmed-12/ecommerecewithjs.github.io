const productImages = document.querySelectorAll('.product-images img');
const ProimgSlider =  document.querySelector('.img-slider');

let activeSlideImg =0;
productImages.forEach((item,i)=>{
    item.addEventListener("click",()=>{
        productImages[activeSlideImg].classList.remove("active");
        item.classList.add('active');
        ProimgSlider.style.backgroundImage = `url('${item.src}')`;
        activeSlideImg=i;
    });
});


// toggle sizes
const btnSize = document.querySelectorAll('.size-radio-btn');
let checkBtn = 0;

btnSize.forEach((item,i) => {
    item.addEventListener("click",()=> {
    btnSize[checkBtn].classList.remove('check');
    item.classList.add('check');
    checkBtn=i;
    });
});