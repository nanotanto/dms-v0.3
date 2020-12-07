define([
    "views/document/external/category",
    "views/document/external/table"
], function(category, table) {    
    
    var layout = {
		type: "space",
		cols:[
            {
                header:"<center>Category of Eksternal Documents</center>",
                body:category
            },					
			table
		]
			
    };
    
    return {
        $ui:layout
    };
    
});