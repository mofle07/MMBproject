$(function(){
    productDetail(0);
    //tab栏
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: false,//可选选项，自动滑动
        freeMode:true,//滑动不够一格，不会自动贴合
        slidesPerView:5,//设置slider容器能够同时显示的slides数量
    })

    //tab栏ajax请求
    $.ajax({
        url:"http://mmb.ittun.com/api/getbaicaijiatitle",
        type:"get",
        dataType:"json",
        success:function(res){
            console.log(res);
            var html=template("tpl1",{list:res.result});
            $('.mui-scroll').html(html);
        }
    })
        // tab栏切换

        $(".mui-scroll").on("tap", "a", function () {
           $(this).addClass("active").siblings().removeClass("active");
            var index=$(this).parent().index();
            $(".products").eq(index).addClass("selected").siblings().removeClass("selected");
            var titleId=$(this).data("id");
            // console.log(titleId);
            productDetail(titleId);
        })
    

         mui('.mui-scroll-wrapper').scroll({
             options: {
                 scrollY: false, //是否竖向滚动
                 scrollX: true, //是否横向滚动
                 startX: 0, //初始化时滚动至x
                 startY: 0, //初始化时滚动至y
                 indicators: true, //是否显示滚动条
                 deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
                 bounce: true //是否启用回弹
             }
         });



        //产品ajax请求
        function productDetail(id){
            $.ajax({
                url:"http://mmb.ittun.com/api/getbaicaijiaproduct",
                type:"get",
                data:{titleid:id},
                dataType:"json",
                success:function(res){
                    console.log(res);
                    var html=template("tplDetail",{list:res.result});
                    $(".products").html(html);
                }
            })
        }
        //返回到上一步
        $(".return").click(function(){
            window.history.back();
        })
        //返回到顶部
      
    
   

})