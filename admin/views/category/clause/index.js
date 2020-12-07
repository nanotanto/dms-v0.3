define([
    "views/category/clause/table",
    "views/category/clause/menu"
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
			$$("data_clause").load(url+"../backend/lumen/public/clause");
		} 
    };
    
});