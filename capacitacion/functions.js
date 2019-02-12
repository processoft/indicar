$(document).ready(function () {

    $("body").on('click', '#lights', function () {
        $("body").add(this).toggleClass('night');
    });

     $("body").prognroll({
         height: 5, //Progress bar height
         color: "#F9A825",
     });

});
