App.RadioView = Backbone.View.extend({
    el : "#radio",
    events : {
	"click #activate" : "activate"
    },
    activate : function() {
	console.log("activate");
	$("a").on("click", function(e) {
	    console.log("click");
	    console.log(e.currentTarget.href);
	    e.preventDefault();
	    //here we would call a route
	    App.browser.fetchHTML(e.currentTarget.href+"?hideRadio=true");
	});
    }
});
