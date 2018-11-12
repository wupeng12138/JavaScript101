define(["tab"],function(tab){
	class Toast{
		constructor(){}
		init(opt){
			console.log(tab)
//			console.log(opt)
			this.imgs = opt.imgs;
			var that = this;
			this.imgs.on("click",function(){
//				console.log($(this))
				if(!that.div){
					that.create($(this).index())
				}else{
					that.change($(this).index())
				}
				
				that.remove()
			})
		}
		
//		css3
//		nth-child(num)
//		nth-of-type(num)
		
		create(index){
			this.div = $("<div>");
			this.img = $("<img>");
			this.div.css({
				width:"100px",
				height:"300px",
				position:"absolute",
				zIndex:"999",
				left:0,
				right:0,
				top:0,
				bottom:0,
				margin:"auto"
			})
			this.img.attr("src",this.imgs.eq(index).attr("src"));
			this.img.css({
				display:"block"
			})
			this.div.append(this.img);
			this.imgs.parent().append(this.div);
			
		}
		
		change(index){
			this.div.stop().show();
			this.img.attr("src",this.imgs.eq(index).attr("src"));
			
		}
		
		remove(){
			var that = this;
			clearInterval(this.div.timer)
			this.div.timer = setTimeout(function(){
				that.div.stop().hide()
			},1000)
		}
	}
	
	
	return new Toast()
})