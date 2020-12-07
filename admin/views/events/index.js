define([
    "views/events/calendar"
], function(calendar) {
    
    var layout = {
        type:"space",
        cols:[
			calendar
		]	
    };

    return {
        $ui:layout
    }
    
});