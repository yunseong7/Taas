window.addEventListener('DOMContentLoaded', function() {    
    const searchButton = document.getElementById('searchButton');

    const descDiv = document.getElementById('descDiv');
    const notFoundDiv = document.getElementById('notFoundDiv');
    const trackingDiv = document.getElementById('trackingDiv');

    const result1 = document.getElementById('result1');
    const result2 = document.getElementById('result2');
    const result3 = document.getElementById('result3');
    const result4 = document.getElementById('result4');
    const result5 = document.getElementById('result5');
    const result6 = document.getElementById('result6');

    const state1 = document.getElementById('state1');
    const state2 = document.getElementById('state2');
    const state3 = document.getElementById('state3');
    const state4 = document.getElementById('state4');
    const state5 = document.getElementById('state5');
    const state6 = document.getElementById('state6');
    const state7 = document.getElementById('state7');

    const stateTitle1 = document.getElementById('state-title1');
    const stateTitle2 = document.getElementById('state-title2');
    const stateTitle3 = document.getElementById('state-title3');
    const stateTitle4 = document.getElementById('state-title4');
    const stateTitle5 = document.getElementById('state-title5');
    const stateTitle6 = document.getElementById('state-title6');
    const stateTitle7 = document.getElementById('state-title7');

    const statusTable = document.getElementById('statusTable');

    const searchTab = document.getElementById('searchTab');

    function onSearch() {
        const qrId = searchInput.value;
        if (qrId.indexOf('-') != -1) {
            searchTab.classList.add('search-tab-onerror')
            alert('잘못된 운송장 번호입니다.\r운송장 번호를 확인해주세요.')
            return;
        }
        if (qrId.length != 20) {
            searchTab.classList.add('search-tab-onerror')
            alert('잘못된 운송장 번호입니다.\r운송장 번호를 확인해주세요.')
            return;
        }

        // 20240809004756513620
    
        axios.get("https://web-user-api.d2dexpress.co.kr/tracking?qrId=" + qrId)
            .then((res) => {
                searchTab.classList.remove('search-tab-onerror')

                const data = res.data.data;
                descDiv.style.display = 'none';
                notFoundDiv.style.display = 'none';
                trackingDiv.style.display = 'flex';

                result1.innerText = data.packageName;
                result2.innerText = data.fromName + "\r(" + data.fromPhoneNo.slice(0, 3) + "-" + data.fromPhoneNo.slice(3, 7) + "-" + data.fromPhoneNo.slice(7) + ")";
                result3.innerText = data.toName + "\r(" + data.toPhoneNo.slice(0, 3) + "-" + data.toPhoneNo.slice(3, 7) + "-" + data.fromPhoneNo.slice(7) + ")";
                result4.innerText = data.departureTerminalName;
                result5.innerText = data.arrivalTerminalName;
                result6.innerText = data.toAddress;
                
                const stateList = data.stateList;
                const lastState = stateList[stateList.length - 1];

                if (lastState.title == 'FROM_RIDER_WAITING') {
                    state1.classList.add('circle-checked')
                    state1.style.backgroundImage = "url('../images/state_icon01_over.png')";
                    stateTitle1.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'FROM_RIDER_SELECTED') {
                    state1.classList.add('circle-checked')
                    state1.style.backgroundImage = "url('../images/state_icon01_over.png')";
                    stateTitle1.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'FROM_RIDER_RUNNING') {
                    state2.classList.add('circle-checked')
                    state2.style.backgroundImage = "url('../images/state_icon02_over.png')";
                    stateTitle2.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'FROM_PACKAGESERVICE_STORED') {
                    state3.classList.add('circle-checked')
                    state3.style.backgroundImage = "url('../images/state_icon03_over.png')";
                    stateTitle3.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'BUS_RUNNING') {
                    state4.classList.add('circle-checked')
                    state4.style.backgroundImage = "url('../images/state_icon04_over.png')";
                    stateTitle4.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'TO_PACKAGESERVICE_STORED') {
                    state5.classList.add('circle-checked')
                    state5.style.backgroundImage = "url('../images/state_icon05_over.png')";
                    stateTitle5.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'TO_RIDER_WAITING') {
                    state5.classList.add('circle-checked')
                    state5.style.backgroundImage = "url('../images/state_icon05_over.png')";
                    stateTitle5.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'TO_RIDER_SELECTED') {
                    state5.classList.add('circle-checked')
                    state5.style.backgroundImage = "url('../images/state_icon05_over.png')";
                    stateTitle5.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'TO_RIDER_RUNNING') {
                    state6.classList.add('circle-checked')
                    state6.style.backgroundImage = "url('../images/state_icon06_over.png')";
                    stateTitle6.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'TO_RIDER_DELIVERED') {
                    state7.classList.add('circle-checked')
                    state7.style.backgroundImage = "url('../images/state_icon07_over.png')";
                    stateTitle7.classList.add('circle-titles-div-checked')
                }
                else if (lastState.title == 'END') {
                    state7.classList.add('circle-checked')
                    state7.style.backgroundImage = "url('../images/state_icon07_over.png')";
                    stateTitle7.classList.add('circle-titles-div-checked')
                }
                else { // 취소

                }

                statusTable.innerHTML = '';
                const tr = document.createElement('tr');
                const th1 = document.createElement('th');
                th1.innerText = '단계';
                const th2 = document.createElement('th');
                th2.innerText = '처리시간';
                const th3 = document.createElement('th');
                th3.innerText = '상품상태';
                th3.style.width = '60%';

                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);

                statusTable.appendChild(tr);    

                for (var i=0;i<stateList.length;i++) {
                    const state = stateList[i];
                    const tr = document.createElement('tr');
                    const td1 = document.createElement('td');
                    td1.innerText = getTitle(state.title);
                    const td2 = document.createElement('td');
                    td2.innerText = state.createdAt.replace("T", " ");
                    const td3 = document.createElement('td');
                    td3.innerText = getDescription(state.title);
                    td3.style.textAlign = 'left'

                    tr.appendChild(td1);
                    tr.appendChild(td2);
                    tr.appendChild(td3);
                    statusTable.appendChild(tr);    
                }
            })
            .catch((e) => {
                descDiv.style.display = 'none';
                notFoundDiv.style.display = 'flex';
                trackingDiv.style.display = 'none';
            })
    }

    const searchInput = document.getElementById('searchInput');
    searchInput.onkeyup = () => {
        if (window.event.keyCode == 13) {
            onSearch();
        }
    }

    searchButton.onclick = onSearch
});

