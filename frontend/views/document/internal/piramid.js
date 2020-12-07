define([
    
], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
	var piramid = {
		rows:[	
			{
				view:"list", 
				type:{
				width:300,
				height:70
				},
				template:"<center><span class='info'><div class='#css#'></div>#title#</span></center>",
				select:true,
				data:[
                    { id:1, title:"Manual", css:"level-1"},
                    { id:2, title:"Rule", css:"level-2"},
                    { id:3, title:"Procedure", css:"level-3"},
                    { id:4, title:"Work Instruction", css:"level-4"},
                    { id:5, title:"Form / Check Sheet", css:"level-5"},
                    //{title:"<br/><div class='btn btn-primary btn-lg btn-block'>Supporting Document</div>"},
				
					{ id:6, title:"<br/><div class='btn btn-primary btn-block'>QCPC (QC Process Chart)</div>"},
                    //{ id:6, title:"QCPC (Quality Control Process Chart)", css:"btn btn-success btn-lg btn-block"},
					{ id:9, title:"<br/><div class='btn btn-primary btn-block'>Kakotora</div>"},
                    //{ id:9, title:"Kakotora", css:"btn btn-success btn-lg btn-block"}
                ],			
				on:{
					onItemClick: function(id){				
						$$("data_doc").clearAll(); 
						$$("data_doc").load(url+"backend/lumen/public/level/"+id);
						if (this.getItem(id).id == "4") {
							$$("ctg_ik").show();	
						} else {
							$$("ctg_ik").hide();
						}
					}
				}
			}				
		]
    };
    
    return {
        $ui:piramid
    };
    
});