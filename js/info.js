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

    $("#tmoney").click(function(){
        window.open("https://www.tmoney.co.kr");
    });
    $("#atec").click(function(){
        window.open("https://www.atec.kr");
    });
    $("#bus").click(function(){
        window.open("https://tnap.co.kr");
    });
    $("#naps").click(function(){
        window.open("https://tnap.co.kr");
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
