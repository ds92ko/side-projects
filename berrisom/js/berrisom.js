;(function(window,document,$,undefined){
    var berrisom = {
        init: function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.footerFn();
        },
        headerFn: function(){
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var n = $('.fullPage').length;
            var wheelDelta = null;
            var t = 0;
            
            //Resize
            setTimeout(resizeFn,100);

            function resizeFn(){
                winH = $(window).innerHeight();
                winW = $(window).innerWidth();
                $('.section').css({ height:winH });
                if(winH > 930){
                    $('#section4').css({ height:winH });
                }
                else{
                    $('#section4').css({ height:100+'%'});
                }
                if(winW > 1000){
                    t=0;
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().animate({left:-100+'%'},300);
                    $('.mobile-sub').slideUp(0);
                }
            }

            $(window).resize(function(){
                resizeFn();
            });

            //Mouse Wheel Event
            $('.fullPage').each(function(index){
                $(this).on('mousewheel',function(event){
                    event.preventDefault();
                    if(event.originalEvent.wheelDelta){
                        wheelDelta = event.originalEvent.wheelDelta;
                    }
                    else{
                        wheelDelta = event.detail*(-1*40);
                    }
                    wheelDelta = event.originalEvent.wheelDelta;
                    if( wheelDelta < 0 ){
                        if(index < n-1){
                            if(index == n-2){
                                $('html, body').stop().animate({ scrollTop: $('#footer').offset().top },800,'easeInOutSine');
                            }
                            else{
                                $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },800,'easeInOutSine');
                            }
                        }
                    }
                    else{
                        if(index > 0){
                            if(index == n-1){
                                $('html, body').stop().animate({ scrollTop: $('#section4').offset().top },800,'easeInOutSine');
                            }
                            else{
                                $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },800,'easeInOutSine');
                            }
                        }
                    }
                });
            });

            //Scroll Event
            $(window).scroll(function(){
                winW = $(window).innerWidth();

                if( winW > 1000 ){
                    if( $(this).scrollTop() >= 30 ){
                        $('#header').addClass('addMousewheel');
                    }
                    else{
                        $('#header').removeClass('addMousewheel');
                    }
                }
                else if( winW <= 1000 && winW >=0 ){
                    if( $(this).scrollTop() >= 30 ){
                        $('#header').addClass('addMousewheelMobile');
                    }
                    else{
                        $('#header').removeClass('addMousewheelMobile');
                    }
                }
            });
            
            //Mobile Mouse Wheel Event
            $('.fullPage').each(function(index){
                $(this).bind('touchstart',function(event){
                    event.stopPropagation();
                    touchStart = event.originalEvent.touches[0].clientY;
                });
                $(this).bind('touchend',function(event){
                    event.stopPropagation();
                    touchEnd = event.originalEvent.changedTouches[0].clientY;
                    if( touchStart > touchEnd+5 ){
                        if(index < n-1){
                            if(index == n-2){
                                $('html, body').stop().animate({ scrollTop: $('#footer').offset().top },800,'easeInOutSine');
                            }
                            else{
                                $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },800,'easeInOutSine');
                            }
                            console.log(index);
                        }
                    }
                    else if( touchStart < touchEnd-5 ){
                        if(index > 0){
                            if(index == n-1){
                                $('html, body').stop().animate({ scrollTop: $('#section4').offset().top },800,'easeInOutSine');
                            }
                            else{
                                $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },800,'easeInOutSine');
                            }
                        }
                    }
                });
            });

            //NavBtn
            $('.nav-btn').on({
                mouseenter: function(){
                    $('.sub').stop().fadeOut(500);
                    $(this).find('.sub').stop().fadeIn(500);
                },
                focusin: function(){
                    $('.sub').stop().fadeOut(500);
                    $(this).find('.sub').stop().fadeIn(500);
                },
                mouseleave:function(){
                    $('.sub').stop().fadeOut(500);
                },
                focusout: function(){
                    $('.sub').stop().fadeOut(500);
                }
            });

            //Mobile Menu
            $('.mobile-btn').on({
                click: function(event){
                    event.preventDefault();
                    $(this).toggleClass('addClose');
                    $('.mMenu').stop().removeClass('addMobileMenu');
                    $('.mMenu').eq(0).stop().addClass('addMobileMenu');
                    $('.mMenuSub').hide();
                    $('.mMenu').eq(0).next().show();
                    $('.mobile-category-menu i').stop().removeClass('addMobileSub');
                    $('.mobile-sub').slideUp(0);
                    if(t==0){
                        t=1;
                        $('.mobile-menu').stop().animate({left:0},300);
                    }
                    else{
                        t=0;
                        $('.mobile-menu').stop().animate({left:-100+'%'},300);
                    }
                }
            });

            $('.mMenu').on({
                click: function(){
                    $('.mMenuSub').hide();
                    $(this).next().show();
                    $('.mMenu').stop().removeClass('addMobileMenu');
                    $(this).stop().addClass('addMobileMenu');
                    $('.mobile-category-menu i').stop().removeClass('addMobileSub');
                    $('.mobile-sub').stop().slideUp(0);
                }
            });

            $('.mobile-category-menu').on({
                click: function(){
                    $('.mobile-category-menu i').stop().removeClass('addMobileSub');
                    $(this).find('i').stop().toggleClass('addMobileSub');
                    $('.mobile-sub').stop().slideUp(300);
                    $(this).next().stop().slideToggle(300);
                }
            });

            //Smooth
            $('.smooth-btn').on({
                click:  function(event){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({scrollTop: $( url ).offset().top  }, 600);
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().animate({left:-100+'%'},0);
                }
            });
        },
        section1Fn: function(){
            setTimeout(init,100);

            function init(){
                $('#section1 .text-wrap').css({opacity:0,top:50});
                $('#section1 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            function formatFn(){
                $('#section1 .text-wrap').stop().animate({opacity:0,top:50},500);
            }

            function animationFn(){
                $('#section1 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() == $('#section1').offset().top ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section2Fn: function(){
            setTimeout(init,100);

            function init(){
                $('#section2 .text-wrap').css({opacity:0,top:50});
                $('#section2 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            function formatFn(){
                $('#section2 .text-wrap').stop().animate({opacity:0,top:50},500);
            }

            function animationFn(){
                $('#section2 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section2').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section2').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section2').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section3Fn: function(){
            setTimeout(init,100);

            function init(){
                $('#section3 .text-wrap').css({opacity:0,top:50});
                $('#section3 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            function formatFn(){
                $('#section3 .text-wrap').stop().animate({opacity:0,top:50},500);
            }

            function animationFn(){
                $('#section3 .text-wrap').stop().animate({opacity:1,top:0},1000);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section3').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section3').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section3').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section4Fn: function(){
            setTimeout(init,100);

            function init(){
                $('#section4 ul').css({opacity:0,top:50});
                $('#section4 ul').stop().animate({opacity:1,top:0},1000);
            }

            function formatFn(){
                $('#section4 ul').stop().animate({opacity:0,top:50},500);
            }

            function animationFn(){
                $('#section4 ul').stop().animate({opacity:1,top:0},1000);
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section4').offset().top -10 ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        footerFn: function(){
            $('.quick').on({
                click: function(){
                    $('.quick').removeClass('addQuick');
                    $(this).addClass('addQuick');
                }
            });
            
            $(window).scroll(function(){
                if( $(this).scrollTop() <= $('#section1').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(0).addClass('addQuick');
                }
                else if( $(this).scrollTop() <= $('#section2').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(1).addClass('addQuick');
                }
                else if( $(this).scrollTop() <= $('#section3').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(2).addClass('addQuick');
                }
                else if( $(this).scrollTop() <= $('#section4').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(3).addClass('addQuick');
                }
                else if( $(this).scrollTop() <= $('#footer').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(4).addClass('addQuick');
                }
            });
        }
    };
    berrisom.init();
})(window,document,jQuery);