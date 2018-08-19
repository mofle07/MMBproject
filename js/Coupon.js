$(function(){
    $.ajax({
        url:'http://mmb.ittun.com/api/getcoupon',
        type:"GET",
        success:function(res){
            console.log(res);
            var htmlStr = template("tpl",{list:res.result});
            console.log(htmlStr);
            $(".list").html(htmlStr);

        }
    })

    //点击返回箭头返回首页
    $(".back").click(function(){
        window.location.href = "index.html";
    })

    //单击优惠券标题，携带id跳转到优惠列表
    $(".list").on("click",".list > a",function(){
        
    })
})