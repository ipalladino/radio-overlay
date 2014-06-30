App.Browser = Backbone.Model.extend({
    url   : "/",
    
    defaults : {
	page_url  : "/"
    },

    initialize : function() {
	
    },
    
    fetchHTML : function(url) {
	console.log("App.Browser.fetchHTML");
	$.ajax({
	    url : url,
	    success : $.proxy(this.parse, this)
	});
    },

    parse : function(r) {
	console.log("App.Browser.parse");
	this.set("html", r);
    }
});
