$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
})

$(function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getinlanddiscount",
        type:"GET",
        dataType:"Json",
        
        success: function(res) {
            var htmlLi =template("tpl",res);
            // console.log(htmlLi);
            $(".products").html(htmlLi);
        }
    })
    $('.products').on("click",".product",function(){
        var id=$(this).data("id");
        window.location.href="./inlanddiscount1.html?productId="+id;
        
    })

})


