;(function(window,document,$,undefined){ //즉시실행함수 표현식
    var brando = { //
        init:function(){ //브란도 레스토랑 전체중 최초에 실행할 객체함수(리터럴 함수, 이름없는 함수) 
            var that = this;
            that.headerFn();
            that.section01Fn();
            that.section234Fn();
            that.section05Fn();
            that.section06Fn();
            that.section07Fn();
            that.section08Fn();
            that.section09Fn();
            that.section09GalleryFn();
            that.section10Fn();
            that.section11Fn();
            that.section12Fn();
            that.section13Fn();
            that.section14Fn();
        },
        headerFn:function(){ //헤더의 js
            var winW = $(window).width(); //창넓이 변수
            var url = null; //이동 변수 (null이면 이동 안되고, null이 아니면 이동되도록)
            
                //Smooth Scrolling Event : <a href = 속성값 #해시태그>를 attr로 가져와서 부드럽게 해당 섹션으로 이동
                $('.smooth-btn').on({
                    click:  function(){ //smooth-btn을 클릭하면
                        url = $(this).attr('href'); //해당 버튼의 href를 가져옴
                        $('html,body').stop().animate({ scrollTop: $(url).offset().top }, 600 ); //url 오프셋 탑값으로 0.6초동안 이동
                        $('.mobile-menu').hide(); //모바일메뉴가 사라짐
                        $('.mobile-btn').removeClass('addClose'); //X버튼 햄버거버튼으로 초기화
                    }
                });

                $(window).scroll(function(){
                    if( $(window).scrollTop() >= 30 ){ //스크롤 탑값이 30px 이상이면
                        $('#header').addClass('addMobile'); //애드모바일 추가
                        $('.goTop').addClass('addGotop'); //애드고탑 추가
                    }
                    else{ //그렇지 않으면 = 스크롤 탑값이 30px 미만이면
                        $('#header').removeClass('addMobile'); //애드모바일 초기화
                        $('.goTop').removeClass('addGotop'); //애드고탑 초기화
                    }
                });

                $(window).resize(function(){ //창 크기가 바뀔때마다
                    winW = $(window).width();
                    if( winW>990 ){ //창넓이가 990px을 초과하면
                        $('.mobile-btn').removeClass('addClose'); //애드클로즈 리무브클래스
                        $('.mobile-menu').stop().slideUp(0); //모바일 메뉴 초기화
                    }
                });

                $('.mobile-btn').on({
                    click:  function(event){
                        event.preventDefault(); //a링크 기능 못하게 막기
                        $(this).toggleClass('addClose');
                        $('.mobile-menu').stop().slideToggle(300); //한번 클릭하면 모바일 메뉴 펼치고 한번 클릭하면 모바일 메뉴 닫히기 (0.3초동안)
                    }
                });
        },
        section01Fn:function(){ //섹션01의 js
            var cnt = 0; //메인 슬라이드 초기값 변수
            var n = $('#section01 .slide').length-1; //슬라이드 개수 자동화 변수
            var winH = 969; //창높이 변수
            // var hunH=$('.hungry').height(); //헝그리 이미지 높이
            // var hunT=(winH-hunH)/2; //헝그리 탑값 변수 = (창높이-이미지높이)/2 
                            //(winH-hunH)/2

            //이미지탑값 = (창높이 - 로고이미지(헝그리)높이) / 2;
            //imgTop = ( winH - imgH ) / 2
            var imgH = $('.hungry').height();
            var imgTop = (winH-imgH)/2

                setTimeout(resizeFn,100); //로드시 반드시 실행

                function resizeFn(){ //반응형 함수
                    winH = $(window).height();
                            $('#section01').css({ height:winH });
                            // hunH=$('.hungry').height(); //헝그리 이미지 높이
                            // hunT=(winH-hunH)/2; //헝그리 탑값 변수 = (창높이-이미지높이)/2 
                            // $('.hungry').stop().animate({top:hunT},600);
                            imgH = $('.hungry').height(); //var는 함수안에 넣을때 반드시 빼주기!! 함수안에 넣을때 var적으면 새로운 함수로 인식
                            imgTop = (winH-imgH)/2
                            $('.hungry').css({top:imgTop});
                }

                $(window).resize(function(){
                    resizeFn();
                });

                //Smooth Scrolling Event 섹션1 하단의 다음섹션이동 버튼이벤트
                $('.arrow-down-btn').on({
                    click:function(){
                        $('html, body').stop().animate({ scrollTop: $('#section02').offset().top }, 800); //클릭하면 섹션2의 오프셋 탑값으로 0.8초동안 이동하는 이벤트
                    }
                });

                //메인 다음 슬라이드(페이드 인아웃 슬라이드)
                //핵심 포인트 : 현재 슬라이드 위에 다음 슬라이드가 서서히 나타나면서 현재슬라이드를 다음 슬라이드가 덮어버림
                function mainNextSlideFn(){
                    $('#section01 .slide').css({zIndex:1}); //z-index모두 1로 초기화
                    $('#section01 .slide').eq(cnt==0?n:cnt-1).css({zIndex:2}); //현재 보여질 슬라이드 z-index 2
                    $('#section01 .slide').eq(cnt).css({zIndex:3}).stop().animate({opacity:0},0).animate({opacity:1},1000); //다음에 보여질 슬라이드 z-index 3 안보이는 상태에서 1초동안 보여라
                }

                //메인 이전 슬라이드(페이드 인아웃 슬라이드)
                //핵심 포인트 : 현재 슬라이드를 사라지게해서 뒤에 있는 이전 슬라이드가 보여짐
                function mainPrevSlideFn(){
                    $('#section01 .slide').css({zIndex:1}).stop().animate({opacity:1},0); //z-index모두 1로 초기화
                    $('#section01 .slide').eq(cnt).css({zIndex:2}); //다음에 보여질 슬라이드(이전 슬라이드) z-index 2
                    $('#section01 .slide').eq(cnt==n?0:cnt+1).css({zIndex:3}).stop().animate({opacity:1},0).animate({opacity:0},1000); //현재 슬라이드 z-index 3 보이는 상태에서 1초동안 사라져라
                }
                
                //다음 카운트 함수
                function nextCountFn(){
                    cnt++;
                    if(cnt>n){   //만약 cnt가 n보다 크면
                        cnt=0;   //cnt=0으로 초기화
                    }
                    mainNextSlideFn();
                }

                //이전 카운트 함수
                function prevCountFn(){
                    cnt--;
                    if(cnt<0){   //만약 cnt가 0보다 작으면
                        cnt=n;   //cnt=n으로 초기화
                    }
                    mainPrevSlideFn();
                }

                setInterval(nextCountFn,3000);
                // setInterval(prevCountFn,3000);

                //터치 스와이프
                $('#section01').swipe({
                    swipeLeft: function(){
                        if( !$('#section01 .slide').is(':animated') ){ //슬라이드가 애니메이티드가 아니면
                            nextCountFn(); //다음 카운트 실행
                        }
                    },
                    swipeRight: function(){
                        if( !$('#section01 .slide').is(':animated') ){ //슬라이드가 애니메이티드가 아니면
                            prevCountFn(); //이전 카운트 실행
                        }
                    }
                });
        },
        section234Fn: function(){
        //1. 콘텐츠박스의 top값은 창높이가 바뀌면 같은 비율로 바뀜
        //2. 창높이가 박스높이+60보다 작으면 섹션234의 높이를 박스높이+60으로 설정
        //3. 콘텐츠박스의 높이는 콘텐츠박스의 너비가 바뀌면 같은 비율로 바뀜
        //4. 창넓이가 1170px이하면 콘텐츠박스는 가운데 정렬
        //5. 텍스트박스 폰트사이즈 가변형 적용
            var winH = $(window).height();                      //1-창높이 변수
            var winW = $(window).width();                       //4-창넓이 변수
            var sectionH = winH;                                //2-섹션234의 높이
            var boxW = $('.content-wrap').width();              //3-450px
            var boxH = boxW * 1.22222;                          //3-550px;
            var boxTop = (winH-boxH)/2;                         //1-콘텐츠박스의 top값 = (창높이-박스높이)/2 209.5px=(969px-550px)/2
            var x = (winW-boxW)/2;                              //4-left값 또는 right값 = (창너비-박스너비)/2
            var rateH3 = 0.096551724137931                      //5-h3폰트사이즈비율
            var rateH4 = 0.0482758620689655                     //5-h4폰트사이즈비율
            var rateP = 0.0482758620689655                      //5-P폰트사이즈비율
            var textW = $('.text-wrap').width();                //5-텍스트박스 넓이
            var fontSizeH3 = rateH3 * textW                     //5-h3폰트사이즈
            var fontSizeH4 = rateH4 * textW                     //5-h4폰트사이즈
            var fontSizeP = rateP * textW                       //5-p폰트사이즈

                setTimeout(resizeFn,100);

                function resizeFn(){
                    winH = $(window).height();                   //1-변수
                    winW = $(window).width();                    //4-변수
                    sectionH = winH;                             //2-변수
                    boxW = $('.content-wrap').width();           //3-변수
                    boxH = boxW * 1.22222;                       //3-변수
                    boxTop = (winH-boxH)/2;                      //1-변수
                    x = (winW-boxW)/2;                           //4-변수

                    if( winH < boxH + 60 ){                      //2-만약 창높이가 박스높이+60보다 작으면
                        sectionH = boxH + 60;                    //2-섹션234의 높이는 박스높이+60로 적용
                        boxTop = 30;                             //2-박스 탑값은 30으로 적용
                    }
                    else{                                        //2-그렇지 않으면(창높이가 박스높이 이상이면)
                        sectionH = winH;                         //2-섹션234의 높이는 창높이로 적용
                        boxTop = ( winH-boxH )/2;                //2-박스 탑값은 (창눞이 - 박스높이) / 2로 적용
                    }
                    
                    textW = $('.text-wrap').width();                //5-변수
                    fontSizeH3 = rateH3 * textW                     //5-변수
                    fontSizeH4 = rateH4 * textW                     //5-변수
                    fontSizeP = rateP * textW                       //5-변수

                    $('.text-wrap h3').css({ fontSize:fontSizeH3 });    //5-텍스트박스의 h3의 폰트사이즈 적용
                    $('.text-wrap h4').css({ fontSize:fontSizeH4 });    //5-텍스트박스의 h4의 폰트사이즈 적용
                    $('.text-wrap p').css({ fontSize:fontSizeP });      //5-텍스트박스의 p의 폰트사이즈 적용

                    $('.content-wrap').css({ top:boxTop,height:boxH });      //1-boxTop값 css 적용 //2-boxheigt값 css 적용
                    $('.section234').css({ height:sectionH });               //2-섹션234의 높이값 css 적용

                    if( winW <= 1170 ){                                                                                //4-만약 창넓이가 1170px 이하면
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:x-15 },300);    //4-섹션2,4의 콘텐츠박스에 right값 애니메이션 적용
                        $('#section03 .content-wrap').stop().animate({ left:x-15 },300);                               //4-섹션3의 콘텐츠박스에 left값 애니메이션 적용
                    }
                    else{                                                                                              //4-그렇지 않으면(창넓이가 1170px초과면)
                        $('#section02 .content-wrap, #section04 .content-wrap').stop().animate({ right:0 },200);       //4-섹션2,4의 콘텐츠박스에 right값 초기화 애니메이션 적용
                        $('#section03 .content-wrap').stop().animate({ left:0 },200);                                  //4-섹션3의 콘텐츠박스에 left값 초기화 애니메이션 적용
                    }
                }

                //리사이즈 실행
                $(window).resize(function(){
                    resizeFn();                                  //리사이즈 함수
                });
        },
        section05Fn:function(){ //섹션05의 js

        },
        section06Fn:function(){ //섹션06의 js

        },
        section07Fn:function(){ //섹션07의 js

        },
        section08Fn:function(){ //섹션08의 js

        },
        section09Fn:function(){ //섹션09의 js
            //스토리텔링
            //갤러리 이미지 버튼을 클릭하면 클릭한 이미지를 페이드 인아웃 효과를 주면서 모달창에 띄우기
            //-> 클릭한 이미지가 열리도록 클릭한 이미지 파일 이름을 가져와 번호(이미지 인덱스 번호)만 추출
            //-> 페이드 인아웃 효과로 모달창에 띄우기

            //파일 번호 출력
            //1. 하위 요소 검색 속성(Attribute = Property)을 추출 -> children('태그'),find('태그')
            //2. 속성 내용 중 문자열 위치 검색 -> search('검색 문자열'), indexOf('검색 문자열')
            //3. 해당 위치에서 특정 문자열을 추출 -> 문자열.slice(시작, 끝 위치) 문자열 추출
            //4. 내장함수 문자형 숫자를 숫자형으로 형변환 -> Number(문자열), parseInt(문자열)

            var fileName = null;    //1. 하위 요소 속성 변수 (null 아무 값도 없음)
            var endNum = null;      //2. 속성 내용 중 문자열 위치 변수
            var fileNum = null;     //3. 특정 문자열 추출 변수

            //모달 이미지 사이즈 반응형
            var winH = $(window).innerHeight();          //윈도우(창)의 내부 높이

            setTimeout(resizeFn,100);                    //로딩시 리사이즈 함수 실행

            function resizeFn(){                         //리사이즈 함수
                winH = $(window).innerHeight();          //윈도우(창)의 내부 높이
                $('.img-wrap').css({lineHeight:winH+'px'});   //이미지배경의 높이를 윈도우 창 내부 높이로 설정
            }

            $(window).resize(function(){                 //창사이즈가 바뀔때마다
                resizeFn();                              //리사이즈 함수 실행
            });
        
            //모달창 구현
            $('.gallery-img-btn').on({         //이미지 버튼을 클릭하면 (on이벤트 사용)
                click: function(event){        //이벤트 리스너 클릭이벤트
                    event.preventDefault();    //클릭시 페이지 상단으로 새로고침 안되도록 프리벤트디펄트 추가
                    //1. 문자열(src) 파일 경로와 이름 확장자
                    // fileName = $(this).children().attr('src'); //1-방법1. 이것의 자식(자식이 하나밖에 없으니까 안써도 되지만 자식이 여러명이면 children('img')를 적어줌)의 속성을 가져와라
                    fileName = $(this).find('img').attr('src');   //1-방법2. 이것의 아래 요소중에서 img라는 요소를 찾아 그것의 속성을 가져와라(방법 1보다 2가 더 구체적)(권장)
                    
                    //2. 포지션 인덱스 번호
                    // endNum = fileName.search('.jpg');   //2-방법1. 파일 네임에서 .jpg를 찾아라
                    endNum = fileName.indexOf('.jpg');     //2-방법2. search와 동일하지만 더욱 정밀함(권장)

                    //3-1.슬라이스 연습(응용)
                    // fileName = '0123456789';
                    fileNum = fileName.slice(0,2);      //결과 : 01 인덱스 번호 0~2 미만까지
                    fileNum = fileName.slice(0,3);      //결과 : 012 인덱스 번호 0~3 미만까지
                    fileNum = fileName.slice(2,5);      //결과 : 234 인덱스 번호 2~5 미만까지
                    fileNum = fileName.slice(8,9);      //결과 : 8 인덱스 번호 8~9 미만까지
                    fileNum = fileName.slice(9,10);     //결과 : 9 인덱스 번호 9~10 미만까지
                    fileNum = fileName.slice();         //결과 : 0123456789 위치 지정을 안하면 전부 다 나옴
                    fileNum = fileName.slice(0);        //결과 : 0123456789 끝 위치를 지정을 안하면 설정한 인덱스번호~끝까지 다 나옴
                    fileNum = fileName.slice(8);        //결과 : 89 끝 위치를 지정을 안하면 설정한 인덱스번호~끝까지 다 나옴
                    fileNum = fileName.slice(9);        //결과 : 9 끝 위치를 지정을 안하면 설정한 인덱스번호~끝까지 다 나옴
                    fileNum = fileName.slice(-1);       //결과 : 9 뒤에서 1글자 뽑아라
                    fileNum = fileName.slice(-2);       //결과 : 89 뒤에서 2글자 뽑아라
                    fileNum = fileName.slice(0,-1);     //결과 : 012345678 인덱스번호 0~마지막 -1 전까지
                    fileNum = fileName.slice(-2,-1);    //결과 : 8 인덱스번호 -2~마지막 -1 전까지
                    fileNum = fileName.slice(-4,-1);    //결과 : 678 인덱스번호 -4~마지막 -1 전까지
                    fileNum = fileName.slice(-4);       //결과 : 6789 인덱스번호 -4~끝까지 다나옴
                    
                    //3-2. 문자열의 시작과 끝 위치 slice(문자시작, 문자끝)
                    fileNum = fileName.slice(endNum-2, endNum); //3-방법1. 파일 명을 포스넘버로 추출
                    fileNum = fileName.slice(-6,-4);            //3-방법2. 파일명 중 뒤에서 인덱스 번호로 추출

                    // console.log(fileName, fileNum); //fileNum을 문자열로 출력
                    // console.log(fileName, Number(fileNum));   //fileNum은 보기엔 숫자지만 문자열 숫자이기 때문에 Number(fileNum)으로 숫자열로 형변환해 출력
                    // console.log(fileName, parseInt(fileNum)); //fileNum은 보기엔 숫자지만 문자열 숫자이기 때문에 parseInt(fileNum)으로 숫자열로 형변환해 출력

                    //모달창 메인 슬라이드 함수 호출
                    modalSlideFn();
                }
            });

            //모달창 열기 (메인 슬라이드 함수)
            function modalSlideFn(){
                $('.modal').stop().fadeIn(300);                                                                             //모달창이 페이드인 되며 열림
                $('.img-wrap img').stop().fadeOut(0).attr('src','./img/restaurant-img'+ fileNum +'.jpg').fadeIn(1000);      //모달창의 이미지가 페이드아웃 되서 사라졌다가 페이드인 되며 열림
            }

            //모달창 닫기
            $('.close-btn, .img-wrap').on({             //클로즈버튼과 모달창 배경을
                click: function(){                      //클릭하면
                    $('.modal').stop().fadeOut(300);    //모달창이 페이드아웃 되며 닫힘
                }
            });

            //다음 모달창
            $('.arrow-right-btn, .img-btn').on({        //우측 화살버튼과 모달창의 이미지를
                click: function(event){                 //클릭하면
                    event.stopPropagation();            //부모(모달창 배경)의 효과(페이드 아웃)는 자식(모달창의 이미지)에게 미치지 않도록 해주고
                    fileNum++;                          //파일 넘버가 증가하는데
                    // num > 32 ? num = 25 : num;
                    if(fileNum > 32){                   //만약 파일 넘버가 32보다 크면
                        fileNum = 25;                   //파일 넘버는 25로 초기화 해주고
                    }
                    modalSlideFn();                     //메인 슬라이드 함수 호출
                }
            });

            //이전 모달창
            $('.arrow-left-btn').on({                   //좌측 화살버튼을
                click: function(){                      //클릭하면
                    fileNum--;                          //파일 넘버가 감소하는데
                    // num < 25 ? num = 32 : num;
                    if(fileNum < 25){                   //만약 파일 넘버가 25보다 작으면
                        fileNum = 32;                   //파일 넘버는 32로 초기화 해주고
                    }
                    modalSlideFn();                     //메인 슬라이드 함수 호출
                }
            });
        },
        section09GalleryFn:function(){ //섹션09 갤러리 js
            var hRate = 600/800;                //초기 이미지 높이 비율 상수값(고정값 = const) (원래 이미지 높이 600 / 원래 이미지 넓이 800 = 0.75)

            var winW = $(window).innerWidth();  //창 내부 넓이
            var cols = 4;                       //한 줄에 들어갈 이미지 칸 수 (해상도별 변수 사용 예정)
            var n = $('.gallery li').length;    //갤러리 안의 li의 개수 새기
            var rows = Math.ceil(n/cols);       //갤러리 줄 수 Math.ceil로 자리올림 (갤러리 이미지 개수 / 이미지 칸수)
            var imgW = winW/cols;               //이미지 넓이 (윈도우 창 내부 넓이 / 한 줄의 이미지 칸 수)
            var imgH = imgW*hRate;              //이미지 높이 (이미지 넓이 * 이미지 높이 비율)
        
            var hide = [];                      //감추기 초기 배열값은 없음
            var show = [0,1,2,3,4,5,6,7];       //보이기 초기 배열값은 8개가 전부 보이기

            setTimeout(galleryFn,100);          //로딩시 반드시 실행
            
            function galleryFn(){               //갤러리 함수
                winW = $(window).innerWidth();  //창 내부 넓이
                if( winW > 1200 ){                        //만약 창 넓이가 1200 초과이면
                    cols = 4;                             //칸 수는 4개
                }
                else if( winW <= 1200 && winW > 980 ){    //만약 창 넓이가 1200 이하부터 980 초과까지 이면
                    cols = 3;                             //칸 수는 3개
                }
                else if( winW <= 980 && winW > 760 ){     //만약 창 넓이가 980 이하부터 760 초과까지 이면
                    cols = 2;                             //칸 수는 2개
                }
                else if( winW <= 760 && winW >= 0 ){      //만약 창 넓이가 760 이하부터 0 이상까지 이면
                    cols = 1;                             //칸 수는 1개
                }

                // n = $('.gallery li').length; //갤러리 안의 li의 개수 새기
                n = show.length;                //클릭한 버튼 내용 보이기 이미지 개수
                rows = Math.ceil(n/cols);       //갤러리 줄 수 Math.ceil로 자리올림 (갤러리 이미지 개수 / 이미지 칸수)
                imgW = winW/cols;               //이미지 넓이 (윈도우 창 내부 넓이 / 한 줄의 이미지 칸 수)
                imgH = imgW*hRate;              //이미지 높이 (이미지 넓이 * 이미지 높이 비율)

                // console.log('갤러리 갯수',n);
                // console.log('hRate',hRate);
                // console.log('cols',cols);
                // console.log('rows',rows);
                // console.log('winW',winW);
                // console.log('imgW',imgW);
                // console.log('imgH',imgH);
                
                //창 넓이 1200 초과일 때 칸 수가 4칸인 경우
                //$('.gallery li').eq(0).css({top:줄번호,left:칸번호,width:이미지넓이,height:이미지높이});
                $('.gallery').removeClass('addZoom');
                $('.gallery li').removeClass('addZoom2');

                $('.gallery').css({height:(imgH*rows)}); //이미지 높이 * 줄 수

                //console.log(hide);
                //갤러리 숨김 hide();
                for(var i=0;i<hide.length;i++){
                    $('.gallery li').eq(hide[i]).hide();
                }
                //console.log(show);
                //갤러리 보이기 show();
                var cnt = -1;
                for(var i=0;i<rows;i++){        //결과 : 0~1 i(줄 수)는 0부터 2미만까지 
                    for(var j=0;j<cols;j++){    //결과 : 0~3 j(칸 수)는 0부터 cols미만까지 
                        cnt++;                  //결과 : 0~7 eq값
                        if(cnt>=show.length)    //보이는 갯수에 따라서 변화됨
                        break;                  //반복문 제어문 탈출
                        // if(cnt>7){
                        //     break;
                        // }
                        // console.log(cnt, i, j)
                        $('.gallery li').eq(show[cnt]).show().stop().animate({top:(imgH*i),left:(imgW*j),width:imgW,height:imgH},300, function(){
                            $(this).addClass('addZoom2');
                        });
                    }
                }
                $('.gallery').addClass('addZoom');

                // if(cols==4){                    //만약 칸 수가 4칸이면
                //     $('.gallery li').eq(0).stop().animate({top:(imgH*0),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(1).stop().animate({top:(imgH*0),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(2).stop().animate({top:(imgH*0),left:(imgW*2),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(3).stop().animate({top:(imgH*0),left:(imgW*3),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(4).stop().animate({top:(imgH*1),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(5).stop().animate({top:(imgH*1),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(6).stop().animate({top:(imgH*1),left:(imgW*2),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(7).stop().animate({top:(imgH*1),left:(imgW*3),width:imgW,height:imgH},300);
                // }
                // else if(cols==3){                //만약 칸 수가 3칸이면
                //     $('.gallery li').eq(0).stop().animate({top:(imgH*0),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(1).stop().animate({top:(imgH*0),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(2).stop().animate({top:(imgH*0),left:(imgW*2),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(3).stop().animate({top:(imgH*1),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(4).stop().animate({top:(imgH*1),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(5).stop().animate({top:(imgH*1),left:(imgW*2),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(6).stop().animate({top:(imgH*2),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(7).stop().animate({top:(imgH*2),left:(imgW*1),width:imgW,height:imgH},300);
                // }
                // else if(cols==2){                //만약 칸 수가 3칸이면
                //     $('.gallery li').eq(0).stop().animate({top:(imgH*0),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(1).stop().animate({top:(imgH*0),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(2).stop().animate({top:(imgH*1),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(3).stop().animate({top:(imgH*1),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(4).stop().animate({top:(imgH*2),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(5).stop().animate({top:(imgH*2),left:(imgW*1),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(6).stop().animate({top:(imgH*3),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(7).stop().animate({top:(imgH*3),left:(imgW*1),width:imgW,height:imgH},300);
                // }
                // else if(cols==1){                //만약 칸 수가 3칸이면
                //     $('.gallery li').eq(0).stop().animate({top:(imgH*0),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(1).stop().animate({top:(imgH*1),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(2).stop().animate({top:(imgH*2),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(3).stop().animate({top:(imgH*3),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(4).stop().animate({top:(imgH*4),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(5).stop().animate({top:(imgH*5),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(6).stop().animate({top:(imgH*6),left:(imgW*0),width:imgW,height:imgH},300);
                //     $('.gallery li').eq(7).stop().animate({top:(imgH*7),left:(imgW*0),width:imgW,height:imgH},300);
                // }
            }
            $(window).resize(function(){        //창 크기가 바뀔때마다
                galleryFn();                    //갤러리 함수를 적용
            });

            //네비 버튼 클릭 이벤트 (0 ~ 4) 총 5개
            $('.gallery-btn').each(function(index){ //갤러리버튼 인덱스 배열처리
                $(this).on({
                    click: function(e){
                        e.preventDefault();
                        $('.gallery-btn').removeClass('addNav');
                        $(this).addClass('addNav');
                        switch(index){                      //클릭하는 인덱스값에 따라 hide와 show가 결정됨
                            case 0:                         //첫번째 버튼
                                hide = [];                  //안보일거 없음
                                show = [0,1,2,3,4,5,6,7];   //전부 다 보이기
                                break;
                            case 1:                         //두번째 버튼
                                hide = [0,2];
                                show = [1,3,4,5,6,7];
                                break;
                            case 2:                         //세번째 버튼
                                hide = [1,3,4,5];
                                show = [0,2,6,7];
                                break;
                            case 3:                         //네번째 버튼
                                hide = [0,2,5];
                                show = [1,3,4,6,7];
                                break;
                            default:                        //마지막 버튼
                                hide = [0,1,3,6];
                                show = [2,4,5,7];
                        }
                        galleryFn(); //갤러리 메인함수 호출 실행
                    }
                });
            });
        },
        section10Fn:function(){ //섹션10의 js
            var win = $(window);
            var winW = win.innerWidth();
            var slideW = 975;
            var cnt = 0;
            // 슬라이드 좌우이동 구현
            // 첫번째에서는 좌측으로 더이상 이동 안함
            // 세번째에서는 우측으로 더이상 이동 안함

            //반응형
            setTimeout(resizeFn,100);

            function resizeFn(){
                winW = win.innerWidth();
                if(winW > 975 ){
                    slideW = 975;
                }
                else{
                    slideW = winW;
                }
                $('#section10 .slide-wrap').css({width:slideW*3});
                $('#section10 .slide').css({width:slideW});
                $('#section10 .slide-wrap').stop().animate({ left:(-slideW*cnt) },300);
                //return slideW;
                mainSlideFn();
            }
            win.resize(function(){
                resizeFn();
            });

            //1. 메인함수
            function mainSlideFn(){
                $('#section10 .slide-wrap').stop().animate({ left:(-slideW*cnt) },1000,'easeOutExpo');
            }

            //2-1. 다음함수
            function nextCountFn(){
                cnt++;
                if(cnt>2)
                    cnt=2; /* 만약 cnt가 2보다 크면 cnt는 2로해라 */
                    mainSlideFn();
            }

            //2-2. 이전함수
            function prevCountFn(){
                cnt--;
                if(cnt<0)
                    cnt=0; /* 만약 cnt가 0보다 작으면 cnt는 0으로해라 */
                    mainSlideFn();
            }

            //3-1. 클릭이벤트 : 다음버튼 클릭 이벤트
            $('#section10 .next-btn').on({
                click: function(){
                    nextCountFn();
                }
            });

            //3-2. 클릭이벤트 : 이전버튼 클릭 이벤트
            $('#section10 .prev-btn').on({
                click: function(){
                    prevCountFn();
                }
            });

            //4. 터치 스와이프 이벤트
            $('#section10 .slide-wrap').swipe({
                swipeLeft:function(){
                    nextCountFn();
                },
                swipeRight:function(){
                    prevCountFn();
                }
            });
        },
        section11Fn:function(){ //섹션11의 js
            //반응형으로 제작
            //좌측의 li 박스 높이를 이용해 우측의 li 박스 높이를 설정
            var win = $(window);
            var blog = $('.blog'); //4개 each()메서드 활용해 배열처리
            var blogList = $('.blog li'); //첫번째의 li
            var blogListImgH = blogList.eq(0).innerHeight(); //첫번째의 li의 높이
            var fontRateH3 = 0.039711191; //폰트비율
            var fontRateP = 0.072202166; //폰트비율
            var blogListImgW = blogList.eq(0).innerWidth(); //첫번째의 li의 넓이
            var fontSizeH3 = fontRateH3*blogListImgW; //폰트 사이즈 반응형 계산
            var fontSizeP = fontRateP*blogListImgW; //폰트 사이즈 반응형 계산

            setTimeout(resizeFn,100);

            function resizeFn(){
                blogListImgH = blogList.eq(0).innerHeight();
                blogListImgW = blogList.eq(0).innerWidth();
                fontSizeH3 = fontRateH3*blogListImgW;
                fontSizeP = fontRateP*blogListImgW;

                // if(fontSizeH3>12){ //if문
                //     fontsizeH3=12;
                // }
                fontSizeH3>11 ? fontSizeH3=11 : fontSizeH3;
                fontSizeH3<8 ? fontSizeH3=8 : fontSizeH3;
                fontSizeP>20 ? fontSizeP=20 : fontSizeP;
                fontSizeP<15 ? fontSizeP=15 : fontSizeP;

                blog.each(function(idx){ //배열처리
                    blog.eq(idx).children('li').eq(1).css({height:blogListImgH});
                    blog.eq(idx).find('h3').css({fontSize:fontSizeH3});
                    blog.eq(idx).find('P').css({fontSize:fontSizeP});
                });

                // blog.eq(0).children('li').eq(1).css({height:blogListImgH});
                // blog.eq(1).children('li').eq(1).css({height:blogListImgH});
                // blog.eq(2).children('li').eq(1).css({height:blogListImgH});
                // blog.eq(3).children('li').eq(1).css({height:blogListImgH});
                // blog.eq(0).find('h3').css({fontSize:fontSizeH3});
                // blog.eq(0).find('P').css({fontSize:fontSizeP});
                // blog.eq(1).find('h3').css({fontSize:fontSizeH3});
                // blog.eq(1).find('P').css({fontSize:fontSizeP});
                // blog.eq(2).find('h3').css({fontSize:fontSizeH3});
                // blog.eq(2).find('P').css({fontSize:fontSizeP});
                // blog.eq(3).find('h3').css({fontSize:fontSizeH3});
                // blog.eq(3).find('P').css({fontSize:fontSizeP});
            }

            win.resize(function(){
                resizeFn();
            });
        },
        section12Fn:function(){ //섹션12의 js
            var win = $(window);
            var h3 = $('#section12 h3');
            var h2 = $('#section12 h2');
            var titleWrap = $('#section12 .title-wrap');
            var titleWrapW = titleWrap.innerWidth();
            var fontSizeH3 = titleWrapW * 0.01754386;
            var fontSizeH2 = titleWrapW * 0.035087719;
            
            setTimeout(resizeFn,100);

            function resizeFn(){
                titleWrapW = titleWrap.innerWidth();
                fontSizeH3 = titleWrapW * 0.01754386;
                fontSizeH2 = titleWrapW * 0.035087719;

                if(fontSizeH3<13){fontSizeH3=13};
                if(fontSizeH2<25){fontSizeH2=25};

                h3.css({fontSize:fontSizeH3});
                h2.css({fontSize:fontSizeH2});
            }

            win.resize(function(){
                resizeFn();
            });
        },
        section13Fn:function(){ //섹션13의 js
            var h2Num = $('#section13 h2');
            var cnt = [0,0,0,0];
            var setId = [null,null,null,null];
            var num = [780,987,350,166];
            var s = 10;
            var mSecond = [];
            var win = $(window);
            var sec12Top = $('#section12').offset().top;
            var t = 0;

            for(var i=0;i<num.length;i++){
                mSecond[i]=(s/num[i])*1000;
            }
            //var mSecond = [s/num[0]*1000,s/num[1]*1000,s/num[2]*1000,s/num[3]*1000];
            
            //setTimeout(countFn,100);
            //Scroll Event
            win.scroll(function(){
                if( win.scrollTop() > sec12Top ){
                    if(t==0){
                        countFn();
                    }
                }
                else{
                    cnt = [0,0,0,0];
                    t=0;
                }
            });

            function countFn(){
                h2Num.each(function(i){
                    setId[i] = setInterval(function(){
                        cnt[i]++;
                        if(cnt[i]>num[i]){
                            clearInterval(setId[i]);
                        }
                        else{
                            h2Num.eq([i]).text(cnt[i]);
                        }
                    },mSecond[i]);
                });
            }
                
        },
        section14Fn: function(){
            var setId=0;

            //다시 입력 하기 위해 첫 번째 입력상자(이름) 포커스 발생하면 성공메시지 removeClass
            $('#irum').on({
                // focusin:  function(){
                focus:  function(){
                    $('.success-message').removeClass('addSuccess');//성공 메시지 
                }
            });

            //폼 AJAX 전송 버튼 클릭 이벤트 
            $('#submit').on({
                click:  function(event){  //전송 버튼 클릭 후 유효성 검사 시작
                   event.preventDefault(); //전송 버튼의 고유기능을 삭제
                    //초기화
                    $('.error-message').removeClass('addError');//에러 메시지
                    $('.success-message').removeClass('addSuccess');//성공 메시지      
                    var irumVal = $('#irum').val(); //이름 입력 내용 값
                    var mailVal = $('#mail').val(); //메일 입력 내용 값 영문 숫자 특수문자포함 한글 절대포안됨.
                    var interestedVal = $('#interested').val(); //흥미있는 내용 선택(change) 입력 값
                    var messageVal = $('#message').val(); //메시지 입력 내용 값                   
                    var cnt=0;

                    //유효성 검사 정규 표현식 변수 설정
                    // var regExpIrum = /[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣]/; //이름 영문한글이 아닌 모든것 검색
                    var regExpName = /^[a-zA-Z|ㄱ-ㅎ|ㅏ-ㅣ|가-힣\s]+$/; //입력 값 1글자 이상
                    var regExpMail = /^[a-zA-Z0-9]([-_.]?[a-zA-Z0-9])*@[a-zA-Z0-9]([.]?[a-zA-Z])*.[a-zA-Z]{2,3}$/i; //이메일 영숫자포함 @ . 끝글자 2~3
                    var regExpMessage = /\w/;  //입력 값 1글자 이상

                   //1~2초동안 로딩 이미지 뜨고 사라지면 에러 메시지 또는 성공 메시지 나타남
                    $('.ajax-loader').addClass('addAjax');
                    
                    setId = setInterval(function(){
                        cnt++;
                        if(cnt>=1){
                            clearInterval(setId);
                            $('.ajax-loader').removeClass('addAjax'); //로딩 이미지 사라지고
                            formSubmitFn(); //폼 전송 에러메시지, 성공메시지, AJAX 함수 전체
                        }
                    },1000);     

                            //유효성검사 정규 표현식(RegExp) 
                            //AJAX(비동기 전송방식) 
                            function formSubmitFn(){

                                if( regExpName.test( $('#irum').val() ) === false || regExpMail.test( $('#mail').val() ) === false ||  regExpMessage.test( $('#message').val() ) === false ){

                                    //한글영문이 아닌거가 있다면
                                    if(   regExpName.test($('#irum').val()) === false ){
                                        $('#irum').addClass('addError');
                                    }
                                    else{
                                        $('#irum').removeClass('addError');
                                    }

                                    //메일 잘못된 값 입력되면
                                    if(  regExpMail.test($('#mail').val()) === false  ){
                                        $('#mail').addClass('addError'); 
                                    }
                                    else{
                                        $('#mail').removeClass('addError');
                                    }

                                    //메시지 잘못된 값 입력되면
                                    if(  regExpMessage.test($('#message').val()) === false  ){
                                        $('#message').addClass('addError'); 
                                    }
                                    else{
                                        $('#message').removeClass('addError');
                                    }

                                    $('.error-message').addClass('addError'); //하단 에러 메시지 박스
                                    return false; //클릭한 버튼의 전송을 취소하고 다시 입력을 받는 거런 형태의 리턴 값
                                }
                                else{
                                    $('#irum').removeClass('addError');
                                    $('#mail').removeClass('addError');
                                    $('#message').removeClass('addError');
                                    $('.error-message').removeClass('addError');                                    

                                    //AJAX는 서버에서만 실행
                                    $.ajax({ 
                                        url:"./response.php",
                                        type:"post",
                                        data:{ //name = 폼입력상자값
                                            irum: irumVal,
                                            mail: mailVal,
                                            interested: interestedVal,
                                            message: messageVal
                                        },
                                        success: function(data){
                                            console.log(data);
                                            
                                            $('.ajax-response').html(data);

                                            $('.success-message').addClass('addSuccess');//성공 메시지

                                            $('#irum').val('');
                                            $('#mail').val('');
                                            // $('#interested').find('option').eq(0).prop('selected',true); //select option 첫번째 목록을 속성(Property: prop)selected
                                            $('#interested option').eq(0).prop('selected',true); //select option 첫번째 목록을 속성(Property: prop)selected
                                            $('#message').val('');

                                        },
                                        error: function(){
                                            console.log( 'AJAX 오류!!!' );
                                        }
                                    }); //AJAX 

                                } //end if
                            }  //formSubmitFn()
                }//click Event
            }); //Buttone 
        },
    }; //객체
    brando.init(); //리터럴함수(이름없는 함수)들은 맨 아래에서만 실행 가능
})(window,document,jQuery);