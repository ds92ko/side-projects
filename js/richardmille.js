;(function(window,document,$,undefined){
    var richardmille = {
        init: function(){
            var _this = this;
                _this.headerFn();
                _this.sectionFn();
                _this.section1Fn();
                _this.section2Fn();
                _this.section3Fn();
                _this.section4Fn();
                _this.section5Fn();
                _this.section6Fn();
                _this.otherFn();
        },
        headerFn: function(){
            var winW = $(window).innerWidth();
            var t=0; 
            var t2=0; 
            
            //Smooth Scrolling Event
            $('.smooth-btn').on({
                click: function(event){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $(url).offset().top },700);
                }
            });

            //nav
            $('.menu-bar').on({
                click: function(event){
                    event.preventDefault();
                    
                    $(this).stop().toggleClass('addClose');
                    if(winW > 990){
                        if(t==0){
                            t=1;
                            $('#nav').stop().show();
                            $('.lastSide').stop().removeClass('addSide');
                            $('.lastSide').next().stop().slideUp();
                            $('.menu-bar .text').stop().animate({marginLeft:20,opacity:0},300,function(){
                                $('.nav-bg1').stop().fadeIn(300);
                                $('.nav-bg2').stop().animate({left:0},400);
                                $('.nav-bg3').stop().delay(100).animate({left:0},400,function(){
                                    $('.nav-wrap').stop().animate({left:0,opacity:1},400);
                                });
                            });
                        }
                        else{
                            t=0;
                            $('.nav-wrap').stop().animate({left:-50,opacity:0},400,function(){
                                $('.nav-bg1').stop().fadeOut(300);
                                $('.nav-bg3').stop().animate({left:-100+'%'},400);
                                $('.nav-bg2').stop().delay(100).animate({left:-600},400,function(){
                                    $('.menu-bar .text').stop().animate({marginLeft:0,opacity:1},300);
                                    $('#nav').stop().hide();
                                });
                            });
                        }
                    }
                    else if(winW <= 990 && winW >=0){
                        if(t==0){
                            t=1;
                            $('#nav').stop().show();
                            $('.lastSide').stop().removeClass('addSide');
                            $('.lastSide').next().stop().slideUp();
                            $('.nav-bg1').stop().fadeIn(300);
                            $('.nav-bg2').stop().animate({left:0},400);
                            $('.nav-bg3').stop().delay(100).animate({left:0},400,function(){
                                $('.nav-wrap').stop().animate({left:0,opacity:1},400);
                            });
                        }
                        else{
                            t=0;
                            $('.nav-wrap').stop().animate({left:-50,opacity:0},400,function(){
                                $('.nav-bg1').stop().fadeOut(300);
                                $('.nav-bg3').stop().animate({left:-100+'%'},400);
                                $('.nav-bg2').stop().delay(100).animate({left:-100+'%'},400,function(){
                                    $('#nav').stop().hide();
                                });
                            });
                        }
                    }
                }
            });
            
            $('.lastSide').on({
                click: function(event){
                    event.preventDefault();
                    if(t2==0){
                        t2=1;
                        $(this).stop().addClass('addSide');
                        $(this).next().stop().slideDown();
                    }
                    else{
                        t2=0;
                        $(this).stop().removeClass('addSide');
                        $(this).next().stop().slideUp();
                    }
                }
            });

            //search modal
            $('.search-open').on({
                click: function(event){
                    event.preventDefault();
                    $('.search-open').stop().fadeOut(300,function(){
                        $('.search-close').stop().fadeIn(300);
                    });
                    $('#main').stop().animate({opacity:0},300);
                    $('#search-modal').stop().slideDown(500);
                }
            });
            $('.search-close').on({
                click: function(event){
                    event.preventDefault();
                    $('.search-close').stop().fadeOut(300,function(){
                        $('.search-open').stop().fadeIn(300);
                    });
                    $('#main').stop().animate({opacity:1},300);
                    $('#search-modal').stop().slideUp(500,function(){
                        $('#search').val('');
                    });
                }
            });
        },
        sectionFn: function(){
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var vidW = $('video').innerWidth();
            var vidH = $('video').innerHeight();
            var navH = $('.nav-wrap').innerHeight();
            var marT = (winH-vidH)/2;
            var marL = (winW-vidW)/2;
            var n = $('.section').length;
            var wheelDelta = null;

            //Resize
            setInterval(resizeFn,10);

            function resizeFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                vidW = $('video').innerWidth();
                vidH = $('video').innerHeight();
                navH = $('.nav-wrap').innerHeight();
                marT = (winH-vidH)/2;
                marL = (winW-vidW)/2;

                $('.section').css({height:winH});
                if(winW>vidW){
                    $('video').css({width:winW,height:'auto'});
                }
                if(winH>vidH){
                    $('video').css({width:'auto',height:winH});
                }
                $('video').css({marginTop:marT,marginLeft:marL});
                $('#nav').css({width:winW,height:winH,overflow:'auto'});
            }

            $(window).resize(function(){
                resizeFn();
            });
            
            //Mouse Wheel Event
            $('.section').each(function(index){
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
                            $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },700,'easeInSine');
                        }
                    }
                    else{
                        if(index > 0){
                            $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },700,'easeInSine');
                        }
                    }
                });
            });

            //Mobile Mouse Wheel Event
            $('.section').each(function(index){
                $(this).bind('touchstart',function(event){
                    event.stopPropagation();
                    touchStart = event.originalEvent.touches[0].clientY;
                });
                $(this).bind('touchend',function(event){
                    event.stopPropagation();
                    touchEnd = event.originalEvent.changedTouches[0].clientY;
                    if( touchStart > touchEnd+5 ){
                        $('html, body').stop().animate({ scrollTop: $(this).next().offset().top },800,'easeInOutSine');
                    }
                    else if( touchStart < touchEnd-5 ){
                        $('html, body').stop().animate({ scrollTop: $(this).prev().offset().top },800,'easeInOutSine');
                    }
                });
            });

            //Aside Menu
            $('.language-btn').on({
                click: function(event){
                    event.preventDefault();
                    $('.language').stop().toggleClass('addAside');
                    $('.aside-bg').stop().toggleClass('addAside');
                    $('.language ul').stop().slideToggle();
                }
            });

            $('.language-sub-btn').on({
                click: function(event){
                    event.preventDefault();
                    $('.language').stop().removeClass('addAside');
                    $('.aside-bg').stop().removeClass('addAside');
                    $('.language ul').stop().slideUp();
                }
            });
        },
        section1Fn: function(){
            setTimeout(init,3000);

            function init(){
                $('#section1 .bg-wrap').stop().animate({opacity:0},0);
                $('#section1 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section1 h3').stop().animate({opacity:0,top:70},0);
                $('#section1 h2').stop().animate({opacity:0,top:75},0);
                $('#section1 p').stop().animate({opacity:0,top:80},0);
                $('#section1 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section1 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section1 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section1 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section1 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section1 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section1 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section1 .bg-wrap').stop().animate({opacity:0},0);
                $('#section1 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section1 h3').stop().animate({opacity:0,top:70},200);
                $('#section1 h2').stop().animate({opacity:0,top:75},200);
                $('#section1 p').stop().animate({opacity:0,top:80},200);
                $('#section1 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section1 .bg-wrap').stop().animate({opacity:1},300);
                $('#section1 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section1 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section1 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section1 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section1 span').stop().delay(700).animate({opacity:1,top:0},1200);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section1').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section1').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section1').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section2Fn: function(){
            setTimeout(init,3000);

            function init(){
                $('#section2 .bg-wrap').stop().animate({opacity:0},0);
                $('#section2 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section2 h3').stop().animate({opacity:0,top:70},0);
                $('#section2 h2').stop().animate({opacity:0,top:75},0);
                $('#section2 p').stop().animate({opacity:0,top:80},0);
                $('#section2 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section2 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section2 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section2 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section2 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section2 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section2 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section2 .bg-wrap').stop().animate({opacity:0},0);
                $('#section2 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section2 h3').stop().animate({opacity:0,top:70},200);
                $('#section2 h2').stop().animate({opacity:0,top:75},200);
                $('#section2 p').stop().animate({opacity:0,top:80},200);
                $('#section2 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section2 .bg-wrap').stop().animate({opacity:1},300);
                $('#section2 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section2 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section2 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section2 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section2 span').stop().delay(700).animate({opacity:1,top:0},1200);
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
            setTimeout(init,3000);

            function init(){
                $('#section3 .bg-wrap').stop().animate({opacity:0},0);
                $('#section3 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section3 h3').stop().animate({opacity:0,top:70},0);
                $('#section3 h2').stop().animate({opacity:0,top:75},0);
                $('#section3 p').stop().animate({opacity:0,top:80},0);
                $('#section3 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section3 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section3 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section3 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section3 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section3 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section3 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section3 .bg-wrap').stop().animate({opacity:0},0);
                $('#section3 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section3 h3').stop().animate({opacity:0,top:70},200);
                $('#section3 h2').stop().animate({opacity:0,top:75},200);
                $('#section3 p').stop().animate({opacity:0,top:80},200);
                $('#section3 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section3 .bg-wrap').stop().animate({opacity:1},300);
                $('#section3 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section3 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section3 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section3 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section3 span').stop().delay(700).animate({opacity:1,top:0},1200);
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
            setTimeout(init,3000);

            function init(){
                $('#section4 .bg-wrap').stop().animate({opacity:0},0);
                $('#section4 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section4 h3').stop().animate({opacity:0,top:70},0);
                $('#section4 h2').stop().animate({opacity:0,top:75},0);
                $('#section4 p').stop().animate({opacity:0,top:80},0);
                $('#section4 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section4 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section4 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section4 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section4 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section4 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section4 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section4 .bg-wrap').stop().animate({opacity:0},0);
                $('#section4 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section4 h3').stop().animate({opacity:0,top:70},200);
                $('#section4 h2').stop().animate({opacity:0,top:75},200);
                $('#section4 p').stop().animate({opacity:0,top:80},200);
                $('#section4 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section4 .bg-wrap').stop().animate({opacity:1},300);
                $('#section4 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section4 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section4 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section4 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section4 span').stop().delay(700).animate({opacity:1,top:0},1200);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section4').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section4').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section4').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section5Fn: function(){
            setTimeout(init,3000);

            function init(){
                $('#section5 .bg-wrap').stop().animate({opacity:0},0);
                $('#section5 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section5 h3').stop().animate({opacity:0,top:70},0);
                $('#section5 h2').stop().animate({opacity:0,top:75},0);
                $('#section5 p').stop().animate({opacity:0,top:80},0);
                $('#section5 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section5 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section5 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section5 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section5 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section5 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section5 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section5 .bg-wrap').stop().animate({opacity:0},0);
                $('#section5 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section5 h3').stop().animate({opacity:0,top:70},200);
                $('#section5 h2').stop().animate({opacity:0,top:75},200);
                $('#section5 p').stop().animate({opacity:0,top:80},200);
                $('#section5 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section5 .bg-wrap').stop().animate({opacity:1},300);
                $('#section5 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section5 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section5 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section5 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section5 span').stop().delay(700).animate({opacity:1,top:0},1200);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section5').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section5').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section5').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        section6Fn: function(){
            setTimeout(init,3000);

            function init(){
                $('#section6 .bg-wrap').stop().animate({opacity:0},0);
                $('#section6 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section6 h3').stop().animate({opacity:0,top:70},0);
                $('#section6 h2').stop().animate({opacity:0,top:75},0);
                $('#section6 p').stop().animate({opacity:0,top:80},0);
                $('#section6 span').stop().animate({opacity:0,top:85},0,function(){
                    $('#section6 .bg-wrap').stop().animate({opacity:1},300);
                    $('#section6 .next-btn-wrap').stop().animate({opacity:1},300);
                    $('#section6 h3').stop().delay(100).animate({opacity:1,top:0},300);
                    $('#section6 h2').stop().delay(300).animate({opacity:1,top:0},600);
                    $('#section6 p').stop().delay(500).animate({opacity:1,top:0},900);
                    $('#section6 span').stop().delay(700).animate({opacity:1,top:0},1200);
                });
            }

            function formatFn(){
                $('#section6 .bg-wrap').stop().animate({opacity:0},0);
                $('#section6 .next-btn-wrap').stop().animate({opacity:0},0);
                $('#section6 h3').stop().animate({opacity:0,top:70},200);
                $('#section6 h2').stop().animate({opacity:0,top:75},200);
                $('#section6 p').stop().animate({opacity:0,top:80},200);
                $('#section6 span').stop().animate({opacity:0,top:85},200);
            }

            function animationFn(){
                $('#section6 .bg-wrap').stop().animate({opacity:1},300);
                $('#section6 .next-btn-wrap').stop().animate({opacity:1},300);
                $('#section6 h3').stop().delay(100).animate({opacity:1,top:0},300);
                $('#section6 h2').stop().delay(300).animate({opacity:1,top:0},600);
                $('#section6 p').stop().delay(500).animate({opacity:1,top:0},900);
                $('#section6 span').stop().delay(700).animate({opacity:1,top:0},1200);
            }

            $(window).scroll(function(){
                if( Math.ceil($(this).scrollTop()) == Math.floor($('#section6').offset().top) || Math.floor($(this).scrollTop()) == Math.floor($('#section6').offset().top) || Math.round($(this).scrollTop()) == Math.floor($('#section6').offset().top) ){
                    animationFn();
                }
                else{
                    formatFn();
                }
            });
        },
        otherFn: function(){
            //loading
            function loadingFn(){
                $('#loading img').stop().delay(1000).animate({marginTop:0},300,'easeInOutSine').delay(1000).animate({marginTop:14},300,'easeInOutSine',function(){
                    $('#loading').stop().delay(700).fadeOut(700);
                });
            }

            setTimeout(loadingFn,0);

            //quick menu
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
                else if( $(this).scrollTop() <= $('#section5').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(4).addClass('addQuick');
                }
                else if( $(this).scrollTop() <= $('#section6').offset().top ){
                    $('.quick').removeClass('addQuick');
                    $('.quick').eq(5).addClass('addQuick');
                }
            });

            $('.quick').on({
                click: function(event){
                    event.preventDefault();
                    $('.quick').removeClass('addQuick');
                    $(this).addClass('addQuick');
                }
            });
        }
    };
    richardmille.init();
})(window,document,jQuery);