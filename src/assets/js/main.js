
(function() {
  "use strict";

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all)
    if (selectEl) {
      if (all) {
        selectEl.forEach(e => e.addEventListener(type, listener))
      } else {
        selectEl.addEventListener(type, listener)
      }
    }
  }

  /**
   * Easy on scroll event listener 
   */
  const onscroll = (el, listener) => {
    el.addEventListener('scroll', listener)
  }

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select('#navbar .scrollto', true)
  const navbarlinksActive = () => {
    let position = window.scrollY + 200
    navbarlinks.forEach(navbarlink => {
      if (!navbarlink.hash) return
      let section = select(navbarlink.hash)
      if (!section) return
      if (position >= section.offsetTop && position <= (section.offsetTop + section.offsetHeight)) {
        navbarlink.classList.add('active')
      } else {
        navbarlink.classList.remove('active')
      }
    })
  }
  window.addEventListener('load', navbarlinksActive)
  onscroll(document, navbarlinksActive)

  /**
   * Scrolls to an element with header offset
   */
  const scrollto = (el) => {
    let header = select('#header')
    let offset = header.offsetHeight

    if (!header.classList.contains('header-scrolled')) {
      offset -= 16
    }

    let elementPos = select(el).offsetTop
    window.scrollTo({
      top: elementPos - offset,
      behavior: 'smooth'
    })
  }


  $(window).on("scroll", function() {
    if($(window).scrollTop() > 100) {
        $("#header").addClass("fixed-top");
    } else {
        //remove the background property so it comes transparent again (defined in your css)
        $("#header").removeClass("fixed-top");
    }
});

  

  /**
   * Back to top button
   */
  let backtotop = select('.back-to-top')
  if (backtotop) {
    const toggleBacktotop = () => {
      if (window.scrollY > 100) {
        backtotop.classList.add('active')
      } else {
        backtotop.classList.remove('active')
      }
    }
    window.addEventListener('load', toggleBacktotop)
    onscroll(document, toggleBacktotop)
  }

  /**
   * Mobile nav toggle
   */
  on('click', '.mobile-nav-toggle', function(e) {
    select('#navbar').classList.toggle('navbar-mobile')
    this.classList.toggle('bi-list')
    this.classList.toggle('bi-x')
  })

  /**
   * Mobile nav dropdowns activate
   */
  on('click', '.navbar .dropdown > a', function(e) {
    if (select('#navbar').classList.contains('navbar-mobile')) {
      e.preventDefault()
      this.nextElementSibling.classList.toggle('dropdown-active')
    }
  }, true)

  /**
   * Scrool with ofset on links with a class name .scrollto
   */
  on('click', '.scrollto', function(e) {
    if (select(this.hash)) {
      e.preventDefault()

      let navbar = select('#navbar')
      if (navbar.classList.contains('navbar-mobile')) {
        navbar.classList.remove('navbar-mobile')
        let navbarToggle = select('.mobile-nav-toggle')
        navbarToggle.classList.toggle('bi-list')
        navbarToggle.classList.toggle('bi-x')
      }
      scrollto(this.hash)
    }
  }, true)

  /**
   * Scroll with ofset on page load with hash links in the url
   */
  window.addEventListener('load', () => {
    if (window.location.hash) {
      if (select(window.location.hash)) {
        scrollto(window.location.hash)
      }
    }
  });

  // Testimonial


  /**
   * Animation on scroll
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: falseG
    })
  });

  $(document).ready(function(){
    setTimeout(function(){ 
      $(".btm-hi").removeClass("onload")
    },1000)


  })

  $(".btm-close").click(function(){
    console.log(this)
    $(".btm-form").addClass("btm-uper")
    $(".btm-hi").addClass("btm-down")
  })

   $(".btm-close2").click(function(){
    console.log(this)
    $(".btm-form").removeClass("btm-uper")
    $(".btm-hi").removeClass("btm-down")
  })

  /**
   * Initiate Pure Counter 
   */
  //new PureCounter();

   /**
   * Start Scroll bottom to top section 
   */
   $(document).ready(function(){
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
          $('#back-to-top').fadeIn();
        } else {
          $('#back-to-top').fadeOut();
        }
      });
      // scroll body to 0px on click
      $('#back-to-top').click(function () {
        $('body,html').animate({
          scrollTop: 0
        }, 400);
        return false;
      });
  });
 /**
   *End Scroll bottom to top section 
   */

   $(document).ready(function() {

    //Set the initial state: highlight the first button...
    $('.tabs').find('li:eq(0)').addClass('active');
  
    //and hide all tab content except the first one
    $('.tab-content').find('> div:eq(0)').nextAll().hide();
  
    //actions that apply on click of any of the buttons
    $('.tabs li').click( function(event) {
  
      //turn off the link so it doesn't try to jump down the page
      event.preventDefault();
  
      //un-highlight the buttons
      $('.tabs li').removeClass();
  
      //hide all the slides
      $('.tab-content > div').hide();
  
      //highlight the current button
      $(this).addClass('active');
  
      //get the index of the current button...
      var index = $('.tabs li').index(this);
  
      //and use that index to show the corresponding slide
      $('.tab-content > div:eq('+index+')').show();
  
    });
  
  });


  //home page contect us page slide from left to right
	var easeOutBounce = function (x, t, b, c, d) {
    if ((t /= d) < (1 / 2.75)) {
        return c * (7.5625 * t * t) + b;
    } else if (t < (2 / 2.75)) {
        return c * (7.5625 * (t -= (1.5 / 2.75)) * t + .75) + b;
    } else if (t < (2.5 / 2.75)) {
        return c * (7.5625 * (t -= (2.25 / 2.75)) * t + .9375) + b;
    } else {
        return c * (7.5625 * (t -= (2.625 / 2.75)) * t + .984375) + b;
    }
}

function Animate(elem, propName, duration, start, end) {
    var start_time = new Date().getTime();
    var interval = setInterval(function () {
        var current_time = new Date().getTime(),
                remaining = Math.max(0, start_time + duration - current_time),
                temp = remaining / duration || 0,
                percent = 1 - temp;

        if (start_time + duration < current_time) clearInterval(interval);

        var pos = easeOutBounce(null, duration * percent, 0, 1, duration),
                current = (end - start) * pos + start;

        elem.style[propName] = current + 'px';
    }, 1);
}

var elem = document.getElementById('contactform');
var opened = false;

// document.getElementById('contact-button').onclick = function () {
//     if (opened) {
//         Animate(elem, 'left', 800, 0, -405);
//         opened = false;
//     } else {
//         Animate(elem, 'left', 800, -405, 0);
//         opened = true;
//     }
// }
 
 

})()