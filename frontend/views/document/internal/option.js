define([

], function() {

	var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var option = {
        view:"toolbar",
        rows:[
			{
				view:"combo",
                label:"Select Department",
                labelWidth:150,
				options:url+"backend/lumen/public/dept",
				on:{
					onChange:function(id){
						var obj = this.getPopup().getBody().getItem(id);
						$$("data_doc").clearAll();
						$$("data_doc").load(url+"backend/lumen/public/opt_dept/"+obj.id);
						
					}
				}
			}
		]
    };

    return {
        $ui:option
    };
    
});