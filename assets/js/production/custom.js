//Avoiding conflicts
(function($){


//Making the plugins run
$(document).ready(function() {

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item'
  });

  //typed effect
  $(".hello").typed({
    strings: [
      "Hi there..",
      "My name is Eri",
      "I help businesses with web and graphic design"
    ],
    typeSpeed: 30,
    contentType: 'html'
  });

});

})(jQuery); // end
