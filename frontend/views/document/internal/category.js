define([

], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var category = {
		id:"ctg_ik",
		view:"toolbar",
		hidden:true,
		elements: [
				{ view:"segmented", options:[
					{id:"4", value:"Instruksi Kerja"},
					{id:"10", value:"Standar Inspeksi"},
					{id:"11", value:"Standar Parameter"},
					{id:"12", value:"OPL"}
					],	
				click:function(id,event){
						var id = this.getValue();
						$$("data_doc").clearAll(); 
						$$("data_doc").load(url+"backend/lumen/public/level/"+id);
					}		
					
				}
			]
    };


	
    return {
        $ui:category
    };
    
});