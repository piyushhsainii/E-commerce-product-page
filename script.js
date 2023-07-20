const Ham = document.querySelector('.hamburger');
const HamMenu = document.querySelector('.ham-menu')
const X = document.querySelector('.ham-menu-item1')
const shadow = document.querySelector('.shadow')

Ham.addEventListener('click', () => {
    HamMenu.classList.add('active')
    shadow.classList.remove('shadow-active')
})
X.addEventListener('click', () => {
    HamMenu.classList.remove('active')
    shadow.classList.add('shadow-active')
})

const border1 = document.querySelector('.op1')
const border2 = document.querySelector('.op2')
const border3 = document.querySelector('.op3')
const border4 = document.querySelector('.op4')
const main_img = document.querySelector('.image-product-1-thumbnail')
main_img.src = './images/image-product-1.jpg'


//displaying main image as per thumbnail active
const thumbmail_1 = document.querySelector('.thumbnail-child.first')
thumbmail_1.addEventListener('click', () => {
    main_img.src = './images/image-product-1.jpg'
})

const thumbmail_2 = document.querySelector('.thumbnail-child.second')
thumbmail_2.addEventListener('click', () => {
    main_img.src = './images/image-product-2.jpg';
})
const thumbmail_3 = document.querySelector('.third')
thumbmail_3.addEventListener('click', () => {
    main_img.src = './images/image-product-3.jpg'
})
const thumbmail_4 = document.querySelector('.fourth')
thumbmail_4.addEventListener('click', () => {
    main_img.src = './images/image-product-4.jpg'
})

let prevIcon = document.querySelector('.previous-icon') 
let nextIcon = document.querySelector('.next-icon')

const images = [
    './images/image-product-1.jpg',
    './images/image-product-2.jpg',
    './images/image-product-3.jpg',
    './images/image-product-4.jpg',
  ];
  let currentImageIndex = 0;
function showImage() {
    main_img.src = images[currentImageIndex];
  }

  function showNextImage() {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    showImage();
  }

  function showPreviousImage() {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    showImage();
  }

  // Attach event listeners to the buttons
  nextIcon.addEventListener("click", showNextImage);
  prevIcon.addEventListener("click", showPreviousImage);

  // Show the initial image
  showImage();


//thumnail active element list 

thumbmail_1.addEventListener('click',()=>{
    thumbmail_1.classList.add('active-state')
    border1.classList.add('opacity')
    border2.classList.remove('opacity')
    border3.classList.remove('opacity')
    border4.classList.remove('opacity')
    thumbmail_2.classList.remove('active-state')
    thumbmail_3.classList.remove('active-state')
    thumbmail_4.classList.remove('active-state')
})
thumbmail_2.addEventListener('click',()=>{
    thumbmail_2.classList.add('active-state')
    thumbmail_1.classList.remove('active-state')
    thumbmail_3.classList.remove('active-state')
    thumbmail_4.classList.remove('active-state')
    border2.classList.add('opacity')
    border1.classList.remove('opacity')
    border3.classList.remove('opacity')
    border4.classList.remove('opacity')
})
thumbmail_3.addEventListener('click',()=>{
    thumbmail_3.classList.add('active-state')
    thumbmail_1.classList.remove('active-state')
    thumbmail_2.classList.remove('active-state')
    thumbmail_4.classList.remove('active-state')
    border3.classList.add('opacity')
    border2.classList.remove('opacity')
    border1.classList.remove('opacity')
    border4.classList.remove('opacity')
})
thumbmail_4.addEventListener('click',()=>{
    thumbmail_4.classList.add('active-state')
    thumbmail_1.classList.remove('active-state')
    thumbmail_2.classList.remove('active-state')
    thumbmail_3.classList.remove('active-state')
    border4.classList.add('opacity')
    border2.classList.remove('opacity')
    border3.classList.remove('opacity')
    border1.classList.remove('opacity')
})


