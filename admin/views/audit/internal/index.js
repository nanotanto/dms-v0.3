define([
    "views/audit/internal/table",
    "views/audit/internal/menu"
], function(table,menu) {

    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var layout = { 
    type:"space",
    rows:[
      menu,
      table
    ]
				
    };
    
    return {
        $ui:layout,
		$oninit:function(){
			$$("data_audit").load(url+"../backend/lumen/public/audit_in");
		}
    };
    
});