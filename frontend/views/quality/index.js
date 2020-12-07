define([
    "views/quality/record"

], function(record) {   
    
    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
        
    var layout = {
		type: "space",
		cols:[
            {
                header:"<center>Records</center>",
                body:record
            },					
			{
                view:"iframe", id:"frame-body" 
            }
		]
			
    };
    
    return {
        $ui:layout,
		$oninit:function(){
			$$("group").load(url+"backend/lumen/public/quality");
		}
    };
    
});