define([
    "views/document/ygk_yqs/category",
    "views/document/ygk_yqs/table"    
], function(category, table) {
    
    var layout = {
		type: "space",
		cols:[
            {
                header:"<center>YGK & YQS Documents</center>",
                body:category
            },					
			table
		]
			
    };

    return {
        $ui:layout
    }
    
});