// Home - Typewriter effect

var app = document.querySelector(".typewriter-title");

var typewriter = new Typewriter(app, {
  loop: true,
  delay: 75,
});

typewriter
  .pauseFor(1000)
  .typeString('Web Developer')
  .pauseFor(1000)
  .deleteAll()
  .typeString('UI/UX Designer')
  .deleteAll()
  .typeString('App Developer')
  .pauseFor(1000)
  .start();


  // About Me - Tabs List

  let tabList = document.querySelectorAll('.nav-tabs .nav-item a');

  tabList.forEach(function(e) {
    let tabTrigger = new bootstrap.Tab(e);
    e.addEventListener('click', function(e) {
      e.preventDefault();
      tabTrigger.show();
    })
  });


  // Portfolio - imagesLoaded with vanilla JS + Isotope

  let grid = document.querySelector('.grid');
  let iso;

  imagesLoaded(grid, function(){
    iso = new Isotope(grid, {
      itemSelector: '.grid-item',
      layoutMode: 'masonry'
    });   
    
    // Filter
    let filter = document.querySelector('.portfolio-filter');

    filter.addEventListener('click', function(e) {
      if (!matchesSelector(e.target, 'button')) {
        return;
      }

      let filterValue = e.target.getAttribute('data-filter');

      iso.arrange({
        filter: filterValue
      });
    });
  });


 // Filter Button Active 

 let btn = document.querySelectorAll('.fil-btn');

btn.forEach(function(el, key){
  el.addEventListener('click', function() {
    el.classList.add('clicked');

    btn.forEach(function(ell, keys){
      if(key != keys) {
        ell.classList.remove('clicked');
      }
    });
  });
});


// Testimonial Slider - TinySlider

let slider = tns({
  container: '.my-slider',
  items: 1,
  slideBy: 1,
  controls: false,
  navPosition: 'bottom',
  gutter: 30,
  autoplay: true,
  autoplayButtonOutput: false,
  mouseDrag: true,
  responsive: {
      960: {
          items: 2
      }
  }
});


// Scroll to Top
window.addEventListener('scroll', function() {
  let scrolled = window.pageYOffset;
  let topbtn = document.querySelector('.scroll-to-top');
  
  if(scrolled > 700) {
    topbtn.classList.add('d-inline-block');
  }
  if(scrolled < 700) {
    topbtn.classList.remove('d-inline-block');
  }
});


// Navbar Fixed-Top
window.addEventListener('scroll', function() {
  if(window.scrollY > 150){
    document.getElementById('navbar-scroll').classList.add('fixed-top');
    var navbar_height = document.querySelector('.navbar').offsetHeight;
    document.body.style.paddingTop = navbar_height + 'px';
} else {
    document.getElementById('navbar-scroll').classList.remove('fixed-top');
    document.body.style.paddingTop = '0';
}  
});