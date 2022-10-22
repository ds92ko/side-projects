;(function(window,document,$){
    //메인 슬라이드 롤링 애니메이션
    
    // 1. 카운트 변수 설정(전역변수)
    var cnt = 0;
    var setId = 0;
    var setId2 = 0;

    // 2-1. 다음(next) 슬라이드 카운트 이름있는 함수(선언적 함수)
        function nextSlideCountFn(){
            // var cnt=0; > 지역변수 권장X
            cnt++;
            // 증가된 카운트 변수를 메인 슬라이드 함수에 전달 > 메인 함수 호출();
            mainSlideFn();
        }

    // 2-2. 이전(prev) 슬라이드 카운트 이름있는 함수(선언적 함수)
        function prevSlideCountFn(){
            // var cnt=0; > 지역변수 권장X
            cnt--;
            // 감소된 카운트 변수를 메인 슬라이드 함수에 전달 > 메인 함수 호출();
            mainSlideFn();
        }

    // 3. 메인 슬라이드 함수 만들기 > 애니메이션 카운트 변수 활용
        function mainSlideFn(){
            $('.slide-wrap').stop().animate({ left:-829*cnt },600, function(){
                /*
                if(cnt>3){ //총 슬라이드 4개 0 1 2 3 4(3보다 크면 0)
                    cnt=0; //첫번째 슬라이드
                }
                if(cnt<0){ //첫번째 미만이면 -1이면
                    cnt=3; //마지막 슬라이드 (4개)
                }
                */
                if(cnt>3){ cnt=0; }
                if(cnt<0){ cnt=3; }
                $('.slide-wrap').stop().animate({ left:-829*cnt },0); //초기화 리셋
                $('.slide').removeClass('addSlide'); //오펙시티값 초기화
                $('.slide').eq(cnt+1).addClass('addSlide');
            });
            pageBtnFn(cnt); //페이지버튼
        }
    
    // 이벤트 리스너 & 이벤트 핸들러
    
    // 4-1. 다음 화살버튼 클릭 이벤트 > 다음 슬라이드 카운트 함수 호출
        $('.next-btn').on({
            click:function(){ // 이벤트 리스너
                // 애니메이션이 구동중에는 클릭은 못하게 막는 알고리즘
                //console.log( $('.slide-wrap').is(':animated') );
                /*
                if( $('.slide-wrap').is(':animated')===false ){ //animated이다가 false일때만 = 애니메이션이 안될때만 실행
                    nextSlideCountFn(); //이벤트 핸들러
                }
                if( $('.slide-wrap').is(':animated')!==true ){ //animated가 true이다 + !아니다(부정) = 애니메이션이 안될때만 실행
                    nextSlideCountFn(); //이벤트 핸들러
                }
                */
                if( !$('.slide-wrap').is(':animated') ){ //animated이다(긍정) + !아니다(부정) = 애니메이션이 안될때만 실행
                    nextSlideCountFn(); //이벤트 핸들러
                }
                timerControlFn();
                //중지 상태가 얼마동안 유지되는지 카운트 콜백함수 만들기
                //setTimeout(); 정해진 시간 후에 한번 실행하고 끝난다. (로딩후 강제로 실행할 함수에 함수,시간setTimeout(abc,1000);으로 적용)
                //setInterval(); 계속 정해진 시간 간격으로 무한 반복 실행 (똑같이 setInterval(abc,1000);으로 적으면 abc함수가 1초간격으로 무한 반복 실행)
            /*
                clearInterval(setId); //버튼 클릭시 타이머 중지
                clearInterval(setId2); //중지상태 카운트 타이머 중지
                $('.pause-play-btn').addClass('addPlay'); // ||가 ▶로 바뀜
                t=1; //중지상태임
                //중지상태 카운트 시작
                var cnt2 = 0;
                setId2 = setInterval(function(){
                    cnt2++; // 1 2 3 4... 무한 반복됨 10초 후에 반응(사용자가 다음, 이전 슬라이드 클릭)이 없으면 메인함수(nextSlideCountFn) 호출 타이머(initTimerFn) 재실행
                    console.log(cnt2);
                    //조건문(제어문)
                    if(cnt2>10){
                        nextSlideCountFn(); //다음 슬라이드 즉시 실행
                        initTimerFn(); //3초후 3초 간격으로 다음 슬라이드 반복 실행
                        clearInterval(setId2); //자기자신 타이머 중지
                        $('.pause-play-btn').removeClass('addPlay'); //  ▶가 ||로 바뀜
                        t=0; //실행상태
                    }
                }, 1000);
            */
            }
        });
        
    // 4-2. 이전 화살버튼 클릭 이벤트 > 이전 슬라이드 카운트 함수 호출
        $('.prev-btn').on({
            click:function(){
                //애니메이션이 안될때만 클릭하여 함수 호출(버그막기)
                if( !$('.slide-wrap').is(':animated') ){ //.slide-wrap이 애니메이트가 되고있다가 + !아니면
                    prevSlideCountFn(); //이벤트 핸들러
                }
                timerControlFn();
            /*
                clearInterval(setId) //버튼 클릭시 타이머 중지
                clearInterval(setId2); //중지상태 카운트 타이머 중지
                $('.pause-play-btn').addClass('addPlay'); // ||가 ▶로 바뀜
                t=1; //중지상태임
                //중지상태 카운트 시작
                var cnt2 = 0;
                setId2 = setInterval(function(){
                    cnt2++; // 1 2 3 4... 무한 반복됨 10초 후에 반응(사용자가 다음, 이전 슬라이드 클릭)이 없으면 메인함수(nextSlideCountFn) 호출 타이머(initTimerFn) 재실행
                    console.log(cnt2);
                    //조건문(제어문)
                    if(cnt2>10){
                        nextSlideCountFn(); //다음 슬라이드 즉시 실행
                        initTimerFn(); //3초후 3초 간격으로 다음 슬라이드 반복 실행
                        clearInterval(setId2); //자기자신 타이머 중지
                        $('.pause-play-btn').removeClass('addPlay'); //  ▶가 ||로 바뀜
                        t=0; //실행상태
                    }
                }, 1000);
            */
            }
        });

    // 4-3. 터치 스와이프
    $('.slide-wrap').swipe({
        swipeLeft:function(){ // 다음 슬라이드 카운트
            if( !$('.slide-wrap').is(':animated') ){
                nextSlideCountFn();
            }
            timerControlFn();
        /*
            clearInterval(setId);
            clearInterval(setId2);
            $('.pause-play-btn').addClass('addPlay');
            t=1;
            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++;
                console.log(cnt2);
                if(cnt2>10){
                    nextSlideCountFn();
                    initTimerFn();
                    clearInterval(setId2);
                    $('.pause-play-btn').removeClass('addPlay');
                    t=0;
                }
            }, 1000);
        */
        },
        swipeRight:function(){ // 이전 슬라이드 카운트
            if( !$('.slide-wrap').is(':animated') ){
                prevSlideCountFn();
            }
            timerControlFn();
        /*
            clearInterval(setId);
            clearInterval(setId2);
            $('.pause-play-btn').addClass('addPlay');
            t=1;
            var cnt2 = 0;
            setId2 = setInterval(function(){
                cnt2++;
                console.log(cnt2);
                if(cnt2>10){
                    nextSlideCountFn();
                    initTimerFn();
                    clearInterval(setId2);
                    $('.pause-play-btn').removeClass('addPlay');
                    t=0;
                }
            }, 1000);
        */
        }
    });
    
    // 4-4. 타이머 카운트 컨트롤 함수
    // 이벤트 핸들러에 추가 함수
    function timerControlFn(){
        clearInterval(setId); //버튼 클릭시 타이머 중지
        clearInterval(setId2); //중지상태 카운트 타이머 중지
        $('.pause-play-btn').addClass('addPlay'); // ||가 ▶로 바뀜
        //중지상태 카운트 시작
        var cnt2 = 0;
        setId2 = setInterval(function(){
            cnt2++; // 1 2 3 4... 무한 반복됨 10초 후에 반응(사용자가 다음, 이전 슬라이드 클릭)이 없으면 메인함수(nextSlideCountFn) 호출 타이머(initTimerFn) 재실행
            console.log(cnt2);
            //조건문(제어문)
            if(cnt2>10){
                nextSlideCountFn(); //다음 슬라이드 즉시 실행
                initTimerFn(); //3초후 3초 간격으로 다음 슬라이드 반복 실행
                clearInterval(setId2); //자기자신 타이머 중지
                $('.pause-play-btn').removeClass('addPlay'); //  ▶가 ||로 바뀜
                t=0; //실행상태
            }
        }, 1000);
    } 

    // 5-1. 인디게이터(4개) 버튼 클릭 이벤트 - 요소 객체 배열처리 each() 메서드 (나열형)
    //    알고리즘 구현
    //    첫번째를 클릭하면 0 인덱스번호  : 슬라이드번호    -819*index  
    //    두번째를 클릭하면 1 인덱스번호  : 슬라이드번호    -819*index         
    //    세번째를 클릭하면 2 인덱스번호  : 슬라이드번호    -819*index        
    //    네번째를 클릭하면 3 인덱스번호  : 슬라이드번호    -819*index
    /*
        $('.page-btn').eq(0).on({
            click:function(){
                //메인함수 호출
                cnt=0;
                mainSlideFn();
            }
        });
        $('.page-btn').eq(1).on({
            click:function(){
                //메인함수 호출
                cnt=1;
                mainSlideFn();
            }
        });
        $('.page-btn').eq(2).on({
            click:function(){
                //메인함수 호출
                cnt=2;
                mainSlideFn();
            }
        });
        $('.page-btn').eq(3).on({
            click:function(){
                //메인함수 호출
                cnt=3;
                mainSlideFn();
            }
        });
    */

    // 5-2. each() 메서드로 .page-btn 버튼의 요소를 배열처리하여 인덱스 번호를 반환
    $('.page-btn').each(function(index){ //매개변수
        $(this).on({
            click: function(){
                cnt=index; // 카운트 번호를 인덱스 번호로 저장
                mainSlideFn(); //메인슬라이드 호출
                clearInterval(setId) //버튼 클릭시 타이머 중지
                $('.pause-play-btn').addClass('addPlay');
                timerControlFn();
            }
        });
    });

    // 6. 인디게이터(페이지버튼)에 배경 이미지 녹색으로 표시 - addClass 사용
    function pageBtnFn(z){
        //console.log(z); //1 2 3 4 1 2 3 4...
        z>3 ? z=0 : z;
        //console.log(z); //1 2 3 0 1 2 3 0... 
        $('.page-btn').removeClass('addPagebtn'); // 초기화
        $('.page-btn').eq(z).addClass('addPagebtn'); // eq(현재 슬라이드 번호)
    }

    // 7. 타이머 3초 간격 메인 함수 다음슬라이드 카운트 함수
    function initTimerFn(){
        setId = setInterval( nextSlideCountFn, 3000 );
        //console.log(setId); 정수로 출력됨
    }
    //setTimeout( initTimerFn, 100 ); //로딩 0.1초 후에 타이머 3초간격 함수 강제 호출 실행

    // 8-1. 타이머 일시정지 버튼 클릭 이벤트 (오리지널 토글변수) 반응형과 스크롤 이벤트 사용시에는 오리지널 토글변수 사용多
    /*
    var t=0; //토글 변수 추가
    $('.pause-play-btn').on({
        click: function(){
            if(t==0){ //토글 알고리즘
                t=1;
                $(this).addClass('addPlay'); //플레이 이미지로 변경
                clearInterval(setId); //타이머 중지
            }
            else{ //< 생략 else if(t==1){
                t=0;
                $(this).removeClass('addPlay'); //addClass(플레이 이미지) 삭제 > 일시정지 이미지로 변경
                initTimerFn(); //타이머 재실행
            }
        }
    });
    */

    // 8-2. 타이머 일시정지 버튼 클릭 이벤트 (해스클래스)
    //hasClass('addPlay') 있으면 true(1); 없으면 false(0);
    //클래스가 있으면 중지상태 ▶
    //클래스가 없으면 플레이상태 ||
    $('.pause-play-btn').on({
        click: function(){
            var x = null; //0도 1도 아닌 아무것도 없는 상태
                x = $(this).hasClass('addPlay'); //true or false 반환 | this(자기자신)과 자식은 찾을 수 있지만 부모는 찾을 수 없음
                //console.log( x ); //기본이 play상태 > class없음
                if( x==false ){ //현재 재생 중인 상태 | 기본이 play상태인 class 없는 상태니까 false가 기본값
                    clearInterval(setId); //타이머 중지
                    clearInterval(setId2); //중지상태 카운트 타이머 중지
                    $(this).addClass('addPlay'); //플레이 이미지로 변경 ▶
                }
                else if( x==true ){ //현재 중지 상태 | 생략하면 > else{ false(0) 아니면 true(1)이니까
                    //nextSlideCountFn(); //++ 스탑후 플레이 했을때 다음 슬라이드 타이머 3초후 말고 즉시실행 | 함수는 플레이 하려면 ()필요
                    clearInterval(setId); //타이머 중지
                    clearInterval(setId2); //중지상태 카운트 타이머 중지
                    initTimerFn(); //타이머 실행 (3초 후에 계속 반복 실행)
                    $(this).removeClass('addPlay'); //일시정지 이미지로 변경 ||
                }
        }
    });

    // 9. 섹션2 프로모션 버튼 클릭 이벤트 리스너
    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();
            $(this).toggleClass("addUp");
            $('#section3').stop().slideToggle(500);
            // 프로모션 버튼 클릭해서 addUp클래스가 있으면 (슬라이드 업, 닫힌상태) 슬라이드 정지, addUp클래스가 없으면(슬라이드 다운, 열린상태) 슬라이드 플레이
            console.log($(this).hasClass('addUp'));
            if( $(this).hasClass('addUp') ){ // 슬라이드 실행
                initTimerFn(); //플레이
                $('.pause-play-btn').removeClass('addPlay'); //일시정지 이미지로 변경 ||
            }
            else{ //슬라이드 일시정지 초기화 처음상태 (cnt=0)
                clearInterval(setId); //슬라이드 타이머 중지
                clearInterval(setId2); //중지상태 카운트 타이머 중지
                cnt=0; //카운트 0 초기화
                $('.slide-wrap').stop().animate({ left:-829*cnt },0); //초기화 리셋
                $('.slide').removeClass('addSlide'); //오펙시티값(불투명도) 초기화
                $('.slide').eq(cnt+1).addClass('addSlide'); // 0 + 1 오펙시티값(불투명도) 초기화
                pageBtnFn(cnt); //페이지버튼 초기화
                $('.pause-play-btn').addClass('addPlay'); //플레이 정지버튼 중지 ▶
            }
            console.log( $(this).hasClass('addUp'));
            console.log(cnt);
        }
    });
})(window,document,jQuery);