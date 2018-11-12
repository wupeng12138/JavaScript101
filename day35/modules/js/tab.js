define(function(){
	function Tab(){}
	
	Tab.prototype.init = function(opt){
		this.list = opt.list;
		this.imgs = opt.imgs;
		var that = this;
		this.list.on("click",function(){
			that.change($(this).index())
		})
	}
	
	Tab.prototype.change = function(index){
		
		this.list.removeClass("active").eq(index).addClass("active");
		this.imgs.removeClass("active").eq(index).addClass("active");
		
	}
	
	
	return new Tab();
})