$(function() {

    setTimeout(function() {
        render(2,0);
    },1000);

    //获取凑单品的店铺的信息 并渲染到店铺的下拉列表
   function dr() {
    $.ajax({
        url:"http://mmb.ittun.com/api/getgsshop",
        type:"GET",
        dataType:"json",
        success:function(res) {
            var temp = template("shop",res);
            $(".select .left").html(temp);
            
        }
    });
   }

   dr();

    //用来获取凑单品的区域的信息 并渲染到区域的下拉列表
    function add() {
        $.ajax({
            url:"http://mmb.ittun.com/api/getgsshoparea",
            dataType:"json",
            type:"GET",
            success:function(res) {
                var area = template('area',res);
    
                $(".drop ul").html(area);
                
            }
    
        });
    }
 
    //点击店铺显示下拉列表  
    $(".left").on("click",".title",function(){   
        

        var sec = $(this).data("id");  
        console.log(sec);
        
        $(this).addClass("active").siblings().removeClass("active");
       
        if($(this).find(".mui-icon").hasClass("mui-icon-arrowdown")) {

        $(this).find(".mui-icon").addClass("mui-icon-arrowup").removeClass("mui-icon-arrowdown");

            if($(this).data("id") == 0) {

                $(".drop1").show();
                $(".drop").hide();
                $(".drop2").hide();
                $(".drop3").hide();
            }

            if($(this).data("id") == 1) {
                add();
                $(".drop").show();
                $(".drop1").hide();
                $(".drop2").hide();
                $(".drop3").hide();
            }
            
             if($(this).data("id") == 2) {

                $(".drop2").show();
                $(".drop").hide();
                $(".drop1").hide();
                $(".drop3").hide();
            }
            
        }else{
            $(this).find(".mui-icon").addClass("mui-icon-arrowdown").removeClass("mui-icon-arrowup");
                     
            if ($(this).data("id") == 0) {
                $(".drop1").hide();
            }

            if ($(this).data("id") == 1) {
                $(".drop").hide();
            }

            if ($(this).data("id") == 2) {
                $(".drop2").hide();
            }

        }

        $("#ul1").on("click","li",function(){
               
        var sh = $(this).data("id");  

        $("#nav .true").addClass("mui-icon-checkmarkempty");

        $(this).addClass("mui-icon-checkmarkempty").siblings().children(".true").hide();

     

        // $(".banner").hide();

        $(".drop").hide();
        var  DIV = document.createElement("div");

         DIV.innerHTML = "<div class='rotate'></div>";
         
         $(".main").html(DIV);

        $(".rotate").css({"zIndex": 1000, "opacity": 1});

           //让菊花停止
           setTimeout(function() {
            $(".rotate").css({"zIndex": 0, "opacity": 0});

        }, 2000);
        

         setTimeout(function(){

     //让菊花转动
     
         render(sec,sh);     
        },2000);     

     });

    
        
    });

    

    $(".main").on("click",".there",function() {
        
      window.location.href = "./Togsproduct.html";
    })
    

    //right点击按钮
    
    
    $(".select .right ").click(function() {
        $(".drop3").show(); 
        $(".drop").hide(); 
        $(".drop1").hide(); 
        $(".drop2").hide(); 

    });

    $("#ul4 .desc span").click(function() {
        
        $(this).addClass("ligth").siblings().removeClass("ligth");
    })

    $("#ul4 .cate a").click(function() {
        
        $(this).addClass("ca").siblings().removeClass("ca");
    })




    $("#ul2").on('click','li',function() {

        $("#ul2").html("");       
        var content = $(this).text();    
           
        $(".tex").text(content);

        $('.drop1').show();

        
    });

    $("#ul3 li a").mousedown(function() {

        $("#ul3").html("");       
        var content = $(this).html();    
                  
        $(".ttx").text(content);       
        
    })
      

    //获取参数的id
    //给下拉列表添加点击事件
    //商品展示
   function render(shop,area) {
    
     //让菊花转动
     $(".mask").css({"zIndex": 100, "opacity": 1});

    $.ajax({
        url:"http://mmb.ittun.com/api/getgsproduct",
        type:"GET",
        data:{
            shopid:shop,
            areaid:area
        },
        success:function(res) {

            var pro = template("product",res);
            
            $(".main").html(pro);   
            
            $(".drop").hide();

            $(".txt").html("区域");
            $(".ttx").html("1-10元");

            //让菊花停止
            setTimeout(function() {
                $(".mask").css({"zIndex": 0, "opacity": 0});

            }, 2000);
            
        }
    });
   }

   

})