let minus = document.querySelector('.quantity-minus')
let quantity = document.querySelector('.quantity-count')
let plus = document.querySelector('.quantity-plus')
let cartCount = document.querySelector('.cartCount')
let cartTotal = document.querySelector('.cart-menu-total')
cartTotal.textContent = '$0.00';
count = 0;

//cart notifications

let cartNoti = document.querySelector('.cart-noti')


function updateDisplay(){
    quantity.textContent = count;
    cartCount.textContent = count;
    cartNoti.textContent = count;
    cartTotal.textContent = '$'+count*125 + '.00'; 

}
minus.addEventListener('click',()=>{
    if(count>0){
        count--
        updateDisplay();
    }
    if(count==0){
     cartNoti.classList.add('cart-noti-off')
     cartItem2.classList.remove('show-hide')
     cartItem3.classList.remove('show-hide')
     cartItem2.classList.add('show-hide')
     cartItem3.classList.add('show-hide')
    cartEmpty2.classList.remove('empty-cart')

    }
})

plus.addEventListener('click',()=>{
    count++
    updateDisplay();
})

updateDisplay();


//display cart -- 
const cart = document.querySelector('.CART');
const cartBox = document.querySelector('.cart-box');
cart.addEventListener('click',()=>{
    cartBox.classList.toggle('show');
})



//delete button of cartBox
let cartItem2 = document.querySelector('.cart-sub-2')
let cartItem3 = document.querySelector('.cart-sub-3')
let DelCart = document.querySelector('.cart-menu-del')
let cartEmpty = document.querySelector('.empty-cart')
let cartEmpty2 = document.querySelector('.emptyCart')


// delete button of item cart
DelCart.addEventListener('click',()=>{
    cartItem2.classList.add('show-hide')
    cartItem3.classList.add('show-hide')
    cartEmpty2.classList.remove('empty-cart')
    cartNoti.classList.add('cart-noti-off')
})


//adds items to cart and checks validity

let AddtoCart = document.querySelector('.text-6')
AddtoCart.addEventListener('click',()=>{
    if(cartCount.textContent>0){
        cartItem2.classList.remove('show-hide')
        cartItem3.classList.remove('show-hide')
        cartEmpty2.classList.add('empty-cart')
        cartNoti.classList.remove('cart-noti-off')
    }
    // cartEmpty.classList.toggle('empty-cart')

})

//fetching  lightbox display and stuff
let LightBox = document.querySelector('.image-product-1-thumbnail')
let ShadowBG = document.querySelector('.shadow-bg')
let LightBoxClose = document.querySelector('.lightbox-close')
let LightBoxImage = document.querySelector('.image1')
let LightBoxChild1 = document.querySelector('#LightChild1')
let LightBoxChild2 = document.querySelector('#LightChild2')
let LightBoxChild3 = document.querySelector('#LightChild3')
let LightBoxChild4 = document.querySelector('#LightChild4')


// toggle switch for thumbanil pics in lightbox
LightBoxClose.addEventListener('click',()=>{
    ShadowBG.classList.toggle('shadow-active')
    LightBoxChild1.classList.toggle('shadow-active')
    LightBoxChild2.classList.toggle('shadow-active')
    LightBoxChild3.classList.toggle('shadow-active')
    LightBoxChild4.classList.toggle('shadow-active')
    LightBoxClose.classList.toggle('shadow-active')
    LightBoxImage.classList.toggle('shadow-active')
   
})

let image1 = document.querySelector('.image1')


const one = (event) =>{
    if(thumbmail_3.classList.contains('active-state')){
        LightBoxChild3.classList.add('opacity')
    }
}

