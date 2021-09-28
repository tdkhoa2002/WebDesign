var images_small = document.querySelectorAll(".images_small > img");


var img = document.getElementById('image');

images_small.forEach(image => {
    let url_image = image.getAttribute('src');
    image.onmouseover = event => {
        event.preventDefault();
        img.setAttribute('src',url_image);
    }
})

var button_plus = document.querySelector('.increment-btn');
var button_minus = document.querySelector('.reducement-btn');
var counter = document.querySelector('.counter');

button_plus.addEventListener('click', function(){
  counter.value = parseInt(counter.value) + 1;
});
button_minus.addEventListener('click', function(){
    if(counter.value > 1) {
        counter.value = parseInt(counter.value) - 1;
    }
  });

$(document).ready(function() {
    $("#main #product #detail_product #description #stat a").click(function(event) {
        var id = $(this).attr("href")
       
        $("html, body").animate({
            scrollTop: $(id).last().offset().top
        }, 1000)
    })
})