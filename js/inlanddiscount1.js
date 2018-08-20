$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
})
$(function(){
    function urlTool(urlStr) {
        //1. 把url以？分割
        var arr = urlStr.split("?").pop().split("&");
        console.log(arr); //["proName=1", "page=1"]
        var query = {};
        arr.forEach(function(v) {
            var param = v.split("=");
            query[param[0]] = param[1];
        });
    
        return query;
    }
    var url=location.href;
    console.log(urlTool(url));
    var query=urlTool(url);
    $.ajax({
        url:"http://mmb.ittun.com/api/getdiscountproduct",
        type:"get",
        data:{productid:query.productId},
        dataType:"json",
        success:function(res){
            console.log(res);
           
            var html=template("tpl2",res);
            $(".products").html(html);
            
        }
    })
})