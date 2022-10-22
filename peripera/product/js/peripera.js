;(function(window,document,$,undefined){
    var peripera = {
        init:function(){
            var that = this;
            that.headerFn();
            that.goTopFn();
        },
        headerFn:function(){
            $('.nav-wrap').on({
                mouseenter: function(){
                    $(this).stop().animate({height:170},400);
                    $("#quick").stop().animate({top:325},400);
                },
                focusin: function(){
                    $(this).stop().animate({height:170},400);
                    $("#quick").stop().animate({top:325},400);
                },
                mouseleave: function(){
                    $(this).stop().animate({height:45},400);
                    $("#quick").stop().animate({top:200},400);
                },
                focusout: function(){
                    $(this).stop().animate({height:45},400);
                    $("#quick").stop().animate({top:200},400);
                }
            });
        },
        goTopFn:function(){
            $('.goTop-btn').on({
                click: function(){
                    $('html,body').stop().animate({scrollTop:0},1000,"easeOutExpo");
                }
            });
        }
    };
    peripera.init();
})(window,document,jQuery);