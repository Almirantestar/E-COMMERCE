
var imgSrc = sessionStorage.getItem('imgSrc');
var img = document.querySelector('#view__img'); 
/*img.style.width='70'+ '%'  */
img.style.width='520'+ 'px'
img.style.height ='505'+ 'px'

if (imgSrc) {
    img.src = imgSrc;
} 