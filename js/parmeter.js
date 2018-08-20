$(function(){
    $.ajax({
        url:"http://mmb.ittun.com/api/getproduct",
        data:{productid:1},
        success:function(res){
            //console.log(res);
            res.result[0].categoryname = pid;
            var htmlStr = template("mainTem", res);
            $(".detail").html(htmlStr);
             var htmlStr = template("daohang", res);
             $(".navs").html(htmlStr);
            
        }
    });

  // 导航
   //   //分析url拿到id
   var url = location.href;
   //console.log(url);
   
   var query = urlTool(url);
    //console.log(query);
    
   //拿到当前商品的id
   var pid = query[0];
   var categoryid = query[1];
   //console.log(pid)
  

  



})