//var tab = {
//	name:"tab"
//}
//console.log(tab.name)

define(function(){
	function Myshow(){}
	
	Myshow.prototype.show = function(name){
		this.name = name;
		console.log(this.name)
		
		console.log(jQuery)
	}
	
	return new Myshow()
})

