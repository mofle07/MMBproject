// 封装区域
//a. 渲染页面数据
function getBrand() {

    // 获取地址栏中的参数
    var param =  getParam();
    console.log(param);
     //   //分析url拿到id
     var url = location.href;

     var query = urlTool(url);
     console.log(query);

     //拿到当前商品的id
     var pid = query[0];
     console.log(pid);
    
    $.ajax({

        url: "http://mmb.ittun.com/api/getbrand",
        type: "get",
        data: param,
        success: function (res) {
           
            // 因为传回来的数据已经是一个JSON对象,所以转换报错
            // var resObj = JSON.parse(res);
            //报错: Uncaught SyntaxError: Unexpected token o in JSON at position 1
            res.result.brandtitleid = pid;
            console.log(res);
            
            var htmlStr = template("brandTmp", res);
            
            //console.log(htmlStr);
            $('.brands').html(htmlStr);
            //console.log($('.brands'));
            
            //console.log(res);
        }
    })

}





// 执行区域
$(function () {

    // 一: 调用数据, 渲染页面
    getBrand();
    
    $()

})