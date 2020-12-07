define([
    "views/category/requirement/table",
    "views/category/requirement/menu"
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
			$$("data_requirement").load(url+"../backend/lumen/public/requirement");
		} 
    };
    
});