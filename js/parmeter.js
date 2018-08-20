$(function () {

    //分析url拿到id
    var url = location.href;
    var query = urlTool(url);
    console.log(query);
    
    //拿到当前商品的id
    var pid = query[0];;
    // var categoryid = query[1];
    console.log(pid)







    $.ajax({
        url: "http://mmb.ittun.com/api/getproduct",
        data: {
            productid: pid
        },
        success: function (res) {
            console.log(res);
            res.result[0].categoryname = sessionStorage.getItem('categoryName');
            res.result[0].productid = pid;
            var htmlStr = template("mainTem", res);
            $(".detail").html(htmlStr);
            var htmlStr = template("daohang", res);
            $(".navs").html(htmlStr);
             var htmlStr = template("bijia", res);
             $(".tab").html(htmlStr);


        }
    });







})