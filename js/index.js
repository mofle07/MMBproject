$(function () {
    
    //请求头部导航栏数据
    $.ajax({
        url: "http://mmb.ittun.com/api/getindexmenu",
        type:"GET",
        dataType:"json",
        success: function (res) {
            console.log(res);
            var html = template('navList',{list:res.result});
            $('.navList').html(html);
        }
    });

    //点击图标更多,加载其它导航
    $('.navList').on('tap','.more',function () {
        var maxHeight = $('.navbar').css("maxHeight");
        if (maxHeight == "225px") {
             $('.navbar').animate({
                 maxHeight: 335,
             }, "normal");
             $(this).addClass('active');
        }else{
            $('.navbar').animate({
                maxHeight: 225,
            }, "normal");
            $(this).removeClass('active');
        }
    });


    render();
    //获取产品数据
    function render() {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrl",
            type:"GET",
            dataType:"json",
            success:function (res) {
                console.log(res);
                
                //获取评论数方法
                for (let i = 0; i < res.result.length; i++) {
                    var str = res.result[i].productComCount;
                    var strarr = parseInt(str.replace(/[^0-9]/ig, ""));
                    res.result[i].num = strarr;
                }
                //渲染数据
                var html = template('product',{list:res.result});
                $('.products').html(html);
            }
        })
    };


    //点击产品跳产品详情页
    $('.products').on('click','a',function () {
        var id = $(this).data('id');
        console.log(id);
        
        location.href = "./moneyctrlList.html?productId="+id;
    })


    //给每个li设置一个点击后改变背景是属性
     $('.navList').on('tap','li',function () {
         $(this).addClass('active').delay(1000).siblings().removeClass('active');
     });


})