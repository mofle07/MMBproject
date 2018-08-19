$(function () {
  // 渲染页面

  var pageid = 1;

  function render(pageid) {
    $.ajax({
      url: "http://mmb.ittun.com/api/getmoneyctrl",
      type: "get",
      dataType: "json",
      data: {
        pageid: pageid
      },

      success: function (res) {
        //   分页插件
        //   分页插件需要ajax完成之后，获取到数据之后来调用
        $("#paginator").bootstrapPaginator({
          bootstrapMajorVersion: 3, //指定bootstrap的版本，如果是3，必须指定
          currentPage: pageid, //指定当前页
          totalPages: Math.ceil(res.totalCount / res.pagesize)-1, //指定总页数
          size: "small", //设置控件的大小

          // 当点击分页组件按钮会调用该方法
          // index参数，就代表当前点击的是第几页
          onPageClicked: function (a, b, c, index) {
            //page指的是点击的页码,修改了当前页
            pageid = index;

            //每一次点击都会去发起ajax请求，获取数据，渲染数据
            render(pageid);
          }
        });

        var htmllist = template("savelist", res);
        $(".products").html(htmllist);
      }
    });
  }

  render(pageid);

  //   给每个产品添加点击事件跳转到详情页
  $(".products").on("click", ".product", function () {
    var productid = $(this).data("id");
    window.location.href = "./moneyctrllist.html?productid=" + productid;
  });

  // 给返回顶部添加点击事件
  $(".roll").click(function () {
    $(window).scrollTop(0);
  });
});

// 创建返回方法
function back() {
  window.history.back();
  alert("aaa");
}