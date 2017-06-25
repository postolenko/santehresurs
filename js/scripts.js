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

                         if($("#block_right").length > 0 ) {

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

                if($("#block_right").length > 0 ) {

                    $("#block_right").addClass("full_width");

                }

            }


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
