;(function(window,document,$,undefined){
    var portfolio = {
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
            var scroll = false;
            var m = 0;
            var t = 0;

            
            ////////////////////////////// Resize //////////////////////////////
            function resizeFn(){
                winH = $(window).innerHeight();

                $('#nav').css({height:winH});
            }

            $(window).resize(function(){
                resizeFn();
            });

            setTimeout(resizeFn,10);

            ////////////////////////////// Smooth Scrolling Event //////////////////////////////
            $('.smooth-btn').on({
                click: function(event){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $(url).offset().top },700,'easeInOutSine');
                }
            });

            ////////////////////////////// header scroll //////////////////////////////
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section2').offset().top ){
                    scroll=true;
                    $('.header-bg').stop().animate({opacity:1},400);
                }
                else{
                    scroll=false;
                    if(m===0){
                        $('.header-bg').stop().animate({opacity:0},200);
                    }
                }
            });

            ////////////////////////////// Nav btn //////////////////////////////
            $('.nav-btn').on({
                click: function(event){
                    event.preventDefault();
                    $(this).stop().toggleClass('addClose');
                    if(winW > 960){
                        if(t==0){
                            t=1;
                            $('#nav').stop().show();
                            $('.nav-bg').stop().fadeIn(300);
                            $('.nav-wrap-bg').stop().animate({right:0},500);
                            $('.nav-wrap').stop().delay(100).animate({right:0},500,function(){
                                $('.nav-wrap ul').stop().animate({left:0,opacity:1},400);
                            });
                        }
                        else{
                            t=0;
                            $('.nav-wrap ul').stop().animate({left:10+'%',opacity:0},400,function(){
                                $('.nav-bg').stop().fadeOut(300);
                                $('.nav-wrap').stop().animate({right:-30+'%'},500);
                                $('.nav-wrap-bg').stop().delay(100).animate({right:-30+'%'},500,function(){
                                    $('#nav').stop().hide();
                                });
                            });
                        }
                    }
                    else if(winW <= 960 && winW >=0){
                        if(t==0){
                            t=1;
                            $('#nav').stop().show();
                            $('.nav-bg').stop().fadeIn(300);
                            $('.nav-wrap-bg').stop().animate({right:0},500);
                            $('.nav-wrap').stop().delay(100).animate({right:0},500,function(){
                                $('.nav-wrap ul').stop().animate({left:0,opacity:1},400);
                            });
                        }
                        else{
                            t=0;
                            $('.nav-wrap ul').stop().animate({left:10+'%',opacity:0},400,function(){
                                $('.nav-bg').stop().fadeOut(300);
                                $('.nav-wrap').stop().animate({right:-100+'%'},500);
                                $('.nav-wrap-bg').stop().delay(100).animate({right:-100+'%'},500,function(){
                                    $('#nav').stop().hide();
                                });
                            });
                        }
                    }
                }
            });

            $('.menu-btn').on({
                click: function(event){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $(url).offset().top },700,'easeInOutSine');
                    $('.nav-btn').stop().removeClass('addClose');
                    if(winW > 960){
                        t=0;
                        $('.nav-wrap ul').stop().animate({left:10+'%',opacity:0},400,function(){
                            $('.nav-bg').stop().fadeOut(300);
                            $('.nav-wrap').stop().animate({right:-30+'%'},500);
                            $('.nav-wrap-bg').stop().delay(100).animate({right:-30+'%'},500,function(){
                                $('#nav').stop().hide();
                            });
                        });
                    }
                    else if(winW <= 960 && winW >=0){
                        t=0;
                        $('.nav-wrap ul').stop().animate({left:10+'%',opacity:0},400,function(){
                            $('.nav-bg').stop().fadeOut(300);
                            $('.nav-wrap').stop().animate({right:-100+'%'},500);
                            $('.nav-wrap-bg').stop().delay(100).animate({right:-100+'%'},500,function(){
                                $('#nav').stop().hide();
                            });
                        });
                    }
                }
            })
        },
        section1Fn: function(){
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var n = $('section').length;
            var wheelDelta = null;

            ////////////////////////////// Resize //////////////////////////////
            function resizeFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();

                $('#section1').css({height:winH});
            }

            $(window).resize(function(){
                resizeFn();
            });

            setTimeout(resizeFn,10);
            
            ////////////////////////////// Mouse Wheel Event //////////////////////////////
            // $('section').each(function(index){
            //     $(this).on('mousewheel',function(event){
            //         event.preventDefault();
            //         if(event.originalEvent.wheelDelta){
            //             wheelDelta = event.originalEvent.wheelDelta;
            //         }
            //         else{
            //             wheelDelta = event.detail*(-1*40);
            //         }
            //         wheelDelta = event.originalEvent.wheelDelta;
            //         if( wheelDelta < 0 ){
            //             if(index < n-1){
            //                 $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },700,'easeInOutSine');
            //             }
            //         }
            //         else{
            //             if(index > 0){
            //                 $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },700,'easeInOutSine');
            //             }
            //         }
            //     });
            // });
            
            ////////////////////////////// Mobile Mouse Wheel Event //////////////////////////////
            // $('section').each(function(index){
            //     $(this).bind('touchstart',function(event){
            //         event.stopPropagation();
            //         touchStart = event.originalEvent.touches[0].clientY;
            //     });
            //     $(this).bind('touchend',function(event){
            //         event.stopPropagation();
            //         touchEnd = event.originalEvent.changedTouches[0].clientY;
            //         if( touchStart > touchEnd+5 ){
            //             $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },700,'easeInOutSine');
            //         }
            //         else if( touchStart < touchEnd-5 ){
            //             $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },700,'easeInOutSine');
            //         }
            //     });
            // });

            ////////////////////////////// Mouse Move Event //////////////////////////////
            $('#section1').on('mousemove',function(event){
                var x = ($(window).width()/2) - event.pageX;
                var y = ($(window).height()/2) - event.pageY;
                //console.log(x)
                //console.log(y)
                $('#section1 .txt1').stop().css({top:y*-0.01,left:x*-0.01});
                $('#section1 .txt2').stop().css({top:y*-0.03,left:x*-0.03});
                $('#section1 .txt3').stop().css({top:y*-0.05,left:x*-0.05});
                $('#section1 .txt4').stop().css({top:y*-0.07,left:x*-0.07});
                $('#section1 .txt5').stop().css({top:y*-0.09,left:x*-0.09});
                $('#section1 .txt6').stop().css({top:y*-0.11,left:x*-0.11});
                $('#section1 .txt7').stop().css({top:y*-0.13,left:x*-0.13});
                $('#section1 .txt8').stop().css({top:y*-0.15,left:x*-0.15});
                $('#section1 .txt9').stop().css({top:y*-0.17,left:x*-0.17});
                $('#section1 .txt10').stop().css({top:y*-0.19,left:x*-0.19});
            });
        },
        section2Fn: function(){
            
        },
        section3Fn: function(){
            
        },
        section4Fn: function(){

        },
        footerFn: function(){
            
        }
    };
    portfolio.init();
})(window,document,jQuery);