$(function () {

    mui('.mui-scroll-wrapper').scroll({
        options: {
            scrollY: false, //是否竖向滚动
            scrollX: true, //是否横向滚动
            startX: 0, //初始化时滚动至x
            startY: 0, //初始化时滚动至y
            indicators: true, //是否显示滚动条
            deceleration: 0.0006, //阻尼系数,系数越小滑动越灵敏
            bounce: true //是否启用回弹
        }
    });
    //  封装一个函数来渲染页面
    var page;

    function render(pageid) {
        $.get({
            data: {
                pageid: pageid
            },
            url: 'http://mmb.ittun.com/api/getmoneyctrl',
            success: function (res) {
                var htmlstr = template('product', res);
                $('.productslist ul').html(htmlstr);

                // 分页部分
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
                        render(page - 1);
                    }
                });
            }
        })
    };
    render(0);

    // 给底部的小叉叉添加点击事件
    $('.remove').click(function () {
        // 让app下载部分小时
        $('.app-bar').hide();
        $('.friendLink').css('opacity', 1)
    })
    //   给放回顶部添加点击事件
    $('.back').click(function () {
        document.documentElement.scrollTop = 0;

    })
    $('.nav a').eq(0).click(function () {
        location.href = './index.html'
    })

})