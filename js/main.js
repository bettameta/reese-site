// Don't forget to include the Jquery library (https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js) before including this JavaScript code //

jQuery(document).ready(function() {
   // This number controls now far down when scrolling the arrow appears //
   var offset = 250;
   // This nubmer controls the duration of the fade in and out //
   var duration = 300;
   jQuery(window).scroll(function() {
      if (jQuery(this).scrollTop() > offset) {
      jQuery('.back-to-top').fadeIn(duration);
   } else {
      jQuery('.back-to-top').fadeOut(duration);
   }
   });
    
   jQuery('.back-to-top').click(function(event) {
      event.preventDefault();
      jQuery('html, body').animate({scrollTop: 0}, duration);
      return false;
      })
   });