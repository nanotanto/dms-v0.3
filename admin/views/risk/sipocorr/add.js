define([
	"../../../../frontend/views/webix/dynamicCombo",
],
function(){	

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;

	var myformat = webix.Date.dateToStr("%Y-%m-%d");
	var date = myformat(new Date());

	var piramid = {
		rows:[	
			{
				view:"list", 
				id:"piramid",
				type:{
				width:300,
				height:70
				},
				template:"<center><div class='#css#'></div>#title#</center>",
				select:true,
				data:[
                    { id:1, title:"Manual", css:"level-1"},
                    { id:2, title:"Rule", css:"level-2"},
                    { id:3, title:"Procedure", css:"level-3"},
                    { id:4, title:"Work Instruction", css:"level-4"},
                    { id:5, title:"Form / Check Sheet", css:"level-5"},
                    {title:"<br/><div class='btn btn-primary btn-lg btn-block'>Supporting Document</div>"},
                    { id:6, title:"QCPC (Quality Control Process Chart)", css:"btn btn-success btn-lg btn-block"}
                ],
				on:{
					onItemClick: function(id){
						$$("in_reg").clearAll(); 
						$$("in_reg").load(url+"../backend/lumen/public/level/"+id);
					$$("myform_reg").show();
					//$$("ctg").setValue("QM");
					$$("ctg").setValue(id);

				}
			}
			}				
		]
		};
		
	var grid = {
		view:"datatable",
		id: "in_reg",
		resizeColumn:true,
		resizeRow:true,
		//select:true,
		editable:true,	
		fixedRowHeight:false,	
		scheme:{
			$change:function(item){
				
				if (item.status_id > 1)
					item.$css = { "background-color":"#FFAAAA" };
				}
		},
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
				template:"<a target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../docs/internal/#file1#'>#no#</a>"
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
					sort:"server", width:160, 
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
				//$$("myform_reg").load(url+"../backend/lumen/public/form/data/"+id);
				}
			},
			url:url+"../backend/lumen/public/level/8"
	};

var note={
	view:"form",
	id:"form_note",
	rows:[{
		view:"label",
		id:"no",
		name:"no"
	}],
	scroll:true,
	hidden:true
};

	var form = {
		view:"form", 
		id:"myform_reg",
		//width:750,
		//hidden:true,
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
				view:"dynamicCombo", 
				id:"ctg", 
				name:"category_id", 
				label:"Category", 
				labelPosition:"top",
				validate:"isNotEmpty",
				value:8,
				options:[{value: "SIPOCORR", id: 8}]
				//url:url+"../backend/lumen/public/ctg",				
				//readonly:true,
			},
			{
				view:"dynamicCombo", 
				id:"dept", 
				name:"department_id", 
				label:"Department", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				options:{ },url:url+"../backend/lumen/public/dept",
			},			
			{
				view:"dynamicCombo", 
				id:"sec", 
				name:"section_id", 
				label:"Section", 
				labelPosition:"top", 
				validate:"isNotEmpty",
				options:{ },
				//url:url+"../backend/lumen/public/sec/2"
			},
			{
				view:"text", 
				name:"no", 
				label:"Doc. No.", 
				//validate:"isNotEmpty",
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
				validate:"isNotEmpty",
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
					
					{
						view:"button", value:"Save", click:function(){
							if (this.getFormView().validate()) // on success
							{
							webix.message("All is correct");
							var data = $$("myform_reg").getValues();	
								//send data to server
								webix.ajax().post(url+"../backend/lumen/public/saveDocIn", data).then(() => webix.message("Saved."));
								$$("myform_reg").clear();
							}
							else
							webix.message({ type:"error", text:"Form data is invalid" });

							
							//$$("upl1").send(function(response){
							//	if(response)
							//	webix.message(response.status);								
							//	var data = $$("myform_reg").getValues();	
							//	//send data to server
							//	webix.ajax().post(url+"../backend/lumen/public/saveDocIn", data).then(() => webix.message("Saved."));
							//	$$("myform_reg").clear();
							//});
							
							//$$("in_reg").clearAll();
							//$$("in_reg").load(url+"../backend/lumen/public/showRegNow");
						}
					},
					{
						view:"button", value:"Clear form", click:function(){	
							$$('myform_reg').clearValidation();
							$$("myform_reg").clear();		
							$$('myform_reg').clearValidation();							
						}
					},
					{
						view:"button", value:"Reload Table", click:function(){						
							$$("in_reg").clearAll();
							//$$("in_reg").load(url+"../backend/lumen/public/showRegNow");
							$$("in_reg").load(url+"../backend/lumen/public/doc");
							
						}
					}
				]
			}
		],
		scroll:true,
		rules:{
			$obj:function(){ // data = value
				var data1 = this.getValues();
				var data2 = $$("form_note").getValues();
				if (data1.no == data2.no){
					$$("myform_reg").markInvalid("no",data2.no+" (Data Sudah Ada)");
					$$("myform_reg").elements["effective_date"].config.readonly = true;
					$$("myform_reg").elements["rev_no"].config.readonly = true;
					$$("myform_reg").elements["rev_content"].config.readonly = true;
					$$("myform_reg").elements["no_reference"].config.readonly = true;
					$$("myform_reg").elements["remark"].config.readonly = true;				
										
					return false;
				}				
				return true;			
			}
		}
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
				click: "location.href='#!/app/risk.sipocorr.index'"                       
			}
		]
	
	};
	
	var layout = {
		type:"space",
		rows:[
			close,
			{cols:[form,note,grid]}
		]
	};

	return {
		$ui:layout,
		$oninit:function(){
			//$$("myform_reg").elements.name.focus();
			$$("dept").attachEvent("onChange", function(){ 
				var sec = $$("sec"); 
				var dept_id = this.getValue();
				sec.define("options", url+"../backend/lumen/public/sec/"+dept_id);

				var ctg_id = $$("ctg").getValue();
				$$("in_reg").clearAll(); 
				$$("in_reg").load(url+"../backend/lumen/public/getDocDept?ctg="+ctg_id+"&dept="+dept_id);

			});

			$$("sec").attachEvent("onChange", function(){ 
				var ctg_id = $$("ctg").getValue();		
				var dept_id = $$("dept").getValue();		
				var sec_id = this.getValue();; 

				$$("in_reg").clearAll(); 
				$$("in_reg").load(url+"../backend/lumen/public/getDocSec?ctg="+ctg_id+"&dept="+dept_id+"&sec="+sec_id);

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

			$$("myform_reg").elements["no"].attachEvent("onChange", function(newv){			
				$$("form_note").clear();
				//webix.ajax().get(url+"../backend/lumen/public/getNo?no="+newv);
				$$("form_note").load(url+"../backend/lumen/public/getNoDoc/"+newv);

				$$('myform_reg').clearValidation(); 
				
			  });
			
			$$("myform_reg").elements["name"].attachEvent("onChange", function(){
				this.getParentView().validate(); 
				
			});
		}
	};
});