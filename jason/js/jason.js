;(function($,window,document,undefined){
    var jason = {
        init: function(){
            var that = this;
            that.headerFn();
            that.section1Fn();
            that.section2Fn();
            that.section3Fn();
            that.section4Fn();
            that.section5Fn();
        },
        headerFn: function(){
            var scroll = false;
            var t = false;
            var m = 0; //hamberger menu click 안한 상태(click toggle 기억 변수)
            
            //header hover
            $('#header').on({
                mouseenter: function(){
                    $(this).stop().addClass('addHeader');
                },
                mouseleave: function(){
                    if( scroll === false && m === 0 ){
                        $(this).stop().removeClass('addHeader');
                    }
                }
            });

            //header scroll
            $(window).scroll(function(){
                var headerH = $('#header').innerHeight();
                if( $(this).scrollTop() >= 30 ){
                    scroll=true; //스크롤 30px 이상이면 true로 변경
                    $('#header').stop().addClass('addHeader');
                    if(t===false){
                        t=true;
                        $('html,body').stop().animate({ scrollTop:$('#section2').offset().top-headerH },600,'easeInOutExpo');
                    }
                }
                else{
                    t=false;
                    scroll=false; //스크롤 30px 미만이면 false로 변경
                    if(m===0){
                        $('#header').stop().removeClass('addHeader');
                    }
                }
            });

            //nav Event
            $('.menu-bar').on({
                click: function(event){
                    event.preventDefault();
                    if(m==0){
                        m = 1;
                        $('#nav').stop().animate({top:124},300);
                    }
                    else if(m==1){
                        m = 0;
                        $('#nav').stop().animate({top:-124},300);
                    }
                    $(this).stop().toggleClass('addBtn');
                    $('#header').stop().toggleClass('addBtn');
                }
            });

            //main btn Event
            $('.main-btn').on({
                mouseenter: function(){
                    $('.sub').stop().slideUp(300);
                    $(this).next('.sub').stop().slideDown(300);
                }
            });

            //sub menu out Event
            $('#nav').on({
                mouseleave: function(){
                    $('.sub').stop().slideUp(300);
                }
            });
        },
        section1Fn: function(){
            var cnt = 0; //증가변수니까 반드시 초기값 0
            var n = $('#section1 .slide').length-2;
            var setId = null; //증가변수가 아니니까 초기값 0말고 null도 가능
            var setId2 = null;
            var s = 4; //4초간격 변수
            var tCnt = 0; //시간측정변수
            var winW = $(window).innerWidth();
            var winH = $(window).innerHeight();
            
            ////////////////////////////////////////////////////////////////////
            
            //main slide
            function mainSlideFn(){
                $('#section1 .slide-wrap').stop().animate({left:-(100*cnt)+'%'},600,function(){
                    if(cnt>n-1){cnt=0;} //index는 항상 0부터 시작이니까 -1
                    if(cnt<0){cnt=n-1;}
                    $('#section1 .slide-wrap').stop().animate({left:-(100*cnt)+'%'},0);
                });
                //page btn Fn 호출(매개변수)
                pageBtnFn(cnt);
            }
            
            //next slide count Fn
            function nextCountFn(){
                cnt++;
                mainSlideFn();
            }
            
            //prev slide count Fn
            function prevCountFn(){
                cnt--;
                mainSlideFn();
            }
            
            //auto play Fn
            function autoTimerFn(){
                setId = setInterval(nextCountFn,1000*s);
            }
            
            //timer control Fn
            function timerFn(){
                tCnt=0; //4초를 초과하지 않아도 클릭하면 다시 초기화하도록
                clearInterval(setId2); //4초를 초과하지 않아도 클릭하면 다시 초기화하도록
                setId2 = setInterval(function(){
                    tCnt++;
                    if(tCnt>s){ //tCnt가 4초를 초과하면
                        clearInterval(setId2);
                        nextCountFn();
                        autoTimerFn();
                    }
                },1000);
            }

            //page btn(indicator) Fn
            function pageBtnFn(z){
                z==4?z=0:z;
                z==-1?z=3:z;
                //console.log(z);
                $('#section1 .page-btn').removeClass('addCurrent');
                $('#section1 .page-btn').eq(z).addClass('addCurrent');
            }

            //next btn click event
            $('#section1 .next-btn').on({
                click: function(event){
                    event.preventDefault();
                    clearInterval(setId); //슬라이드 자동재생 정지
                    timerFn();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        nextCountFn();
                    }
                }
            });

            //prev btn click event
            $('#section1 .prev-btn').on({
                click: function(event){
                    event.preventDefault();
                    clearInterval(setId); //슬라이드 자동재생 정지
                    timerFn();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        prevCountFn();
                    }
                }
            });

            //page btn click event
            $('#section1 .page-btn').each(function(index){
                $(this).on({
                    click: function(event){
                        event.preventDefault();
                        clearInterval(setId); //슬라이드 자동재생 정지
                        timerFn();
                        cnt = index;
                        mainSlideFn();
                    }
                });
            });

            //touch swipe event
            $('#section1').swipe({
                swipeLeft: function(event){ //R -> L / next
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        nextCountFn();
                    }
                },
                swipeRight: function(event){ //L -> R / prev
                    event.preventDefault();
                    clearInterval(setId);
                    timerFn();
                    if(!$('#section1 .slide-wrap').is(':animated')){
                        prevCountFn();
                    }
                }
            });

            setTimeout(autoTimerFn,10);

            ////////////////////////////////////////////////////////////////////

            //smooth btn
            $('.smooth-btn').on({
                click: function(event){
                    event.preventDefault();
                    var headerH = $('#header').innerHeight();
                    var url = $(this).attr('href');
                    $('html,body').stop().animate({ scrollTop:$(url).offset().top-headerH },600,'easeInOutExpo');
                }
            });

            ////////////////////////////////////////////////////////////////////

            function resizeFn(){  
                winW = $(window).innerWidth(); //새로고침 안해도 즉시 적용
                winH = $(window).innerHeight();//새로고침 안해도 즉시 적용
                
                $('#section1').css({ height:winH });
                $('#section2').css({ marginTop:winH });
                $('#section1 .slide').css({ width:winW });
            }
            $(window).resize(function(){
                resizeFn();
            });
            
            setTimeout(resizeFn,0);
        },
        section2Fn: function(){
            var galW = $('.gal li').width();
            var galH = galW*0.8694621946372336;

            function resizeFn(){
                galW = $('.gal li').width();
                galH = galW*0.8694621946372336;
                $('.gal li').css({height:galH});
            };

            $(window).resize(function(){
                resizeFn();
            });

            setTimeout(resizeFn,10);
        },
        section3Fn: function(){
            //slide view box
            //window width가 1360이하면 box height 자동 설정
            var winW = $(window).innerWidth();
            var pageBtnW = $('#section3 .page-btn').innerWidth();
            var slideImgW = $('#section3 .slide-img').innerWidth();
            var cnt = 0;
            var setId = null;
            var n = $('#section3 .slide').length-1;
            var a = [1,2];
            
            function resizeFn(){
                winW = $(window).innerWidth();
                pageBtnW = $('#section3 .page-btn').innerWidth();
                slideImgW = $('#section3 .slide-img').innerWidth();
                
                if(winW<=1360){
                    $('#section3 .slide-img').css({height:slideImgW});
                    $('#section3 .page-wrap').css({height:pageBtnW});
                    $('#section3 .slide-view').css({height:winW*0.419117647});
                }
                else{
                    $('#section3 .slide-view').css({height:570});
                }
            }

            setTimeout(resizeFn,10);

            $(window).resize(function(){
                resizeFn();
            });

            //Fade In Out Slide 반응형 웹 개발///////////////////////////////////////////////
            
            //1-1 Next Slide
            function mainNextSlideFn(){
                //console.log(cnt);
                $('#section3 .slide').css({zIndex:1}); //모든 슬라이드 (초기화)
                $('#section3 .slide').eq(cnt==0?n:cnt-1).css({zIndex:2}); //이전 슬라이드
                $('#section3 .slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000); //현재 슬라이드
                pageBtnFn();
            }

            //1-2 Prev Slide
            function mainPrevSlideFn(){
                //console.log(cnt);
                $('#section3 .slide').css({zIndex:1,opacity:1}); //모든 슬라이드 (초기화)
                $('#section3 .slide').eq(cnt).css({zIndex:2}); //이전 슬라이드
                $('#section3 .slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000); //현재 슬라이드
                pageBtnFn();
            }
            
            //2-1 Next Count
            function nextCountFn(){
                cnt++;
                if(cnt>n){
                    cnt=0;
                }
                mainNextSlideFn();
            }

            //2-2 Prev Count
            function prevCountFn(){
                cnt--;
                if(cnt<0){
                    cnt=n;
                }
                mainPrevSlideFn();
            }

            //3-1 next Btn Click Event
            $('#section3 .next-btn').on({
                click: function(event){
                    event.preventDefault();
                    nextCountFn();
                }
            });

            //3-2 prev Btn Click Event
            $('#section3 .prev-btn').on({
                click: function(event){
                    event.preventDefault();
                    prevCountFn();
                }
            });

            //4-1 page Btn(인디게이터) Event 함수
            //story bord : 
            //slide [0]일 때 page Btn 1 : slide [1] -> s3_slide1.jpg
            //slide [0]일 때 page Btn 2 : slide [2] -> s3_slide2.jpg

            //slide [1]일 때 page Btn 1 : slide [0] -> s3_slide0.jpg
            //slide [1]일 때 page Btn 2 : slide [2] -> s3_slide2.jpg

            //slide [2]일 때 page Btn 1 : slide [0] -> s3_slide0.jpg
            //slide [2]일 때 page Btn 2 : slide [1] -> s3_slide1.jpg
            /* function pageBtnFn(){
                switch(cnt){
                    case 0: //case 0 -> slide 0인 경우
                        $('#section3 .page-btn1').css({backgroundImage:'url(./img/s3_slide1.jpg)'});
                        $('#section3 .page-btn2').css({backgroundImage:'url(./img/s3_slide2.jpg)'});
                        break;
                    case 1: //case 1 -> slide 1인 경우
                        $('#section3 .page-btn1').css({backgroundImage:'url(./img/s3_slide0.jpg)'});
                        $('#section3 .page-btn2').css({backgroundImage:'url(./img/s3_slide2.jpg)'});
                        break;
                    case 2: //case 2 -> slide 2인 경우
                        $('#section3 .page-btn1').css({backgroundImage:'url(./img/s3_slide0.jpg)'});
                        $('#section3 .page-btn2').css({backgroundImage:'url(./img/s3_slide1.jpg)'});
                }
            } */

            //4-2 page Btn(인디게이터) Event 함수 배열처리
            function pageBtnFn(){
                switch(cnt){
                    case 0: //case 0 -> slide 0인 경우
                        a=[1,2]; //변수명 -> array -> arr -> a
                        break;
                    case 1: //case 1 -> slide 1인 경우
                        a=[0,2];
                        break;
                    case 2: //case 2 -> slide 2인 경우
                        a=[0,1];
                }
                for(i=0;i<a.length;i++){
                    $('#section3 .page-btn').eq(i).css({backgroundImage:'url(./img/s3_slide'+a[i]+'.jpg)'});
                }
            }

            //5-1 page Btn Click Event
            $('#section3 .page-btn').each(function(index){
                $(this).on({
                    click: function(event){
                        event.preventDefault();

                        //클릭 전 변수 값
                        //console.log('현재 슬라이드 = '+cnt); //현재 실행중인 번호를 임시에 보관 후 비교
                        //console.log('클릭한 슬라이드 = '+a); //클릭한 인수(배열값)에 해당된 배열값

                        var imsi = cnt;
                            cnt = a[index]; //a[0] a[1]

                            if(imsi<a[index]){ //클릭한 슬라이드가 현재 슬라이드보다 더 크면
                                mainNextSlideFn(); //다음 슬라이드 함수 실행 범위(scope)에 변수 cnt가 할당됨
                            }
                            else if(imsi>a[index]){ //클릭한 슬라이드가 현재 슬라이드보다 더 작으면
                                mainPrevSlideFn(); //이전 슬라이드
                            }

                        //클릭 후 결과 변수 값
                        //console.log('현재 슬라이드 = '+cnt); //현재 실행중인 슬라이드
                        //console.log('클릭한 슬라이드 = '+a); //클릭한 슬라이드 페이지 버튼의 배열

                    }
                });
            });
        },
        section4Fn: function(){
            var totN = $('#section4 .slide').length;
            var slideN = 3; //보여지는 슬라이드 개수 -> PC(1024초과) 3개 / 태블릿(1024이하) 2개 / 모바일(680이하) 1개 
            var slideW = $('#section4 .slide-container').innerWidth()/slideN;
            var cnt = 0;
            var setId = null;
            var setId2 = null;
            
                //slide container의 width값에 따른 slide 3개의 width값 구하기
                function resizeFn(){
                    if($('#section4 .slide-container').innerWidth()>1024){
                        slideN = 3;
                    }
                    else if($('#section4 .slide-container').innerWidth()>680){
                        slideN = 2;
                    }
                    else{
                        slideN = 1;
                    }

                    slideW = $('#section4 .slide-container').innerWidth()/slideN;

                    $('#section4 .slide-wrap').css({width:(slideW*totN),marginLeft:-(slideW*3)});
                    $('#section4 .slide').css({width:slideW,height:slideW});
                    $('#section4 .slide-gap').css({height:(slideW-40)});
                    $('#section4 .slide-wrap').stop().animate({left:-(slideW*cnt)},0); //정적으로 반응형 할 경우
                    // $('#section4 .slide-wrap').stop().animate({left:-(slideW*cnt)},600); //동적으로 반응형 할 경우
                }
                setTimeout(resizeFn,10); //로딩 / 새로고침시 실행 once(1번만 실행)

                $(window).resize(function(){ //window의 사이즈가 변경될 때 실행
                    resizeFn();
                });

                //////////////////////////////////////////////////////////////////////////////////

                //1. main slide Fn
                function mainSlideFn(){
                    $('#section4 .slide-wrap').stop().animate({left:-(slideW*cnt)},600,'easeInOutExpo',function(){
                        if(cnt>3){
                            cnt=0;
                        }
                        if(cnt<0){
                            cnt=3;
                        }
                        $('#section4 .slide-wrap').stop().animate({left:-(slideW*cnt)},0);
                    });
                    pageBtnFn();
                }

                //2-1. next count slide Fn
                function nextCountSlideFn(){
                    cnt++;
                    mainSlideFn();
                }

                //2-2. prev count slide Fn
                function prevCountSlideFn(){
                    cnt--;
                    mainSlideFn();
                }

                //3. touch swipe Event
                $('#section4 .slide-container').swipe({
                    
                    swipeLeft: function(){
                        timerControlFn();
                        if(!$('#section4 .slide-wrap').is(':animated')){
                            nextCountSlideFn();
                        }
                    },
                    swipeRight: function(){
                        timerControlFn();
                        if(!$('#section4 .slide-wrap').is(':animated')){
                            prevCountSlideFn();
                        }
                    }
                });

                //4. page btn Fn
                function pageBtnFn(){
                    var z = cnt;
                    if(z>3){
                        z=0;
                    }
                    if(z<0){
                        z=3;
                    }
                    $('#section4 .page-btn').removeClass('addPage');
                    $('#section4 .page-btn').eq(z).addClass('addPage');
                }

                //5. page btn click Event
                    //메인 함수와 직접 연동
                $('#section4 .page-btn').each(function(index){
                    $(this)
                        .on('click', function(event){
                            event.preventDefault();
                            timerControlFn();
                            cnt = index; //직접 선택한 슬라이드 번호를 이용해 메인 슬라이드 함수 호출
                            mainSlideFn();
                        });
                });

                //6. auto timer Fn
                function autoPlayFn(){
                    setId = setInterval(nextCountSlideFn,6000);
                }

                autoPlayFn();

                //7. timer control Fn
                function timerControlFn(){
                    var tCnt = 0;
                    clearInterval(setId);
                    clearInterval(setId2);
                    setId2 = setInterval(function(){
                        tCnt++;
                        if(tCnt>=6){
                            clearInterval(setId2);
                            nextCountSlideFn();
                            autoPlayFn();
                        }
                    },1000);
                }

        },
        section5Fn: function(){

        },
    };
    jason.init();
})(jQuery,window,document);