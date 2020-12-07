define([	
],function(){

var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
	
	
	var table = {
			rows:[
				{
					view:"datatable",
					id:"data_audit",
					resizeColumn:true,
					resizeRow:true,
					columns:[
						{ id:"no", fillspace:true,	header:["Doc. No.",{content:"textFilter"}],	sort:"string", template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../ISO9001/audit/#file1#'>#no#</a>"},
						//template:"<a target='_blank' href='http://p0002007/qasystems/rec_audits/file/#file#'>#no#</a>"},
						{ id:"type", fillspace:true, 	header:["Type",{content:"textFilter"}], sort:"string"},
						{ id:"date", fillspace:true,	header:["Date",{content:"textFilter"}],	sort:"date"},
						{ id:"department", fillspace:true,	header:["Department",{content:"textFilter"}], sort:"string"},
						{ id:"clause", fillspace:true,	header:["Clause",{content:"textFilter"}], sort:"string"},
						{ id:"category", fillspace:true,	header:["Category",{content:"textFilter"}], sort:"string"},
						{ id:"received", fillspace:true,	header:["Received",{content:"textFilter"}], sort:"string"},
						{ id:"status", fillspace:true,	header:["Status",{content:"textFilter"}], sort:"string"}
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

