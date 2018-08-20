$(function(){
    // 从url 中获得产品id
    var url=location.href;
   var id=url.split('=')[1];
    console.log(id);
    
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
    //renderComment(id)
    renderComment(1)  
})