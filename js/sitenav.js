$(function () {

    // 渲染数据
    render();
    function render() {
        $.ajax({
            url: "http://mmb.ittun.com/api/getsitenav",
            type:"GET",
            dataType: "json",
            success: function (res) {
                console.log(res);
                var html = template('sitenav',{list:res.result});
                $('.navList').html(html);
            }
        })
    }

    //点击图标返回首页
    $('.header').on('tap','#back',function () {
        window.history.back();
    })
})