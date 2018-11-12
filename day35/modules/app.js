require.config({
	baseUrl: "modules/js",
	paths: {
		"jquery": "jquery",
		"tab": "tab",
		"toast": "toast"
	}
});

require(["jquery","tab","toast"],function(jQuery,tab,toast){
	
	tab.init({
		list:$(".cont").find("li"),
		imgs:$(".box").children("img")
	})
	
	toast.init({
		imgs:$(".box").children("img")
	})
	
//	console.log(tab)
//	console.log(toast)
	
})
