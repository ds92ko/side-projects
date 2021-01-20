;(function(window,document,$,undefined){
    var richardmille = {
        init: function(){
            var _this = this;
                _this.headerFn();
                _this.collectionsFn();
                _this.otherFn();
        },
        headerFn: function(){
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            var navH = $('.nav-wrap').innerHeight();
            var t=0; 
            var t2=0;

            //loading////////////////////////////////////////////////////////////////////////
            function loadingFn(){
                $('#loading img').stop().delay(1000).animate({marginTop:0},300,'easeInOutSine').delay(1000).animate({marginTop:14},300,'easeInOutSine',function(){
                    $('#loading').stop().delay(700).fadeOut(700);
                });
            }

            setTimeout(loadingFn,0);

            //Resize////////////////////////////////////////////////////////////////////////
            function resizeFn(){
                winW = $(window).innerWidth();
                winH = $(window).innerHeight();
                navH = $('.nav-wrap').innerHeight();
                
                $('#nav').css({width:winW,height:winH,overflow:'auto'});
            }
            
            $(window).resize(function(){
                resizeFn();
            });

            setInterval(resizeFn,10);

            //Smooth Scrolling Event////////////////////////////////////////////////////////////////////////
            $('.smooth-btn').on({
                click: function(event){
                    event.preventDefault();
                    url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop: $(url).offset().top },700);
                }
            });

            //nav////////////////////////////////////////////////////////////////////////
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

            //Aside Menu////////////////////////////////////////////////////////////////////////
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

            //search modal////////////////////////////////////////////////////////////////////////
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
        collectionsFn: function(){
            $('.collection').each(function(idx){
                $(this).children('div').on({
                    mouseenter: function(){
                        if(idx<9){
                            $('.bg').css({backgroundImage:'url(./img/bg/bg0'+(idx+1)+'.jpg)'}).stop().animate({opacity:0},0).animate({opacity:1},500);
                        }
                        else{
                            $('.bg').css({backgroundImage:'url(./img/bg/bg'+(idx+1)+'.jpg)'}).stop().animate({opacity:0},0).animate({opacity:1},500);
                        }
                        console.log(idx);
                    },
                    mouseleave: function(){                        
                        $('.bg').stop().animate({opacity:0},500);
                    }
                });
            });
        },
        otherFn: function(){
            
        }
    };
    richardmille.init();
})(window,document,jQuery);