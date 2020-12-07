/*
	App configuration
*/

define([
	"../frontend/libs/webix-mvc-core/core",
	"../frontend/libs/webix-mvc-core/plugins/menu",
	"plugins/user"
], function(
	core, menu, user
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

	// This enables user-control (login)
	app.use(user);


	return app;
});
