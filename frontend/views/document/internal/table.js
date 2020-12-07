define([
    "views/document/internal/detail"
], function(detail) {

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
						{ id:"no",	header:["Doc. No.",{ content:"serverFilter"}], sort:"server",	width:180,	 template:"<a class='link' target='_blank' href='"+url+"/pdf/web/viewer.html?file=../../ISO9001/internal/#file1#'>#no#</a>"},
						//template:"<a class='link' target='_blank' href='"+url+"/pdf/web/viewer.html?file=../../docs/internal/#file1#'>#no#</a>"},
						{ id:"name",  fillspace:true,	header:["Document Name",{ content:"serverFilter"}], sort:"server"},
						{ id:"rev_no",	header:["Rev."], width:50},
						{ id:"detail", header:"Action", width:70, template:"<a class='detail' href='#!/app/document.internal.index'>Detail</a>"}
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

						$$("myform_reg").load(url+"backend/lumen/public/form/data/"+id);
						$$("in_reg").load(url+"backend/lumen/public/getDochis/"+id);
						$$("log").load(url+"backend/lumen/public/log/"+id);
					
						$$('win1').show();

						$$("data_doc").disable();
					},
					"link":function(e, id, trg){ 
						this.$scope.show("document.internal.index:id="+id);
						var data = "id="+id;	
						webix.ajax().post(url+"backend/lumen/public/saveLog", data).then(() => webix.message("Saved."));
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
						}
					}
				]
				},
				body:detail
			}
		]
    };
    
});