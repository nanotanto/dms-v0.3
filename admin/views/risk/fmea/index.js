define([
    "views/risk/fmea/table",
    "views/risk/fmea/menu"
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
			    $$("data_doc").load(url+"../backend/lumen/public/level/7");
		}
    };
    
});