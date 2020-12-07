define([
    "views/structure/division/table",
    "views/structure/division/menu"
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
			$$("data_division").load(url+"../backend/lumen/public/division");
		} 
    };
    
});