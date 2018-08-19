$(function(){
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 点击隐藏固定消息框
    $("#hidden a").click(function(){
        $("#hidden").hide()
    })

    // 滑块
    $("#slect").click(function(){
        $(".slide").show()

    })
    $("#close").click(function(){
        $(".slide").hide();
    })

     //url的关键字提取函数
  function urlTool(urlStr) {
    //1. 把url以？分割
    var arr = urlStr.split("?").pop().split("&");
    console.log(arr); //["proName=1", "page=1"]
    var query = {};
    arr.forEach(function(v) {
        var param = v.split("=");
        query[param[0]] = param[1];
    });

    return query;
}
// var url = location.href;
// var query = urlTool(url);
// var pid = query.id;


    // 导航
    // $.ajax({
    //     url:"http://mmb.ittun.com/api/getcategorybyid",
    //     type:"get",
    //     data:{categoryid:1},
    //     success:function(res){
    //         console.log(res);
    //         var htmlStr = template("navTem",res);
    //         console.log(htmlStr);
    //         $(".nav").html(htmlStr);
    //     }
    // })
   
    var page = 1
    //列表
    function rend(){
        $.ajax({
            url:"http://mmb.ittun.com/api/getproductlist",
            data:{categoryid:1,pageid:page},
            success:function(res){
                console.log(res)
                var htmlStr = template("listTem",res);
                $(".list").html(htmlStr);
    
            }
        }) 
    
    }
    rend(page)

   
    // 页码
    $.ajax({
        url:"http://mmb.ittun.com/api/getproductlist",
        data:{categoryid:1,pageid:page},
        success:function(res){
            $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion: 3,//指定bootstrap的版本，如果是3，必须指定
                currentPage: page,//指定当前页
                totalPages: Math.ceil(res.totalCount / res.pagesize),//指定总页数
                size: "small",//设置控件的大小
            
                //当点击分页组件按钮会调用该方法
                //index参数，就代表当前点击的是第几页
                onPageClicked: function (a, b, c, index) {
                  //page指的是点击的页码,修改了当前页
                  page = index;
            
                  //每一次点击都会去发起ajax请求，获取数据，渲染数据
                  rend(page );
                }
            });
            
            console.log(res)
            var htmlStr = template("listTem",res);
            $(".list").html(htmlStr);

        }
    }) 
    
    


 
  


  
   
})