function getTitle(state) {
    if (state == 'FROM_RIDER_WAITING') {
        return "배송신청";
    }
    else if (state == 'FROM_RIDER_SELECTED') {
        return "[출발지 라이더]\r픽업대기";
    }
    else if (state == 'FROM_RIDER_RUNNING') {
        return "[출발지 라이더]\r배송";
    }
    else if (state == 'FROM_PACKAGESERVICE_STORED') {
        return "[출발지 터미널]\r입고";
    }
    else if (state == 'BUS_RUNNING') {
        return "[버스]\r배송";
    }
    else if (state == 'TO_PACKAGESERVICE_STORED') {
        return "[도착지 터미널]\r입고";
    }
    else if (state == 'TO_RIDER_WAITING') {
        return "[도착지 라이더]\r콜 선택대기";
    }
    else if (state == 'TO_RIDER_SELECTED') {
        return "[도착지 라이더]\r픽업대기";
    }
    else if (state == 'TO_RIDER_RUNNING') {
        return "[도착지 라이더]\r배송";
    }
    else if (state == 'TO_RIDER_DELIVERED') {
        return "배송완료";
    }
    else if (state == 'END') {
        return "배송완료";
    }
    else { // 취소
        return "취소";
    }
}

function getDescription(state) {
    if (state == 'FROM_RIDER_WAITING') {
        return "배송이 신청되었습니다.";
    }
    else if (state == 'FROM_RIDER_SELECTED') {
        return "소화물을 인수 받았습니다.";
    }
    else if (state == 'FROM_RIDER_RUNNING') {
        return "출발지 라이더가 소화물을 배송 중입니다.";
    }
    else if (state == 'FROM_PACKAGESERVICE_STORED') {
        return "출발지 터미널에 소화물이 입고되었습니다.";
    }
    else if (state == 'BUS_RUNNING') {
        return "소화물이 시외버스에 상차되어 배송 중입니다.";
    }
    else if (state == 'TO_PACKAGESERVICE_STORED') {
        return "도착지 터미널에 소화물이 입고되었습니다.";
    }
    else if (state == 'TO_RIDER_WAITING') {
        return "도착지 라이더의 콜 선택을 대기중입니다.";
    }
    else if (state == 'TO_RIDER_SELECTED') {
        return "도착지 라이더 콜이 할당되었습니다.";
    }
    else if (state == 'TO_RIDER_RUNNING') {
        return "도착지 라이더가 소화물을 배송 중입니다.";
    }
    else if (state == 'TO_RIDER_DELIVERED') {
        return "배송이 완료 되었습니다.";
    }
    else if (state == 'END') {
        return "배송이 완료 되었습니다.";
    }
    else { // 취소
        return "취소 요청 되었습니다.";
    }
}

$(document).ready(function () {
    alert("운송장 번호 조회 기능은 수정 작업중입니다.");
    
    $("#main-logo").click(function(){
        window.location.href = "index.html";
    });
    $("#contact").click(function(){
        window.location.href = "contact.html";
    });
    $("#info").click(function(){
        window.location.href = "info.html";
    });
    $("#bottomLogo").click(function(){
        window.location.href = "index.html";
    });
    $("#moinfo").click(function(){
        window.location.href = "info.html";
    });
    $("#momain").click(function(){
        window.location.href = "index.html";
    });
    $("#mocontact").click(function(){
        window.location.href = "contact.html";
    });

    $(window).resize(function(){
        $("#ham-menu-tab").stop(true).hide();
    });

    $("#ham-menu-openbtn").click(function(){
        $(".ham-menu-tab").stop(true).fadeIn(500);
    });

    $("#ham-menu-closebtn").click(function(){
        $(".ham-menu-tab").stop(true).fadeOut(500);
    });

});

$(window).resize(function(){
    const windowSize = $(window).width();

    if(windowSize < 769){
        $("#searchInput").attr('placeholder', "' - '를 제외한 운송장번호 입력");
    }

    else{
        $("#searchInput").attr('placeholder', "' - '를 제외한 숫자만 입력해주세요");
    }
});

