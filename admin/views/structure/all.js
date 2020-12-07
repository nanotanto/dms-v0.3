define([

], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var tree = {
        
            view: "treetable", 
            columns:[
                //{ id:"id",	header:"", css:{"text-align":"right"},  	width:50},
               { id:"chapter",	header:"Category",  width:150},
               { id:"value",	header:"Structure", width:500,
                    template:"{common.treetable()} #value#" }
                
            ],
            autoheight:true,
            //autowidth:true,
			url:url+"../backend/lumen/public/structureAll"
    };

    return {
        $ui:tree
    };
    
});