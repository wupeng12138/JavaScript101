/*
 * 
 * 
 * 
 * 
 * 
 */
;(function($){
	"use strict";
	$.fn.banner = function(options){
		
		options.playTime = options.playTime ? options.playTime : 2000;
		
		options.imgs.css({
			left:options.imgs.eq(0).width()
		}).eq(0).css({
			left:0
		})
		
		this.LOCAL = {
			iNow:0,
			direct:"right",
			iPrev:options.imgs.length-1
		}
		
		var that = this;
		
		if(typeof options.list == "object" && options.list.length != 0){
			options.list.on("click",function(){
				if(that.LOCAL.iNow == $(this).index()){
					return 0;
				}
				if(that.LOCAL.iNow < $(this).index()){
					that.LOCAL.direct = "right";
				}
				if(that.LOCAL.iNow > $(this).index()){
					that.LOCAL.direct = "left";
				}
				if(that.LOCAL.direct == "left"){
					options.imgs.eq(that.LOCAL.iNow).stop(false,true).animate({
						left:options.imgs.eq(0).width()
					}).end().eq($(this).index()).css({
						left:-options.imgs.eq(0).width()
					}).stop(false,true).animate({
						left:0
					})
				}else{
					options.imgs.eq(that.LOCAL.iNow).stop(false,true).animate({
						left:-options.imgs.eq(0).width()
					}).end().eq($(this).index()).css({
						left:options.imgs.eq(0).width()
					}).stop(false,true).animate({
						left:0
					})
				}
				options.list.removeClass("active").eq($(this).index()).addClass("active")
				that.LOCAL.iNow = $(this).index();
			})
		}
		
		if(typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0){
			options.left.on("click",function(){
				if(that.LOCAL.iNow == 0){
					that.LOCAL.iNow = options.imgs.length-1;
					that.LOCAL.iPrev = 0
				}else{
					that.LOCAL.iNow--
					that.LOCAL.iPrev = that.LOCAL.iNow + 1;
				}
				that.LOCAL.move(1)
			})
			options.right.on("click",function(){
				if(that.LOCAL.iNow == options.imgs.length-1){
					that.LOCAL.iNow = 0;
					that.LOCAL.iPrev = options.imgs.length-1;
				}else{
					that.LOCAL.iNow++;
					that.LOCAL.iPrev = that.LOCAL.iNow - 1;
				}
				that.LOCAL.move(-1)
			})
			
			this.LOCAL.move = function(dire){
				options.imgs.eq(that.LOCAL.iPrev).stop(false,true).animate({
					left:options.imgs.eq(0).width() * dire
				}).end().eq(that.LOCAL.iNow).css({
					left:-options.imgs.eq(0).width() * dire
				}).stop(false,true).animate({
					left:0
				})
				options.list.removeClass("active").eq(that.LOCAL.iNow).addClass("active")
			}
		}
		
		if((options.autoPlay || options.autoPlay == undefined) && typeof options.left == "object" && options.left.length != 0 && typeof options.right == "object" && options.right.length != 0){
			clearInterval(this.LOCAL.timer)
			this.LOCAL.timer = setInterval(()=>{
				options.right.trigger("click")
			},options.playTime)
			this.on("mouseover",function(){
				clearInterval(that.LOCAL.timer)
			})
			this.on("mouseout",function(){
				clearInterval(that.LOCAL.timer)
				that.LOCAL.timer = setInterval(()=>{
					options.right.trigger("click")
				},options.playTime)
			})
		}
	}
})(jQuery)
