(function(window,document,$){
    //공지사항 상하 롤링 슬라이드
    /*
    슬라이드 함수(){

    }
    타이머(슬라이드 함수, 2500);
    setInterval(함수, 2500);
    */
    var cnt=-1; //초기값
    function noticeSlideFn(){
        cnt++; //0 1 2 3 4 0 1 2 3 4
        if(cnt>3){
            cnt=-1; //마지막 슬라이드를 0으로 셋팅 마지막 이전 마지막 4
        }
        $(".notice-list li").stop().animate({top:24},0).css({zIndex:2}); //모두 초기화 24px 아래에서 대기
        $(".notice-list li").eq(cnt<0?4:cnt).stop().animate({top:0},0).css({zIndex:1});
        $(".notice-list li").eq(cnt+1).stop().animate({top:0},1000).css({zIndex:3});
    }
    setInterval(noticeSlideFn, 2500);
/*
    //섹션2 프로모션 버튼 클릭 이벤트 리스너
    $(".promotion-btn").on({
        click: function(e){
            e.preventDefault();
            $(this).toggleClass("addUp");
            $('#section3').stop().slideToggle(500);
        }
    });
*/
}(window,document,jQuery));