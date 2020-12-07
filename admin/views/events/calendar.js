define([
	"../../../frontend/views/webix/scheduler"
], function(){

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
	
return {
	$ui:{
		minWidth: 500,
		gravity: 2,
		rows:[
			{
				type: "wide",
				cols:[
				{
					width: 316,
					header:"<center>Calendar</center>",
                	body:{
						rows:[
						{view: "calendar", on:{
							onDateSelect: function(date){
								scheduler.updateView(date,"week");
							}
						}},

						{
							view: "template"
						}

					]}
					
				},
				{
					view:"dhx-scheduler",
					date:new Date(),

					mode:"year",
					tabs:["day","week", "month", "year"],
					init:function(){
						//scheduler.config.readonly = true;
						scheduler.load(url+"../backend/lumen/public/scheduler_datajson","json");
						
						//save to database
						var dp = new dataProcessor(url+"../backend/lumen/public/scheduler_data");
						dp.init(scheduler);

						scheduler.config.xml_date="%Y-%m-%d %H:%i";
						scheduler.config.first_hour = 7;
						scheduler.config.last_hour = 24;
						scheduler.config.multi_day = true;
						scheduler.templates.event_class=function(s,e,ev){ return ev.calendar?"other":""; };
						var d = scheduler.date.date_to_str;
						var week1 = d("%d");
						var week2 = d("%d %M %y");						
						scheduler.templates.week_scale_date = d("%D, %W/%j");
						scheduler.templates.week_date = function(d1,d2){
							return week1(d1)+" &ndash; "+ week2(scheduler.date.add(d2,-1,"day"));
						}
					}
				}
			]}
		]
	}
};
});