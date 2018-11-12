;(function(){
	"use strict";
	$.fn.banner = function(options){
//		console.log(options);
//		console.log(options.items.length);
		options.imgs.css({
			left:options.imgs.eq(0).width()
		}).eq(0).css({
			left:0
		})
		this.LOCAL = {
			iNow:0
		}
		var that = this;
		if(typeof options.items == "object" && options.items.length != 0){
//			Binding event
			options.items.on("mouseenter",function(){
				var target = $(this).index();
				var direct = "";
				if(that.LOCAL.iNow == target){
					return 0;
				}
				if(that.LOCAL.iNow < target){
					direct = "left";
				}
				if(that.LOCAL.iNow > target){
					direct = "right";
				}
//				move
				if(direct == "left"){
					that.LOCAL.move(target,1);
				}
				if(direct == "right"){
					that.LOCAL.move(target,-1);
				}
				
				options.items.removeClass().eq(target).addClass("active");
				
				that.LOCAL.iNow = $(this).index();
			})
			
			
		}
		
		this.LOCAL.move = function(target,direct){
			options.imgs.eq(that.LOCAL.iNow).stop(false,true).animate({
				left:-options.imgs.eq(0).width()*direct
			})
			options.imgs.eq(target).css({
				left:options.imgs.eq(0).width()*direct
			}).stop(false,true).animate({
				left:0
			})
		}
		
		if(typeof options.left == "object" && options.items.length != 0 && typeof options.right == "object" && options.right.length != 0){
			console.log("有左右按钮");
		}
	}
})()
