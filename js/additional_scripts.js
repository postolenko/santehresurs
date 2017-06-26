$(document).ready(function() {

  (function($){

    $(window).on("load",function(){

      $(".scroll").mCustomScrollbar();

    });

  })(jQuery);


    $(".sidebar-nav-list > li").hoverIntent({
        over: makeTallMenuItemSection,
        out: makeShortMenuItemSection,
        timeout: 3000
    });


  	var hoverItem;
  	var listHeight;
  	var heightInterval;

    function makeTallMenuItemSection(){

    	hoverItemIndex = $(this).index();

    	 listHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp .inner-nav").height();

        hoverItemHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height();

        if( hoverItemHeight <= 0 ) {

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").animate({"height" : listHeight + "px"}, 400);

        	heightInterval = setInterval(function() {

        		if( $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height() >=  listHeight ) {

              $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").css({
                                                                                    "overflow" : "visible",
                                                                                    "height": "auto"
                                                                                  });
        			clearInterval(heightInterval);
        			
        		}

        	}, 35);

        }

    }

    function makeShortMenuItemSection(){

    		hoverItemIndex = $(this).index();
    		listHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp .inner-nav").height();
    		hoverItemHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height();

        if( hoverItemHeight >= listHeight  ) {

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").css({"overflow" : "hidden"});
          

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").animate({"height" : 0 + "px"}, 400);

        	heightInterval = setInterval(function() {

            if( $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height() <= 0 ) {

                $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").css({
                                                                        "overflow": "hidden",
                                                                        "height": 0 + "px"
                                                                      });
                clearInterval(heightInterval);

            }

          }, 35);  	

        }

    }

    // ---------------------------------------------


    $(".brand-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 7,
      slideToScroll: 2,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: $(".bradslider-arrows-append"),
         responsive: [
        {
          breakpoint: 1128,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 900,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 490,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 350,
          settings: {
            slidesToShow: 1
          }
        }
      ]
    });


    $(".popular-goods-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      // centerMode: true,
      slidesToShow: 4,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: $(".goods-append-arrows"),
         responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 430,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });

    $(".discount-goods-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 4,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: $(".discount-goods-slider-arrows"),
       responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 430,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });

    $("select").select2();

    //  Price Slider

    if( document.getElementById("price_slider") ) {

      var priceSlider = document.getElementById("price_slider");
      var values;

      noUiSlider.create(priceSlider, {
          start: [ 1000, 3500 ],
          range: {
              'min': [  0 ],
              'max': [ 12000 ]
          }
      });

      var setButtonMinus = document.getElementById("setMinus");
      var setButtonPlus = document.getElementById("setPlus");

      var inputNumberMin = document.getElementById("input-number_1");
      var inputNumberMax = document.getElementById("input-number_2");

      var setStep = 200;

      var leftRange;
      var rightRange;

      var activeInputVal;

      priceSlider.noUiSlider.on('update', function( values, handle ) {

          $("#input-number_1").attr("value",  parseInt( values[0] ) );

          $("#input-number_2").attr("value",  parseInt( values[1] ) );

          leftRange = parseInt( values[0] );
          rightRange = parseInt( values[1] );

      });

      setButtonMinus.addEventListener('click', function(){

          leftRange = leftRange  - setStep;

          priceSlider.noUiSlider.set([leftRange, null]);

      });

      setButtonPlus.addEventListener('click', function(){

          rightRange = rightRange + setStep;

          priceSlider.noUiSlider.set([null, rightRange]);

      });

      $("#input-number_1").keyup(function() {

          activeInputVal = parseInt( $(this).val() );

          if( activeInputVal < parseInt( $("#input-number_2").val() ) ) {

              leftRange = parseInt( $(this).val() );

              priceSlider.noUiSlider.set([leftRange, null]);

          }
          // else {

          //     $(this).attr("value", activeInputVal );

          // }

      });

      $("#input-number_2").keyup(function() {

          activeInputVal = parseInt( $(this).val() );

          if( activeInputVal > parseInt( $("#input-number_1").val() ) ) {

              rightRange = parseInt( $(this).val() );

              priceSlider.noUiSlider.set([null, rightRange]);

          }
          // else {

          //     $(this).attr("value", activeInputVal );

          // }

      });

    }

    // ------------------------------------------------

    $(".last-saw-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 4,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: $(".last-saw-append-arrows"),
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 430,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });

    // ------------------------------------------------

    $(".card-big-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: false,
      speed: 700,
      fade: true,
      autoplay: true,
      autoplaySpeed: 17000,
      asNavFor: ".card-miniatures-slider"
    });

    $(".card-miniatures-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: false,
      speed: 700,
      slidesToShow: 6,
      slideToScroll: 2,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      asNavFor: ".card-big-slider",
      responsive: [
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 5
          }
        },
        {
          breakpoint: 590,
          settings: {
            slidesToShow: 4
          }
        },
        {
          breakpoint: 370,
          settings: {
            slidesToShow: 3
          }
        }
      ]
    });

     // ------------------------------------------------

    $(".simmilar-goods-slider").not(".slick-initialized").slick({
      dots: false,
      arrows: true,
      speed: 700,
      slidesToShow: 4,
      slideToScroll: 1,
      focusOnSelect: true,
      autoplay: true,
      autoplaySpeed: 17000,
      appendArrows: $(".simmilar-goods-append-arrows"),
      responsive: [
        {
          breakpoint: 1140,
          settings: {
            slidesToShow: 3
          }
        },
        {
          breakpoint: 1000,
          settings: {
            centerMode: true,
            slidesToShow: 2
          }
        },
        {
          breakpoint: 750,
          settings: {
            slidesToShow: 2
          }
        },
        {
          breakpoint: 640,
          settings: {
            centerMode: true,
            slidesToShow: 1
          }
        },
        {
          breakpoint: 430,
          settings: {
            centerMode: false,
            slidesToShow: 1
          }
        }
      ]
    });

});