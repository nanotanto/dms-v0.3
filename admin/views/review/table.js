define([	
],function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var table = {
			rows:[
				{
					view:"datatable",
					id:"data_review",
					resizeColumn:true,
					resizeRow:true,
					columns:[
						{ id:"no",	header:["Doc. No.",{content:"textFilter"}],	width:180,	sort:"string"},
						{ id:"name",  fillspace:true,	header:["Document Name",{content:"textFilter"}],  width:280,	sort:"string"},
						{ id:"rev",	header:["Rev."],	width:50, sort:"int"},
						{ id:"issued",	header:["Issued",{content:"textFilter"}], width:160,	sort:"string"},
						{ id:"file1",	header:["Input",{content:"textFilter"}], width:160,	sort:"string", template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../ISO9001/review/#file1#'>#no#</a>"},
						//template:"<a target='_blank' href='http://172.20.40.15/qasystems/rec_mreviews/file/#file1#'>View</a>"},
						{ id:"file2",	header:["Output",{content:"textFilter"}], width:160,	sort:"string", template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../ISO9001/review/#file2#'>#no#</a>"},
						//template:"<a target='_blank' href='http://172.20.40.15/qasystems/rec_mreviews/file/#file2#'>View</a>"}
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

