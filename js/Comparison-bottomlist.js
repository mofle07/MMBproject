$(function(){
    //底部消失
    $(".mask-right a").click(function(){
        // alert(0)
        $(".mask").hide();
    })
    //底部固定不动消失
    $(".bottom a").click(function(){
        alert(0)
        $(".bottom").hide();
    })
    $(".product-title  .product-title1 ").click(function(){
        // alert("0")
        $(this).addClass("active").siblings().removeClass("active")
    })


    // $(".product .product-title .parameter").click(function(){
    //     alert(0)
    //     $(".product-list .right").css('display','block').siblings().css('display','none')
    // })
    // // $(".product .product-title .parameter").click(function(){
    // //     alert(0)
    // //     $(".product-list .right").css('display','block').siblings().css('display','none')
    // // })
})