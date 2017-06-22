$(document).ready(function() {

    $(".sidebar-nav-list li").hoverIntent({
	      over: makeTallMenuItemSection,
	      out: makeShortMenuItemSection,
	      timeout: 1200
	  });

	var hoverItem;
	var listHeight;
	var heightInterval;

    function makeTallMenuItemSection(){

    	hoverItem = $(this).children(".inner-nav-wrapp");
    	listHeight = hoverItem.children(".inner-nav").height();

        hoverItemHeight = $(this).children(".inner-nav-wrapp").height();

        if( hoverItemHeight <= 0 ) {

        	hoverItem.animate({"height" : listHeight + "px"}, 500);

        	heightInterval = setInterval(function() {

        		if( hoverItem.height() >=  listHeight ) {

        			clearInterval(heightInterval);

        			hoverItem.addClass("hover_class");

        		}

        	}, 35);

        }

    }

    function makeShortMenuItemSection(){

    	hoverItem = $(this).children(".inner-nav-wrapp");
    	listHeight = hoverItem.children(".inner-nav").height();

        hoverItemHeight = $(this).children(".inner-nav-wrapp").height();

        if( hoverItemHeight >= listHeight  ) {

        	hoverItem.removeClass("hover_class");

        	hoverItem.animate({"height" : 0 + "px"}, 500);

        }

    }

});