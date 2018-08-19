$(function(){
    var url=location.href;
   var id=url.split('=')[0];
    
    // 封装一个函数来显示评论
    function renderComment(id) { 
        $.get({
            url:"http://mmb.ittun.com/api/getproductcom",
            data:{productid:id},
            dataType:'json',
            success:function (res) {
                console.log(typeof(res))
                var htmlstr=template('comments',{list:res.result});
                $('.main').html(htmlstr);
              }
     })
    }
    renderComment(1)  
})