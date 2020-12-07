define([
    "views/quality/record",
    "views/quality/menu"

], function(record, menu) {    
    
    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var layout = {
        type: "space",
        rows:[
            menu,
            {
                cols:[
                    {
                        header:"<center>Records</center>",
                        body:record
                    },					
                    {
                        view:"iframe", id:"frame-body" 
                    }
                ]
            }
        ]		
			
    };
    
    return {
        $ui:layout,
		$oninit:function(){
			$$("group").load(url+"../backend/lumen/public/quality");
		}
    };
    
});