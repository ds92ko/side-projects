;(function(window,document,$,undefined){
    //패럴럭스 parallax(페이지 스크롤 이벤트) : 스크롤했을때 일정 위치에 도달하면 애니메이션 실행 통제 제어
    //강화시키고 보안하고 보충할 수 있는 이벤트 > 마우스 휠 이벤트 내려가면 - 올라가면 +
    //BOM (Browser Object Modelling) 윈도우(창)에서 스크롤 top값이 상단에서 400px 위치에 도달하면 (스크롤 이벤트) section5의 애니메이션 함수 호출 실행 (애니메이션 함수)
    //scroll, location, resize(반응형)
    //스크롤은 1px 단위로 발생하기 때문에 버블링 발생 多 > 애니메이션 1회만 발생하도록 설정하는 것이 중요 > 토글변수
    // $(window).scroll();
    // $(window).scroll(function(){});
    // $(window).scroll(function(){
    // });
    var t = 0;
    $(window).scroll(function(){
        // //스크롤 발생시 현재 위치 top값 출력
        // console.log('현재 스크롤 탑값', $(this).scrollTop() );
        // //문서 갯수, 높이, 넓이 값 + 총 슬라이드, 실제 슬라이드 갯수 알아보기
        // console.log('문서 갯수', $(document).length );
        // console.log('총 슬라이드 갯수', $('.slide').length );
        // console.log('실제 슬라이드 갯수', $('.slide').length-2 );
        // console.log('문서전체 높이', $(document).height() );
        // console.log('문서전체 넓이', $(document).width() );
        // //문서전체 높이-스크롤 top값
        // console.log( $(document).height()-$(this).scrollTop() );
        // //윈도우 창의 넓이와 높이값 알아보기
        // console.log('창높이', $(window).height() );
        // console.log('창넓이', $(window).width() );

        // 스크롤 탑값이 맨위 상단위치 400미만이면 다시 변수 초기화
        if( $(this).scrollTop() < 400 ){
            if(t==1){
                t=0;
                s5AnimationFormatFn(); //애니메이션 포지션 초기화
            }
        }
        if( $(this).scrollTop() >= 400 ){
            if(t==0){ // 토글 변수 t의 값이 0이면 함수 호출
                t=1; //호출하고 변수 값 1로 변경
                s5AnimationFn();
            }
        }
        function s5AnimationFormatFn(){
            $('#section5 .left') .stop().animate({left: -1000,opacity:0},1000);
            $('#section5 .right').stop().animate({right:-1000,opacity:0},1000);
        }
        function s5AnimationFn(){
            $('#section5 .left') .stop().animate({left: 0,opacity:1},2000);
            $('#section5 .right').stop().animate({right:0,opacity:1},2000);
        }
    });
})(window,document,jQuery);