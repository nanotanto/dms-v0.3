define([

], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var menu = {
        
			view: "toolbar", 
			//padding:3, 
			elements: [     
				//{ gravity: 1},              
				{ 
					view: "button", 
					type: "iconButton", 
					width: 100, 
					icon: "fas fa-plus-circle", 
					label: " Add New",
					click: "location.href='#!/app/risk.fmea.add'"                       
				},
				{ 
					view: "button", 
					type: "iconButton", 
					width: 100, 
					icon: "fas fa-edit", 
					label: " Revision",
					click: "location.href='#!/app/risk.fmea.revision'"                       
				},
				{
					view: "button", 
					type: "iconButton", 
					width: 80, 
					icon: "fas fa-pencil-square", 
					label: " Edit",
					click: "location.href='#!/app/risk.fmea.edit'"                       
				},
				//{ 
				//	view: "button", 
				//	type: "iconButton", 
				//	width: 90, 
				//	icon: "fas fa-trash", 
				//	label: " Delete",
				//	click: "location.href='#!/app/risk.fmea.delete'"                       
				//}
			]
		
    };

    return {
        $ui:menu
    };
    
});