$(document).ready(function(){
    $("div").hover(function() {
            $(this).animate({backgroundColor: 'yellow'}, 1000);
    }, function(){
        $(this).animate({backgroundColor: '#333'}, 1000);
    });
console.log("Hello");
