//var nav = {
//	name:"nav"
//}
//console.log(nav.name)

define(function(){
	class Nav{
		constructor(){
		}
		init(options){
			this.name = options.name;
			this.age = options.age;
			this.sex = options.sex;
			this.like = options.like;
			console.log(this.name + ";" + this.age + ";" + this.sex + ";" + this.like + ";")
			console.log(jQuery)
		}
	}
	return new Nav()
})




