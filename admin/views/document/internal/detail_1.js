define([
	"../../../../frontend/views/webix/dynamicCombo"
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
	
	var grid = {rows:[
		{ view:"template", template:"History Document", type:"header" },
		{view:"datatable",
		id: "in_reg",
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
				header:["Doc. No."], 
				width:100,	 
				template:"<a target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../docs/internal/#file#'>#no#</a>"
			},
			{ 
				id:"name",  
				fillspace:true,
					header:["Document Name"], 
					//width:280,	
					//template:"<a target='_blank' href='http://p0002007/qasystems/docs/file/#file1#'>#name#</a>"
				},
				{ 
					id:"rev_no",	
					header:["Rev."],	
					width:50
				},
				{ 
					id:"effective_date", 
					header:["Effective Date"]
				},
				{ 
					id:"department_id",	
					width:160,
					hidden:true
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
			]
			
	}]};

	var form = {
		view:"form", 
		id:"myform_reg",
		//width:400,
		rows:[
			{
				type:"header", 
				template:"Document Information"
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
				readonly:true,				
				labelWidth:150
			},
			{
				view:"text", 
				name:"name", 
				label:"Document Name", 
				readonly:true,
				labelWidth:150
			},
			{
				view:"text", 
				name:"rev_no", 
				label:"Rev.", 
				readonly:true,
				labelWidth:150
			},
			{
				view:"textarea", 
				name:"rev_content", 
				label:"Rev. Content", 
				readonly:true,
				labelWidth:150
			},
			{
				view:"datepicker", 
				name:"effective_date", 
				label:"Effective Date", 
				labelWidth:150, 
				readonly:true,
				stringResult:true, format:"%d  %M %Y"
			},
			{
				view:"dynamicCombo", 
				id:"ctg", 
				name:"category_id", 
				label:"Category", 
				labelWidth:150,
				readonly:true,
				options:{ },url:url+"../backend/lumen/public/ctg"
			},	
			{
				view:"dynamicCombo", 
				id:"ref", 
				name:"no_reference", 
				label:"No Reference", 
				labelWidth:150, 
				readonly:true,
				options:{ },url:url+"../backend/lumen/public/ref"
			},
			{
				view:"dynamicCombo", 
				id:"dept", 
				name:"department_id", 
				label:"Department", 
				labelWidth:150, 
				readonly:true,
				options:{ },url:url+"../backend/lumen/public/dept"
			},
			{
				view:"dynamicCombo", 
				id:"sec", 
				name:"section_id", 
				label:"Section", 
				labelWidth:150, 
				readonly:true,
				options:{ },url:url+"../backend/lumen/public/sec"
			},		
			{
				view:"text", 
				name:"remark", 
				label:"Remark", 
				readonly:true,
				labelWidth:150
			},
			{
				view:"dynamicCombo",
				readonly:true,
				name:"status_id", 
				//value:1, 
				label:"Status", 
				labelWidth:150, 
				options:[
					{value:"Active",id:1},
					{value:"Obsolete",id:2}
				]
			},	
			{
				cols:[
					{
						view:"text", id:"file1",
						name:"file1", 
						label:"PDF File", 
						readonly:true,
						labelWidth:150
					},	
					{ view:"button",
					width:150,
					value:"View", click:function(){
						var id = $$("id").getValue();						
						var file = $$("file1").getValue();
						//window.open(url+"lumen/public/file/"+id+"");
						window.open(+url+"../../../pdf/web/viewer.html?file=../../docs/internal/"+file+"");						

						var data = "id="+id;	
						webix.ajax().post(url+"../backend/lumen/public/saveLog", data).then(() => webix.message("Saved."));
					}},
				]
			},
			{
				cols:[
					{
						view:"text", id:"file2",
						name:"file2", 
						label:"Master File", 
						readonly:true,
						labelWidth:150
					},
					{ view:"button",
					width:150,
					value:"Download", click:function(){
						var id = $$("file2").getValue();
						//window.open(url+"lumen/public/file/"+id+"");
						window.open(+url+"../../../pdf/web/viewer.html?file=../../docs/internal/"+id+"");
					}},
				]
			},
			{}
			
			
		],
		scroll:true 
	};

	var tabel_log = {
		rows:[
		{ view:"template", template:"Viewed by", type:"header" },
		{view:"datatable",
		id: "log",
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
				id:"doc_id",	
				hidden:true,
				header:["Doc. No."], 
				width:180,	 
			},
			{ 
				id:"user_name",  
				header:["User ID"], 
				width:280
			},

			]
		}
		]
	}
	
	
	return {
		$ui:{
			type:"space",
			cols:[
				form, 
				{
					rows:[
						grid,
						tabel_log
					]
				}
				]
		},
		$oninit:function(){
			//var full_url = document.URL; // Get current url
			//var url_array = full_url.split('=') // Split the string into an array with / as separator
			//var id = url_array[url_array.length-1];  // Get the last part of the array (-1)
			//$$("in_reg").load(url+"lumen/public/form/data/"+id);
			//$$("myform_reg").load(url+"../backend/lumen/public/form/data/"+id);
			//$$("in_reg").load(url+"../backend/lumen/public/getDochis/"+id);
			//$$("log").load(url+"../backend/lumen/public/log/"+id);
			
			
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
 