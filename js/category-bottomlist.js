$(function () {
    //   底部消失
    $(".mask-right a").click(function () {
        // alert(0)
        $(".mask").hide();
    });
    //底部固定不动消失
    $(".bottom a").click(function () {
        alert(0);
        $(".bottom").hide();
    });

    //返回顶部
    $("#back").click(function () {
        $("html,body").animate({
            scrollTop: 0
        }, "slow");
    });



    //分析url拿到id
    var url = location.href;
    var query = urlTool(url);
    console.log(query);

    //拿到当前商品的id
    var pid = query[0];;
    var categoryid = query[1];
    console.log(pid)

    function reden(id) {
        $.ajax({
            url: "http://mmb.ittun.com/api/getproduct",
            data: {
                productid: id
            },
            success: function (obj) {
                console.log(obj);

                var html = template("pinglun", obj);
                $(".details").html(html);
            }
        });
    }
    reden(pid);



    $.ajax({
        url: "http://mmb.ittun.com/api/getproductcom",
        data: {
            productid: pid
        },
        success: function (obj) {
            console.log(obj);

            var html = template("pinglunlist", obj);
            $(".disguess").html(html);
        }
    })

    //给导航一个点击事件
    //导航的全部分类一个点击事件,跳转到比价搜索的主页
    $(".breadcrumb").on("tap", ".tow", function () {
        window.location.href = "./category.html";
    })


    $.ajax({
        url: "http://mmb.ittun.com/api/getcategorybyid",
        data: {
            categoryid: categoryid,
        },
        success: function (obj) {
            console.log(obj);

            if (obj.result.length != 0) {
                var html = template("daohang", obj);
                $(".breadcrumb").html(html);
                sessionStorage.setItem('categoryName', obj.result[0].category)
            } else {
                var cname = sessionStorage.getItem('categoryName')
                obj.result.push({
                    category: cname
                });
                obj.result[0].categoryId = categoryid;
                console.log(obj);
                var html = template("daohang", obj);
                $(".breadcrumb").html(html);

            }
        }
    })

    //给导航区加一个active,变色
    $(".details").on("tap", ".product a", function () {
        // alert("0")
        $(this)
            .addClass("active")
            .siblings()
            .removeClass("active");
    })

    //给查看更多评论
    $(".more").click(function () {
        mui.toast('暂无查看更多评论功能');
    })

    //点击优秀评论
    $(".details").on("click", ".comment", function () {
        window.location.href = "./category-goodlist.html?productId=" + $(this).data("id") + "&categoryid=" + categoryid;
    })



});