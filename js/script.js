var toggle = document.getElementById("toggle");
var navigation = document.getElementById("navigation");
var main = document.getElementById("main");
var container = document.getElementById("container");
var mode = document.getElementById("mode");
var body = document.querySelector("body");

$(document).ready(function() {
    $("figure").addClass("c4-izmir c4-border-vert c4-gradient-top c4-image-zoom-in");
    $("figcaption").addClass("c4-layout-center-center");
    $("figure figcaption > div").addClass("c4-reveal-right c4-delay-100");
    
    $("#onTop").click(function(event) {
        // event.preventDefault()
        $("html, body").animate({
            scrollTop: $("body").last().offset().top
        }, 800);
    })

});


toggle.addEventListener("click", function() {
    navigation.classList.toggle('active');
    main.classList.toggle('active');
})

mode.addEventListener('click', function() {
    body.classList.toggle('dark');
})

