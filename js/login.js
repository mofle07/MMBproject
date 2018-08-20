$(function () {
    
    //点击登录,验证表单
    $('#signup').click(function () {
        var username = $('input[name=username]').val();
        console.log(username);
        var password = $('input[name=password]').val();
        if (username.length == 0) {
            mui.toast("请输入用户名/手机号");
            return;
        }
        if (password.length == 0) {
            mui.toast("请输入密码");
            return;
        }

        // $.ajax({
        //     url: "/user/login",
        //     type: "post",
        //     data: $('form').serialize(),
        //     success: function (res) {
        //         if (res.success) {
        //             window.history.back();
        //         }
        //     }

        // })
    })
})