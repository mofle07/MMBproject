$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    //渲染页面
    function render(productid) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getmoneyctrlproduct",
            type: "get",
            data: {
                productid: productid
            },
            success: function (res) {
                var htmllist = template('savedata', res);
                $('.mui-scroll').html(htmllist);


            
            }
        })
    }


    var url = window.location.href;

    url = url.split("?")[1].split("=")[1];
    console.log(url);

    render(url)



    // 给返回顶部添加点击事件
    $(".roll").click(function () {
        $('.mui-scroll').scrollTop(0);
    });



})



// 创建返回方法
function back() {
    window.history.back();

}