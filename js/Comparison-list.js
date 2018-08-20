$(function () {
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
    // 点击隐藏固定消息框
    $("#hidden a").click(function () {
        $("#hidden").hide()
    })

    // 滑块
    $("#slect").click(function () {
        $(".slide").show()

    })
    $("#close").click(function () {
        $(".slide").hide();
    })


    //   //分析url拿到id
    var url = location.href;

    var query = urlTool(url);
    console.log(query);
    
    //拿到当前商品的id
    var pid = query[0];
    console.log(pid);

    var page = 1

    
    //列表
    function rend(id, page) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproductlist?",
            data: {
                categoryid: id,
                pageid: page
            },
            success: function (res) {

                var htmlStr = template("listTem", res);
                //console.log(htmlStr)
                $(".list").html(htmlStr);

            }
        })

    }
    // rend(pid, page)


    // 页码
    $.ajax({
        url: "http://mmb.ittun.com/api/getproductlist",
        data: {
            categoryid: pid,
            pageid: page
        },
        success: function (res) {
            $("#paginator").bootstrapPaginator({
                bootstrapMajorVersion: 3, //指定bootstrap的版本，如果是3，必须指定
                currentPage: page, //指定当前页
                totalPages: Math.ceil(res.totalCount / res.pagesize), //指定总页数
                size: "small", //设置控件的大小

                //当点击分页组件按钮会调用该方法
                //index参数，就代表当前点击的是第几页
                onPageClicked: function (a, b, c, index) {
                    //page指的是点击的页码,修改了当前页
                    page = index;

                    //每一次点击都会去发起ajax请求，获取数据，渲染数据
                    rend(pid, page);
                }
            });

            // console.log(res)
            var htmlStr = template("listTem", res);
            $(".list").html(htmlStr);

        }
    })


    //给二级清单一个点击事件
    $(".list").on("tap", "li", function () {
        // alert("0")
        //获取到所点击的id
        // var listid = $(this).data("id");
        //console.log(listid);
        // 进入到商品展示页
        var productid = $(this).data('id')
        console.log(productid);
        
        window.location.href = "./category-bottomlist.html?productId=" + productid + "&category=" + pid;

    })

    //返回顶部
    $("#back").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "slow");
    });






})