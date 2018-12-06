require("./index.scss");

$(function () {    
    setInterval(function () {
        $('.star-1').fadeOut(300).delay(200).fadeIn(500).fadeOut(500).delay(554);
        $('.star-2').fadeOut(300).fadeIn(400).fadeOut(1000).delay(920);
        $('.star-3').fadeOut(150).delay(100).fadeIn(500).fadeOut(650).delay(100);
        $('.star-4').fadeOut(700).fadeIn(300).fadeOut(500).delay(1350);
        $('.star-5').fadeOut(200).fadeIn(500).fadeOut(1000).delay(100);
        $('.star-6').fadeOut(150).delay(100).fadeIn(500).fadeOut(650).delay(100);
        $('.star-7').fadeOut(300).fadeIn(400).fadeOut(1000).delay(920);

        setTimeout(() => {
            $(".light").css("visibility","visible");
        }, 200);
        
        $('.light-1').fadeOut(300).delay(200).fadeIn(500).fadeOut(500).delay(554);
        $('.light-2').fadeOut(300).fadeIn(400).fadeOut(1000).delay(920);
        $('.light-3').fadeOut(150).delay(100).fadeIn(500).fadeOut(650).delay(100);
        $('.light-4').fadeOut(700).fadeIn(300).fadeOut(500).delay(1350);
        $('.light-5').fadeOut(200).fadeIn(500).fadeOut(1000).delay(100);
        $('.light-6').fadeOut(150).delay(100).fadeIn(500).fadeOut(650).delay(100);
        $('.light-7').fadeOut(300).fadeIn(400).fadeOut(1000).delay(920);
        $('.light-8').fadeOut(300).delay(200).fadeIn(500).fadeOut(500).delay(554);
    }, 1);
    
    new WOW().init();
});