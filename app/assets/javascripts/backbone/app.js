window.App = {
    init : function() {
	console.log("APP INITIALIZED");
	Backbone.history.start({pushState: true});
	App.browser = new App.Browser();
	App.browserView = new App.BrowserView({model : App.browser});
	App.radioView = new App.RadioView();
    }
}

$(function(){
    App.init();
})
