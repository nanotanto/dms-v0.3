define([
    
], function() {
    
	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
	var grouplist = {
		view:"grouplist", 
		id:"group",
		width:316,
		//height:600,
		templateBack:" Quality Report of Year #value#",
		templateGroup:" Quality Report of Year #value#",		
		templateItem:"<span class='view'> #no# - #name# </span>",
		select:true,
		scheme:{
			$group:{
				by:'year'
			},
			$sort:{ by:"value", dir:"desc" }
		},
		onClick:{
			view:function(e, id){
				var file = this.getItem(id).file1;
				$$("frame-body").load(url+"../pdf/web/viewer.html?file=/docs/"+file);
			}
		}
	}
	

    return {
		$ui:grouplist
    };
    
});