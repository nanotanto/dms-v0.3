define([
    "views/document/ygk_yqs/category",
    "views/document/ygk_yqs/table",
    "views/document/ygk_yqs/menu"   
], function(category, table, menu) {
    
    var layout = {
        type: "space",
        rows:[
            menu,
            {
                cols:[
                    {
                        header:"<center>YGK & YQS Documents</center>",
                        body:category
                    },					
                    table
                ]
            }
        ]
    };

    return {
        $ui:layout
    }
    
});