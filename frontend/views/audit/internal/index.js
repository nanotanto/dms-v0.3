define([
    "views/audit/internal/table"
], function(table) {
    	
	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

    var layout = { 
		type:"space",
		cols:[
			table
		]		
    };
    
    return {
        $ui:layout,
		$oninit:function(){
			$$("data_audit").load(url+"backend/lumen/public/audit_in");
		}
    };
    
});