(function ($) {
	// Start of use strict
	'use strict';
	
    /*-----------------------------------------
	  1. Preloader Loading ----------------------- 
	  -----------------------------------------*/
	function pre_loader(){
		$("#load").fadeOut();
		$('#pre-loader').delay(0).fadeOut('slow');
	}
	pre_loader();
		
	/*-----------------------------------------
	  2. Top Links Show/Hide dropdown ---------
	  -----------------------------------------*/
	  function userlink_dropdown(){  
		$('.top-header .user-menu').on("click", function() {
			if ($(window).width() < 990 ) {
				$(this).next().slideToggle(300);
				$(this).parent().toggleClass("active");
			}
		});
	 }
	 userlink_dropdown();
	 
	/*-----------------------------------------
	  3. Sticky Header ------------------------
	  -----------------------------------------*/
	window.onscroll = function(){ myFunction() };
    function myFunction() {
      if($(window).width()>1199) {
            if($(window).scrollTop()>145){
              $('.header-wrap').addClass("stickyNav animated fadeInDown");                   
            } else {
              $('.header-wrap').removeClass("stickyNav fadeInDown");              
            }
       }
    }
	
	/*-----------------------------------------
	  4. Mobile Menu --------------------------
	  -----------------------------------------*/
	var selectors = {
      	body: 'body',
      	sitenav: '#siteNav',
      	navLinks: '#siteNav .lvl1 > a',
      	menuToggle: '.js-mobile-nav-toggle',
      	mobilenav: '.mobile-nav-wrapper',
      	menuLinks: '#MobileNav .anm',
      	closemenu: '.closemobileMenu'
	};
     
  	$(selectors.navLinks).each(function(){
        if($(this).attr('href') == window.location.pathname) $(this).addClass('active');
    })
	
  	$(selectors.menuToggle).on("click",function(){
      body: 'body',
      $(selectors.mobilenav).toggleClass("active");
      $(selectors.body).toggleClass("menuOn");
      $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });
  
    $(selectors.closemenu).on("click",function(){
      body: 'body',
      $(selectors.mobilenav).toggleClass("active");
      $(selectors.body).toggleClass("menuOn");
      $(selectors.menuToggle).toggleClass('mobile-nav--open mobile-nav--close');
    });
    $("body").on('click', function (event) {
      var $target = $(event.target);
      if(!$target.parents().is(selectors.mobilenav) && !$target.parents().is(selectors.menuToggle) && !$target.is(selectors.menuToggle)){
          $(selectors.mobilenav).removeClass("active");
          $(selectors.body).removeClass("menuOn");
          $(selectors.menuToggle).removeClass('mobile-nav--close').addClass('mobile-nav--open');
      }
    });
	$(selectors.menuLinks).on('click', function(e) {
		e.preventDefault();
		$(this).toggleClass('anm-plus-l anm-minus-l');
		$(this).parent().next().slideToggle();
    });
	
	
	/*-----------------------------------------
	  5. Homepage Slideshow -----------------
	  -----------------------------------------*/
	  function home_slider(){
		 $('.home-slideshow').slick({
			dots: false,
			infinite: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: true,
			autoplay: true,
			autoplaySpeed: 4000,
			lazyLoad: 'ondemand'
		  });
	  }
	  home_slider();
	
	// Full Size Banner on the Any Screen
	$(window).resize(function() {
		var bodyheight = $(this).height() - 20;
		$(".sliderFull .bg-size").height(bodyheight);
	}).resize();
	
	
	/*-----------------------------------
	  6. Footer links for mobiles
	-------------------------------------*/
	function footer_dropdown(){
		$(".footer-links .h4").on('click', function () {
			if($(window).width() < 766){
			  $(this).next().slideToggle();
			  $(this).toggleClass("active");
			}
		});  
	}
	footer_dropdown();
	
	//Resize Function 
	var resizeTimer;
	$(window).resize(function (e) {
		clearTimeout(resizeTimer);
		resizeTimer = setTimeout(function () {
			$(window).trigger('delayed-resize', e);
		}, 250);
	});
	$(window).on("load resize",function(e){
		if ($(window).width() > 766 ) {
			$(".footer-links ul").show();
		}
		else {
			$(".footer-links ul").hide();
		}
	});
	
	
	/*-------------------------------
	 7.Scroll Top ------------------
	---------------------------------*/
	function scroll_top(){
		$("#site-scroll").on("click", function() {
			$("html, body").animate({ scrollTop: 0 }, 1000);
				return false;
		}); 
	}
	scroll_top();
	
	$(window).scroll(function(){    
		if($(this).scrollTop()>300){
		  $("#site-scroll").fadeIn();
		} else {
		   $("#site-scroll").fadeOut();
		}
	});
	
	/*--------------------------
      8. Product Zoom
	---------------------------- */
	function product_zoom(){
		$(".zoompro").elevateZoom({
			gallery: "gallery",
			galleryActiveClass: "active",
			zoomWindowWidth: 300,
			zoomWindowHeight: 100,
			scrollZoom: false,
			zoomType: "inner",
			cursor: "crosshair"
		});
	}
	product_zoom();
	
	/*----------------------------------
	  9. Quantity Plus Minus
	------------------------------------*/
	function qnt_incre(){
		$(".qtyBtn").on("click", function() {
		  var qtyField = $(this).parent(".qtyField"),
			 oldValue = $(qtyField).find(".qty").val(),
			  newVal = 1;
	
		  if ($(this).is(".plus")) {
			newVal = parseInt(oldValue) + 1;
		  } else if (oldValue > 1) {
			newVal = parseInt(oldValue) - 1;
		  }
		  $(qtyField).find(".qty").val(newVal);
		});
	}
	qnt_incre();
	
	/*----------------------------------
	  10. Product Tabs
	------------------------------------*/
	$(".tab-content").hide();
	$(".tab-content:first").show();
	/* if in tab mode */
	$(".product-tabs li").on('click', function () {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();		
		
		$(".product-tabs li").removeClass("active");
		$(this).addClass("active");
		
		$(this).fadeIn();
      	if($(window).width()<767) {
          var tabposition = $(this).offset();
          $("html, body").animate({ scrollTop: tabposition.top }, 700);
        }
	});
    
    $('.product-tabs li:first-child').addClass("active");
	$('.tab-container h3:first-child + .tab-content').show();
	
	/* if in drawer mode */
	$(".acor-ttl").on("click", function() {
		$(".tab-content").hide();
		var activeTab = $(this).attr("rel"); 
		$("#"+activeTab).fadeIn();
		
		$(".acor-ttl").removeClass("active");
		$(this).addClass("active");
	});

    
    $(".reviewLink").on('click', function(e){
      e.preventDefault();
        $(".product-tabs li").removeClass("active");
      	$(".reviewtab").addClass("active");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
      	var tabposition = $("#tab2").offset();
      	if($(window).width()<767) {
          $("html, body").animate({ scrollTop: tabposition.top-50 }, 700);
        } else{
          $("html, body").animate({ scrollTop: tabposition.top-80 }, 700);
        }
    });
	
	 /* --------------------------------------
	 	11. Image to background js
	 -------------------------------------- */
    $(".bg-top" ).parent().addClass('b-top');
    $(".bg-bottom" ).parent().addClass('b-bottom');
    $(".bg-center" ).parent().addClass('b-center');
    $(".bg-left" ).parent().addClass('b-left');
    $(".bg-right" ).parent().addClass('b-right');
    $(".bg_size_content").parent().addClass('b_size_content');
    $(".bg-img").parent().addClass('bg-size');
    $(".bg-img.blur-up" ).parent().addClass('');
    jQuery('.bg-img').each(function() {

        var el = $(this),
            src = el.attr('src'),
            parent = el.parent();

        parent.css({
            'background-image': 'url(' + src + ')',
            'background-size': 'cover',
            'background-position': 'center',
            'background-repeat': 'no-repeat'
        });

        el.hide();
    });
	/* --------------------------------------
	 	End Image to background js
	 -------------------------------------- */
	
	/*-----------------------------------
	  12. Infinite Scroll js
	  -------------------------------------*/
	function load_more(){
        $(".product-load-more .item").slice(0, 16).show();
        $(".loadMore").on('click', function (e) {
            e.preventDefault();
            $(".product-load-more .item:hidden").slice(0, 4).slideDown();
            if ($(".product-load-more .item:hidden").length == 0) {
                $(".infinitpagin").html('<div class="btn loadMore">Không còn sản phẩm</div>');
            }
        });
    }
	load_more();
	
	/*-----------------------------------
	  End Infinite Scroll js
	  -------------------------------------*/

	})(jQuery);

	/*----------------------------
       13. Product details slider 2
    ------------------------------ */
	function product_thumb(){
		$('.product-dec-slider-2').slick({
			infinite: true,
			slidesToShow: 5,
			vertical: true,
			slidesToScroll: 1,
			centerPadding: '60px'
		});
	}
	product_thumb();
