$(document).ready(function(){

    // Mixitup filter plugin 
    var mixer = mixitup('.my-portfolio');

    
    // magnific image popup

    $('.image').magnificPopup({
        type: 'image',
        gallery:{enabled:true}
      });


      // Scroll to top 

      var $button = $.backToTop({
        // optional settings
        backgroundColor: '#1843ff',
        height: 45,
        width: 45,
        effect: 'zoom',
        
      });

      // Owl carousel for Testimonial
        $('.owl-carousel').owlCarousel({
          autoplay: 'true',
          loop: 'true',
          dots: 'true',
          responsive:{
            0:{items:1},
            768:{items:2},
            1200:{items:3}
          }
        });
    //  Aos 
    AOS.init({
      easing: 'ease-out-back',
      duration: 1200
    });
    
});