let scrollToElement = (el, ms) => {
    let speed = (ms) ? ms : 600;

    $("html,body").animate({
        scrollTop: $(el).offset().top
    }, speed);
}
$(document).ready(function () {
    const banner = document.getElementsByClassName('ui fluid image');
    new simpleParallax(banner);
})

$("#aboutBtn").on('click', function () {
    scrollToElement("#about", 1200);
});

$("#productBtn").on('click', function () {
    scrollToElement("#product", 1200);
});

$("#contactBtn").on('click', function () {
    scrollToElement("#contact", 1200);
});

$(".ui.embed").embed({source: 'youtube'});