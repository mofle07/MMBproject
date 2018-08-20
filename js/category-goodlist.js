$(function(){
    //
    var url=location.href;
    
    var query=urlTool(url);
    console.log(query)
    //拿到当前商品的id
    var pid=query.productId;
    function reden(id) {
        $.ajax({
          url: "http://mmb.ittun.com/api/getproduct",
          data: { productid: id },
          success: function(obj) {
            console.log(obj);
            var html = template("pinglun", obj);
            // console.log(html);
            $(".details").html(html);
          }
        });
      }
      reden(pid);
    
    
    
      $.ajax({
          url:"http://mmb.ittun.com/api/getproductcom",
          data:{ productid:1},
          success:function(obj){
           
              var html=template("pinglunlist",obj);
            //   console.log(html);
                 $(".disguess").html(html);
          }
      })

       //给导航一个点击事件
      //导航的全部分类一个点击事件,跳转到比价搜索的主页
  $(".breadcrumb").on("tap",".tow",function(){
    window.location.href="./category.html";
})

  // 获取到首页的id和上一页的id
      //   var url1=window.location.href;
      //   console.log(url1)
      //   var query1=urlTool(url);
      //   var pid1=query1.categoryId;
      //   console.log(pid1)
      $.ajax({
          url:"http://mmb.ittun.com/api/getcategorybyid",
          data:{
              categoryid:pid,
          },
          success:function(obj){
   
              var html=template("daohang",obj);
              $(".breadcrumb").html(html)
          }
      })



      //点击全部值得购买时需要他的top为o
    //   $(".details ").on("tap",".top",function(){
    //     //   alert("0")
    //       $(".disguess").animate({
    //           height:0
    //       })
    //   })


    
//搜索功能保存读取搜索记录
//获取本地存储的数据
function getKeysArr() {
    var arr = [];
    var keysStr = localStorage.getItem("searchKeywords");
    if (keysStr) {
        arr = JSON.parse(keysStr);
    }

    return arr;
}

function saveHistory(arr) {
    localStorage.setItem("searchKeywords", JSON.stringify(arr));
}
//1. 首次进入页面， 获取数据，渲染页面
var keysArr = getKeysArr();
renderHistory(keysArr);

//2. 点击搜索， 存储关键字，并且重新渲染页面
$(".aginbtn").click(function() {
    var keysArr = getKeysArr();
    var keyword = $(".text input").val();
    if (keyword.length == 0) return;
    keysArr.push(keyword);

    //数组去重
    keysArr = keysArr.norepeat();

    //把新数组存起来
    saveHistory(keysArr);

    //重新渲染页面
    renderHistory(keysArr);

    //开始搜索
    beginSearch(keyword);
});

})