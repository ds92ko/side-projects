(function($,window,document,undefined){

    // 패럴럭스(parallax) : 페이지 스크롤 이벤트
    // ▲ 강화 할 수 있는 이벤트 : 마우스 휠 이벤트
    // Browser Object Modelling - window(창)스크롤이벤트 : 스크롤 top값이 상단에서 400px 위치에 도달하면
    // 애니메이션함수 : 섹션5 애니메이션 함수호출 실행

    // 문서 전체 길이 값
    // $(window).scroll(function(){
    //     console.log('현재 스크롤 top값', $(this).scrollTop() );     // 스크롤 발생시 현재 위치 값 출력
    //     console.log('문서전체갯수', $(document).length );
    //     console.log('슬라이드갯수', $('.slide').length );
    //     console.log('실제 슬라이드갯수', $('.slide').length-2 );
    //     console.log('문서전체높이', $(document).height() );
    //     console.log('문서전체너비', $(document).width() );
    //     console.log( $(document).height()-$(this).scrollTop() );
    //     console.log('창 높이', $(window).height() );
    //     console.log('창 너비', $(window).width() );
    // });
    
    var t=0;
    var f=0;

    $(window).scroll(function(){
        if( $(this).scrollTop() < 400 ){    // 스크롤 400px 미만이면
            if(f==0){
                f=1;
                t=0;
                s5AnimationFormatFn();      // 애니메이션 포지션 초기화 
            }
        }

        if( $(this).scrollTop() >= 400 ){   // 스크롤 400px 이상이면
            if(t==0){                       // 토글변수 t의 값이 0이면
                s5AnimationFn();            // 함수 호출하고,
                t=1;                        // 변수 값 1로 변경
                f=0;
            }            
        }

        function s5AnimationFormatFn(){
            $('#section5 .left') .stop().animate({left: -1000,opacity:0}, 1000);
            $('#section5 .right').stop().animate({right:-1000,opacity:0}, 1000);
        }

        function s5AnimationFn(){
            $('#section5 .left') .stop().animate({left: 0,opacity:1}, 2000);
            $('#section5 .right').stop().animate({right:0,opacity:1}, 2000);
        }

    });

})(jQuery,window,document);
