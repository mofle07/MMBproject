$(function(){

    var url = location.href;
    var couponid = urlTool(url);
    
    //发起ajax请求
    $.ajax({
        url:"http://mmb.ittun.com/api/getcouponproduct",
        type:"GET",
        data:{couponid:couponid},
        success:function(res){
            // console.log(res);
            var htmlstr = template("tpl",{list:res.result});
            $(".list").html(htmlstr);
        }
    })

    //url的关键字提取函数
    function urlTool(urlStr){
        var arr = urlStr.split("?").pop();  
        console.log(arr); 
        var coupon = arr.split("=")[1];
        return coupon;
    }

    
})