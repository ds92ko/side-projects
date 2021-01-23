(function($,window,document,undefined){

    //섹션1 애니메이션
    function fnSection1(){
        $('.ani-1').stop().animate({opacity:1},500, "easeInOutExpo", function(){
            $('.ani-2').stop().animate({opacity:1},500, "easeInOutExpo", function(){
                $('.ani-3').stop().animate({opacity:1},500, "easeInOutExpo", function(){
                    $('.ani-4').stop().animate({opacity:1},500, "easeInOutExpo", function(){
                        $('.ani-5').stop().animate({opacity:1},500, "easeInOutExpo", function(){
                            $('.ani-6').stop().animate({opacity:1},500, "easeInOutExpo");
                        });
                    });
                });
            });
        });
    }

    setTimeout(fnSection1, 100);

})(jQuery,window,document);