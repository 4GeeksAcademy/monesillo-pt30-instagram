$(document).ready(function() {
    
    $(".nav-link").click(function() {
      
      removeActive();
      
      var t = $(this).attr("href");
      $(t).addClass('active');
      
      var i = $(this).children()[0];
      $(i).attr('class', 'fa fa-angle-up');
    });
  });
  
  function removeActive() {
     $('.nav-link').each(function() {
         var t = $(this).attr("href");
         $(t).removeClass('active');
         var i = $(this).children()[0];
         $(i).attr('class', 'fa fa-angle-down');
     });
  }