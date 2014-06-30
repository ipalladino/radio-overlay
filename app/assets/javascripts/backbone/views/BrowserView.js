App.BrowserView = Backbone.View.extend({
    el : "#html-container",
    initialize : function() {
	this.model.on("change:html", this.render, this);
    },
    render : function() {
	console.log("App.BrowserView.render");
	var el = document.createElement("div");
	el.innerHTML = this.model.get("html");
	body = $(el).find("#html-container");
	$(this.el).html(body);
	App.radioView.activate();
    }
});
