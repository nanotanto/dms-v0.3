define([
    "views/document/external/category",
    "views/document/external/table",
    "views/document/external/menu"
], function(category, table, menu) {    
    
    var layout = {
        type: "space",
        rows:[
            menu,
            {
                cols:[
                    {
                        header:"<center>Category of Eksternal Documents</center>",
                        body:category
                    },					
                    table
                ]
            }
        ]
		
			
    };
    
    return {
        $ui:layout
    };
    
});