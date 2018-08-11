'use strict';//使用严格模式
var s = 'hello';
function greet(name){
    console.log(s+','+name+'!');
}
// 把函数greet作为模块的输出暴露出去，其他模块就可以使用greet函数了
module.exports = greet;
/**
 * node.js是运行在服务区端的JavaScript环境，服务器程序和浏览器程序相比，最大的特点是没有浏览器的安全限制，而且，服务器
 * 程序必须能接受网络请求，读写文件，处理二进制内容，所以，node.js内置的常用模块就是为了实现基本服务器功能。这些模块在
 * 浏览器环境中是无法执行的，因为它们的底层代码是用c/c++在node.js运行环境中实现的
 */
/**
 * JavaScript有且仅有一个全局对象，在浏览器中是window对象，
 * 在node.js环境中，也有唯一的全局对象，叫global，该对象的属性和方法和浏览器环境中的window不同。
 * 进入node.js交互环境，可以直接输入：global.console查看
 */
/**
 * process也是node.js提供的一个对象，它代表当前node.js进程。通过process对象可以拿到许多有用信息
 * 例如在node.js交互环境中可输入：process === global.process
 * process.version/process.platform/process.arch
 * process.cwd()[//返回当前工作目录]
 * process.chdir('/xxx/xxx');[//切换当前工作目录]
 */
/**
 * JavaScript程序是由事件驱动执行的单线程模型，node.js也不例外。node.js不断执行响应事件的JavaScript函数，直到没有
 * 任何响应事件的函数可以执行，node.js就退出
 */