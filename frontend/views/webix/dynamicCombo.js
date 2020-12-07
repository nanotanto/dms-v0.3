
/*Creating a Custom Component*/
webix.protoUI({ //protoUI(); command to construct the new component with its own name, properties and functions.
 name: "dynamicCombo",  // the name of a new component
    $cssName:"combo", // inherits CSS class from the text component
    defaults:{ //Defining default properties
      on:{  //attached events
        onItemClick:function(){ //fires when a component item was clicked
          var GetPopup = this.getPopup(); //returns popup element of the input
          var GetList = GetPopup.getList(); //returns list view of the control
          webix.extend(GetPopup, webix.ProgressBar);  //function that merges the properties of two objects into a new one
          if(GetList.count() == 0 ){  //list of count
            GetPopup.$setSize("","200");  //sets the component size
            GetPopup.showProgress(true);  //displays a progress bar/ progress icon
            webix.ajax().get(this.config.url, function(text, data){ /*issues a GET Ajax request to the server*/
              if(!data.json() == " "){
                GetList.parse(data.json()); //getting data
                GetPopup.hideProgress();  //hides a progress bar/icon
              }
              else{
                webix.extend(GetPopup, webix.OverlayBox);
                GetPopup.showOverlay("<div style='margin:75px; font-size:20px;'>There is no data</div>");
                GetPopup.hideProgress();
              }
            });
          }
        }
      }
    }
},webix.ui.combo);  // the name of the base component