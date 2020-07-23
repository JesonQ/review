(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 分别暴露

var name = exports.name = "guigu";
var foo = exports.foo = function foo() {
  console.log("m1----f00()");
};

// {
//   name,
//   foo
// }
},{}],2:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 统一暴露

var name = "大郎";
var food = "老婆饼";

exports.name = name;
exports.food = food;
},{}],3:[function(require,module,exports){
"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
// 默认暴露

// 框架中常用暴露方式
exports.default = {
  name: "金莲",
  age: 88
};
},{}],4:[function(require,module,exports){
"use strict";

var _m = require("./m1");

var m1 = _interopRequireWildcard(_m);

var _m2 = require("./m2");

var m2 = _interopRequireWildcard(_m2);

var _m3 = require("./m3");

var m3 = _interopRequireWildcard(_m3);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

// 导入

console.log(m1);
console.log(_m.name);
console.log(_m.foo);

console.log(m2);

console.log(_m2.name);

console.log(m3);

console.log(m3.default);

console.log(m3.default);
},{"./m1":1,"./m2":2,"./m3":3}]},{},[4]);
