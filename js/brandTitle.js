// 封装区域
//a. 渲染页面数据
function getbrandtitle() {

    $.ajax({

        url: "http://mmb.ittun.com/api/getbrandtitle",
        type: "get",
        success: function (res) {

            var htmlStr = template("brandTitleTmp", res);
            $('.brands').html(htmlStr);

        }
    })

}



// 执行区域
$(function () {

    // 一: 调用数据, 渲染页面
    getbrandtitle();



})