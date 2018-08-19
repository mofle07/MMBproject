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
            var htmlLi =template("productslist",res);
            // console.log(htmlLi);
            $(".nam").html(htmlLi)
        }
    })
})

$(".main").on("click",".products",function(){
    console.log(11);
})

$(function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getdiscountproduct",
        type:"GET",
        dataType:"JSON",
        data:{
            productid: 1,
        },

        success: function(res) {
            var htmlLi = template("detailPage",res);

            // console.log(htmlLi);
            $(".content").html(htmlLi);

        }
    })
})

