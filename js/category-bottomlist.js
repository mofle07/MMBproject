$(function() {
    //   底部消失
      $(".mask-right a").click(function() {
        // alert(0)
        $(".mask").hide();
      });
      //底部固定不动消失
      $(".bottom a").click(function() {
        alert(0);
        $(".bottom").hide();
      });
    
      //返回顶部
      $("#back").click(function() {
        $("html,body").animate({ scrollTop: 0 }, "slow");
      });
    
    
    
    //   //分析url拿到id
    // var url=location.href();
    // var query=getUrlTools(url);
    
    // //拿到当前商品的id
    // var pid=query.categoryId;
    
    
      function reden(id) {
        $.ajax({
          url: "http://mmb.ittun.com/api/getproduct",
          data: { productid: id },
          success: function(obj) {
            console.log(obj);
            var html = template("pinglun", obj);
            //console.log(html);
            $(".details").html(html);
          }
        });
      }
      reden(1);
    
    
    
      $.ajax({
          url:"http://mmb.ittun.com/api/getproductcom",
          data:{ productid:1},
          success:function(obj){
           
              var html=template("pinglunlist",obj);
                
                 $(".disguess").html(html);
          }
      })
    
    //给导航一个点击事件
    
    // 获取到首页的id和上一页的id
    
    // 
    //以及
    $.ajax({
        url: "http://mmb.ittun.com/api/getcategory",
    // data:{productId:}
       success:function(obj){
    
        // 二级页面的
        // var url1=location.href;
        // var query1=getUrlTools(url1);
        // var shouye=query1.productId;
        
        $.ajax({
            url:"http://mmb.ittun.com/api/getcategorybyid",
            data:{
                categoryid:1,
            },
            success:function(obj){
                var html=template("daohang",obj);
                $(".breadcrumb").html(html)
            }
        })
       }
    })
    
        //给导航区加一个active,变色
    $(".details").on("tap",".product a",function(){
    // alert("0")
    $(this)
    .addClass("active")
    .siblings()
    .removeClass("active");
        }) 
    
    //给查看更多评论
    $(".more").click(function(){
        mui.toast('暂无查看更多评论功能');
    })

    //点击优秀评论
    $(".details").on("click",".comment",function(){
        window.location.href="./category-goodlist.html"
    })
    //点击登录,验证表单
    $('#signup').click(function () {
        var username = $('input[name=username]').val();
        console.log(username);
        var password = $('input[name=password]').val();
        if (username.length == 0) {
            mui.toast("请输入用户名/手机号");
            return;
        }
        if (password.length == 0) {
            mui.toast("请输入密码");
            return;
        }

});

    
    });
    

    