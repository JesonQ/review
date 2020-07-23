// 导入   
/* 
  路径:
  ./     ---> 当前目录,同一级
  ../    ---> 上一级
  /复习  ----> 进入复习文件夹
*/


// 引入本地资源
let m1 = require("./m1")
console.log(m1())

let m2 = require("./m2")
console.log(m2.bar())

// 引入npm包
let $ = require("jquery")
$("body").css("background","pink")

