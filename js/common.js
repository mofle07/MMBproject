// A.封装区域 -----------------------

//a. URL中的参数获取(可适配单个/多个参数) - 周
function getParam(){

    // 获取 Url地址
    var urlStr = location.href;
    // ? 后提取
    var paramStr  = urlStr.split('?')[1];
    // & 提取
    var paramsArr  = paramStr.split('&');
    // 参数对象初始化
    var param = {};  
    
    // 对提取到的参数组进行对象转换, v: 数组内容 i:内容对应下标
    paramsArr.forEach(function(v,i){
        // 将内容按 = 切割
        var paramArr = v.split('=');
        // 用[] 方法, 给param对象
        param[paramArr[0]] = Number(paramArr[1]);

    })
    // console.log(param);   
    return param; 
}



// B.执行区域 -------------------------------
$(function () {

    // B.1-------------------------- 组件调用区域

    // 区域滚动初始化代码 - 周
    mui('.mui-scroll-wrapper').scroll({
        deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });

    //  B.2-------------------------- 交互

    $(".footer-nav").on('mouseenter', 'li', function () {
        $(this).addClass('active').siblings().removeClass('active');
        //console.log("haha1");

    })


})
