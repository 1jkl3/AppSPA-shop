const path = require('path')
const express = require('express')
const app = express()
var appData = require('./src/assets/json/list.json')
var appData1 = require('./src/assets/json/recom.json')
var appData2 = require('./src/assets/json/goods/pop.json')
var appData3 = require('./src/assets/json/goods/news.json')
var appData4 = require('./src/assets/json/goods/sell.json')
var appData5 = require('./src/assets/json/details/product.json')
var appData6 = require('./src/assets/json/swiper.json')
var appData7 = require('./src/assets/json/category/left.json')
var appData8 = require('./src/assets/json/category/right.json')
var list = appData.person
var recom = appData1.person
var pop = appData2.pop
var news = appData3.news
var sell = appData4.sell
var product = appData5.details
var swiper = appData6.swiper
var leftInfo = appData7.leftInfo
var rightInfo = appData8.rightInfo
var apiRouter = express.Router()
app.use('/api',apiRouter)
function resolve (dir) {
    return path.join(__dirname, dir)
}
module.exports = {
	outputDir:'dist',
    lintOnSave: true,
    chainWebpack: (config)=>{
        config.resolve.alias
            .set('@', resolve('src'))
            .set('assets',resolve('src/assets'))
            .set('components',resolve('src/components'))
    },
	devServer: {
	  // host: '192.168.137.1',
	  // port: 8060,
	  proxy: null, // 设置代理
	  before: app => {
		  app.get('/api/swiper',function(req,res){
		  	  res.json({code:0,data:swiper})
		  });
		  app.get('/api/list',function(req,res){
			  res.json({code:0,data:list})
		  });
		  app.get('/api/recom',function(req,res){
			  res.json({code:0,data:recom})
		  });
		  app.get('/api/pop',function(req,res){
			  res.json({code:0,data:pop})
		  });
		  app.get('/api/news',function(req,res){
			  res.json({code:0,data:news})
		  });
		  app.get('/api/sell',function(req,res){
		  	  res.json({code:0,data:sell})
		  });
		  app.get('/api/product',function(req,res){
		  	  res.json({code:0,data:product})
		  });
		  app.get('/api/leftInfo',function(req,res){
		  	  res.json({code:0,data:leftInfo})
		  });
		  app.get('/api/rightInfo',function(req,res){
		  	  res.json({code:0,data:rightInfo})
		  });
	  }
	 }
}
