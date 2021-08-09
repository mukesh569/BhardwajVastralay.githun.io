// navigation mobile
  $(document).ready(function(){
 $( function() {
      $( "#dom" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
    $( "#aniver" ).datepicker({
      changeMonth: true,
      changeYear: true
    });
    });
$(".menuControl").click(function(){
$("#mymenu").toggle("slow");
});
 $(".scroll-up").click(function() {
       $("html, body").animate({ scrollTop: 0 }, "slow");
        return false;
      });
     $(window).scroll(function() {
    if ($(document).scrollTop() > 100) {
      $(".scroll-up").css("display","block");
        
      
    } else {
      $(".scroll-up").css("display","none");
    }
  });
});
var acc = document.getElementsByClassName("accordion");
    var i;
    
    for (i = 0; i < acc.length; i++) {
      acc[i].addEventListener("click", function() {
        this.classList.toggle("active");
        var panel = this.nextElementSibling;
        if (panel.style.minHeight) {
          panel.style.minHeight = null;
        } else {
          panel.style.minHeight = panel.scrollHeight + "px";
        } 
      });
    }

  function readURL(input) {
           if (input.files && input.files[0]) {
               var reader = new FileReader();

               reader.onload = function (e) {
                   $('#blah')
                       .attr('src', e.target.result);
               };

               reader.readAsDataURL(input.files[0]);
           }
       }

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();

     
    if (scroll >= 200) {
       
        $(".header-wrapper").addClass("addHeader");
    }
    else{
         $(".header-wrapper").removeClass("addHeader");
    }
});
// brand
$(function() {
// vars for clients list carousel
// http://stackoverflow.com/questions/6759494/jquery-function-definition-in-a-carousel-script
  var $clientcarousel = $('#clients-list');
  var clients = $clientcarousel.children().length;
  var clientwidth = (clients * 220); // 140px width for each client item 
  $clientcarousel.css('width', clientwidth);

  var rotating = true;
  var clientspeed = 0;
  var seeclients = setInterval(rotateClients, clientspeed);

  $(document).on({
    mouseenter: function() {
      rotating = false; // turn off rotation when hovering
    },
    mouseleave: function() {
      rotating = true;
    }
  }, '#clients');
  var speed = 5000;

  function rotateClients() {
    if (rotating != false) {
      var $first = $('#clients-list li:first-child');
      $first.animate({
        'margin-left': '-220px'
      }, 2000, function() {
        $first.remove().css({
          'margin-left': '0px'
        });
        $('#clients-list li:last').after($first);
      });
    }
  }
});

// client Review

var slideIndex = 1;

showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "flex";  
  dots[slideIndex-1].className += " active";
}


  
  setInterval(function(){
    
      plusSlides(1);
    },2000) ;

  

  