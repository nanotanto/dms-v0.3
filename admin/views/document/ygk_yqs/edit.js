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
						id:"ex_edt",
						resizeColumn:true,
						resizeRow:true,
						select:true,
						editable:true,	
						fixedRowHeight:false,	
						columns:[
							{ 
								id:"id", 
								hidden:true,
								header:["ID",{ content:"serverFilter"}], 
							},
							{ 
								id:"no",	
								header:["Doc. No.",{ content:"serverFilter"}], 
								sort:"server",	
								width:180,	 
								//template:"<a target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../docs/internal/#file1#'>#no#</a>"
							},
							{ 
								id:"name",  
								fillspace:true,
									header:["Document Name",{ content:"serverFilter"}], 
									sort:"server", 
									width:280,	
									//template:"<a target='_blank' href='http://p0002007/qasystems/docs/file/#file1#'>#name#</a>"
								},
								
							{
								id:"effective_date", 								
								hidden:true
							},
								{ 
									id:"rev_no",	
									header:["Rev."],	
									width:50
								},
								{ id:"category",	header:["Category",{content:"textFilter"}], width:100,	sort:"string"}
								
						],
						ready:function(){
							//this.select(this.getFirstId());
						},
						on:{
							onAfterSelect:function(id){
							$$("myform_edt_ex").load(url+"../backend/lumen/public/form/data/ex/"+id);
							}
						},
						url:url+"../backend/lumen/public/doc_ygk_yqs"
				}
		]	

};

	    
	var form = {
		view:"form", 
		id:"myform_edt_ex",
		width:400,
		rows:[
			{
				type:"section", 
				template:"YGK & YQS Document Registration"
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
				//options:{ },url:url+"../backend/lumen/public/ctg_ex"
				options:[{value: "YGK", id: 4},{value: "YQS", id: 5}]
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
							var data = $$("myform_edt_ex").getValues();	
								//send data to server
								webix.ajax().post(url+"../backend/lumen/public/saveDocEx", data).then(() => webix.message("Saved."));
								$$("myform_edt_ex").clear();
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });

							
							//$$("upl1").send(function(response){
							//	if(response)
							//	webix.message(response.status);								
							//	var data = $$("myform_edt_ex").getValues();	
							//	//send data to server
							//	webix.ajax().post(url+"../backend/lumen/public/saveDocIn", data).then(() => webix.message("Saved."));
							//	$$("myform_edt_ex").clear();
							//});
							
							//$$("ex_edt").clearAll();
							//$$("ex_edt").load(url+"../backend/lumen/public/showRegNow");
						}
					},
					{
						view:"button", value:"Refresh", click:function(){	
							$$("myform_edt_ex").clear();						
							$$("ex_edt").clearAll();
							//$$("ex_edt").load(url+"../backend/lumen/public/showRegNow");
							$$("ex_edt").load(url+"../backend/lumen/public/doc_ygk_yqs");
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
			{view:"label",label:"Edit YGK & YQS Document"},
			{ gravity: 1},              
			{ 
				view: "button", 
				type: "iconButton", 
				width: 90, 
				icon: "fas fa-close", 
				label: " Close",
				click: "location.href='#!/app/document.ygk_yqs.index'"                       
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