// 封装区域
//a. 渲染页面数据
function getProduct(pageIndex) {

    // 获取地址栏中的参数
    var param = getParam();
    param.pagesize = 4;

    $.ajax({

        url: "HTTP://mmb.ittun.com/api/getbrandproductlist",
        type: "get",
        data: param,
        success: function (res) {

            // 因为传回来的数据已经是一个JSON对象,所以转换报错
            // var resObj = JSON.parse(res);
            //报错: Uncaught SyntaxError: Unexpected token o in JSON at position 1

            // 内容数据渲染
            var htmlStr = template("productTmp", res);
            $('.productlist').html(htmlStr);


        }
    })

}





// 执行区域
$(function () {

    // 一: 调用数据, 渲染页面
    getProduct();



})