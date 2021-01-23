;(function(window,document,$,undefined){
    var t = 0;
        setTimeout(init,100);
        function init(){
            $('#section8 .img').stop().animate({marginTop:100,opacity:0},1000,function(){
                $(this).stop().animate({marginTop:0,opacity:1},1000);
            });
            $('#section8 .title-01').stop().animate({left:530+1000,opacity:0},1000, function(){
                $('#section8 .title-01').stop().animate({left:530+0,opacity:1},2500);
            });
            $('#section8 .title-02').stop().animate({left:530+1000,opacity:0},1000, function(){
                $('#section8 .title-02').stop().animate({left:530+0,opacity:1},3000);
            });
        }
        function formatFn(){
            $('#section8 .img').stop().animate({marginTop:100,opacity:0},1000);
            $('#section8 .title-01').stop().animate({left:530+1000,opacity:0},1000);
            $('#section8 .title-02').stop().animate({left:530+1000,opacity:0},1000);
        }
        function animationFn(){
            $('#section8 .img').stop().animate({marginTop:0,opacity:1},1000);
            $('#section8 .title-01').stop().animate({left:530+0,opacity:1},2500);
            $('#section8 .title-02').stop().animate({left:530+0,opacity:1},3000);
        }
        $(window).scroll(function(){
            if( $(this).scrollTop() >= $('#section7').offset().top ){
                if(t==0){
                    t=1;
                    animationFn();
                }
            }
            if( $(this).scrollTop() < $('#section7').offset().top ){
                if(t==1){
                    t=0;
                    formatFn();
                }
            }
        });
})(window,document,jQuery);