define([
	"../../../../frontend/views/webix/dynamicCombo"
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var grid = {
		view:"datatable",
		id:"doc_rev",
		resizeColumn:true,
		resizeRow:true,
		select:true,
		//autowidth:true, 
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
				//template:"<a target='_blank' href='http://p0002007/qasystems/docs/file/#file1#'>#no#</a>"
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
				this.select(this.getFirstId());
			},
			on:{
				onAfterSelect:function(id){
					$$("myform_rev").load(url+"../backend/lumen/public/form/data/"+id);
				}
			},
			url:url+"../backend/lumen/public/doc"	
	};

	var form = {
		view:"form", 
		id:"myform_rev",
		width:400,
		rows:[
			{
				type:"header", 
				template:"Revision Document"
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
				id:"dept_rev", 
				name:"department_id", 
				label:"Department", 
				labelPosition:"top", 
				options:{ },url:url+"../backend/lumen/public/dept"
			},
			{
				view:"dynamicCombo", 
				id:"sec_rev", 
				name:"section_id", 
				label:"Section", 
				labelPosition:"top", 
				options:{ },url:url+"../backend/lumen/public/sec"
			},
			{
				view:"dynamicCombo", 
				id:"ctg_rev", 
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
				id:"ref_rev", 
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
						autosend:true,
						value:"Attach File", 
						link:"mylist1",
						upload:url+"../backend/lumen/public/form/do-upload"
					},
					{ 
						view:"list",  	
						id:"mylist1",  
						type:"uploader", 
						autoheight:50, 
						borderless:true
					}
				]
			},
			{ 
				cols:[
					{ 
						view:"uploader", 
						id:"upl2",	 		
						name:"file2",
						multiple:false, 
						autosend:true,
						value:"Attach File", 
						link:"mylist2",
						upload:url+"../backend/lumen/public/form/do-upload"
					},
					{ 
						view:"list",  	
						id:"mylist2",  
						type:"uploader", 
						autoheight:50, 
						borderless:true
					}
				]
			},
			//{view:"text", name:"file1", label:"Remark", labelPosition:"top"},
			{ 
				cols:[
					{
						view:"button", value:"Save", click:function(){
								var id = $$("id").getValue();
								var data = $$("myform_rev").getValues();	
								webix.ajax().post(url+"../backend/lumen/public/savedatahis/"+id, data).then(() => webix.message("Saved."));
								//send data to server
								webix.ajax().put(url+"../backend/lumen/public/form/datas", data).then(() => webix.message("Saved."));
	
							//$$("upl1").send(function(response){
							//	if(response)
							//	webix.message(response.status);
							//});
							//$$("upl2").send(function(response){
							//	if(response)
							//	webix.message(response.status);								
							//});
							
							
						}
					},
					{
						view:"button", 
						value:"Refresh", 
						click:function(){
							$$("doc_rev").clearAll();
							var full_url = document.URL; // Get current url
							var url_array = full_url.split('=') // Split the string into an array with / as separator
							var id = url_array[url_array.length-1];  // Get the last part of the array (-1)
							$$("doc_rev").load(url+"../backend/lumen/public/form/data/"+id);
						}
					}
				]
			}
		],
		scroll:true 
	};

	var close = {
        
		view: "toolbar", 
		//padding:3, 
		elements: [     
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
			//$$("myform_rev").elements.name.focus();

			var full_url = document.URL; // Get current url
			var url_array = full_url.split('=') // Split the string into an array with / as separator
			var id = url_array[url_array.length-1];  // Get the last part of the array (-1)
			//$$("in_rev").load(url+"../backend/lumen/public/form/data/"+id);
			//$$("myform_rev").load(url+"../backend/lumen/public/form/data/"+id);
			//$$("doc_rev").load(url+"../backend/lumen/public/form/data/"+id);

			var dept = $$("dept_rev").getList(); //returns list view of the control
			webix.ajax().get($$("dept_rev").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				dept.parse(data.json()); //getting data				
			});

			var sec = $$("sec_rev").getList(); //returns list view of the control
			webix.ajax().get($$("sec_rev").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				sec.parse(data.json()); //getting data				
			});
			
			var ctg = $$("ctg_rev").getList(); //returns list view of the control
			webix.ajax().get($$("ctg_rev").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				ctg.parse(data.json()); //getting data				
			});

			var ref = $$("ref_rev").getList(); //returns list view of the control
			webix.ajax().get($$("ref_rev").config.url, function(text, data){ /*issues a GET Ajax request to the server*/				
				ref.parse(data.json()); //getting data				
			});
		}
	};
});
 