define([	
],function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var table = {
			rows:[
				{
					view:"datatable",
					id:"data_type",
					resizeColumn:true,
					resizeRow:true,
					columns:[
						{ id:"id",	header:["ID",{content:"textFilter"}],	width:180,	sort:"string"},
						{ id:"name",  fillspace:true,	header:["Type Audit",{content:"textFilter"}],  width:280,	sort:"string"},
						
					],

					


					select:"row",								
					fixedRowHeight:false,										
					on:{
						"onresize":webix.once(function(){ 
							this.adjustRowHeight("name", true); 
						}),
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

