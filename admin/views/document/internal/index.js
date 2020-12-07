define([
    "views/document/internal/piramid",    
    "views/document/internal/table",    
    "views/document/internal/option",    
    "views/document/internal/menu",
    "views/document/internal/category"
], function(piramid, table, option, menu, category) {  
    
    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var layout = {
        type:"space",
        rows:[
            menu,
            {
                cols:[
                    {
                        header:"<center>Hierarchy of Internal Documents</center>",
                        body:piramid
                    },
                    {
                        rows:[	
							category,
                            option,
                            table				
                        ]	
                    }
                ]
            }
        ]
        
    };

    return {
        $ui:layout,
		$oninit:function(){
			//$$("data_doc").load(url+"../backend/lumen/public/doc");
		}
    };
    
});