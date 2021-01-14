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
            
        },
        section2Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section2 li').eq(0).stop().animate({opacity:0,left:300},500);
                $('#section2 li').eq(1).stop().animate({opacity:0,left:400},500);
                $('#section2 li').eq(2).stop().animate({opacity:0,left:500},500);
                $('#section2 li').eq(3).stop().animate({opacity:0,left:600},500);
                $('#section2 li').eq(4).stop().animate({opacity:0,left:700},500,function(){
                    $('#section2 li').eq(0).stop().animate({opacity:1,left:0},400);
                    $('#section2 li').eq(1).stop().animate({opacity:1,left:0},700);
                    $('#section2 li').eq(2).stop().animate({opacity:1,left:0},1000);
                    $('#section2 li').eq(3).stop().animate({opacity:1,left:0},1300);
                    $('#section2 li').eq(4).stop().animate({opacity:1,left:0},1600);
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section2 li').eq(0).stop().animate({opacity:0,left:300},700);
                $('#section2 li').eq(1).stop().animate({opacity:0,left:400},700);
                $('#section2 li').eq(2).stop().animate({opacity:0,left:500},700);
                $('#section2 li').eq(3).stop().animate({opacity:0,left:600},700);
                $('#section2 li').eq(4).stop().animate({opacity:0,left:700},700);
            }

            function animationFn(){
                $('#section2 li').eq(0).stop().animate({opacity:1,left:0},400);
                $('#section2 li').eq(1).stop().animate({opacity:1,left:0},700);
                $('#section2 li').eq(2).stop().animate({opacity:1,left:0},1000);
                $('#section2 li').eq(3).stop().animate({opacity:1,left:0},1300);
                $('#section2 li').eq(4).stop().animate({opacity:1,left:0},1600);
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
        },
        section3Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section3').stop().animate({opacity:.3},500,function(){
                    $('#section3').stop().animate({opacity:1},700);
                });
                

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section3').stop().animate({opacity:.3},700);
            }

            function animationFn(){
                $('#section3').stop().animate({opacity:1},700);
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
        },
        section4Fn: function(){
            var setId = 0;
            var t = 0;

            $('input, textarea').on({
                focus: function(){
                    $('.success-message').removeClass('addSuccess');
                }
            });

            $('#submit').on({
                click: function(event){
                    event.preventDefault();
                    $('.error-message').removeClass('addError');
                    $('.success-message').removeClass('addSuccess');
                    var nameVal = $('#name').val();
                    var mailVal = $('#mail').val();
                    var subjectVal = $('#subject').val();
                    var messageVal = $('#message').val();
                    var cnt=0;
                    var regExpName = /^[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣\s]+$/;
                    var regExpMail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i;

                    $('.ajax-loader').addClass('addAjax');
                    
                    setId = setInterval(function(){
                        cnt++;
                        if(cnt>=1){
                            clearInterval(setId);
                            $('.ajax-loader').removeClass('addAjax');
                            formSubmitFn();
                        }
                    },1000);

                    function formSubmitFn(){
                        if( regExpName.test( $('#name').val() ) === false || regExpMail.test( $('#mail').val() ) === false ){
                            if(   regExpName.test($('#name').val()) === false ){
                                $('#name').addClass('addError');
                            }
                            else{
                                $('#name').removeClass('addError');
                            }
                            if(  regExpMail.test($('#mail').val()) === false  ){
                                $('#mail').addClass('addError'); 
                            }
                            else{
                                $('#mail').removeClass('addError');
                            }

                            $('.error-message').addClass('addError');
                            return false;
                        }
                        else{
                            $('#name').removeClass('addError');
                            $('#mail').removeClass('addError');
                            $('.error-message').removeClass('addError');                                    

                            $.ajax({ 
                                url:"./response.php",
                                type:"post",
                                data:{
                                    name: nameVal,
                                    mail: mailVal,
                                    subject: subjectVal,
                                    message: messageVal
                                },
                                success: function(data){
                                    console.log(data);
                                    
                                    $('.success-message').addClass('addSuccess');
                                    $('#name').val('');
                                    $('#mail').val('');
                                    $('#subject').val('');
                                    $('#message').val('');
                                },
                                error: function(){
                                    console.log( 'AJAX 오류!!!' );
                                }
                            });
                        }
                    }
                }
            });

            setTimeout(init,100);

            function init(){
                $('#section4 .left').stop().animate({opacity:0,left:-500},500);
                $('#section4 .txt-wrap i').stop().animate({opacity:0,left:-100},500);
                $('#section4 .txt-wrap h2').stop().animate({opacity:0,left:-200},500);
                $('#section4 .txt-wrap p').stop().animate({opacity:0,left:-300},500);
                $('#section4 .txt-wrap span').stop().animate({opacity:0,left:-400},500);
                $('#section4 .txt-wrap h3').stop().animate({opacity:0,left:-500},500);
                $('#section4 .form').stop().animate({opacity:0,right:300},500);               
                $('#section4 .right').stop().animate({opacity:0,right:-500},500,function(){
                    $('#section4 .left').stop().animate({opacity:1,left:0},700,function(){
                        $('#section4 .txt-wrap i').stop().animate({opacity:1,left:0},300);
                        $('#section4 .txt-wrap h2').stop().animate({opacity:1,left:0},400);
                        $('#section4 .txt-wrap p').stop().animate({opacity:1,left:0},500);
                        $('#section4 .txt-wrap span').stop().animate({opacity:1,left:0},600);
                        $('#section4 .txt-wrap h3').stop().animate({opacity:1,left:0},700);
                    });
                    $('#section4 .form').stop().animate({opacity:1,right:0},1000);
                    $('#section4 .right').stop().animate({opacity:1,right:0},700);
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section4 .left').stop().animate({opacity:0,left:-500},700);
                $('#section4 .txt-wrap i').stop().animate({opacity:0,left:-100},700);
                $('#section4 .txt-wrap h2').stop().animate({opacity:0,left:-200},700);
                $('#section4 .txt-wrap p').stop().animate({opacity:0,left:-300},700);
                $('#section4 .txt-wrap span').stop().animate({opacity:0,left:-400},700);
                $('#section4 .txt-wrap h3').stop().animate({opacity:0,left:-500},700);
                $('#section4 .form').stop().animate({opacity:0,right:300},700);               
                $('#section4 .right').stop().animate({opacity:0,right:-500},700);
            }

            function animationFn(){
                $('#section4 .left').stop().animate({opacity:1,left:0},700,function(){
                    $('#section4 .txt-wrap i').stop().animate({opacity:1,left:0},300);
                    $('#section4 .txt-wrap h2').stop().animate({opacity:1,left:0},400);
                    $('#section4 .txt-wrap p').stop().animate({opacity:1,left:0},500);
                    $('#section4 .txt-wrap span').stop().animate({opacity:1,left:0},600);
                    $('#section4 .txt-wrap h3').stop().animate({opacity:1,left:0},700);
                });
                $('#section4 .form').stop().animate({opacity:1,right:0},1000);
                $('#section4 .right').stop().animate({opacity:1,right:0},700);
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
        },
        section5Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section5 li').eq(0).stop().animate({opacity:0,left:300},500);
                $('#section5 li').eq(1).stop().animate({opacity:0,left:400},500);
                $('#section5 li').eq(2).stop().animate({opacity:0,left:500},500,function(){
                    $('#section5 li').eq(0).stop().animate({opacity:1,left:0},500);
                    $('#section5 li').eq(1).stop().animate({opacity:1,left:0},1000);
                    $('#section5 li').eq(2).stop().animate({opacity:1,left:0},1500);
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section5 li').eq(0).stop().animate({opacity:0,left:300},700);
                $('#section5 li').eq(1).stop().animate({opacity:0,left:400},700);
                $('#section5 li').eq(2).stop().animate({opacity:0,left:500},700);
            }

            function animationFn(){
                $('#section5 li').eq(0).stop().animate({opacity:1,left:0},500);
                $('#section5 li').eq(1).stop().animate({opacity:1,left:0},1000);
                $('#section5 li').eq(2).stop().animate({opacity:1,left:0},1500);
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