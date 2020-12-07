define([
    
], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var category = {
        rows:[		
			{
				view:"list", 		
				type:{
				width:300,
				height:60
				},
				template:"<center style='padding: 7pt'><div class='list_ex'>#name# (#deskripsi#)</div></center>",
				select:true,
				//data:ctg_ex.data,
				data:[{"id":1,"name":"ISO & IATF","deskripsi":"Requirements"},{"id":2,"name":"SNI","deskripsi":"Standar Nasional Indonesia"},{"id":3,"name":"CSR","deskripsi":"Customer Specific Requirements"}],
				on:{
					onItemClick: function(id){
						$$("data_doc_ex").clearAll(); 
						$$("data_doc_ex").load(url+"backend/lumen/public/category/"+id);
				}
			}
			}
		]
    };

    return {
        $ui:category
    };
    
});