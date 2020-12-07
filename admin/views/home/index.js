define([
	"../../../frontend/views/home/iso",
	"../../../frontend/views/home/kebijakan"
], function(iso, kebijakan) {
    
    var ui = {
        type: "space",
        rows:[
            iso,
            kebijakan
        ]
    };

    return {
        $ui:ui
    };

});