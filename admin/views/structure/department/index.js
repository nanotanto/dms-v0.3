define([
    "views/structure/department/table",
    "views/structure/department/menu"
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
			$$("data_department").load(url+"../backend/lumen/public/department");
		} 
    };
    
});