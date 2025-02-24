window.addEventListener('DOMContentLoaded', function() {
    const mainLogo = document.getElementById('main-logo');
    mainLogo.onclick = () => {
        location.href = "/"
    };

    const contact = document.getElementById('contact');
    contact.onclick = () => {
        location.href = "/contact"
    };

    const info = document.getElementById('info');
    info.onclick = () => {
        location.href = "/info"
    };

    const bottomLogo = document.getElementById('bottomLogo');
    bottomLogo.onclick = () => {
        location.href = "/"
    };

    
    const momain = document.getElementById('momain');
    momain.onclick = () => {
        location.href = "/"
    };

    const moinfo = document.getElementById('moinfo');
    moinfo.onclick = () => {
        location.href = "/info"
    };

    const mocontact = document.getElementById('mocontact');
    mocontact.onclick = () => {
        location.href = "/contact"
    };

});


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