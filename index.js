
var typed = new Typed('.element', {
    strings: ["Web Developer", "AWS Cloud", "Devops", "Learn More About me!!!"],
    typeSpeed: 30,
    loop:false,
  });

  var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".sec1-dmush1"); //element

window.addEventListener('scroll', function(){ 
    if(scrollpos > (element.offsetTop - wh)){
        element.classList.add("onScroll");
    }
});
