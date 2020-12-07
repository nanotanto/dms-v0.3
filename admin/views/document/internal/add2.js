define([
    
], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
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
						$$("data_doc").clearAll(); 
						$$("data_doc").load(url+"../backend/lumen/public/level/"+id);
				}
			}
			}				
		]
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

	var form = {
		view:"form", 
		id:"myform_reg",
		//width:400,		
		hidden:true,
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
		},
		
	};
	

	var layout = {
		type:"space",
		rows:[
			close,
			{cols:[piramid,form]}
		]
	};
    
    return {
        $ui:layout
    };
    
});