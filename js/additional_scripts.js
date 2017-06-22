$(document).ready(function() {

    $(".sidebar-nav-list > li").hoverIntent({
	      over: makeTallMenuItemSection,
	      out: makeShortMenuItemSection,
	      timeout: 1600
	  });

	var hoverItem;
	var listHeight;
	var heightInterval;

    function makeTallMenuItemSection(){

    	hoverItemIndex = $(this).index();

    	console.log(hoverItemIndex);

    	// listHeight = hoverItem.children(".inner-nav").height();

    	listHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp .inner-nav").height();

        // hoverItemHeight = $(this).children(".inner-nav-wrapp").height();

        hoverItemHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height();

        if( hoverItemHeight <= 0 ) {

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").animate({"height" : listHeight + "px"}, 800);

        	heightInterval = setInterval(function() {

        		if( $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height() >=  listHeight ) {

        			clearInterval(heightInterval);

        			// $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").addClass("hover_class");

        			$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").css({"overflow" : "initial"});

        		}

        	}, 70);

        }

    }

    function makeShortMenuItemSection(){

    	// hoverItem = $(this).children(".inner-nav-wrapp");
    	// listHeight = hoverItem.children(".inner-nav").height();

        // hoverItemHeight = $(this).children(".inner-nav-wrapp").height();

		hoverItemIndex = $(this).index();
		listHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp .inner-nav").height();
		hoverItemHeight = $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").height();

        if( hoverItemHeight >= listHeight  ) {

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").css({"overflow" : "hidden"});     	

        	$(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").animate({"height" : 0 + "px"}, 800);

        	// $(".sidebar-nav-list > li:eq("+ hoverItemIndex +") .inner-nav-wrapp").removeClass("hover_class");        	

        }

    }

});