;(function(window,document,$,undefined){
    var peripera = {
        init:function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.goTopFn();
        },
        headerFn:function(){
            $('.nav-wrap').on({
                mouseenter: function(){
                    $(this).stop().animate({height:170},400);
                    $("#quick").stop().animate({top:325},400);
                },
                focusin: function(){
                    $(this).stop().animate({height:170},400);
                    $("#quick").stop().animate({top:325},400);
                },
                mouseleave: function(){
                    $(this).stop().animate({height:45},400);
                    $("#quick").stop().animate({top:200},400);
                },
                focusout: function(){
                    $(this).stop().animate({height:45},400);
                    $("#quick").stop().animate({top:200},400);
                }
            });
        },
        section1Fn:function(){
            var cnt = 0;
            var z = 0;
            var setId = 0;
            var setId2 = 0;
            var tCount = 0;
            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
            }
            function mainSlideFn(){
                $('#section1 .slide-wrap').stop().animate({left:(-1920*cnt)},700,function(){
                    cnt>2?cnt=0:cnt;
                    cnt<0?cnt=2:cnt;
                    $('#section1 .slide-wrap').stop().animate({left:(-1920*cnt)},0);
                });
                cnt>2?z=0:z=cnt;
                pageBtnFn();
            }
            $('#section1 .prev-btn').on({
                click:function(event){
                    event.preventDefault();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });
            $('#section1 .next-btn').on({
                click:function(event){
                    event.preventDefault();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            $('#section1 .slide-wrap').swipe({
                swipeRight: function(){
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        prevSlideCountFn();
                    }
                },
                swipeLeft: function(){
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            function pageBtnFn(){
                $('#section1 .page-btn-wrap li').removeClass('addPage');
                $('#section1 .page-btn-wrap li').eq(z).addClass('addPage');
            }
            $('#section1 .page-btn').each(function(index){
                $(this).on({
                    click: function(e){
                        e.preventDefault();
                        cnt=index;
                        mainSlideFn();
                    }
                });
            });
            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,3000);
            }
            autoPlayFn();
            $('.control-btn').on({
                click: function(){
                    clearInterval(setId);
                    clearInterval(setId2);
                    tCount = 0;
                    setId2 = setInterval(function(){
                        tCount++;
                        if(tCount>=5){
                            nextSlideCountFn();
                            autoPlayFn();
                            clearInterval(setId2);
                        }
                    },1000);
                }
            });
        },
        section2Fn:function(){
            var t = 0;
            setTimeout(init,100);
            function init(){
                $('#section2 h2').stop().animate({opacity:0},300,function(){
                    $('#section2 h2').stop().animate({opacity:1},2500);
                });
                $('.sec2img1-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img2-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img3-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img4-wrap').stop().animate({marginTop:50,opacity:0},300,function(){
                    $('.sec2img1-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                        $('.sec2img2-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                            $('.sec2img3-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                                $('.sec2img4-wrap').stop().animate({marginTop:0,opacity:1},700);
                            });
                        });
                    });
                });
                if($(window).scrollTop()==0){
                    formatFn();
                }
            }
            function formatFn(){
                $('#section2 h2').stop().animate({opacity:0},300);
                $('.sec2img1-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img2-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img3-wrap').stop().animate({marginTop:50,opacity:0},300);
                $('.sec2img4-wrap').stop().animate({marginTop:50,opacity:0},300);
            }
            function animationFn(){
                $('#section2 h2').stop().animate({opacity:1},2500);
                $('.sec2img1-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                    $('.sec2img2-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                        $('.sec2img3-wrap').stop().animate({marginTop:0,opacity:1},700,function(){
                            $('.sec2img4-wrap').stop().animate({marginTop:0,opacity:1},700);
                        });
                    });
                });
            }
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section1').offset().top ){
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }
                else{
                    if(t==1){
                        t=0;
                        formatFn();
                    }
                }
            });
            $('.sec2img1-wrap').on({
                mouseenter: function(){
                    $('.sec2img1').stop().fadeOut(700);
                    $('.sec2img1over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec2img1over').stop().fadeOut(700);
                    $('.sec2img1').stop().fadeIn(700);
                }
            });
            $('.sec2img2-wrap').on({
                mouseenter: function(){
                    $('.sec2img2').stop().fadeOut(700);
                    $('.sec2img2over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec2img2over').stop().fadeOut(700);
                    $('.sec2img2').stop().fadeIn(700);
                }
            });
            $('.sec2img3-wrap').on({
                mouseenter: function(){
                    $('.sec2img3').stop().fadeOut(700);
                    $('.sec2img3over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec2img3over').stop().fadeOut(700);
                    $('.sec2img3').stop().fadeIn(700);
                }
            });
            $('.sec2img4-wrap').on({
                mouseenter: function(){
                    $('.sec2img4').stop().fadeOut(700);
                    $('.sec2img4over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec2img4over').stop().fadeOut(700);
                    $('.sec2img4').stop().fadeIn(700);
                }
            });
        },
        section3Fn:function(){
            var cnt = 0;
            var t = 0;
            var setId = 0;
            var setId2 = 0;
            var tCount = 0;
            setTimeout(init,100);
            function init(){
                $('#section3 h2').stop().animate({opacity:0},300,function(){
                    $('#section3 h2').stop().animate({opacity:1},2000);
                });
                $('#section3 .slide-container').stop().animate({marginTop:50,opacity:0},300,function(){
                    $('#section3 .slide-container').stop().animate({marginTop:0,opacity:1},1000);
                });
                if($(window).scrollTop()==0){
                    formatFn();
                }
            }
            function formatFn(){
                $('#section3 h2').stop().animate({opacity:0},300);
                $('#section3 .slide-container').stop().animate({marginTop:50,opacity:0},300);
            }
            function animationFn(){
                $('#section3 h2').stop().animate({opacity:1},2000);
                $('#section3 .slide-container').stop().animate({marginTop:0,opacity:1},1000);
            }
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section2').offset().top ){
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }
                else{
                    if(t==1){
                        t=0;
                        formatFn();
                    }
                }
            });
            function nextSlideCountFn(){
                cnt++;
                mainSlideFn();
            }
            function prevSlideCountFn(){
                cnt--;
                mainSlideFn();
            }
            function mainSlideFn(){
                $('#section3 .slide-wrap').stop().animate({left:(-610*cnt)},700,function(){
                    cnt>3?cnt=0:cnt;
                    cnt<0?cnt=3:cnt;
                    $('#section3 .slide-wrap').stop().animate({left:(-610*cnt)},0);
                });
            }
            $('#section3 .prev-btn').on({
                click:function(event){
                    event.preventDefault();
                    if(!$('#section3 .slide-wrap').is(':animated')){
                        prevSlideCountFn();
                    }
                }
            });
            $('#section3 .next-btn').on({
                click:function(event){
                    event.preventDefault();
                    if(!$('#section3 .slide-wrap').is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            $('#section3 .slide-wrap').swipe({
                swipeRight: function(){
                    if(!$('#section3 .slide-wrap').is(':animated')){
                        prevSlideCountFn();
                    }
                },
                swipeLeft: function(){
                    if(!$('#section3 .slide-wrap').is(':animated')){
                        nextSlideCountFn();
                    }
                }
            });
            function autoPlayFn(){
                setId = setInterval(nextSlideCountFn,3000);
            }
            autoPlayFn();
            $('.prev-btn, .next-btn').on({
                click: function(){
                    clearInterval(setId);
                    clearInterval(setId2);
                    tCount=0;
                    setId2 = setInterval(function(){
                        tCount++;
                        if(tCount>=5){
                            nextSlideCountFn();
                            autoPlayFn();
                            clearInterval(setId2); 
                        }
                    },1000);
                }
            });
            $('.look_slide0').on({
                mouseenter: function(){
                    $('.sec3img0').stop().fadeOut(700);
                    $('.sec3img0over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec3img0over').stop().fadeOut(700);
                    $('.sec3img0').stop().fadeIn(700);
                }
            });
            $('.look_slide1').on({
                mouseenter: function(){
                    $('.sec3img1').stop().fadeOut(700);
                    $('.sec3img1over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec3img1over').stop().fadeOut(700);
                    $('.sec3img1').stop().fadeIn(700);
                }
            });
            $('.look_slide2').on({
                mouseenter: function(){
                    $('.sec3img2').stop().fadeOut(700);
                    $('.sec3img2over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec3img2over').stop().fadeOut(700);
                    $('.sec3img2').stop().fadeIn(700);
                }
            });
            $('.look_slide3').on({
                mouseenter: function(){
                    $('.sec3img3').stop().fadeOut(700);
                    $('.sec3img3over').stop().fadeIn(700);
                },
                mouseleave: function(){
                    $('.sec3img3over').stop().fadeOut(700);
                    $('.sec3img3').stop().fadeIn(700);
                }
            });
        },
        section4Fn:function(){
            var t = 0;
            setTimeout(init,100);
            function init(){
                $('#section4 h2').stop().animate({opacity:0},300,function(){
                    $('#section4 h2').stop().animate({opacity:1},2000);
                });
                $('.sns-top').stop().animate({left:-100,opacity:0},300,function(){
                    $('.sns-top').stop().animate({left:0,opacity:1},1000);
                });
                $('.sns-bottom').stop().animate({left:100,opacity:0},300,function(){
                    $('.sns-bottom').stop().animate({left:0,opacity:1},1000);
                });
                if($(window).scrollTop()==0){
                    formatFn();
                }
            }
            function formatFn(){
                $('#section4 h2').stop().animate({opacity:0},300);
                $('.sns-top').stop().animate({left:-100,opacity:0},300);
                $('.sns-bottom').stop().animate({left:100,opacity:0},300);
            }
            function animationFn(){
                $('#section4 h2').stop().animate({opacity:1},2000);
                $('.sns-top').stop().animate({left:0,opacity:1},1000);
                $('.sns-bottom').stop().animate({left:0,opacity:1},1000);
            }
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section3').offset().top+500 ){
                    if(t==0){
                        t=1;
                        animationFn();
                    }
                }
                else{
                    if(t==1){
                        t=0;
                        formatFn();
                    }
                }
            });
            $('.sns-img-btn01').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal01').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn02').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal02').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn03').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal03').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn04').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal04').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn05').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal05').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn06').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal06').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn07').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal07').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn08').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal08').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn09').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal09').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.sns-img-btn10').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal10').stop().fadeIn(500);
                    $('html').addClass('addScroll');
                }
            });
            $('.close-btn, .content-wrap').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal').stop().fadeOut(500);
                    $('html').removeClass('addScroll');
                }
            });
            $('.content').on({
                click: function(event){
                    event.stopPropagation();
                }
            });
        },
        goTopFn:function(){
            $('.goTop-btn').on({
                click: function(){
                    $('html,body').stop().animate({scrollTop:0},1000,"easeOutExpo");
                }
            });
        }
    };
    peripera.init();
})(window,document,jQuery);