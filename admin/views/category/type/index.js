define([
    "views/category/type/table",
    "views/category/type/menu"
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
			$$("data_type").load(url+"../backend/lumen/public/type");
		} 
    };
    
});