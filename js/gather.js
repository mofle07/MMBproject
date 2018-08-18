$(function() {
    //获取凑单品的店铺的信息 并渲染到店铺的下拉列表
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsshop",
        type:"GET",
        dataType:"json",
        success:function(res) {
            console.log(res);

            var temp = template("shop",res);

            $(".select .left").html(temp);
            
        }
    });

    //用来获取凑单品的区域的信息 并渲染到区域的下拉列表
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsshoparea",
        dataType:"json",
        type:"GET",
        success:function(res) {
            console.log(res);

            var area = template('area',res);

            $(".drop ul").html(area);
            
        }

    });
 
    //点击店铺显示下拉列表  
    $(".left").on("click","a",function(){
        //transform移除无效
        //    $(".down").addClass("tr").siblings().removeClass("tr");
           $(this).addClass("active").siblings().removeClass("active");
        // $(".down").css({'transform':'rotate(180deg)'});
        if($(this).find(".mui-icon").hasClass("mui-icon-arrowdown")) {
            $(this).find(".mui-icon").addClass("mui-icon-arrowup").removeClass("mui-icon-arrowdown")
            if($(this).data("id") == 1) {
                    $(".drop").show();
            }
        }else{
            $(this).find(".mui-icon").addClass("mui-icon-arrowdown").removeClass("mui-icon-arrowup")
            if($(this).data("id") == 1) {
                $(".drop").hide();
        }
        }
      
       var id = $(this).data("id");  
       
    
          
        // if($(this).data("id") == 1) {
        //     $(".drop").show();
        // }else{
        //     $(".drop").hide();
        // }
        
    });
     
    

   

   


  
    

    //获取参数的id
    //给下拉列表添加点击事件

    $("ul").on("click","li",function(){
        
        //data是自定义属性
        var show = $(this).data("id");  
        
        render(1,show)

    });

  
    
    
   



    //商品展示

   function render(shop,area) {

    $.ajax({
        url:"http://mmb.ittun.com/api/getgsproduct",
        type:"GET",
        data:{
            shopid:shop,
            areaid:area
        },
        success:function(res) {
            console.log(res);

            var pro = template("product",res);
            

            $(".main").html(pro);
            
        }
    });
   }

   render(2,1);




   
   
  
   

   


})