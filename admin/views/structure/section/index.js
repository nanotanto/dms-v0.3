define([
    "views/structure/section/table",
    "views/structure/section/menu"
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
			$$("data_section").load(url+"../backend/lumen/public/section");
		} 
    };
    
});