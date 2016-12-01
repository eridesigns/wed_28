//Avoiding conflicts
(function($){


//Making the plugins run
$(document).ready(function() {

      $('.header-search' ).click(function() {
        $('.header-search-expand').slideToggle();
      });

      //gallery test
      $('.fancybox').fancybox();
      $('.backstretch').css('opacity','0.2');

  		//adding styling to tags in the blog page
  		$('.tagcloud a').addClass('label label-primary sidebar-labels');
  		$('.tagcloud a').css('font-size','12px');

      $('#cat').addClass('form-control');


});

})(jQuery); // end
