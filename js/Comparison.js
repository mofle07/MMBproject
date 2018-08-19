$(function(){
     // 区域滚动初始化代码
     mui('.mui-scroll-wrapper').scroll();

     //按钮隐藏
     $("a").click(function(){
        //  alert("0")

        $(".footer").hide();
     })
     
     //清单
     $.ajax({
         url:"http://mmb.ittun.com/api/getcategorytitle",
         dataType: "json",
         success:function(obj){
             
         }
     })
})