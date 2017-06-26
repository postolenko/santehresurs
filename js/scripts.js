$(document).ready(function() {

    var w = window,
    d = document,
    e = d.documentElement,
    g = d.getElementsByTagName('body')[0],
    bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

    //-----------------------------

    var setFooterPositionInterval;
    var contentCoor;
    var footerCoor;

    // ----------------------------

    var parentSelectWidht;
    var selectWidht;

    // ----------------------------

    getFooterPosition();

    getSelectSize();

    getBodyPaddingTop();

    getBlockRightSize();

    getSidebarSize();

    $(window).resize(function() {

        $(".wrapper").css({"min-height" : $(window).height() + "px"});

        $(".wrapper").css({"padding-bottom" :  $(".footer").outerHeight(true) + "px"});

        // --------------------

        bodyWidth = w.innerWidth || e.clientWidth || g.clientWidth;

        // --------------------

        getSelectSize();

        getBodyPaddingTop();

        getBlockRightSize();

        getSidebarSize();

    });

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

            if( bodyWidth > 900 ) {

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
                                "overflow" : "visible"
                            });

                            $(".sidebar").addClass("active");

                             if($("#block_right").length > 0 ) {

                                $("#block_right").removeClass("full_width");

                            }

                        }

                    }, 70);                
                     
                } else {

                    $(".sidebar").removeClass("active");

                    $(".sidebar-nav").css({
                        "height" : "auto",
                        "overflow" : "hidden"
                    });

                    $(".sidebar-nav").animate({
                        "height" : 0 + "px",
                    }, 400);

                    siddebarHeightInterval = setInterval(function() {

                        if( $(".sidebar-nav").height() <= 0 ) {

                            clearInterval(siddebarHeightInterval);                            

                            $(".sidebar-nav").css({
                                "height" : 0 + "px"
                            });

                        }

                    }, 70);

                    if($("#block_right").length > 0 ) {

                        $("#block_right").addClass("full_width");

                    }

                }

            } else {

                $(".sidebar").addClass("show_sidebar");

            }


        });

        $(".hide-sidebar").click(function() {

            $(".sidebar").removeClass("show_sidebar");

        });

    });

    // ----------------------------------------

    // Калькулятор на странице Корзины товара

     $(function() {
        
        var parentEl;
        var indexCard;
        var countElementsInputIndex;
        var countElementsVal;
        var priceGood;
        var priceMultiple;
        var priceMultipleVal = 0;

        $(".good-card .choise-count button").click(function(countGoodsEvent) {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("good-card")) {             

                    indexCard = parentEl.index(".good-card");

                    break;

                }

            }

            countElementsInputIndex = $(this).parent(".choise-count").index(".choise-count");

            countElementsVal = $(".choise-count:eq("+ countElementsInputIndex +") .count-num-val").val();

            if( countElementsVal <=  -1 ) {

                $(".choise-count:eq("+ countElementsInputIndex +") .count-num-val").val(0);

            }

            if( $(this).hasClass("minus") && countElementsVal > 0 ) {

                countElementsVal--;

            } else if( $(this).hasClass("plus") ) {

                countElementsVal++;

            }

            $(".choise-count:eq("+ countElementsInputIndex +") .count-num-val").val(countElementsVal);

            priceGood = parseInt( $(".good-card:eq("+ indexCard + ") .price_total_sum_input").val() );
            priceMultiple = priceGood * countElementsVal;
            $(".good-card:eq("+ indexCard + ") .price_total_sum").text(priceMultiple);

        });

        $(".good-card .choise-count .count-num-val").keyup(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("good-card")) {             

                    indexCard = parentEl.index(".good-card");

                    break;

                }

            }

            countElementsVal = $(".good-card:eq("+ indexCard +") .choise-count .count-num-val").val();

            if( countElementsVal <=  -1 ) {

                $(".good-card:eq("+ indexCard +") .choise-count .count-num-val").val(0);

            }

            $(".good-card:eq("+ indexCard +") .choise-count .count-num-val").val(countElementsVal);

            priceGood = parseInt( $(".good-card:eq("+ indexCard + ") .price_total_sum_input").val() );
            priceMultiple = priceGood * countElementsVal;
            $(".good-card:eq("+ indexCard + ") .price_total_sum").text(priceMultiple);

        });

     });


    // ----------------------------

        // ------ Tabs -------

    $(function() {

        for(indexTabs = 0; indexTabs < $(".tabs").length; indexTabs++ ) {

            if( $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").length > 0 ) {

                $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab").css({"display" : "none"});

                $(".tabs:eq("+ indexTabs +") .tab-link").each(function() {

                    if($(this).hasClass("active")) {

                        indexActiveTab = $(this).attr("data-tab-link-index");

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box .tab[data-tab-link = '"+ indexActiveTab +"']").fadeIn(300)

                    }

                });

            }

        }     

    });

    $(function() {

        $(".tabs .tab-nav li .tab-link").click(function() {

            parentEl = $(this).parent();

            for(;;) {

                parentEl = parentEl.parent();

                if(parentEl.hasClass("tabs")) {

                    indexTabs = $(".tabs").index(parentEl);

                    break;

                }

            }

            attrForActiveTabNav = $(this).attr("data-tab-link-index");

            if($(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").is(":hidden")) {

                $(".tabs:eq("+ indexTabs +") .tab-nav li .tab-link").removeClass("active");

                $(this).addClass("active");

                $(".tabs:eq("+ indexTabs +") .tab").each(function() {

                    if($(this).is(":visible") && $(this).attr("data-tab-link") != attrForActiveTabNav) {

                        $(".tabs:eq("+ indexTabs +") .tabs-content-box").height($(this).height());

                    }

                });

                $(".tabs:eq("+ indexTabs +") .tab").fadeOut(300);

                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").fadeIn(300);

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").animate({"height" : $(".tabs:eq("+ indexTabs +") .tab[data-tab-link = '"+ attrForActiveTabNav +"']").height() + "px"}, 300);

                }, 400);
 
                setTimeout(function() {

                    $(".tabs:eq("+ indexTabs +") .tabs-content-box").css({"height" : "auto"});

                }, 800);

            }

        });

    });

    // ------ /Tabs -------

    // ----------------------------------

    $(function() {

        var attrPopupName;

        $(".show_popup").click(function() {

            attrPopupName = $(this).attr("data-popup-name");

            $(".popups-sect").fadeIn(500);

            $("[data-popup = '"+ attrPopupName +"']").fadeIn(500);

        });

        $(".popup-bg, .close_popup").click(function() {

            $(".popups-sect").fadeOut(500);

            $("[data-popup = '"+ attrPopupName +"']").fadeOut(500);

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27) {

                $(".popups-sect").fadeOut(400);
                $(".popup").fadeOut(400);

            }

        });

    });

    // ----------------------------------

    $(function() {

        $(".respmenubtn").click(function() {

            if( !$(".main-nav-wrapp").hasClass("main_nav_visible") ) {

                $(".main-nav-wrapp").addClass("main_nav_visible");

            }

        });

        $(".close-main-nav").click(function() {

            if( $(".main-nav-wrapp").hasClass("main_nav_visible") ) {

                $(".main-nav-wrapp").removeClass("main_nav_visible");

            }

        });

        $(this).keydown(function(eventObject){

            if (eventObject.which == 27 && $(".main-nav-wrapp").hasClass("main_nav_visible")) {

                $(".main-nav-wrapp").removeClass("main_nav_visible");

            }

        });

    });


    $(function() {

        $(".inner-nav-wrapp .inner-nav").each(function() {

            if( $(this).parent(".inner-nav-wrapp").length == 0 ) {

                $(this).before("<button type='button' class='show_inner_nav'></button>");

            }

        });

        $(".show_inner_nav").click(function() {

            if( $(this).next(".inner-nav").height() > 0 ) {                

                $(this).removeClass("active");

                $(this).next(".inner-nav").css({
                    "display" : "none",
                    "height": "0",
                    "overflow": "hidden"
                });

            } else {

               $(this).addClass("active");

                $(this).next(".inner-nav").css({
                    "display" : "block",
                    "height": "auto",
                    "overflow": "visible"
                });

            }            

        });

        $(".inner-nav-wrapp").each(function() {

            $(this).before("<button type='button' class='show_inner_list'></button>");

        });

        $(".show_inner_list").click(function() {

            if( $(this).next(".inner-nav-wrapp").height() > 0 ) {

                $(this).removeClass("active");

                $(this).next(".inner-nav-wrapp").css({
                    "display" : "none",
                    "height": "0",
                    "overflow": "hidden"
                });

            } else {                

                $(this).addClass("active");

                $(this).next(".inner-nav-wrapp").css({
                    "display" : "block",
                    "height": "auto",
                    "overflow": "visible"
                });

            }            

        });


    });

    // ----------------------------------

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

        // parentSelectWidht =  $(".catalog-sort-row").width();

        // selectWidht = parentSelectWidht * .29;

        // if( bodyWidth <= 600 ) {

        //     selectWidht = parentSelectWidht;

        // }

        // if( selectWidht > 250 ) {

        //     selectWidht = 250

        // }

        // console.log(selectWidht);

        // setTimeout(function() {

        //     $(".catalog-sort-row .select-box .select2-container").width(selectWidht);

        // }, 300);

    }

    function getBodyPaddingTop() {

        if( bodyWidth <= 768 ) {

            $(".wrapper").css({
                "padding-top" : $(".header-site").height() + "px"
            });

        } else {

            $(".wrapper").css({
                "padding-top" : 0 + "px"
            });

        }

    }

    function getBlockRightSize() {

        if( $(".sidebar").hasClass("active") ) {

            $("#block_right").removeClass("full_width");

        } else {

            $("#block_right").addClass("full_width");

        }
    }

    function getSidebarSize() {

        if( bodyWidth <= 900 ) {

            $(".sidebar").addClass("active");

            if(bodyWidth <= 768) {

                $(".sidebar").css({
                    "height" : $(window).height() - $(".header-site").height() + "px",
                    "margin-top" : $(".header-site").height() + "px"                
                });

            } else {

                $(".sidebar").css({
                    "height" : $(window).height()+ "px",
                    "margin-top" : 0 + "px"     
                });           

            }

            $(".sidebar-nav").mCustomScrollbar();

            $(".sidebar-nav").css({
                "height" : $(".sidebar").height() + "px",
                "overflow" : "visible"
            });

        } else {

            $(".sidebar-nav").mCustomScrollbar("destroy");

            

            if( $(".sidebar").hasClass("active") ) {

                $(".sidebar-nav").css({
                    "height" : "auto"
                });

                $(".sidebar").css({
                    "height" : "auto",
                    "margin-top" : 0 + "px"             
                });

            }

        }        

    }


});
