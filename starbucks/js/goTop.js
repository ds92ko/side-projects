;(function(window,document,$,undefined){
    var t = 0;
        $(window).scroll(function(){
            if( $(this).scrollTop() >= 100 ){ //윈도우의 스크롤 탑값이 100이상이면
                $('.goTop').stop().fadeIn(1000); //1초동안 고탑 페이드인
            }
            else{ //그게 아니면
                $('.goTop').stop().fadeOut(1000); //1초동안 고탑 페이드아웃
            }
        });
        //클릭 이벤트
        $('.goTop-btn').on({
            click: function(){
                $('html,body').stop().animate({scrollTop:0},1000,"easeOutExpo");
            }
        });
})(window,document,jQuery);