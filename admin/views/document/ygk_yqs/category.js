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
				data:[{"id":4,"name":"YGK","deskripsi":"Yamaha Technical Standard"},{"id":5,"name":"YQS","deskripsi":"Yamaha Quality Standard"}],
				on:{
					onItemClick: function(id){
						$$("data_doc_ex").clearAll(); 
						$$("data_doc_ex").load(url+"../backend/lumen/public/category/"+id);
				}
			}
			}
		]
    };

    return {
        $ui:category
    };
    
});