var path = require('path');
var webpack = require('webpack');
var rootPath = path.resolve(__dirname);
var appPath = path.resolve(rootPath,'src')
var buildPath = path.resolve(rootPath,'dist');
console.log(rootPath);
console.log(appPath);
module.exports ={
    entry:{
        app:path.resolve(appPath,'entry.js')
    },
    output:{
        path:buildPath,
        filename:'bundle.js',
        chunkFilename: '[name].chunk.js'
    },
    devtool:'eval-source-map',
    module:{
       /**  preLoaders:[
            {
                test:/\.js?$/,
                loaders:['eslint'],
                include:appPath
            }
        ],*/
        loaders:[
            {
                test:/\.js?$/,
                loaders:['babel'],
                include:appPath
            },
        ],
    }
}