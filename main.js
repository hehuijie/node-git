'use strict';
/**
 * 判断JavaScript执行环境
 * 有很多JavaScript代码即能在浏览器中执行，也能在node环境执行，但有些时候，程序本身需要判断自己到底是在什么环境下执行的，
 * 常用的方式就是根据浏览器和node环境的全局变量来判断
 */
if(typeof(window) === 'undefined'){
    console.log('node.js');
    var greet = require('./helloNodeJs');
    var s = 'Michael';
    greet(s);
    
    process.nextTick(function(){
        console.log('nextTick callback!');
    });
    console.log('nextTick was set!');
    /**
     * 程序即将退出时执行某个回调函数
     */
    process.on('exit',function(code){
        console.log('about to exit with code:'+code);
    })
}else{
    console.log('browser');
}