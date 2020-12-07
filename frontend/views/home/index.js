define([
	"views/home/iso",
	"views/home/kebijakan"
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