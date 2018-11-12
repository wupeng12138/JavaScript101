;(function($){
	"use strict";
	
//	$.extend({
//		nav:function(ele){
//			$(ele).children("ul").children("li").on("mouseenter",function(){
//				$(this).children("ul").stop().slideDown(100)
//				.end().siblings().children("ul").stop().slideUp(100)
//			})
//			$(ele).children("ul").children("li").on("mouseleave",function(){
//				$(ele).find("li").children("ul").stop().slideUp(100)
//			})
//		}
//	});

//	$.fn.extend({
//		nav:function(){
//			var that = this;
//			this.children("ul").children("li").on("mouseenter",function(){
//				$(this).children("ul").stop().slideDown(100)
//				.end().siblings().children("ul").stop().slideUp(100)
//			})
//			this.children("ul").children("li").on("mouseleave",function(){
//				that.find("li").children("ul").stop().slideUp(100)
//			})
//		}
//	});

//	$.nav = function(){
//		$(".nav").children("ul").children("li").on("mouseenter",function(){
//			$(this).children("ul").stop().slideDown(100)
//			.end().siblings().children("ul").stop().slideUp(100)
//		})
//		$(".nav").children("ul").children("li").on("mouseleave",function(){
//			$(".nav").find("li").children("ul").stop().slideUp(100)
//		})
//	}
	
		$.fn.nav = function(){
			var that = this;
			this.children("ul").children("li").on("mouseenter",function(){
				$(this).children("ul").stop().slideDown(100)
				.end().siblings().children("ul").stop().slideUp(100)
			})
			this.children("ul").children("li").on("mouseleave",function(){
				that.find("li").children("ul").stop().slideUp(100)
			})
		}
	
	
//	var obj = {}
//	obj.name = function(){}
//	obj.name()
})(jQuery)
