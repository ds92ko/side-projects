;(function(window,document,$,undefined){
    var portfolio = {
        init: function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
            that.section6Fn();
            that.section7Fn();
            that.section8Fn();
            that.section9Fn();
            that.section10Fn();
            that.section11Fn();
            that.section12Fn();
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
            var t = 0;

            setTimeout(init,100);

            function init(){
                
                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section2 .title').stop().animate({opacity:0,left:-100},400);
                $('#section2 .left').stop().animate({opacity:0,left:-100},400);
                $('#section2 .right').stop().animate({opacity:0,left:-100},400);
            }

            function animationFn(){
                $('#section2 .title').stop().animate({opacity:1,left:0},500,function(){
                    $('#section2 .left').stop().animate({opacity:1,left:0},500,function(){
                        $('#section2 .right').stop().animate({opacity:1,left:0},500);
                    });
                });
                
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section2').offset().top -700 ){
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
                $('#section3 .title').stop().animate({opacity:0,left:-100},400);
                $('#section3 .content').stop().animate({opacity:0,right:-100},400,function(){
                    $('#section3 .title').stop().animate({opacity:1,left:0},500);
                    $('#section3 .content').stop().animate({opacity:1,right:0},500);
                });
                
                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section3 .title').stop().animate({opacity:0,left:-100},400);
                $('#section3 .content').stop().animate({opacity:0,right:-100},400);
            }

            function animationFn(){
                $('#section3 .title').stop().animate({opacity:1,left:0},500);
                $('#section3 .content').stop().animate({opacity:1,right:0},500);
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section3').offset().top -700 ){
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
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section4 .title').stop().animate({opacity:0,left:-100},400);
                $('#section4 li').stop().fadeOut(400,function(){
                    $('#section4 .title').stop().animate({opacity:1,left:0},500,function(){
                        $('#section4 .img').stop().fadeIn(300,function(){
                            $('#section4 .txt1').stop().fadeIn(300,function(){
                                $('#section4 .txt2').stop().fadeIn(300,function(){
                                    $('#section4 .txt3').stop().fadeIn(300,function(){
                                        $('#section4 .txt4').stop().fadeIn(300);
                                    });
                                });
                            });
                        });
                    });
                });
                
                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section4 .title').stop().animate({opacity:0,left:-100},400);
                $('#section4 li').stop().fadeOut(400);
            }

            function animationFn(){
                $('#section4 .title').stop().animate({opacity:1,left:0},500,function(){
                    $('#section4 .img').stop().fadeIn(300,function(){
                        $('#section4 .txt1').stop().fadeIn(300,function(){
                            $('#section4 .txt2').stop().fadeIn(300,function(){
                                $('#section4 .txt3').stop().fadeIn(300,function(){
                                    $('#section4 .txt4').stop().fadeIn(300);
                                });
                            });
                        });
                    });
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section4').offset().top -700 ){
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
                $('#section5 .title').stop().addClass('addTitle');
                $('#section5 h4').stop().animate({opacity:0,left:-50},400);
                $('#section5 h5').stop().animate({opacity:0,left:-50},400);
                $('#section5 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section5 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section5 .title').stop().removeClass('addTitle');
                    $('#section5 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section5 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section5 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section5 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section5 .title').stop().addClass('addTitle');
                $('#section5 h4').stop().animate({opacity:0,left:-50},400);
                $('#section5 h5').stop().animate({opacity:0,left:-50},400);
                $('#section5 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section5 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section5 .title').stop().removeClass('addTitle');
                $('#section5 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section5 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section5 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section5 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section5').offset().top -700 ){
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
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section6 .title').stop().addClass('addTitle');
                $('#section6 h4').stop().animate({opacity:0,left:-50},400);
                $('#section6 h5').stop().animate({opacity:0,left:-50},400);
                $('#section6 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section6 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section6 .title').stop().removeClass('addTitle');
                    $('#section6 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section6 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section6 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section6 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section6 .title').stop().addClass('addTitle');
                $('#section6 h4').stop().animate({opacity:0,left:-50},400);
                $('#section6 h5').stop().animate({opacity:0,left:-50},400);
                $('#section6 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section6 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section6 .title').stop().removeClass('addTitle');
                $('#section6 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section6 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section6 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section6 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section6').offset().top -700 ){
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
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section7 .title').stop().addClass('addTitle');
                $('#section7 h4').stop().animate({opacity:0,left:-50},400);
                $('#section7 h5').stop().animate({opacity:0,left:-50},400);
                $('#section7 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section7 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section7 .title').stop().removeClass('addTitle');
                    $('#section7 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section7 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section7 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section7 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section7 .title').stop().addClass('addTitle');
                $('#section7 h4').stop().animate({opacity:0,left:-50},400);
                $('#section7 h5').stop().animate({opacity:0,left:-50},400);
                $('#section7 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section7 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section7 .title').stop().removeClass('addTitle');
                $('#section7 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section7 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section7 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section7 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section7').offset().top -700 ){
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
                $('#section8 .title').stop().addClass('addTitle');
                $('#section8 h4').stop().animate({opacity:0,left:-50},400);
                $('#section8 h5').stop().animate({opacity:0,left:-50},400);
                $('#section8 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section8 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section8 .title').stop().removeClass('addTitle');
                    $('#section8 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section8 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section8 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section8 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section8 .title').stop().addClass('addTitle');
                $('#section8 h4').stop().animate({opacity:0,left:-50},400);
                $('#section8 h5').stop().animate({opacity:0,left:-50},400);
                $('#section8 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section8 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section8 .title').stop().removeClass('addTitle');
                $('#section8 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section8 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section8 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section8 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section8').offset().top -700 ){
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
        section9Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section9 .title').stop().addClass('addTitle');
                $('#section9 h4').stop().animate({opacity:0,left:-50},400);
                $('#section9 h5').stop().animate({opacity:0,left:-50},400);
                $('#section9 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section9 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section9 .title').stop().removeClass('addTitle');
                    $('#section9 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section9 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section9 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section9 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section9 .title').stop().addClass('addTitle');
                $('#section9 h4').stop().animate({opacity:0,left:-50},400);
                $('#section9 h5').stop().animate({opacity:0,left:-50},400);
                $('#section9 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section9 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section9 .title').stop().removeClass('addTitle');
                $('#section9 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section9 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section9 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section9 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section9').offset().top -700 ){
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
        section10Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section10 .title').stop().addClass('addTitle');
                $('#section10 h4').stop().animate({opacity:0,left:-50},400);
                $('#section10 h5').stop().animate({opacity:0,left:-50},400);
                $('#section10 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section10 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section10 .title').stop().removeClass('addTitle');
                    $('#section10 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section10 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section10 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section10 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section10 .title').stop().addClass('addTitle');
                $('#section10 h4').stop().animate({opacity:0,left:-50},400);
                $('#section10 h5').stop().animate({opacity:0,left:-50},400);
                $('#section10 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section10 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section10 .title').stop().removeClass('addTitle');
                $('#section10 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section10 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section10 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section10 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section10').offset().top -700 ){
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
        section11Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section11 .title').stop().addClass('addTitle');
                $('#section11 h4').stop().animate({opacity:0,left:-50},400);
                $('#section11 h5').stop().animate({opacity:0,left:-50},400);
                $('#section11 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section11 .btn-wrap').stop().animate({opacity:0,top:50},400,function(){
                    $('#section11 .title').stop().removeClass('addTitle');
                    $('#section11 h4').stop().delay(300).animate({opacity:1,left:0},400);
                    $('#section11 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                        $('#section11 .img-wrap').stop().animate({opacity:1,top:0},400);
                        $('#section11 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                    });
                });

                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section11 .title').stop().addClass('addTitle');
                $('#section11 h4').stop().animate({opacity:0,left:-50},400);
                $('#section11 h5').stop().animate({opacity:0,left:-50},400);
                $('#section11 .img-wrap').stop().animate({opacity:0,top:50},400);
                $('#section11 .btn-wrap').stop().animate({opacity:0,top:50},400);
            }

            function animationFn(){
                $('#section11 .title').stop().removeClass('addTitle');
                $('#section11 h4').stop().delay(300).animate({opacity:1,left:0},400);
                $('#section11 h5').stop().delay(500).animate({opacity:1,left:0},500,function(){
                    $('#section11 .img-wrap').stop().animate({opacity:1,top:0},400);
                    $('#section11 .btn-wrap').stop().delay(300).animate({opacity:1,top:0},400);
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section11').offset().top -700 ){
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
        section12Fn: function(){
            var t = 0;

            setTimeout(init,100);

            function init(){
                $('#section12 .title').stop().animate({opacity:0,left:-100},400);
                $('#section12 .kakao').stop().animate({opacity:0,top:70},400);
                $('#section12 .line').stop().animate({opacity:0,top:75},400);
                $('#section12 .insta').stop().animate({opacity:0,top:80},400);
                $('#section12 .phone').stop().animate({opacity:0,top:85},400);
                $('#section12 .mail').stop().animate({opacity:0,top:90},400);
                $('#section12 .resume').stop().animate({opacity:0,top:95},400);
                $('#section12 .img-wrap').stop().animate({opacity:0,right:-50},400,function(){
                    $('#section12 .title').stop().animate({opacity:1,left:0},500,function(){
                        $('#section12 .kakao').stop().animate({opacity:1,top:0},400);
                        $('#section12 .line').stop().delay(100).animate({opacity:1,top:0},500);
                        $('#section12 .insta').stop().delay(200).animate({opacity:1,top:0},600);
                        $('#section12 .phone').stop().delay(300).animate({opacity:1,top:0},700);
                        $('#section12 .mail').stop().delay(400).animate({opacity:1,top:0},800);
                        $('#section12 .resume').stop().delay(500).animate({opacity:1,top:0},900,function(){
                            $('#section12 .img-wrap').stop().animate({opacity:1,right:0},400);
                        });
                    });
                });
                
                if($(window).scrollTop() == 0){
                    formatFn();
                }
            }

            function formatFn(){
                $('#section12 .title').stop().animate({opacity:0,left:-100},400);
                $('#section12 .kakao').stop().animate({opacity:0,top:70},400);
                $('#section12 .line').stop().animate({opacity:0,top:75},400);
                $('#section12 .insta').stop().animate({opacity:0,top:80},400);
                $('#section12 .phone').stop().animate({opacity:0,top:85},400);
                $('#section12 .mail').stop().animate({opacity:0,top:90},400);
                $('#section12 .resume').stop().animate({opacity:0,top:95},400);
                $('#section12 .img-wrap').stop().animate({opacity:0,right:-50},400);
            }

            function animationFn(){
                $('#section12 .title').stop().animate({opacity:1,left:0},500,function(){
                    $('#section12 .kakao').stop().animate({opacity:1,top:0},400);
                    $('#section12 .line').stop().delay(100).animate({opacity:1,top:0},500);
                    $('#section12 .insta').stop().delay(200).animate({opacity:1,top:0},600);
                    $('#section12 .phone').stop().delay(300).animate({opacity:1,top:0},700);
                    $('#section12 .mail').stop().delay(400).animate({opacity:1,top:0},800);
                    $('#section12 .resume').stop().delay(500).animate({opacity:1,top:0},900,function(){
                        $('#section12 .img-wrap').stop().animate({opacity:1,right:0},400);
                    });
                });
            }

            $(window).scroll(function(){
                if( $(this).scrollTop() >= $('#section12').offset().top -700 ){
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
        }
    };
    portfolio.init();
})(window,document,jQuery);