$(document).ready(function(){
    $('.rev_slider').slick({ 
        slidesToShow: 1,
        

         responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '0',
        slidesToShow: 1
        
      }
    },
    
  ]
  })
});






