let hamb = document.querySelector('.fa-bars');
let chiudi = document.querySelector('.fa-times')

hamb.addEventListener("click", function(){
document.querySelector(".hamburger-menu").style.display="block";
});

chiudi.addEventListener("click", function(){
document.querySelector(".hamburger-menu").style.display="none";
});

