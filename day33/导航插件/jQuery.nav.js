;(function($){
//	console.log($)
	"use strict";
//	$.fn.extend({
//		nav:function(){
//			this.find("ul").find("li").mouseenter(function(){
//				$(this).css({background:"red"}).find("ul").fadeIn().end().siblings().find("ul").stop().fadeOut()
//			})
//			
//			this.find("ul").find("li").mouseleave(function(){
//				$(this).css({
//					background:""
//				}).find("ul").stop().fadeOut();
//			})
//		}
//	})

//	$.extend({
//		nav:function(){
//			this.find("ul").find("li").mouseenter(function(){
//				$(this).css({background:"red"}).find("ul").fadeIn().end().siblings().find("ul").stop().fadeOut()
//			})
//			
//			this.find("ul").find("li").mouseleave(function(){
//				$(this).css({
//					background:""
//				}).find("ul").stop().fadeOut();
//			})
//		}
//	})

	$.fn.nav = function(){
			this.find("ul").find("li").mouseenter(function(){
				$(this).css({background:"red"}).find("ul").fadeIn().end().siblings().find("ul").stop().fadeOut()
			})
			
			this.find("ul").find("li").mouseleave(function(){
				$(this).css({
					background:""
				}).find("ul").stop().fadeOut();
			})
		}
//	$.nav = function(){
//			this.find("ul").find("li").mouseenter(function(){
//				$(this).css({background:"red"}).find("ul").fadeIn().end().siblings().find("ul").stop().fadeOut()
//			})
//			
//			this.find("ul").find("li").mouseleave(function(){
//				$(this).css({
//					background:""
//				}).find("ul").stop().fadeOut();
//			})
//		}
	
	
})(jQuery)
