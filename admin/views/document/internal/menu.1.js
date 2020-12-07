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
					click: "location.href='#!/app/document.internal.add'"                       
				},
				{ 
					view:"richselect", width:300,
					icon: "fas fa-plus-circle", 
					label: 'Add New', labelAlign:"right",
					value:1, options:[
						{ id:1, value:"Banana"   }, 
						{ id:2, value:"Papaya"   }, 
						{ id:3, value:"Apple" }
					]
				},
				{ 
					view: "button", 
					type: "iconButton", 
					width: 100, 
					icon: "fas fa-edit", 
					label: " Revision",
					click: "location.href='#!/app/document.internal.revision'"                       
				},
				{
					view: "button", 
					type: "iconButton", 
					width: 80, 
					icon: "fas fa-pencil-square", 
					label: " Edit",
					click: "location.href='#!/app/document.internal.edit'"                       
				},
				//{ 
				//	view: "button", 
				//	type: "iconButton", 
				//	width: 90, 
				//	icon: "fas fa-trash", 
				//	label: " Delete",
				//	click: "location.href='#!/app/document.internal.delete'"                       
				//}
			]
		
    };

    return {
        $ui:menu
    };
    
});