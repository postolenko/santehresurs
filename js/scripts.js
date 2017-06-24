$(document).ready(function() {


    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var parentSelectWidht;
    var selectWidht;

    // ----------------------------

    getFooterPosition();

    getSelectSize();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // --------------------

        getSelectSize();

    });


    // $(function() {

    //     $(".phone").mask("+7(999) 999-99-99");

    // });

    $(function() {

        $(".top-shape").each(function() {

            $(this).append("<div class='line-top'></div>")

        });

    });

    // ----------------------------

    $(function() {

        var sidebarAutoHeight;
        var siddebarHeightInterval;

        $("#sidebar").click(function() {

            sidebarAutoHeight = $(".sidebar-nav-list").height();    

            if( $(".sidebar-nav").height() <= 0 ) {
                
                $(".sidebar-nav").animate({
                    "height" : sidebarAutoHeight + "px"
                }, 400);

                siddebarHeightInterval = setInterval(function() {

                    if( $(".sidebar-nav").outerHeight() >= sidebarAutoHeight ) {

                        clearInterval(siddebarHeightInterval);

                        $(".sidebar-nav").css({
                            "height" : "auto",
                            "overflow" : "initial"
                        });

                        $(".sidebar").addClass("active");

                         if($("#block_right").length > 0) {

                            $("#block_right").removeClass("full_width");

                        }

                    }

                }, 70);                
                 
            } else {

                $(".sidebar-nav").css({
                    "height" : "auto",
                    "overflow" : "hidden"
                });

                $(".sidebar-nav").animate({
                    "height" : 0 + "px"
                }, 400);

                siddebarHeightInterval = setInterval(function() {

                    if( $(".sidebar-nav").height() <= 0 ) {

                        clearInterval(siddebarHeightInterval);

                        $(".sidebar").removeClass("active");

                    }

                }, 70);

                if($("#block_right").length > 0) {

                    $("#block_right").addClass("full_width");

                }

            }


        });

    });


    // ----------------------------

    $(".scroll-top").click(function () {

        $("body,html").animate({

            scrollTop: 0

        }, 1000);

        return false;

    });

    // ----------------------------


    function getFooterPosition() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        setFooterPositionInterval = setInterval(function() {

            contentCoor = $(".content").offset().top + $(".content").height();
            footerCoor = $(".footer").offset().top;

            if( contentCoor != footerCoor ) {

                $(".wrapper").css({"min-height" : $(window).height() + "px"});

                $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

                clearInterval(setFooterPositionInterval);

            }

        }, 35);

    }

    function getSelectSize() {

        parentSelectWidht =  $(".catalog-sort-row").width();

        selectWidht = parentSelectWidht * .29;

        if( selectWidht > 250 ) {

            selectWidht = 250

        }

        $(".catalog-sort-row .select-box select").width(selectWidht);

    }



});
