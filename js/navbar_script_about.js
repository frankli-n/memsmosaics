$(window).scroll(function() {
    if ($(document).scrollTop() > 1){
        $('.nav').addClass('affix');
        console.log("OK");
    }
});

$('.navTrigger').click(function () {
    $(this).toggleClass('active');
    console.log("Clicked menu");
    $("#mainListDiv").toggleClass("show_list");
    $("#mainListDiv").fadeIn();

});

// var prevScrollpos = window.pageYOffset;
// window.onscroll = function() {
//   var currentScrollPos = window.pageYOffset;
//   if (prevScrollpos > currentScrollPos) {
//     document.getElementById("navbar").style.top = "-50px";
//   } else {
//     document.getElementById("navbar").style.top = "0";
//   }
//   prevScrollpos = currentScrollPos;
// } 