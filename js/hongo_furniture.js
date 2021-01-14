;(function(window,document,$,undefined){
    var hongo = {
        init: function(){
            var _this = this;
                _this.headerFn();
                _this.section1Fn();
                _this.section2Fn();
                _this.section3Fn();
                _this.section4Fn();
                _this.section5Fn();
                _this.section6Fn();
                _this.section7Fn();
                _this.section8Fn();
                _this.footerFn();
        },
        headerFn: function(){
            var wheelDelta = null;
            var touchStart = null;
            var touchEnd = null;
            var winW = $(window).width();
            var url = null;
            var t = 0;
            
            $('html,body').on('mousewheel DOMMouseScroll',function(event){
                //event.preventDefault();
                if(event.detail){
                    wheelDelta = event.detail*(-1*40);
                }
                else{
                    wheelDelta = event.originalEvent.wheelDelta;
                }
                if( wheelDelta < 0 ){
                    $('#header').addClass('addMousewheel');
                    $('.no-products').stop().fadeOut(300);
                }
                else{
                    $('#header').removeClass('addMousewheel');
                }
            });

            $('html, body').bind('touchstart',function(event){
                event.stopPropagation();
                touchStart = event.originalEvent.touches[0].clientY;
            });

            $('html, body').bind('touchend',function(event){
                event.stopPropagation();
                touchEnd = event.originalEvent.changedTouches[0].clientY;
                if( touchStart > touchEnd+5 ){
                    //console.log('touch down');
                    $('#header').addClass('addMousewheel');
                    $('.no-products').stop().fadeOut(300);
                }
                else if( touchStart < touchEnd-5 ){
                    //console.log('touch up');
                    $('#header').removeClass('addMousewheel');
                }
            });

            $(window).scroll(function(){
                if( $(this).scrollTop() >= 30 ){
                    $('#header').addClass('addMobile');
                }
                else{
                    $('#header').removeClass('addMobile');
                }
                if( $(this).scrollTop() >= 100 ){
                    if( winW > 990 ){
                        $('#goTop').stop().fadeIn(300);
                    }
                    else{
                        $('#goTop').stop().fadeOut(0);
                    }
                }
                else{
                    $('#goTop').stop().fadeOut(300);
                }
            });

            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                },
                focusin: function(){
                    $('.sub').stop().slideUp(0);
                    $(this).next().stop().slideDown(500);
                }
            });

            $('#nav').on({
                mouseleave:function(){
                    $('.sub').stop().slideUp(500);
                }
            });

            $('.last-sub').on({
                focusout: function(){
                    $('.sub').stop().slideUp(500);
                }
            });

            $('.sub5-btn').on({
                mouseenter: function(){
                    $('.sub5-sub').stop().fadeOut(0);
                    $(this).find('.sub5-sub').stop().fadeIn(500);
                },
                mouseleave: function(){
                    $('.sub5-sub').stop().fadeOut(500);
                },
                focusin: function(){
                    $('.sub5-sub').stop().fadeOut(0);
                    $(this).find('.sub5-sub').stop().fadeIn(500);
                },
                focusout: function(){
                    $('.sub5-sub').stop().fadeOut(500);
                }
            });

            $('#aside .basket-btn').on({
                mouseenter: function(){
                    $('.no-products').stop().fadeIn(300);
                },
                mouseleave: function(){
                    $('.no-products').stop().fadeOut(300);
                },
                focusin: function(){
                    $('.no-products').stop().fadeIn(300);
                },
                focusout: function(){
                    $('.no-products').stop().fadeOut(300);
                },
                click: function(){
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().slideUp(300);
                    $('.mobile-main-btn').removeClass('addMobileBtn');
                    $('.mobile-sub').slideUp(300);
                }
            });

            //Mobile Menu
            $(window).resize(function(){
                winW = $(window).width();
                if( winW > 990 ){
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().slideUp(0);
                    $('.mobile-main-btn').removeClass('addMobileBtn');
                    $('.mobile-sub').slideUp(0);
                }
            });
            
            $('.mobile-btn').on({
                click: function(){
                    $(this).toggleClass('addClose');
                    $('.mobile-menu').stop().slideToggle(300);
                    $('.mobile-main-btn').removeClass('addMobileBtn');
                    $('.mobile-sub').slideUp(300);
                    $('.no-products').stop().fadeOut(300);
                }
            });

            $('.mobile-main-btn').on({
                click: function(){
                    $('.mobile-main-btn').removeClass('addMobileBtn');
                    $(this).addClass('addMobileBtn');
                    $('.mobile-sub').slideUp(300);
                    $(this).next().stop().slideToggle(300);
                }
            });

            $('#main, #footer').on({
                click: function(event){
                    event.preventDefault();
                    $('.mobile-btn').removeClass('addClose');
                    $('.mobile-menu').stop().slideUp(300);
                    $('.mobile-main-btn').removeClass('addMobileBtn');
                    $('.mobile-sub').slideUp(300);
                }
            });

            //search Modal
            $('.search-btn').on({
                click: function(event){
                    event.preventDefault();
                    $('html').addClass('addScroll');
                    $('.modal-search-bg').stop().animate({opacity:1},700);
                    $('.modal-search').stop().slideDown(700);
                }
            });

            $('.modal-search .modal-close-btn, .modal-search-bg').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal-search-bg').stop().animate({opacity:0},700);
                    $('.modal-search').stop().slideUp(700,function(){
                        $('html').removeClass('addScroll');
                    });
                }
            });

            //product modal
            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section1').offset().top + 100 ){
                    if(t==0){
                        t=1;
                        $('.modal-product').stop().fadeIn(300);
                    }
                }
            });
            
            $('.modal-product .modal-close-btn').on({
                click: function(event){
                    event.preventDefault();
                    $('.modal-product').stop().fadeOut(300);
                }
            });
            
            //Smooth Scrolling Event
            $('.smooth-btn').on({
                click: function(){
                    url = $(this).attr('href');
                    if( $(url).offset().top != 0 ){
                        $('html,body').stop().animate({ scrollTop: $(url).offset().top },700);
                        $('#header').addClass('addMousewheel');
                    }
                    else{
                        $('html,body').stop().animate({ scrollTop: $(url).offset().top },700,function(){
                            $('#header').removeClass('addMousewheel');
                        });
                    }
                }
            });
        },
        section1Fn: function(){
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var txtW = $('#section1 .txt-wrap').innerWidth();
            var rateH3 = 0.0278260869565217;
            var rateH2 = 0.1217391304347826;
            var rateP = 0.0260869565217391;
            var rateA = 0.0226086956521739;
            var fontSizeH3 = rateH3*txtW;
            var fontSizeH2 = rateH2*txtW;
            var fontSizeP = rateP*txtW;
            var fontSizeA = rateA*txtW;
            var leftW = $('#section1 .left').innerWidth();
            var leftH = leftW * 0.5399182608695652;
            var rightW = $('#section1 .right').innerWidth();
            var rightH = rightW * 0.9633965217391304;
            var leftTop = ( winH - leftH )/2;
            var rightTop = ( winH - rightH )/2;
            var cnt = 0;
            var n = $('.slide').length-1;
            var imsi = null;
            var setId = 0;
            var setId2 = 0;

            setInterval(resizeFn,100);

            function resizeFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                txtW = $('#section1 .txt-wrap').innerWidth();
                fontSizeH3 = rateH3*txtW;
                fontSizeH2 = rateH2*txtW;
                fontSizeP = rateP*txtW;
                fontSizeA = rateA*txtW;
                leftW = $('#section1 .left').innerWidth();
                leftH = leftW * 0.5399182608695652;
                rightW = $('#section1 .right').innerWidth();
                rightH = rightW * 0.9633965217391304;
                leftTop = ( winH - leftH )/2;
                rightTop = ( winH - rightH )/2;

                $('#section1').css({ width:winW,height:winH });

                //font size
                if(fontSizeH3<12){
                    $('#section1 h3').css({ fontSize:12 });
                }
                else{
                    $('#section1 h3').css({ fontSize:fontSizeH3 });
                }
                if(fontSizeH2<30){
                    $('#section1 h2').css({ fontSize:30 });
                }
                else{
                    $('#section1 h2').css({ fontSize:fontSizeH2 });
                }
                if(fontSizeP<11){
                    $('#section1 p').css({ fontSize:11 });
                }
                else{
                    $('#section1 p').css({ fontSize:fontSizeP });
                }
                if(fontSizeA<10){
                    $('#section1 h4 a').css({ fontSize:10 });
                }
                else{
                    $('#section1 h4 a').css({ fontSize:fontSizeA });
                }

                //box
                if(winW > 550){
                    $('#section1 .left').css({ top:leftTop,height:leftH });
                    $('#section1 .right').css({ top:rightTop+30,height:rightH });
                }
                else if( winW <= 550 && winW > 320 ){
                    $('#section1 .left').css({ top:17+'%',height:leftH });
                    $('#section1 .right').css({ top:50+'%',height:rightH });
                }
                else if( winW <= 320 && winW >= 0 ){
                    $('#section1 .left').css({ top:18+'%',height:leftH });
                    $('#section1 .right').css({ top:55+'%',height:rightH });
                }
            }

            $(window).resize(function(){
                resizeFn();
            });

            $('#section1').on({
                mousemove: function(event){
                    if(!$('.slide').is(':animated')){
                        $('#section1 .mousepointer').stop().animate({top:-event.clientY*0.05,left:-event.clientX*0.05},100);
                    }
                }
            });

            //fadeInOut Slide
            mainNextSlideFn();
            autoPlayInit();
            function autoPlayInit(){
                setId = setInterval(nextCountFn,5000);
            }

            function mainNextSlideFn(){
                $('.slide').css({zIndex:1});
                $('.slide .img-wrap').stop().animate({opacity:0,left:100},500);
                $('.slide h3').stop().animate({opacity:0},300);
                $('.slide h2').stop().animate({opacity:0},300);
                $('.slide p').stop().animate({opacity:0},300);
                $('.slide h4').stop().animate({opacity:0},300);
                if(imsi!==null){
                    $('.slide').eq(imsi).css({zIndex:2});
                }
                else{
                    $('.slide').eq(cnt==0?n:cnt-1).css({zIndex:2});
                }
                $('.slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1500);
                $('.slide').eq(cnt).find('.img-wrap').stop().animate({opacity:0,left:100},500).animate({opacity:1,left:0},500,function(){
                    $('.slide').eq(cnt).find('h3').stop().animate({opacity:0,top:70},300).animate({opacity:1,top:0},500);
                    $('.slide').eq(cnt).find('h2').stop().animate({opacity:0,top:85},400).animate({opacity:1,top:0},800);
                    $('.slide').eq(cnt).find('p').stop().animate({opacity:0,top:95},500).animate({opacity:1,top:0},1200);
                    $('.slide').eq(cnt).find('h4').stop().animate({opacity:0,top:100},600).animate({opacity:1,top:0},1700);
                });
                pageBtnEventFn();
            }

            function mainPrevSlideFn(){
                $('.slide').css({zIndex:1}).stop().animate({opacity:1},0);
                $('.slide .img-wrap').stop().animate({opacity:0,left:100},500);
                $('.slide h3').stop().animate({opacity:0},300);
                $('.slide h2').stop().animate({opacity:0},300);
                $('.slide p').stop().animate({opacity:0},300);
                $('.slide h4').stop().animate({opacity:0},300);
                $('.slide').eq(cnt).css({zIndex:2});
                $('.slide').eq(cnt).find('.img-wrap').stop().animate({opacity:0,left:100},500).animate({opacity:1,left:0},500,function(){
                    $('.slide').eq(cnt).find('h3').stop().animate({opacity:0,top:70},300).animate({opacity:1,top:0},500);
                    $('.slide').eq(cnt).find('h2').stop().animate({opacity:0,top:85},400).animate({opacity:1,top:0},800);
                    $('.slide').eq(cnt).find('p').stop().animate({opacity:0,top:95},500).animate({opacity:1,top:0},1200);
                    $('.slide').eq(cnt).find('h4').stop().animate({opacity:0,top:100},600).animate({opacity:1,top:0},1700);
                });
                if(imsi!==null){
                    $('.slide').eq(imsi).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1200);
                }
                else{
                    $('.slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1200);
                }
                pageBtnEventFn();
            }
            
            function nextCountFn(){
                cnt++;
                if(cnt>n){
                    cnt=0;
                }
                mainNextSlideFn();
            }

            function prevCountFn(){
                cnt--;
                if(cnt<0){
                    cnt=n;
                }
                mainPrevSlideFn();
            }
            
            $('#section1').swipe({
                swipeLeft: function(event){
                    event.preventDefault();
                    timerControlFn();
                    if( !$('.slide').is(':animated') ){
                        nextCountFn();
                    }
                },
                swipeRight: function(event){
                    event.preventDefault();
                    timerControlFn();
                    if( !$('.slide').is(':animated') ){
                        prevCountFn();
                    }
                }
            });

            function pageBtnEventFn(){
                $('.page-btn').removeClass('addPage');
                $('.page-btn').eq(cnt).addClass('addPage');
            }

            $('.page-btn').each(function(idx){
                $(this).on({
                    click:  function(event){
                        event.preventDefault();
                        timerControlFn();
                        imsi = cnt;
                        cnt = idx;
                        if( imsi < idx ){
                            mainNextSlideFn();
                        }
                        else if( imsi > idx ){
                            mainPrevSlideFn();
                        }
                    }
                });    
            });

            function timerControlFn(){
                var tCnt = 0;
                clearInterval(setId);
                clearInterval(setId2);
                setId2 = setInterval(function(){
                    tCnt++;
                    if( tCnt > 7 ){
                        imsi = null;                               
                        clearInterval(setId2);
                        nextCountFn();
                        autoPlayInit();
                    }
                },1000);
            }
        },
        section2Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('.sec2img1-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img2-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img3-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img4-wrap').stop().animate({opacity:0,top:-50},300,function(){
                    $('.sec2img1-wrap').stop().animate({opacity:1,top:0},400,function(){
                        $('.sec2img2-wrap').stop().animate({opacity:1,top:0},390,function(){
                            $('.sec2img3-wrap').stop().animate({opacity:1,top:0},380,function(){
                                $('.sec2img4-wrap').stop().animate({opacity:1,top:0},370);
                            });
                        });
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('.sec2img1-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img2-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img3-wrap').stop().animate({opacity:0,top:-50},300);
                $('.sec2img4-wrap').stop().animate({opacity:0,top:-50},300);
            }

            function animationFn(){
                $('.sec2img1-wrap').stop().animate({opacity:1,top:0},400,function(){
                    $('.sec2img2-wrap').stop().animate({opacity:1,top:0},390,function(){
                        $('.sec2img3-wrap').stop().animate({opacity:1,top:0},380,function(){
                            $('.sec2img4-wrap').stop().animate({opacity:1,top:0},370);
                        });
                    });
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section2').offset().top - 700 ){
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

            $('#section2 img').on({
                mouseenter: function(){
                    $('#section2 img').stop().animate({opacity:.5},300);
                    $(this).stop().animate({opacity:1},300);
                },
                mouseleave: function(){
                    $('#section2 img').stop().animate({opacity:1},300);
                },
                focusin: function(){
                    $('#section2 img').stop().animate({opacity:.5},300);
                    $(this).stop().animate({opacity:1},300);
                },
                focusout: function(){
                    $('#section2 img').stop().animate({opacity:1},300);
                }
            });
        },
        section3Fn: function(){
            var t = 0;

            setTimeout(init,100);
            
            function init(){
                $('.sec3ul1').stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(0).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(1).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(2).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(3).stop().animate({opacity:0,left:-100},500,function(){
                    $('.sec3ul1').stop().animate({opacity:1,left:0},500,function(){
                        $('.sec3ul2 li').eq(0).stop().animate({opacity:1,left:0},500);
                        $('.sec3ul2 li').eq(2).stop().animate({opacity:1,left:0},500,function(){
                            $('.sec3ul2 li').eq(1).stop().animate({opacity:1,left:0},500);
                            $('.sec3ul2 li').eq(3).stop().animate({opacity:1,left:0},500);
                        });
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('.sec3ul1').stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(0).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(1).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(2).stop().animate({opacity:0,left:-100},500);
                $('.sec3ul2 li').eq(3).stop().animate({opacity:0,left:-100},500);
            }

            function animationFn(){
                $('.sec3ul1').stop().animate({opacity:1,left:0},500,function(){
                    $('.sec3ul2 li').eq(0).stop().animate({opacity:1,left:0},500);
                    $('.sec3ul2 li').eq(2).stop().animate({opacity:1,left:0},500,function(){
                        $('.sec3ul2 li').eq(1).stop().animate({opacity:1,left:0},500);
                        $('.sec3ul2 li').eq(3).stop().animate({opacity:1,left:0},500);
                    });
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section3').offset().top - 700 ){
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

            $('#section3 .eye > span').on({
                mouseenter: function(){
                    $('#section3 .eye-over').stop().fadeIn(300);
                },
                mouseleave: function(){
                    $('#section3 .eye-over').stop().fadeOut(300);
                }
            });

            $('#section3 .heart > span').on({
                mouseenter: function(){
                    $('#section3 .heart-over').stop().fadeIn(300);
                },
                mouseleave: function(){
                    $('#section3 .heart-over').stop().fadeOut(300);
                }
            });
        },
        section4Fn: function(){
            var countDate = new Date('Feb 1, 2022 08:59:59').getTime();
            var t = 0;
            
            setInterval(function(){
                countFn();
            },1000);

            function countFn(){
                var now = new Date().getTime();
                    gap = countDate - now;

                    var second = 1000;
                    var minute = second * 60;
                    var hour = minute * 60;
                    var day = hour * 24;

                    var d = Math.floor(gap / (day));
                    var h = Math.floor((gap % (day)) / (hour));
                    var m = Math.floor((gap % (hour)) / (minute));
                    var s = Math.floor((gap % (minute)) / second);

                    d = (d<10)?"0"+d:d;
                    h = (h<10)?"0"+h:h;
                    m = (m<10)?"0"+m:m;
                    s = (s<10)?"0"+s:s;

                    document.getElementById("days").innerText = d;
                    document.getElementById("hours").innerText = h;
                    document.getElementById("min").innerText = m;
                    document.getElementById("sec").innerText = s;
            }

            setTimeout(init,100);
            
            function init(){
                $('#section4 .title-wrap').stop().animate({opacity:0,left:-300},300);
                $('#section4 .container').stop().animate({opacity:0,top:100},300,function(){
                    $('#section4 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                        $('#section4 .container').stop().animate({opacity:1,top:0},500);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section4 .title-wrap').stop().animate({opacity:0,left:-300},700);
                $('#section4 .container').stop().animate({opacity:0,top:100},500);
            }

            function animationFn(){
                $('#section4 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                    $('#section4 .container').stop().animate({opacity:1,top:0},500);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section4').offset().top - 700 ){
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

            $('.section4-li').each(function(idx){
                $(this).on({
                    mouseenter: function(){
                        $('.section4-li').eq(idx).find('.eye-wrap span').stop().animate({opacity:1,top:-27},150,function(){
                            $('.section4-li').eq(idx).find('.heart-wrap span').stop().animate({opacity:1,top:-27},150,function(){
                                $('.section4-li').eq(idx).find('.basket-wrap span').stop().animate({opacity:1,top:-27},150);
                            });
                        });
                    },
                    mouseleave: function(){
                        $('.section4-li').eq(idx).find('.eye-wrap span').stop().animate({opacity:0,top:0},150,function(){
                            $('.section4-li').eq(idx).find('.heart-wrap span').stop().animate({opacity:0,top:0},150,function(){
                                $('.section4-li').eq(idx).find('.basket-wrap span').stop().animate({opacity:0,top:0},150);
                            });
                        });
                    },
                    focusin: function(){
                        $('.section4-li').eq(idx).find('.eye-wrap span').stop().animate({opacity:1,top:-27},150,function(){
                            $('.section4-li').eq(idx).find('.heart-wrap span').stop().animate({opacity:1,top:-27},150,function(){
                                $('.section4-li').eq(idx).find('.basket-wrap span').stop().animate({opacity:1,top:-27},150);
                            });
                        });
                    },
                    focusout: function(){
                        $('.section4-li').eq(idx).find('.eye-wrap span').stop().animate({opacity:0,top:0},150,function(){
                            $('.section4-li').eq(idx).find('.heart-wrap span').stop().animate({opacity:0,top:0},150,function(){
                                $('.section4-li').eq(idx).find('.basket-wrap span').stop().animate({opacity:0,top:0},150);
                            });
                        });
                    }
                });
            });

            $('#section4 .over-wrap span').on({
                mouseenter: function(){
                    $(this).next().stop().fadeIn(300);
                },
                mouseleave: function(){
                    $(this).next().stop().fadeOut(300);
                }
            });
        },
        section5Fn: function(){
            var sec5H = $('#section5 li').innerHeight();
            var sec5W = $('#section5 li').innerWidth();
            var boxH = $('#section5 .txt-wrap').innerHeight();
            var boxTop = ( sec5H - boxH )/2;
            var t = 0;
            
            setTimeout(resizeFn,100);
            
            function resizeFn(){
                sec5H = $('#section5 li').innerHeight();
                boxH = $('#section5 .txt-wrap').innerHeight();
                boxTop = ( sec5H - boxH )/2;
                    $('#section5 .txt-wrap').css({ top:boxTop });
                }

                $(window).resize(function(){
                    resizeFn();
                });

            setTimeout(init,100);

            function init(){
                sec5W = $('#section5 li').innerWidth();

                $('#section5 h3').stop().animate({opacity:0,top:-500},300);
                $('#section5 h2').stop().animate({opacity:0,top:-400},300);
                $('#section5 h4').stop().animate({opacity:0,top:-300},300,function(){
                    $('#section5 .left').stop().animate({opacity:0,left:-sec5W},700);
                    $('#section5 .right').stop().animate({opacity:0,right:-sec5W},700,function(){
                        $('#section5 .left').stop().animate({opacity:1,left:0},700);
                        $('#section5 .right').stop().animate({opacity:1,right:0},700,function(){
                            $('#section5 h3').stop().animate({opacity:1,top:0},1200);    
                            $('#section5 h2').stop().animate({opacity:1,top:0},900);
                            $('#section5 h4').stop().animate({opacity:1,top:0},300);
                        });
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                sec5W = $('#section5 li').innerWidth();

                $('#section5 h3').stop().animate({opacity:0,top:-500},300);
                $('#section5 h2').stop().animate({opacity:0,top:-400},300);
                $('#section5 h4').stop().animate({opacity:0,top:-300},300,function(){
                    $('#section5 .left').stop().animate({opacity:0,left:-sec5W},700);
                    $('#section5 .right').stop().animate({opacity:0,right:-sec5W},700);
                });
            }

            function animationFn(){
                $('#section5 .left').stop().animate({opacity:1,left:0},700);
                $('#section5 .right').stop().animate({opacity:1,right:0},700,function(){
                    $('#section5 h3').stop().animate({opacity:1,top:0},1200);    
                    $('#section5 h2').stop().animate({opacity:1,top:0},900);
                    $('#section5 h4').stop().animate({opacity:1,top:0},300);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section5').offset().top - 700 ){
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
        },
        section6Fn: function(){
            var winW = $(window).width();
            var ulH = $('#section6 .ulH').innerHeight();
            var t = 0;
            
            setInterval(resizeFn);

            function resizeFn(){
                winW = $(window).width();
                ulH = $('#section6 .ulH').innerHeight();
                if(winW > 1200){
                    $('#section6 ul').css({height:ulH})
                }
                else if(winW <= 1200 && winW > 550){
                    $('#section6 ul').css({height:ulH*2})
                }
                else if( winW <= 550 && winW >= 0 ){
                    $('#section6 ul').css({height:ulH*4})
                }
            }

            $('#section6 li').on({
                mouseenter: function(){
                    $(this).find('.img-wrap').stop().animate({opacity:0},300);
                },
                mouseleave: function(){
                    $(this).find('.img-wrap').stop().animate({opacity:1},300);
                },
                focusin: function(){
                    $(this).find('.img-wrap').stop().animate({opacity:0},300);
                },
                focusout: function(){
                    $(this).find('.img-wrap').stop().animate({opacity:1},300);
                }
            });

            $('.sec6_li1').on({
                mouseenter: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li1').find('.txt-btn4').stop().animate({opacity:1,bottom:15},150,function(){
                                $('.sec6_li1').find('.txt-btn3').stop().animate({opacity:1,bottom:15},150);
                            });
                        });
                    }
                },
                mouseleave: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li1').find('.txt-btn3').stop().animate({opacity:0,bottom:-5},150,function(){
                                $('.sec6_li1').find('.txt-btn4').stop().animate({opacity:0,bottom:-5},150);
                            });
                        });
                    }
                },
                focusin: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li1').find('.txt-btn4').stop().animate({opacity:1,bottom:15},150,function(){
                                $('.sec6_li1').find('.txt-btn3').stop().animate({opacity:1,bottom:15},150);
                            });
                        });
                    }
                },
                focusout: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li1').find('.txt-btn3').stop().animate({opacity:0,bottom:-5},150,function(){
                                $('.sec6_li1').find('.txt-btn4').stop().animate({opacity:0,bottom:-5},150);
                            });
                        });
                    }
                }
            });

            $('.sec6_li2').on({
                mouseenter: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li2').find('.txt-btn4').stop().animate({opacity:1,bottom:15},150,function(){
                                $('.sec6_li2').find('.txt-btn3').stop().animate({opacity:1,bottom:15},150);
                            });
                        });
                    }
                },
                mouseleave: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li2').find('.txt-btn3').stop().animate({opacity:0,bottom:-5},150,function(){
                                $('.sec6_li2').find('.txt-btn4').stop().animate({opacity:0,bottom:-5},150);
                            });
                        });
                    }
                },
                focusin: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li2').find('.txt-btn4').stop().animate({opacity:1,bottom:15},150,function(){
                                $('.sec6_li2').find('.txt-btn3').stop().animate({opacity:1,bottom:15},150);
                            });
                        });
                    }
                },
                focusout: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li2').find('.txt-btn3').stop().animate({opacity:0,bottom:-5},150,function(){
                                $('.sec6_li2').find('.txt-btn4').stop().animate({opacity:0,bottom:-5},150);
                            });
                        });
                    }
                }
            });

            $('.sec6_li3').on({
                mouseenter: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li3').find('.txt-btn4').stop().animate({opacity:1,bottom:10},150,function(){
                                $('.sec6_li3').find('.txt-btn3').stop().animate({opacity:1,bottom:10},150);
                            });
                        });
                    }
                },
                mouseleave: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li3').find('.txt-btn3').stop().animate({opacity:0,bottom:-10},150,function(){
                                $('.sec6_li3').find('.txt-btn4').stop().animate({opacity:0,bottom:-10},150);
                            });
                        });
                    }
                },
                focusin: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li3').find('.txt-btn4').stop().animate({opacity:1,bottom:10},150,function(){
                                $('.sec6_li3').find('.txt-btn3').stop().animate({opacity:1,bottom:10},150);
                            });
                        });
                    }
                },
                focusout: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li3').find('.txt-btn3').stop().animate({opacity:0,bottom:-10},150,function(){
                                $('.sec6_li3').find('.txt-btn4').stop().animate({opacity:0,bottom:-10},150);
                            });
                        });
                    }
                }
            });

            $('.sec6_li4').on({
                mouseenter: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li4').find('.txt-btn4').stop().animate({opacity:1,bottom:10},150,function(){
                                $('.sec6_li4').find('.txt-btn3').stop().animate({opacity:1,bottom:10},150);
                            });
                        });
                    }
                },
                mouseleave: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li4').find('.txt-btn3').stop().animate({opacity:0,bottom:-10},150,function(){
                                $('.sec6_li4').find('.txt-btn4').stop().animate({opacity:0,bottom:-10},150);
                            });
                        });
                    }
                },
                focusin: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:1,bottom:50},300,function(){
                            $('.sec6_li4').find('.txt-btn4').stop().animate({opacity:1,bottom:10},150,function(){
                                $('.sec6_li4').find('.txt-btn3').stop().animate({opacity:1,bottom:10},150);
                            });
                        });
                    }
                },
                focusout: function(){
                    if(winW > 1200){
                        $(this).find('.txt-btn2').stop().animate({opacity:0,bottom:25},300,function(){
                            $('.sec6_li4').find('.txt-btn3').stop().animate({opacity:0,bottom:-10},150,function(){
                                $('.sec6_li4').find('.txt-btn4').stop().animate({opacity:0,bottom:-10},150);
                            });
                        });
                    }
                }
            });

            setTimeout(init,100);
            
            function init(){
                $('#section6 .title-wrap').stop().animate({opacity:0,left:-300},300);
                $('#section6 .container').stop().animate({opacity:0,top:100},300,function(){
                    $('#section6 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                        $('#section6 .container').stop().animate({opacity:1,top:0},500);
                    });
                });
                
                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section6 .title-wrap').stop().animate({opacity:0,left:-300},700);
                $('#section6 .container').stop().animate({opacity:0,top:100},500);
            }

            function animationFn(){
                $('#section6 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                    $('#section6 .container').stop().animate({opacity:1,top:0},500);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section6').offset().top - 700 ){
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
        },
        section7Fn: function(){
            var sec7H = $('#section7').innerHeight();
            var boxH = $('#section7 .txt-wrap').innerHeight();
            var boxTop = ( sec7H - boxH )/2;
            var t = 0;
            
            setTimeout(resizeFn,100);
            
            function resizeFn(){
                sec7H = $('#section7').innerHeight();
                boxH = $('#section7 .txt-wrap').innerHeight();
                boxTop = ( sec7H - boxH )/2;
                    $('#section7 .txt-wrap').css({ top:boxTop });
                }

                $(window).resize(function(){
                    resizeFn();
                });

            setTimeout(init,100);

            function init(){
                $('#section7').stop().animate({opacity:0.5},300);
                $('#section7 h3').stop().animate({opacity:0,top:100},300);
                $('#section7 h2').stop().animate({opacity:0,top:200},300);
                $('#section7 p').stop().animate({opacity:0,top:300},300);
                $('#section7 h4').stop().animate({opacity:0,top:400},300,function(){
                    $('#section7').stop().animate({opacity:1},500);
                    $('#section7 h3').stop().animate({opacity:1,top:0},300);
                    $('#section7 h2').stop().animate({opacity:1,top:0},900);
                    $('#section7 p').stop().animate({opacity:1,top:0},1200);
                    $('#section7 h4').stop().animate({opacity:1,top:0},1800);
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section7').stop().animate({opacity:0.5},300,function(){
                    $('#section7 h3').stop().animate({opacity:0,top:100},300);
                    $('#section7 h2').stop().animate({opacity:0,top:200},300);
                    $('#section7 p').stop().animate({opacity:0,top:300},300);
                    $('#section7 h4').stop().animate({opacity:0,top:400},300);
                });
            }

            function animationFn(){
                $('#section7').stop().animate({opacity:1},500,function(){
                    $('#section7 h3').stop().animate({opacity:1,top:0},300);
                    $('#section7 h2').stop().animate({opacity:1,top:0},900);
                    $('#section7 p').stop().animate({opacity:1,top:0},1200);
                    $('#section7 h4').stop().animate({opacity:1,top:0},1800);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section7').offset().top - 700 ){
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
        },
        section8Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section8 .title-wrap').stop().animate({opacity:0,left:-300},300);
                $('#section8 li').eq(0).stop().animate({opacity:0,top:300},300);
                $('#section8 li').eq(1).stop().animate({opacity:0,top:400},300);
                $('#section8 li').eq(2).stop().animate({opacity:0,top:500},300);
                $('#section8 li').eq(3).stop().animate({opacity:0,top:600},300);
                $('#section8 li').eq(4).stop().animate({opacity:0,top:700},300,function(){
                    $('#section8 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                        $('#section8 li').eq(0).stop().animate({opacity:1,top:0},400);
                        $('#section8 li').eq(1).stop().animate({opacity:1,top:0},700);
                        $('#section8 li').eq(2).stop().animate({opacity:1,top:0},1000);
                        $('#section8 li').eq(3).stop().animate({opacity:1,top:0},1300);
                        $('#section8 li').eq(4).stop().animate({opacity:1,top:0},1600);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section8 .title-wrap').stop().animate({opacity:0,left:-300},700);
                $('#section8 li').eq(0).stop().animate({opacity:0,top:300},700);
                $('#section8 li').eq(1).stop().animate({opacity:0,top:400},700);
                $('#section8 li').eq(2).stop().animate({opacity:0,top:500},700);
                $('#section8 li').eq(3).stop().animate({opacity:0,top:600},700);
                $('#section8 li').eq(4).stop().animate({opacity:0,top:700},700);
            }

            function animationFn(){
                $('#section8 .title-wrap').stop().animate({opacity:1,left:0},700,function(){
                    $('#section8 li').eq(0).stop().animate({opacity:1,top:0},400);
                    $('#section8 li').eq(1).stop().animate({opacity:1,top:0},700);
                    $('#section8 li').eq(2).stop().animate({opacity:1,top:0},1000);
                    $('#section8 li').eq(3).stop().animate({opacity:1,top:0},1300);
                    $('#section8 li').eq(4).stop().animate({opacity:1,top:0},1600);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section8').offset().top - 700 ){
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
        },
        footerFn: function(){
            $('#quick div').on({
                focusin: function(){
                    $(this).stop().animate({right:0},300);
                },
                focusout: function(){
                    $('#quick .cart').stop().animate({right:-71},300);
                    $('#quick .email').stop().animate({right:-105},300);
                }
            });
        }
    };
    hongo.init();
})(window,document,jQuery);