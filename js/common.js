 $(function () {
     $(".footer-nav").on('mouseenter', 'li', function () {
         $(this).addClass('active').siblings().removeClass('active');
         //console.log("haha1");

     })
 })