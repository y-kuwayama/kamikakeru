
$(document).ready(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});
$(window).resize(function () {
    hsize = $(window).height();
    $("#s01").css("height", hsize + "px");
});
