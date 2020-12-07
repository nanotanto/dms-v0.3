define([	
],function(){	

	var table = {
			rows:[
				{
					view:"datatable",
					id:"data_drawing",
					resizeColumn:true,
					resizeRow:true,
					select:true,
					//autowidth:true, 
					editable:true,						
					fixedRowHeight:false,
					scheme:{
						$change:function(item){
							if (item.status_id > 1)
								item.$css = { "background-color":"#FFAAAA" };
							}
					},
					columns:[
						{ id:"name", 	header:["Drawing. No.",{content:"serverFilter"}], sort:"server", width:110},
						{ id:"part_no",  	header:["Part No. YPMI",{content:"serverFilter"}], sort:"server", width:110},
						{ id:"part_name", 	header:["Part Name",{content:"serverFilter"}], sort:"server", width:210},
						{ id:"rev_mark", 	header:["Rev.",{content:"serverFilter"}], sort:"server", width:45},
						{ id:"rev_record", fillspace:true,	header:["Rev. Record",{content:"serverFilter"}], sort:"server"},
						{ id:"priority", 	header:["Priority",{content:"serverFilter"}], sort:"server", width:65},
						{ id:"location",	header:["Location",{content:"serverFilter"}], sort:"server", width:65},
						{ id:"bambi", 	header:["Folder",{content:"serverFilter"}], sort:"server", width:55},
						{ id:"page", header:["Page",{content:"serverFilter"}], sort:"server", width:45}
					],
					select:"row",								
					fixedRowHeight:false,										
					on:{
						onBeforeLoad:function(){
							this.showOverlay("Loading...");
						},
						onAfterLoad:function(){
							this.hideOverlay();
						}

					}					
				}
			]	
		
	};

	return { 
		$ui: table 
	};

	

});

