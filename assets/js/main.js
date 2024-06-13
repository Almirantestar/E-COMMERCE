/*************** Menu ********************************************/

(function(){

  var $body = document.querySelector('body');
    $body.classList.remove('no-js')
    $body.classList.add('js')

  var menu = new Menu({
    container: '.nav__list',
    toggleBtn: '.header__btnMenu',
    widthEnabled:991
})
})()

/****************** Details *****************************************/

function changeImage(fileName){

  var imgSrc = fileName;
  sessionStorage.setItem('imgSrc', imgSrc);
  window.location.href = "details.html";
}
 

/*=============== IMAGE GALLERY ===============*/
/*function imgGallery(){}

imgGallery(); 








  


/*********************  products tab ***************************/

const tabs = document.querySelectorAll('[data-target]'),
    tabContents = document.querySelectorAll('[content]');

tabs.forEach((tab) => {
    tab.addEventListener('click', () =>{
        const target= document.querySelector(tab.dataset.target);
        tabContents.forEach((tabContent) => {
            tabContent.classList.remove('active-tab');
        });

        target.classList.add('active-tab');

        tabs.forEach((tab)=> {
            tab.classList.remove('active-tab');
        });

        tab.classList.add('active-tab');
    });

});

/********************* Accounts ********************************/
 var btn_orders = document.querySelector('#orders');
 var orders= document.querySelector('.tab__orders__content');

btn_orders.addEventListener('click', function(){
  if( orders.style.display === 'none'){
    orders.style.display = 'block';
  }else{
    orders.style.display ='none';
  }
});

var btn_profile = document.querySelector('#update-profile');
var profile= document.querySelector('.tab__profile__content');

btn_profile.addEventListener('click', function(){
 if(profile.style.display === 'none'){
  profile.style.display = 'block';
 }else{
  profile.style.display ='none';
 }
});

var btn_address = document.querySelector('#address');
var address = document.querySelector('.tab__address__content');


btn_address.addEventListener('click', function(){
 if(address.style.display === 'none'){
  address.style.display = 'block';
 }else{
  address.style.display ='none';
 }
});

/*var btn = document.querySelector('.btn--accounts');*/
var btn_password = document.querySelector('#password');
var password= document.querySelector('.tab__password__content');

btn_password.addEventListener('click', function(){
 if(password.style.display === 'none'){
  password.style.display = 'block';
 }else{
  password.style.display ='none';
 }
});










    
    
