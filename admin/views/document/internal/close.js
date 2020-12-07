define([

], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var close = {
        
			view: "toolbar", 
			//padding:3, 
			elements: [     
				{ gravity: 1},              
				{ 
					view: "button", 
					type: "iconButton", 
					width: 90, 
					icon: "fas fa-close", 
					label: " Close",
					click: "location.href='#!/app/document.internal.index'"                       
				}
			]
		
    };

    return {
        $ui:close
    };
    
});