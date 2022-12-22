var signupBtn = document.getElementById("signupBtn")
var loginBtn = document.getElementById("loginBtn")
var forgetpwBtn = document.getElementById("forgetpwBtn")

$(".modal-button").click(function() {
    var target=$(this).data("target");
    $("html").addClass("is-clipped");
    $(target).addClass("is-active");
 });
 
 $(".modal-close").click(function() {
    $("html").removeClass("is-clipped");
    $(this).parent().removeClass("is-active");
 });
 
 document.getElementById("two").onclick=function() {showTab(this)};

 function pageRedirect() {
   window.location.href = "./userprofile.html";
 }      

function pageRefresh() {
 window.location.href = "./userlogin.html";
}

