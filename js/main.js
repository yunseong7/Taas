$(document).ready(function () {
    alert("테스트 운송장 번호는 1234-1234-1234입니다.");
    
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


    function checkNumber(){
        var trackingNumber= $("#searchInput").val().replace(/[-\s]/g, "");

        if(trackingNumber !== null){
         if(trackingNumber === "123412341234"){
             $("#descDiv").css("display","none");
             $("#notFoundDiv").css("display","none");
             $(".main-tracking").css("display","flex");
         }
         else{
             $("#descDiv").css("display","none");
             $("#notFoundDiv").css("display","flex");
             $(".main-tracking").css("display","none");
         }
        }
        else{
             $("#descDiv").css("display","none");
             $("#notFoundDiv").css("display","flex");
             $(".main-tracking").css("display","none");
        }
    }

    $("#searchButton").click(function(){
        checkNumber();
    });

    $("#searchInput").on("keypress", function(e) {
        if (e.which === 13) {
            checkNumber();
        }
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

