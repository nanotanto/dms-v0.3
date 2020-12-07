define([
	"../../../../frontend/views/webix/dynamicCombo"
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var myformat = webix.Date.dateToStr("%Y-%m-%d");
	var date = myformat(new Date());

	var grid = {
		rows:[
				{
						view:"datatable",
						id:"ex_rev",
						resizeColumn:true,
						resizeRow:true,
						columns:[
								{ id:"no",	header:["Doc. No.",{content:"textFilter"}],	width:160,	sort:"string", template:"<a target='_blank' href='http://p0002007/qasystems/doc_externals/file/#file#'>#no#</a>"},
								{ id:"name", fillspace:true,	header:["Document Name",{content:"textFilter"}], sort:"string"},
								{ id:"rev_no",	header:["Rev."],	width:50},
								{ id:"category",	header:["Category",{content:"textFilter"}], width:70,	sort:"string"}
								
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

	    
	var form = {
		view:"form", 
		id:"myform_rev_ex",
		width:400,
		rows:[
			{
				type:"section", 
				template:"Document Registration"
			},
			{
				view:"text", 
				id:"id", 
				name:"id", 
				label:"", 
				hidden:true
			},
			{
				view:"text", 
				name:"no", 
				label:"Doc. No.", 
				validate:"isNotEmpty",
				labelPosition:"top"
			},
			{
				view:"text", 
				name:"name", 
				label:"Document Name", 
				validate:"isNotEmpty",
				labelPosition:"top"
			},
			{
				view:"datepicker", 
				name:"effective_date", 
				label:"Effective Date", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				stringResult:true, format:"%d  %M %Y"
			},
			{
				view:"text", 
				name:"rev_no", 
				label:"Rev.", 
				validate:"isNotEmpty",
				labelPosition:"top"
			},
			{
				view:"dynamicCombo", 
				id:"ctg", 
				name:"ctg_doc_id", 
				label:"Category", 
				labelPosition:"top",
				validate:"isNotEmpty",
				options:{ },url:url+"../backend/lumen/public/ctg"
			},
			{ 
				cols:[
					{ 
						view:"uploader", 
						id:"upl1",				
						name:"file", 
						multiple:false, 
						autosend:true,
						value:"Attach File pdf", 
						link:"link-upl",
						upload:url+"../backend/lumen/public/uploadfile"
					},
					{}
				]
			},
			{ 
				view:"list",  
				id:"link-upl",  
				type:"uploader", 
				autoheight:50, 
				borderless:true
			},
			//{view:"text", name:"file", label:"Remark", labelPosition:"top"},
			{ 
				cols:[
					{},
					{
						view:"button", value:"Save", click:function(){
							if (this.getFormView().validate()) // on success
							{
							webix.message("All is correct");
							var data = $$("myform_rev_ex").getValues();	
								//send data to server
								webix.ajax().post(url+"../backend/lumen/public/saveDocEx", data).then(() => webix.message("Saved."));
								$$("myform_rev_ex").clear();
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });

							
							//$$("upl1").send(function(response){
							//	if(response)
							//	webix.message(response.status);								
							//	var data = $$("myform_rev_ex").getValues();	
							//	//send data to server
							//	webix.ajax().post(url+"../backend/lumen/public/saveDocIn", data).then(() => webix.message("Saved."));
							//	$$("myform_rev_ex").clear();
							//});
							
							//$$("ex_rev").clearAll();
							//$$("ex_rev").load(url+"../backend/lumen/public/showRegNow");
						}
					},
					{
						view:"button", value:"Refresh", click:function(){	
							$$("myform_rev_ex").clear();						
							$$("ex_rev").clearAll();
							//$$("ex_rev").load(url+"../backend/lumen/public/showRegNow");
							$$("ex_rev").load(url+"../backend/lumen/public/doc_ex");
						}
					},
					{}
				]
			}
		],
		scroll:true 
	};

	var close = {
        
		view: "toolbar", 
		//padding:3, 
		elements: [     
			{view:"label",label:"Revision Document"},
			{ gravity: 1},              
			{ 
				view: "button", 
				type: "iconButton", 
				width: 90, 
				icon: "fas fa-close", 
				label: " Close",
				click: "location.href='#!/app/document.external.index'"                       
			}
		]
	
	};
	
	var layout = {
		type:"space",
		rows:[
			close,
			{cols:[grid,form]}
		]
	};

	return {
		$ui:layout,
		$oninit:function(){
			
			var ctg = $$("ctg").getList(); //returns list view of the control
			webix.ajax().get($$("ctg").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				ctg.parse(data.json()); //getting data				
			});

		}
	};
});