define([

], function(require, factory) {
    
    return {
        $ui:{
            height:155,
            responsive:true,
            template: function(data){
				var t = null;
				var items = data.items;
				var html = "<div class='row'>";
				for(var i=0; i < items.length; i++){
					t = items[i];
                    html += "<div class='col-lg-6 col-md-6'>";
                        html += "<div class='panel "+ t.panel+"'>";
                            html += "<div class='panel-heading'>";
                                html += "<div class='row'>";
                                    html += "<div class='col-xs-3'>";
                                        html += "<i class=' "+ t.icon +" fa-5x'></i>";
                                        html += "</div>";
                                        html += "<div class='col-xs-9 text-right'>";
                                        html += "<div class='huge'>"+ t.value +"</div>";
                                        html += "<div>"+ t.text +"</div>";
                                    html += "</div>";
                                html += "</div>";
                            html += "</div>";
                            html += "<a target='_blank' href='"+ t.link +"'>";
                            html += "<div class='panel-footer'>";
                                html += "<span class='pull-left'>View Details</span>";
                                html += "<span class='pull-right'><i class='fa fa-arrow-circle-right'></i></span>";
                                html += "<div class='clearfix'></div>";
                                html += "</div>";
                            html += "</a>";

                        html += "</div>";
                    html += "</div>";
				}
				html += "</div>";
				return html;
            },
			data: {
				items:[
					{id:1, text: "Requirement", value: "ISO 9001:2015", icon: "fa fa-quora", panel:"panel-primary", link:"http://172.20.40.15/qasystems/doc_externals/file/ISO9001_2015.pdf"},
					{id:2, text: "Requirement", value: "IATF 16949:2016", icon: "fa fa-car", panel:"panel-green", link:"http://172.20.40.15/qasystems/doc_externals/file/IATF16949_2016.pdf"}
					//{id:3, text: "Requirement", value: "ISO 14001", icon: "fa fa-leaf", panel:"panel-green"},
					//{id:4, text: "Requirement", value: "ISO 45001", icon: "fa fa-gear", panel:"panel-red"}
				]
			}
        }
    };
    
});