define([
    "app",
    "views/sidebar"
],function(){

    var url = window.location.protocol +"//"+ window.location.hostname+window.location.pathname;
    
    var toolbar = {
        rows:[
            {
                view: "toolbar", 
                padding:3, 
                elements: [
                    {
                        view: "button",
                        type: "icon", 
                        icon: "bars",
                        width: 37, 
                        align: "left", 
                        css: "app_button",
                        click: function(){
                            $$("sidemenu").toggle();
                        }
                    },
                    { 
                        view: "label", 
                        label: "QA-System"
                    },
                    {},
                    { 
                    //    view: "button", 
                    //    type: "icon", 
                    //   width: 80, 
                    //    css: "app_button", 
                    //    icon: "fas fa-user", 
                    //    label: " Login",
                    //    click: "location.href='"+url+"admin/#!/login'"                       
                    }
                ]
            }
        ]
    };
    
    var sidebar = {
        id:"sidemenu",
        view: "sidebar",
        //collapsed: true,
        width: 215,
        scroll: "native-y",
        on:{
            onBeforeSelect:function(id){
                if(this.getItem(id).$count){
                    //debugger;
                    return false;
                }
            },
            onAfterSelect:function(id){
                this.$scope.show("./"+id);
                var item = this.getItem(id);
                webix.$$("title").parse({title: item.value});
            }
        },
        data:menu_data 
    };
    
    var body = {
        rows:[
            { 
                height: 40, 
                id: "title", 
                css: "title", 
                template: "<div class='header'>#title#</div>", 
                data:{
                    text: "",
                    title: ""
                }
            },
            {
                view: "scrollview", 
                scroll:"false", 
                body:{ 
                    cols:[
                        { $subview:true }
                    ] 
                }
            }
        ]
    };
        
    var layout = {
        rows:[ 
            toolbar,
            {
                cols:[
                    {rows:[
                        sidebar
                    ]},
                    body
				]
            },
            {
                template:"<div  style='font-size:70%;'>\n\
                            Created By <a href='mailto:witantofit@gmail.com'>F. Witanto</a>\n\
                            &copy; 2019  Ver. : 3.0 \n\
                          </div>",
                height:20 
            }
        ] 
    };
        
	return  {
        $ui:layout,
        $menu:"sidemenu",
        //$onurlchange:function(config, url, $scope){
			//$$("sidemenu").select(url[0].page);
		//}
	};
});
