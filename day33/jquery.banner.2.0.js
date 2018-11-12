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
		this.LOCAL.list = function(){
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
				console.log(options.list)
				options.list.css({
					background: "rgba(255,255,255,0.5)"
				}).eq($(this).index()).css({
					background:"rgba(255,0,0,0.6)"
				})
				that.LOCAL.iNow = $(this).index();
			})
		}
		if(typeof options.list == "object" && options.list.length != 0){
			this.LOCAL.list()
		}else if(options.list == true){
			var div = $("<div class='list'></div>");
			for(var i=0;i<options.imgs.length;i++){
				var span = $("<span>"+(i+1)+"</span>");
				div.append(span);
			}
			this.append(div);
			
			this.find(".list").css({
				position: "absolute",
				bottom: 0,
				width: "100%",
				display: "flex"
			}).children("span").css({
				flex: 1,
				lineHeight: "40px",
				background: "rgba(255,255,255,0.5)",
				textAlign: "center",
				borderRight: "solid 1px #aaa",
				borderLeft: "solid 1px #aaa"
			}).eq(0).css({
				background:"rgba(255,0,0,0.6)"
			})
			options.list = this.find(".list").children("span");
			this.LOCAL.list();
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
				
				if(typeof options.list == "object" && options.list.length != 0){
					options.list.css({
						background: "rgba(255,255,255,0.5)"
					}).eq(that.LOCAL.iNow).css({
						background:"rgba(255,0,0,0.6)"
					})
				}
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
