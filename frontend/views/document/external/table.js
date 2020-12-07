define([
    
], function() {

    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var table = {
        rows:[
            {
                view:"datatable",
                id:"data_doc_ex",
                resizeColumn:true,
                resizeRow:true,
                columns:[
                    { id:"no",	header:["Doc. No.",{content:"textFilter"}],	width:160,	sort:"string", template:"<a class='link' target='_blank' href='"+url+"/pdf/web/viewer.html?file=../../ISO9001/external/#file1#'>#no#</a>"},
					//template:"<a target='_blank' href='http://p0002007/qasystems/doc_externals/file/#file#'>#no#</a>"},
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

    return {
        $ui:table,
        $oninit:function(){
			//$$("data_doc_ex").load(url+"backend/lumen/public/doc_ex");
		}
    };
    
});