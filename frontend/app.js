/*
	App configuration
*/

define([
	"libs/webix-mvc-core/core",
	"libs/webix-mvc-core/plugins/menu",
], function(
	core, menu
){

	//configuration
	var app = core.create({
		id:			"qhse", //change this line!
		name:		"QA-System",
		version:	"3.0",
		debug:		true,
		start:		"/app/home.index"
	});

	app.use(menu);



	return app;
});