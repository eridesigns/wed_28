//Avoiding conflicts
(function($){


//Making the plugins run
$(document).ready(function() {

  $('.grid').masonry({
    // options...
    itemSelector: '.grid-item'
  });

  //typed effect
  /*
  $(".hello").typed({
    strings: [
      "Hi there..",
      "My name is Eri",
      "I help businesses with web and graphic design"
    ],
    typeSpeed: 30,
    contentType: 'html'
  }); */

  //menu panel
  $('.menu-panel-slide').click(function(){
      $('.menu-panel').slideToggle();
  });

  // Defining a function to set size for #hero
  function fullscreen(){
    $(".hero").css({
      width: $(window).width(),
      height: $(window).height()
      });
  }

  fullscreen();

  // Run the function in case of window resize
  $(window).resize(function() {
       fullscreen();
  });

});

})(jQuery); // end
