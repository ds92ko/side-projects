(function($){
    
    //마우스 이벤트
    //메인버튼 이벤트
    //마우스 클릭 이벤트 동작
    //마우스 오버시 동작
    //키보드 접근시 동작(접근성)
    //$("선택자").on({});
    //$("선택자").one({});
    //$("선택자").off({});
    
    $(".main-btn").on({
        mouseenter:function(){ //mouseenter=mouseover
            //버튼 배경색상, 글자 효과
            $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) current만 추가 클래스(addClass())
            //서브메뉴의 슬라이드 다운 업 효과(애니메이션)
            //모든 애니메이션 효과에 stop()을 걸어주기(버블링 생겨서)
            $(".sub").stop().slideUp(0);
            $(this).next().stop().slideDown(500);
        },
        focusin:function(){
            //버튼 배경색상, 글자 효과
            $(".main-btn").removeClass("addMainbtn"); //모든 메인버튼 추가된 클래스 삭제
            $(this).addClass("addMainbtn"); //현재(this) current만 추가 클래스(addClass())
            //서브메뉴의 슬라이드 다운 업 효과(애니메이션)
            //모든 애니메이션 효과에 stop()을 걸어주기(버블링 생겨서)
            $(".sub").stop().slideUp(0);
            $(this).next().stop().slideDown(500);
        }
    });

    //마우스가 #NAV에 올라가면 MOUSEENTER(MOUSEOVER)
    //마우스가 #NAV를 떠나면 MOUSELEAVE(MOUSEOUT)
    $("#nav").on({
        mouseleave:function(){
            $(".sub").stop().slideUp(500);
            $(".main-btn").removeClass("addMainbtn");
        }
    });

    //메인 버튼 클릭 링크 이동
/*
    방법1
    $(".main-btn").eq(0).on({
        click:function(){
            //BOM
            //window.location.href="https://www.starbucks.co.kr/coffee/index.do" window.생략가능
            location.href="https://www.starbucks.co.kr/coffee/index.do"
        }
    });
    $(".main-btn").eq(1).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/menu/index.do"
        }
    });
    $(".main-btn").eq(2).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/store/index.do"
        }
    });
    $(".main-btn").eq(3).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/responsibility/index.do"
        }
    });
    $(".main-btn").eq(4).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/msr/index.do"
        }
    });
    $(".main-btn").eq(5).on({
        click:function(){
            location.href="https://www.starbucks.co.kr/whats_new/index.do"
        }
    });
*/
    //방법2 each() 메서드 활용 버튼 배열 처리
    //$(".main-btn").each();
    $(".main-btn").each(function(index){
        $(this).on({
            click:function(){
                if(index==0){
                    location.href="https://www.starbucks.co.kr/coffee/index.do"
                }
                else if(index==1){
                    location.href="https://www.starbucks.co.kr/menu/index.do"
                }
                else if(index==2){
                    location.href="https://www.starbucks.co.kr/store/index.do"
                }
                else if(index==3){
                    location.href="https://www.starbucks.co.kr/responsibility/index.do"
                }
                else if(index==4){
                    location.href="https://www.starbucks.co.kr/msr/index.do"
                }
                else if(index==5){
                    //_self
                    //location.href="https://www.starbucks.co.kr/whats_new/index.do"
                    //_blank
                    window.open("https://www.starbucks.co.kr/whats_new/index.do");
                }
            }
        });
    });
/*
    //each() 메서드 실무에 적용하기
    //.main-btn 버튼 6개 배열 자동화(0~5)
    $("main-btn").each(); //순서1 each() 달기
    $("main-btn").each(function(){}); //순서2 each()+콜백함수 달기
    $("main-btn").each(function(){

    }); //순서3 콜백함수 공간벌리기
    $("main-btn").each(function(index){

    }); //순서4 콜백함수 index이벤트 넣기
    $("main-btn").each(function(index){
        $(this).on({
            click:function(){
                console.log(index);
            }
        })
    }); //순서5 클릭 이벤트 리스너 + 핸들러 index번호 콜백
    $("main-btn").each(function(index){
        $(this).on({
            click:function(){
                if(index==0){
                    location.href="URL1";
                }
                else if(index==1){
                    location.href="URL2";
                }
                else if(index==2){
                    location.href="URL3";
                }
                ...
            }
        })
    }); //순서6
*/
})(jQuery);