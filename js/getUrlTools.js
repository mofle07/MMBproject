  //url的关键字提取函数
  function urlTool(urlStr) {
    //1. 把url以？分割
    var arr = urlStr.split("?").pop().split("&");
    console.log(arr); //["proName=1", "page=1"]
    var query = {};
    arr.forEach(function(v) {
        var param = v.split("=");
        query[param[0]] = param[1];
    });

    return query;
}