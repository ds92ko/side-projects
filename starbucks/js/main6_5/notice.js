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
            var txt = ''; //반드시 공백처리. 공백처리 안하면 언디파인드뜸
            var total = 0; //전체 레코드 개수
            var list = 10; //한 화면에 보이는 목록 개수
            var pageCount = Math.ceil(total/list); //전체 페이지 개수 279/10 = 27.9 -> 자리올림(Math.ceil) 28

            //공지사항 목록 출력시 들어갈 변수와 계산 알고리즘
            var pageBtnNumber = 0; //페이지버튼 번호 기본값 첫번째 버튼 번호 인덱스값
            var startNum = pageBtnNumber * list; //시작 레코드 번호
            var endNum = startNum + list; //끝 레코드 번호

            if(endNum > total){ //실제 레코드 번호보다 끝 레코드 번호가 더 크면
                endNum = total; //끝 레코드 번호를 실제 레코드 번호로 해줘라
            }

            //그룹 페이지 버튼 변수설정
            var groupNum = 0; //그룹 번호
            var groupList = 10; //10개의 묶음 그룹 (1~10)
            var groupStart = groupNum * groupList; //그룹 시작번호 (0*10=0)
            var groupEnd = groupStart + groupList; //그룹 끝번호 (0+10=1

            if(groupEnd > pageCount){ //그룹 끝번호가 전체 페이지 번호보다 작으면
                groupEnd = pageCount //그룹 끝번호를 전체 페이지 번호로 설정
            }

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
                        
                        //변경될 변수들 설정
                        total = a.length; //전체 레코드 개수
                        list = 10; //한 화면에 보이는 목록 개수
                        groupList = 10; //한 화면에 보이는 페이지 버튼 그룹 개수 (1~10)
                        pageCount = Math.ceil(total/list); //전체 페이지 개수 279/10 = 27.9 -> 자리올림(Math.ceil) 28
                        
                        //바인딩 할 공지사항 목록 내용 함수
                        NoticeListFn();
                        function NoticeListFn(){
                            //공지사항 목록 출력시 들어갈 변수와 계산 알고리즘
                            startNum = pageBtnNumber * list; //시작 레코드 번호
                            endNum = startNum + list; //끝 레코드 번호
                            
                            if(endNum > total){ //실제 레코드 번호보다 끝 레코드 번호가 더 크면
                                endNum = total; //끝 레코드 번호를 실제 레코드 번호로 해줘라
                            }

                            //바인딩 텍스트
                            txt += "<dt class='fixedclear'>";
                            txt += "<span>NO</span>";
                            txt += "<span>제목</span>";
                            txt += "<span>날짜</span>";
                            txt += "<span>조회수</span>";
                            txt += "</dt>";

                            for(var i=startNum; i<endNum; i++){ //0~9
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
                        
                        //1. 페이지네이션 함수 -> 단순히 페이지만 보여줌 1 2 3 4 5 ... 29 (나열형 페이지 번호 초기단계)
                        //2. 페이지 번호가 29까지 전부 보이던걸 그룹단위로 10개씩 묶어서 보이도록 구현 (그룹형 페이지 번호)
                            //1그룹 1 2 3 4 5 ... 10 >
                            //2그룹 < 11 12 13 14 15 ... 20 >
                            //3그룹 < 21 22 23 24 25 ... 29

                        //그룹 단위 페이지 화살버튼 이벤트
                        $('.prevBtn-wrap').stop().hide(0);
                        $('.nextBtn-wrap').stop().show(0);

                        pageNationFn();
                        function pageNationFn(){
                            pageBtnNumber = groupNum * groupList; //0*10=0 1*10=10 2*10=20
                            NoticeListFn();
                            
                            groupStart = groupNum * groupList; //그룹 시작번호 (0*10=0)
                            groupEnd = groupStart + groupList; //그룹 끝번호 (0+10=10)

                            //오른쪽 화살 버튼
                            if(groupEnd > pageCount){ //그룹 끝번호가 전체 페이지 번호보다 작으면
                                groupEnd = pageCount //그룹 끝번호를 전체 페이지 번호로 설정
                                $('.nextBtn-wrap').stop().hide(0); //마지막 그룹인 경우 오른쪽 화살 버튼 사라짐
                            }
                            else{
                                $('.nextBtn-wrap').stop().show(0); //마지막 그룹이 아닌 경우 오른쪽 화살 버튼 보이기
                            }

                            //왼쪽 화살 버튼
                            if(groupNum > 0){
                                $('.prevBtn-wrap').stop().show(0); //그룹 번호가 0보다 큰 경우 왼쪽 화살 버튼 보이기
                            }
                            else{
                                $('.prevBtn-wrap').stop().hide(0); //그룹 번호가 0 이하인 경우 왼쪽 화살 버튼 사라짐
                            }

                            for(var i=groupStart; i<groupEnd; i++){ //1~29
                                if( 0==(i%groupList) ){ //초기값 나머지가 0이면 그룹의 첫번째 페이지버튼에 애드클래스 적용됨
                                    txt += "<li>";
                                    txt += "<a href='#' class='pageBtn addCurrent'>"+ (i+1) +"</a>";
                                    txt += "</li>";
                                }
                                else{
                                    txt += "<li>";
                                    txt += "<a href='#' class='pageBtn'>"+ (i+1) +"</a>";
                                    txt += "</li>";
                                }
                            }
                            
                            //바인딩
                            $('.page-wrap ul').html(txt);
                            txt=''; //초기화
                        }

                        //페이지번호 클릭 이벤트
                        //클릭한 페이지 번호로 화면에 나타날 게시판 목록 10개 출력(바인딩)
                        //JS에서 만들어진 태그요소들에 클릭이벤트가 적용이 안될때 document 이벤트 사용
                        $(document).on('mouseenter', '.pageBtn', function(){
                            $('.pageBtn').each(function(index){
                                $(this).on({
                                    click: function(event){
                                        event.preventDefault();
                                        
                                        $('.pageBtn').removeClass('addCurrent'); //이전 클래스 모두 삭제
                                        $(this).addClass('addCurrent'); //클릭한 버튼에만 클래스 추가
                                        
                                        //페이지 번호 클릭 버튼으로 시작번호와 끝번호 정하기
                                        //pageBtnNumber = index;  //페이지버튼이 모두 노출된 상태에서만 사용
                                        pageBtnNumber = Number($(this).text())-1;  //버튼 번호 숫자는 1이니까 -1해서 0으로 만들기, 문자열이 아닌 숫자열로 인식하도록 Number()추가
                                        
                                        //공지사항 목록 함수 실행
                                        NoticeListFn();
                                    }
                                });
                            });
                        });

                        //다음 그룹 버튼 클릭 이벤트
                        $('.nextBtn').on({
                            click: function(event){
                                event.preventDefault();
                                groupNum++;
                                //페이지네이션 호출
                                pageNationFn();
                            }
                        });

                        //이전 그룹 버튼 클릭 이벤트
                        $('.prevBtn').on({
                            click: function(event){
                                event.preventDefault();
                                groupNum--;
                                //페이지네이션 호출
                                pageNationFn();
                            }
                        });

                    }, //Success END
                    error:function(){ //실패 메세지
                        console.log('AJAX Error!!!');
                    }
                }); //Error END
            }
        }
    };
    notice.init();
})(jQuery,window,document);