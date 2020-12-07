define([
    "views/document/drawing/table",
    "views/document/drawing/menu"
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
			$$("data_drawing").load(url+"../backend/lumen/public/drawing");
		}
    }
    
});