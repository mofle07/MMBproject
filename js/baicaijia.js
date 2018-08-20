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
            // console.log(res);
            var html=template("tpl1",{list:res.result});
            $('.swiper-wrapper').html(html);
        }
    })
        // tab栏切换
        // $(".swiper-wrapper a").mouseenter(function(){
        //     alert("a");
        //     $(this).addClass("active").parent().siblings().children().removeClass("active");
            // var index=$(this).parent().index();
            // $(".products").eq(index).addClass("selected").siblings().removeClass("selected");
        // })
        // tab栏切换
        $(".swiper-wrapper").on("mouseenter","a",function(){
           $(this).addClass("active").parent().siblings().children().removeClass("active");
            var index=$(this).parent().index();
            $(".products").eq(index).addClass("selected").siblings().removeClass("selected");
            var titleId=$(this).data("id");
            // console.log(titleId);
            productDetail(titleId);
        })
    
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