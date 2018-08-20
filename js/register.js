$(function () {

    // 表单验证

    // a 给提交按钮添加事件,提交数据
    $('.register').on('tap', '#signup', function () {
        $('form').submit();
    })

    // b 判断登录信息是否正确
    $("form").bootstrapValidator({
        //2. 指定校验时的图标显示，默认是bootstrap风格
        feedbackIcons: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
        //3. 指定校验字段
        fields: {
            //校验用户名，对应name表单的name属性
            username: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '用户名不能为空'
                    },
                }
            },
            password: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '密码不能为空'
                    },
                    stringLength: {
                        min: 6,
                        max: 20,
                        message: '密码长度必须在6到30之间'
                    },
                }
            },
            phonenum: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '手机号不能为空'
                    },
                }
            },
            email: {
                validators: {
                    //不能为空
                    notEmpty: {
                        message: '邮箱不能为空'
                    },
                }
            },

        }
    });

    // c 点击添加,确认后添加数据到数据库
    $("form").on('success.form.bv', function (e) {
        location.href = "./login.html";
    })
})