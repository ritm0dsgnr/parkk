$(function() {
    
$("[data-scroll]").on("click", function(event) {
    event.preventDefault();

    var $this = $(this),
        blockId = $this.data('scroll'),
        blockOffset = $(blockId).offset().top;

    $("html, body").animate({
        scrollTop:  blockOffset
    }, 600);
});

$('.burger').on('click', function(e) {
	$(this).toggleClass('active');
    if($('.burger').hasClass('active')) {
    	$('.nav').addClass('active');
	} else {
		$('.nav').removeClass('active');
	};
});

$(document).mouseup(function (e){ 
    let burger = $('.burger');
    if (!burger.is(e.target) && burger.has(e.target).length === 0) {
        $('.burger').removeClass('active');
        $('.nav').removeClass('active');
    }
});

$(window).scroll(function() {
    var height = $(window).scrollTop();
    if(height > 50){
        $('.header__container').addClass('scroll');
        $('.header__container a .logo').addClass('scroll');
        $('.nav').addClass('scroll');
    } else{
        $('.header__container').removeClass('scroll');
        $('.header__container a .logo').removeClass('scroll');
        $('.nav.active').removeClass('scroll');
    }
});

$("[data-slider]").slick({
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
    {
        breakpoint: 1200,
        settings: {
        arrows: false,
        dots: true,
    }
    },
    ]
    });

function onEntry(entry) {
    entry.forEach(change => {
    if (change.isIntersecting) {
        change.target.classList.add('anim-show');
    }
    else {
        change.target.classList.remove('anim-show');
    }
    });
    }
    let options = {
      threshold: [0.5] };
    let observer = new IntersectionObserver(onEntry, options);
    let elements = document.querySelectorAll('.anim');

    for (let elm of elements) {
      observer.observe(elm);
    }
    });
