$(function() {
  // 区域滚动初始化代码
  mui(".mui-scroll-wrapper").scroll();

  //按钮隐藏
  $("a").click(function() {
    //  alert("0")

    $(".footer").hide();
  });

  //返回顶部
  $("#back").click(function() {
    $("html,body").animate({ scrollTop: 0 }, "slow");
  });

  //一级清单渲染
  $.ajax({
    url: "http://mmb.ittun.com/api/getcategorytitle",
    //  dataType: "json",
    success: function(obj) {
      var html = template("categoryItem-modal", obj);
      $(".comparison").html(html);
      console.log(obj);
      $(".comparison").on("click", ".categoryItem", function() {
        //获取到大清单的id
        var sonid = $(this)
          .find(".title")
          .data("id");
      
       renderTwo(sonid);
      });
    }
  });

  //二级清单
  function renderTwo(sonid) {
    $.ajax({
        url: "http://mmb.ittun.com/api/getcategory",
        data: { titleid: sonid },
        success: function(obj) {
          var html = template("categoryItem", obj);
          console.log($(".categorylist"));
         $(".comparisonlist").html(html);
        }
      });
  }

  
  //给搜索页面一个点击事件
  $(".mui-btn").click(function() {
    //获取到input里面的值
    var inputid = $(".search").var();
  });

  //给二级清单一个点击事件
  $(".comparison").on("tap",".list",function(){
    //获取到所点击的id
    var listid=$(this).data("id");
    console.log(listid);
    //进入到商品展示页
    window.location.href="./Comparison-list.html?categoryId="+listid;

  })
});
