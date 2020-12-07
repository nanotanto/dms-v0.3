define([
    "views/document/internal/detail",
    "views/document/internal/edit",
    "views/document/internal/revision"
], function(detail,edit,revision) {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var table = {
			rows:[
				{
					view:"datatable",
					id:"data_doc",
					resizeColumn:true,
					resizeRow:true,
					select:true,
					//autowidth:true, 
					editable:true,						
					fixedRowHeight:false,
					scheme:{
						$change:function(item){
							
							if (item.status_id > 1)
								item.$css = { "background-color":"#FFAAAA" };
							}
					},
					columns:[
						//{ id:"no", 	header:["Doc. No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' href='#!/index/user.doc_in'>#no#</a>"},
						//{ id:"no",	header:["Doc. No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a target='_blank' href='"+url+"lumen/public/file/#file1#'>#no#</a>"},
						//{ id:"no",	header:["Doc. No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' target='_blank' href='http://172.20.40.15/qasystems/docs/file/#file1#'>#no#</a>"},
						{ id:"no",	header:["Doc. No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' target='_blank' href='"+url+"../pdf/web/viewer.html?file=../../docs/internal/#file1#'>#no#</a>"},
						{ id:"name",  fillspace:true,	header:["Document Name",{ content:"serverFilter"}], sort:"server"},
						{ id:"rev_no",	header:["Rev."], width:50},
						{ id:"detail", header:"Action", width:60, template:"<a class='detail' href='#!/app/document.internal.index'>Detail</a>"},
						//{ id:"edit", header:"Edit", width:45, template:"<a class='edit' href='#!/app/document.internal.index'>Edit</a>"},
						//{ id:"revision", header:"Revision", width:70, template:"<a class='revision' href='#!/app/document.internal.index'>Revision</a>"},
						//{ id:"delete", header:"Delete", width:70, template:"<a class='delete' href='#!/app/document.internal.index'>Delete</a>"}
						//{ id:"department_id",	header:["Department",{ content:"serverFilter"}], sort:"server", width:160}
					],							
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

					},
					onClick:{ 
					"detail":function(e, id, trg){
						//this.$scope.show("detail:id="+id);
						this.$scope.show("document.internal.index:id="+id);
						
						$$("myform_reg").clear();
						$$("in_reg").clearAll();
						$$("log").clearAll();						

						$$("myform_reg").load(url+"../backend/lumen/public/form/data/"+id);
						$$("in_reg").load(url+"../backend/lumen/public/getDochis/"+id);
						$$("log").load(url+"../backend/lumen/public/log/"+id);
					
						$$('win1').show();

						$$("data_doc").disable();
						$$("piramid").disable();
					},					
					"edit":function(e, id, trg){
						//this.$scope.show("detail:id="+id);
						this.$scope.show("document.internal.index:id="+id);
						
						$$("myform_edt").clear();				

						$$("myform_edt").load(url+"../backend/lumen/public/form/data/"+id);
					
						$$('win2').show();
						$$("data_doc").disable();
						$$("piramid").disable();
					},			
					"revision":function(e, id, trg){
						//this.$scope.show("detail:id="+id);
						this.$scope.show("document.internal.index:id="+id);
						
						$$("myform_rev").clear();				

						$$("myform_rev").load(url+"../backend/lumen/public/form/data/"+id);
					
						$$('win3').show();
						$$("data_doc").disable();
						$$("piramid").disable();
					},
				
					"link":function(e, id, trg){ 
						this.$scope.show("document.internal.index:id="+id);
						var data = "id="+id;	
						webix.ajax().post(url+"../backend/lumen/public/saveLog", data).then(() => webix.message("Saved."));
					}
					}			
				},
				
				{
					view:"template",
					template:"<span style= color:red> Ket : Warna merah berarti status dokumen obsolete (tidak digunakan) </span>",
					height:30
				}
			]
    };
    
    return {
		$ui:table,
		$windows:[
			{
				view:"window",
				id:"win1",
				width:800,
				height:600,
				position:"center",
				head:{
					view:"toolbar", margin:-4, cols:[
						{view:"label", label: "<center>Detail Information</center>" },
						{view:"icon", icon:"fa fa-window-close", css:"alter", click: function(){
							$$('win1').hide();	
							$$("data_doc").enable();								
							$$("piramid").enable();					
						}
					}
				]
				},
				body:detail
			},
			{
				view:"window",
				id:"win2",
				width:800,
				height:600,
				position:"center",
				head:{
					view:"toolbar", margin:-4, cols:[
						{view:"label", label: "<center>Edit Data</center>" },
						{view:"icon", icon:"fa fa-window-close", css:"alter", click: function(){
							$$('win2').hide();
							$$("data_doc").enable();										
							$$("piramid").enable();				
						}
					}
				]
				},
				body:edit
			},
			{
				view:"window",
				id:"win3",
				width:800,
				height:600,
				position:"center",
				head:{
					view:"toolbar", margin:-4, cols:[
						{view:"label", label: "<center>Revision Document</center>" },
						{view:"icon", icon:"fa fa-window-close", css:"alter", click: function(){
							$$('win3').hide();
							$$("data_doc").enable();										
							$$("piramid").enable();				
						}
					}
				]
				},
				body:revision
			}
		]
    };
    
});