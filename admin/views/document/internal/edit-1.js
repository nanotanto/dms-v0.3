define([
	"../../../../frontend/views/webix/dynamicCombo"
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var grid = {
		view:"datatable",
		id: "in_edt",
		resizeColumn:true,
		resizeRow:true,
		select:true,
		editable:true,	
		fixedRowHeight:false,	
		columns:[
			{ 
				id:"id", 
				hidden:true
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
					id:"rev_no",	
					header:["Rev."],	
					width:50
				},
				{ 
					id:"department_id",	
					header:["Department",{ content:"serverFilter"}], 
					sort:"server", width:160
				},
				{
					id:"section_id", 
					hidden:true
				},
				{ 
					id:"category_id", 
					hidden:true
				},
				{ 
					id:"effective_date", 
					hidden:true
				},
				{ 
					id:"rev_content", 
					hidden:true
				},
				{ 
					id:"no_reference", 
					hidden:true
				},
				{ 
					id:"remark", 
					hidden:true
				},
				{ 
					id:"status_id", 
					hidden:true
				},
				{ 
					id:"file1", 
					hidden:true
				},
				{ 
					id:"file2", 
					hidden:true
				},
			],
			ready:function(){
				//this.select(this.getFirstId());
			},
			on:{
				onAfterSelect:function(id){
				$$("myform_edt").load(url+"../backend/lumen/public/form/data/"+id);
				}
			},
			url:url+"../backend/lumen/public/doc"
	};

	var form = {
		view:"form", 
		id:"myform_edt",
		width:400,
		rows:[
			{
				type:"section", 
				template:"Edit Document"
			},
			{
				view:"text", 
				id:"id", 
				name:"id", 
				label:"", 
				hidden:true
			},
			{
				view:"dynamicCombo", 
				id:"dept", 
				name:"department_id", 
				label:"Department", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				options:{ },url:url+"../backend/lumen/public/dept"
			},
			{
				view:"dynamicCombo", 
				id:"sec", 
				name:"section_id", 
				label:"Section", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				options:{ },
				//url:url+"../backend/lumen/public/sec"
			},
			{
				view:"dynamicCombo", 
				id:"ctg", 
				name:"category_id", 
				label:"Category", 
				labelPosition:"top",
				validate:"isNotEmpty",
				options:{ },url:url+"../backend/lumen/public/ctg"
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
				view:"text", 
				name:"rev_content", 
				label:"Rev. Content", 
				validate:"isNotEmpty",
				labelPosition:"top"
			},
			{
				view:"dynamicCombo", 
				id:"ref", 
				name:"no_reference", 
				label:"No Reference", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				options:{ },url:url+"../backend/lumen/public/ref"
			},
			{
				view:"text", 
				name:"remark", 
				label:"Remark", 
				labelPosition:"top"
			},
			{
				view:"select", 
				name:"status_id", 
				value:1, 
				label:"Status", 
				labelPosition:"top", 
				options:[
					{value:"Active",id:1},
					{value:"Obsolete",id:2}
				]
			},
			{ 
				cols:[
					{ 
						view:"uploader", 
						id:"upl1",				
						name:"file1", 
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
			{ 
				cols:[
					{ 
						view:"uploader", 
						id:"upl2",				
						name:"file2", 
						multiple:false, 
						autosend:true,
						value:"Attach File Master", 
						link:"link-up2",
						upload:url+"../backend/lumen/public/uploadfile"
					},
					{}
				]
			},
			{ 
				view:"list",  
				id:"link-up2",  
				type:"uploader", 
				autoheight:50, 
				borderless:true
			},
			{},
			//{view:"text", name:"file1", label:"Remark", labelPosition:"top"},
			{ 
				cols:[
					{},
					{
						view:"button", value:"Save", click:function(){
							if (this.getFormView().validate()) // on success
							{
							webix.message("All is correct");
							var data = $$("myform_edt").getValues();	
								//send data to server
								webix.ajax().put(url+"../backend/lumen/public/saveDocInEdt", data).then(() => webix.message("Data has been edited"));
								//$$("myform_edt").clear();
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });


							//$$("upl1").send(function(response){
							//	if(response)
							//	webix.message(response.status);								
							//	var data = $$("myform_edt").getValues();	
								//send data to server
							//	webix.ajax().put(url+"../backend/lumen/public/saveDocInEdt", data).then(() => webix.message("Data has been edited"));
								//$$("myform_edt").clear();
							//});
							
							//$$("in_edt").clearAll();
							//$$("in_edt").load(url+"../backend/lumen/public/doc");
						}
					},
					{
						view:"button", value:"Refresh", click:function(){	
							$$("myform_edt").clear();						
							$$("in_edt").clearAll();
							$$("in_edt").load(url+"../backend/lumen/public/doc");
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
			{view:"label",label:"Edit Document"},
			{ gravity: 1},              
			{ 
				view: "button", 
				type: "iconButton", 
				width: 90, 
				icon: "fas fa-close", 
				label: " Close",
				click: "location.href='#!/app/document.internal.index'"                       
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
			//$$("myform_edt").elements.name.focus();

			$$("dept").attachEvent("onChange", function(){ 
				sec = $$("sec"); 
				var dept_id = this.getValue();
				sec.define("options", url+"../backend/lumen/public/sec/"+dept_id);
			  });

			var dept = $$("dept").getList(); //returns list view of the control
			webix.ajax().get($$("dept").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				dept.parse(data.json()); //getting data				
			});

			var sec = $$("sec").getList(); //returns list view of the control
			webix.ajax().get($$("sec").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				sec.parse(data.json()); //getting data				
			});
			
			var ctg = $$("ctg").getList(); //returns list view of the control
			webix.ajax().get($$("ctg").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				ctg.parse(data.json()); //getting data				
			});

			var ref = $$("ref").getList(); //returns list view of the control
			webix.ajax().get($$("ref").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				ref.parse(data.json()); //getting data				
			});
		}
	};
});