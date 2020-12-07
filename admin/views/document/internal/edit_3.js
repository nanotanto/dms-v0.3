define([
	"../../../../frontend/views/webix/dynamicCombo"
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

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
				options:{ },url:url+"../backend/lumen/public/dept"
			},
			{
				view:"dynamicCombo", 
				id:"sec", 
				name:"section_id", 
				label:"Section", 
				labelPosition:"top", 
				options:{ },url:url+"../backend/lumen/public/sec"
			},
			{
				view:"dynamicCombo", 
				id:"ctg", 
				name:"category_id", 
				label:"Category", 
				labelPosition:"top",
				options:{ },url:url+"../backend/lumen/public/ctg"
			},
			{
				view:"text", 
				name:"no", 
				label:"Doc. No.", 
				labelPosition:"top"
			},
			{
				view:"text", 
				name:"name", 
				label:"Document Name", 
				labelPosition:"top"
			},
			{
				view:"datepicker", 
				name:"effective_date", 
				label:"Effective Date", 
				labelPosition:"top", 
				stringResult:true, format:"%d  %M %Y"
			},
			{
				view:"text", 
				name:"rev_no", 
				label:"Rev.", 
				labelPosition:"top"
			},
			{
				view:"text", 
				name:"rev_content", 
				label:"Rev. Content", 
				labelPosition:"top"
			},
			{
				view:"dynamicCombo", 
				id:"ref", 
				name:"no_reference", 
				label:"No Reference", 
				labelPosition:"top", 
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
						autosend:false,
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
							$$("upl1").send(function(response){
								if(response)
								webix.message(response.status);								
								var data = $$("myform_edt").getValues();	
								//send data to server
								webix.ajax().post(url+"../backend/lumen/public/saveDocInEdt", data).then(() => webix.message("Saved."));
								$$("myform_edt").clear();
							});
							
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
			{view:"label",label:"Add New Document"},
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
			{cols:[form]}
		]
	};



	return {
		$ui:layout,
		$oninit:function(){
			//$$("myform_edt").elements.name.focus();

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