'user strict';

// Preloader
$(window).on('load', function () {
    $('.preloader').fadeOut(1500);
});


//Menu Dropdown
$("ul>li>.sub-menu").parent("li").addClass("has-sub-menu");

$('.menu li a').on('click', function () {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
});


// Categories

$("ul>li>.sub-category").parent("li").addClass("has-sub-category");



// Responsive Menu
$('.header-trigger').on('click', function(){
    $('.menu, .header-trigger').toggleClass('active')
    $('.overlay').toggleClass('active')
});


// Overlay Event
$('.overlay').on('click', function() {
  $('.overlay').removeClass('overlay-color')
  $('.overlay').removeClass('active')
  $('.menu, .header-trigger').removeClass('active')
  $('.search-wrapper').removeClass('active')
  $('.category-sidebar').slideUp(300)
})

// Odometer Counter
$(".counter-item").each(function () {
  $(this).isInViewport(function (status) {
    if (status === "entered") {
      for (var i = 0; i < document.querySelectorAll(".odometer").length; i++) {
        var el = document.querySelectorAll('.odometer')[i];
        el.innerHTML = el.getAttribute("data-odometer-final");
      }
    }
  });
});

// Scroll To Top 
var scrollTop = $(".scrollToTop");
$(window).on('scroll', function () {
  if ($(this).scrollTop() < 500) {
    scrollTop.removeClass("active");
  } else {
    scrollTop.addClass("active");
  }
});

//Click event to scroll to top
$('.scrollToTop').on('click', function () {
  $('html, body').animate({
    scrollTop: 0
  }, 300);
  return false;
});


$('.banner-slider').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1300,
  infinite: true,
  autoplay: true,
  pauseOnHover: true,
  centerMode: true,
  dots: true,
  arrows: false,
});


$('.thumb-slider-one').slick({
  fade: false,
  slidesToShow: 1,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: true,
  centerMode: false,
  dots: true,
  arrows: false,
  asNavFor: '.thumb-slider-two',
});
$('.thumb-slider-two').slick({
  fade: false,
  slidesToShow: 4,
  slidesToScroll: 1,
  infinite: true,
  pauseOnHover: true,
  centerMode: false,
  dots: false,
  arrows: false,
  asNavFor: '.thumb-slider-one',
  focusOnSelect: true,
  responsive: [
    {
      breakpoint: 1200,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 992,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 3,
      }
    },
    {
      breakpoint: 576,
      settings: {
        slidesToShow: 2,
      }
    },

  ]
});

// Search Toggler
$('.search-toggler').on('click', function() {
  $('.search-wrapper').addClass('active')
  $('.overlay').addClass('active')
})

// Category Toggler
$('.all-categories').on('click', function() {
    $('.category-sidebar').slideToggle(300)
    $('.overlay').addClass('active')
})

// Product Size Choice
$('.product-size-single').on('click', function() {
    $('.product-size-single').removeClass('active')
    $(this).addClass('active')
})

// Product Color Choice
$('.product-color-single').on('click', function() {
    $('.product-color-single').removeClass('active')
    $(this).addClass('active')
})

// Add to Cart
$(".qtybutton").on("click", function() {
  var $button = $(this);
  $button.parent().find('.qtybutton').removeClass('active')
  $button.addClass('active');
    var oldValue = $button.parent().find("input").val();
    if ($button.hasClass('inc')) {
        var newVal = parseFloat(oldValue) + 01;
    } else {
        if (oldValue > 1) {
            var newVal = parseFloat(oldValue) - 01;
        } else {
            newVal = 01;
        }
    }
  $button.parent().find("input").val(newVal);
});

// Category Sidebar
$('.category-sidebar li a').on('click', function () {
  var element = $(this).parent('li');
  if (element.hasClass('open')) {
    element.removeClass('open');
    element.find('li').removeClass('open');
    element.find('ul').slideUp(300, "swing");
  } else {
    element.addClass('open');
    element.children('ul').slideDown(300, "swing");
    element.siblings('li').children('ul').slideUp(300, "swing");
    element.siblings('li').removeClass('open');
    element.siblings('li').find('li').removeClass('open');
    element.siblings('li').find('ul').slideUp(300, "swing");
  }
});