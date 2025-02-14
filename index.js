
var typed = new Typed('.element', {
    strings: ["Web Developer", "AWS Cloud", "Devops", "Learn More About me!!!"],
    typeSpeed: 30,
    loop:false,
  });

  var scrollpos = window.scrollY; // window scroll position
var wh = window.innerHeight-50; // as soon as element touches bottom with offset event starts
var element = document.querySelector(".sec1-dmush1"); //element

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      const square = entry.target.querySelector('.square');
  
      if (entry.isIntersecting) {
        square.classList.add('square-animation');
        return; // if we added the class, exit the function
      }
  
      // We're not intersecting, so remove the class!
      square.classList.remove('square-animation');
    });
  });
  
  observer.observe(document.querySelector('.about__right-a'));