const two = (event) =>{
    if(thumbmail_1.classList.contains('active-state')){
        LightBoxChild1.classList.add('opacity')
    }
}
const three = (event) =>{
    if(thumbmail_3.classList.contains('active-state')){
        LightBoxChild3.classList.add('opacity')
    }
}
const four = (event) =>{
    if(thumbmail_4.classList.contains('active-state')){
        LightBoxChild4.classList.add('opacity')
    }
}
const five = (event) =>{
    ShadowBG.classList.toggle('shadow-active')
    image1.src = main_img.src;
    LightBoxChild1.classList.toggle('shadow-active')
    LightBoxChild2.classList.toggle('shadow-active')
    LightBoxChild3.classList.toggle('shadow-active')
    LightBoxChild4.classList.toggle('shadow-active')
    LightBoxClose.classList.toggle('shadow-active')
    LightBoxImage.classList.toggle('shadow-active')
}
LightBox.addEventListener('click', one);
LightBox.addEventListener('click', two);
LightBox.addEventListener('click', three);
LightBox.addEventListener('click', four);
LightBox.addEventListener('click', five);


LightBoxChild1.addEventListener('click',()=>{
    if(LightBoxChild1.classList.contains('opacity')){
        LightBoxChild2.classList.remove('opacity')
        LightBoxChild3.classList.remove('opacity')
        LightBoxChild4.classList.remove('opacity')
    } else {
        LightBoxChild1.classList.add('opacity')
    }
    image1.src = './images/image-product-1.jpg'
    
    LightBoxChild2.classList.remove('opacity')
    LightBoxChild3.classList.remove('opacity')
    LightBoxChild4.classList.remove('opacity')
})

LightBoxChild2.addEventListener('click',()=>{
    if(LightBoxChild2.classList.contains('active-state')){
        image1.src = './images/image-product-2.jpg'
        LightBoxChild1.classList.remove('opacity')
        LightBoxChild3.classList.remove('opacity')
        LightBoxChild4.classList.remove('opacity')
    } else {
        LightBoxChild2.classList.add('opacity')
    }
    
    image1.src = './images/image-product-2.jpg'
    
    LightBoxChild1.classList.remove('opacity')
    LightBoxChild3.classList.remove('opacity')
    LightBoxChild4.classList.remove('opacity')
})
LightBoxChild3.addEventListener('click',()=>{
    if(LightBoxChild3.classList.contains('active-state')){
        LightBoxChild1.classList.remove('opacity')
        LightBoxChild2.classList.remove('opacity')
        LightBoxChild4.classList.remove('opacity')
    } else {
        LightBoxChild3.classList.add('opacity')
    }
    image1.src = './images/image-product-3.jpg'
    
    LightBoxChild1.classList.remove('opacity')
    LightBoxChild2.classList.remove('opacity')
    LightBoxChild4.classList.remove('opacity')
})
LightBoxChild4.addEventListener('click',()=>{
    if(LightBoxChild4.classList.contains('active-state')){
        LightBoxChild1.classList.remove('opacity')
        LightBoxChild2.classList.remove('opacity')
        LightBoxChild3.classList.remove('opacity')
    } else {
        LightBoxChild4.classList.add('opacity')
    }
    image1.src = './images/image-product-4.jpg'
    
    LightBoxChild1.classList.remove('opacity')
    LightBoxChild2.classList.remove('opacity')
    LightBoxChild3.classList.remove('opacity')
})


//removing - add event listners

function handleResize(){
    const screenWidth = window.innerWidth;
    if(screenWidth<900){
       LightBox.removeEventListener('click',one)
       LightBox.removeEventListener('click',two)
       LightBox.removeEventListener('click',three )
       LightBox.removeEventListener('click',four)
       LightBox.removeEventListener('click',five)
       console.log('hi')
    } 
}
function handlePlusResize(){
    const screenWidth1 = window.innerWidth;
    if(screenWidth1>900) {
        LightBox.addEventListener('click',one)
        LightBox.addEventListener('click',two)
        LightBox.addEventListener('click',three)
        LightBox.addEventListener('click',four)
        LightBox.addEventListener('click',five)
        
    }
}
LightBox.addEventListener('mouseover', handleResize);
LightBox.addEventListener('click', handlePlusResize);
