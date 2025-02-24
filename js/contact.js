window.addEventListener('DOMContentLoaded', function() {

    const name = document.getElementById('name');
    const corp = document.getElementById('corp');
    const email = document.getElementById('email');
    const phone = document.getElementById('phone');
    const content = document.getElementById('content');
    const checkbox = document.getElementById('checkbox');
    const submit = document.getElementById('submit');

    const alert1 = document.getElementById('alert1');
    const alert2 = document.getElementById('alert2');

    submit.onclick = () => {
        if (!telValidChk(phone.value)) {
            alert1.classList.remove("display-none")
            alert2.classList.add("display-none")
            phone.classList.add("submit-onerror")
            alert('전화번호를 확인해주세요.')
            return;
        }
        if (!checkbox.checked) {
            alert2.classList.remove("display-none")
            alert1.classList.add("display-none")
            alert('개인정보 수집 및 이용 동의가 필요합니다.')
            return;
        }

        var templateParams = {
            title: `[오늘배송 제휴 문의]${name.value}님의 제휴 문의 메일입니다.`,
            option: "제휴 문의",
            name: name.value,
            companyName : corp.value,
            phone: phone.value,
            email: email.value,
            message: content.value
        };
    
        emailjs.send('service_jvx6i9o', 'template_260b3yb', templateParams, 'Nz8UwcNIeKsAT0Qqd').then(
            function (response) {
                alert1.classList.add("display-none")
                alert2.classList.add("display-none")

                alert("전송 완료")
            },
            function (error) {
                alert("전송 실패")
            },
        )
    

    }

});

const pattern = /^(01[016789]{1}|02|0[3-9]{1}[0-9]{1})-?[0-9]{3,4}-?[0-9]{4}$/;

function telValidChk(tel) {
	if(pattern.test(tel) === false) { return false; }
    else { return true; }
}

$(document).ready(function () {
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

