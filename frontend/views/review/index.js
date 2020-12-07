define([
    "views/review/table"
], function(table) {
    
    var layout = { 
		type:"space",
		cols:[
			table
		]		
    };
    
    return {
        $ui:layout
    };
    
});