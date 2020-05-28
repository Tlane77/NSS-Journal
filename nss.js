/*



*/


$(document).ready(function () {
    document.getElementById('textboxid').style.height = "200px";
    document.getElementById('textboxid').style.fontSize = "14pt";

    $(".dropdown").click(function () {
        $(".menu").toggleClass("showMenu");
        $(".menu > li").click(function () {
            $(".dropdown > p").html($(this).html());
            $(".menu").removeClass("showMenu");
        });
    });

});