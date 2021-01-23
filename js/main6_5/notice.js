;(function($,window,document,undefined){

    //공지사항
    var notice = {
        init: function(){
            var that = this;
            that.ajaxFn();
        },
        ajaxFn: function(){
            //외부데이터 JSON파일(notice.json) 호출 처리 실행
            //게시판 목록 내용을 모두 JSON데이터 파일로 저장하고 AJAX로 처리해서 데이터를 읽어서 게시판 목록에 바인딩
            var a = []; //2차원 배열 사용 준비
            var total = 279; //전체 레코드 개수
            var txt = ''; //반드시 공백처리. 공백처리 안하면 언디파인드뜸
            var list = 10; //한 화면에 보이는 목록 개수
            var pageCount = Math.ceil(total/list); //전체 페이지 개수 279/10 = 27.9 -> 자리올림(Math.ceil) 28
            var pageBtnNumber = 0; //페이지버튼 번호 기본값 첫번째 버튼 번호 인덱스값
            var startNum = pageBtnNumber * list; //시작 레코드 번호
            var endNum = startNum + list; //끝 레코드 번호

            setTimeout(mainAjaxFn,100); //처음 로딩시 바로 실행
            
            function mainAjaxFn(){
                //ajax 구현
                $.ajax({
                    url:'./data/json/notice.json', //파일위치
                    type:'POST', //전송방식
                    dataType:'JSON', //파일형식
                    success: function(data){ //성공 메세지 data, result, object 세개 가장 많이 사용
                        //1. JSON DATA 처리
                        //console.log('AJAX SUCCESS RESULT : ', result);

                        //2. 객체 배열처리(each() 메서드) 필드 분리 작업
                        //$.each(result.공지사항, function(index, object){ //인덱스번호, 객체(속성 Property:속성값 Value)
                            //console.log('AJAX SUCCESS RESULT : ', index+1, object.제목, object.날짜);
                        //});

                        //3. Array 2차원 배열
                        $.each(data.notice, function(idx, obj){
                            a[idx] = []; //2차열 배열선언
                            a[idx][0] = obj.NO; 
                            a[idx][1] = obj.제목; 
                            a[idx][2] = obj.날짜; 
                            a[idx][3] = obj.조회수; 
                        });
                        total = a.length; //전체 레코드

                        //바인딩 텍스트
                        txt += "<dt class='fixedclear'>";
                        txt += "<span>NO</span>";
                        txt += "<span>제목</span>";
                        txt += "<span>날짜</span>";
                        txt += "<span>조회수</span>";
                        txt += "</dt>";

                        for(var i=0; i<list; i++){ //0~9
                            txt += "<dd>";
                            txt += "<span>"+ a[i][0] +"</span>";
                            txt += "<span><a href='#'>"+ a[i][1] +"</a></span>";
                            txt += "<span>"+ a[i][2] +"</span>";
                            txt += "<span>"+ a[i][3] +"</span>";
                            txt += "</dd>";
                        }

                        $('.notice-table dl').html(txt);
                        txt=''; //초기화

                        //페이지네이션
                        for(var i=1; i<=pageCount; i++){ //1~28
                            if(i==1){
                                txt += "<li class='addCurrent'>";
                            }
                            else{
                                txt += "<li>";
                            }
                            txt += "<a href='#' class='pageBtn'>"+ i +"</a>";
                            txt += "</li>";
                        }

                        //바인딩
                        $('.page-wrap ul').html(txt);
                        txt=''; //초기화

                        //페이지번호 클릭 이벤트
                        //클릭한 페이지 번호로 화면에 나타날 게시판 목록 10개 출력(바인딩)
                        $('.pageBtn').each(function(index){
                            $(this).on({
                                click: function(event){
                                    event.preventDefault();

                                    //바인딩 텍스트
                                    txt += "<dt class='fixedclear'>";
                                    txt += "<span>NO</span>";
                                    txt += "<span>제목</span>";
                                    txt += "<span>날짜</span>";
                                    txt += "<span>조회수</span>";
                                    txt += "</dt>";
                                    
                                    //페이지 번호 클릭 버튼으로 시작번호와 끝번호 정하기
                                    //pageBtnNumber = index;  //페이지버튼이 모두 노출된 상태에서만 사용
                                    pageBtnNumber = Number($(this).text())-1;  //버튼 번호 숫자는 1이니까 -1해서 0으로 만들기, 문자열이 아닌 숫자열로 인식하도록 Number()추가
                                    startNum = pageBtnNumber * list; //시작 레코드 번호 0(0*10) 10(1*10) 20(2*10) 30(3*10) ... 270(27*10)
                                    endNum = startNum + list; //끝 레코드 번호 <10(0+10) <20(10+10) <30(20+10) <40(30+10)... <280(270+10)

                                    if(endNum > total){ //실제 레코드 번호보다 끝 레코드 번호가 더 크면
                                        endNum = total; //끝 레코드 번호를 실제 레코드 번호로 해줘라
                                    }
                                    
                                    for(var i=startNum; i<endNum; i++){ //변수로 설정
                                        txt += "<dd>";
                                        txt += "<span>"+ a[i][0] +"</span>";
                                        txt += "<span><a href='#'>"+ a[i][1] +"</a></span>";
                                        txt += "<span>"+ a[i][2] +"</span>";
                                        txt += "<span>"+ a[i][3] +"</span>";
                                        txt += "</dd>";
                                    }

                                    $('.notice-table dl').html(txt); //출력
                                    txt=''; //초기화
                                }
                            });
                        });
                    },
                    error:function(){ //실패 메세지
                        console.log('AJAX Error!!!');
                    }
                });
            }
        }
    };
    notice.init();
})(jQuery,window,document);