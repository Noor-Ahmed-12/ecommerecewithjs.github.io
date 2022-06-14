// select all products containers
const productContainers = [...document.querySelectorAll('.product-container')];
const nextBtn = [...document.querySelectorAll('.next-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

// loop through each card
productContainers.forEach( (item, i) => {
    
    // get dim of card
    let containerDim = item.getBoundingClientRect();
    
    // store width of container
    let containerWidth =  containerDim.width;

    nextBtn[i].addEventListener('click', () => {
        item.scrollLeft +=containerWidth; 
    })

    preBtn[i].addEventListener('click',() =>{
        item.scrollLeft -=containerWidth; 
    })
})
