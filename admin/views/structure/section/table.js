define([	
],function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var table = {
			rows:[
				{
					view:"datatable",
					id:"data_section",
					resizeColumn:true,
					resizeRow:true,
					columns:[
						{ id:"id",	header:["No.",{content:"textFilter"}],	width:180,	sort:"string"},
						{ id:"section",  fillspace:true,	header:["Section",{content:"textFilter"}],  sort:"string"},
						{ id:"department",  fillspace:true,	header:["Department",{content:"textFilter"}],  sort:"string"},
						{ id:"division",  fillspace:true,	header:["Division",{content:"textFilter"}],  sort:"string"},
					],

					


					select:"row",								
					fixedRowHeight:false,										
					on:{
						"onresize":webix.once(function(){ 
							this.adjustRowHeight("section", true); 
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

