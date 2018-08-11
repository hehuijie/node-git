'use strict';
var fs = require('fs');
/**
 * 异步读取文件
 * fs.txt文件必须在当前目录下，且文件编码为utf-8
 */
fs.readFile('fs.txt','utf-8',function(err,data){
    if(err){
        console.log(err);
    }else{
        console.log(data+'/*/');
    }
});
/**
 * 如果读取的不是文本文件，是二进制文件
 * 读取二进制文件时，不传入文件编码，回调函数的data参数将返回一个Buffer对象。
 * 在nodejs中Buffer对象就是一个包含零个货任意个字节的数组（和Array不同）
 * Buffer对象可以和string作转换 文本格式为utf-8
 * Buffer--->String   var text = data.toString('utf-8');
 * String --->Buffer  var buf = Buffer.from(text,'utf-8')
 */
fs.readFile('fs.jpg',function(err,data){
    if (err) {
        console.log(err);
    }else{
        console.log(data);
        console.log(data.length + 'bytes***');
    }
})
/**
 * 同步读取 fs也提供相应的同步读取函数，同步读取的函数和异步函数相比，多了一个Sync后缀，并且不接收回调函数，函数直接返回结果
 * 报错用try...catch
 */
try {
    var data = fs.readFileSync('fs.txt','utf-8');
    console.log(data);
} catch (error) {
    console.log(error);
}
try {
    var bufferData = fs.readFileSync('fs.jpg');
    console.log(data);
    console.log(data.length+' bytes');
} catch (error) {
    
}
/**
 * 写文件
 * 异步写文件+同步写文件
 */
var writeData = 'fs模块是node.js内置的文件系统模块，负责读写文件';
fs.writeFile('outFs.txt',writeData,function(err){
    if (err) {
        console.log(err);
    } else {
        console.log('write ok');
    }
})
try {
    var writeSyncData = '同步的IO操作则需要等待函数返回';
    fs.writeFileSync('outFs.txt',writeSyncData);
    console.log('sync ok');
} catch (error) {
    console.log(error);
}
/**
 * 获取文件大小、创建时间等信息，可以使用fs.stat(),它返回一个Stat对象，能告诉我们文件或目录的详细信息
 */
fs.stat('readme.txt',function(err,stat){
    if (err) {
        console.log(err);
    } else {
        //是否是文件
        console.log('isFile='+stat.isFile());
        //是否是目录
        console.log('isDirectory='+stat.isDirectory());
        if (stat.isFile()){
            //文件大小
            console.log('size='+ stat.size);
            //文件创建时间
            console.log('birthtime='+stat.birthtime);
            //文件修改时间
            console.log('modified time='+stat.mtime);
        }
    }
})