sap.ui.define([

"sap/ui/core/mvc/Controller",
"sap/m/MessageToast",
"sap/base/Log"
],
/**
 * param {typeof sap.ui.core.mvc.Controller} Controller
 * param {typeof sap.m.MessageToast} MessageToast
 * param {typeof sap.base.Log} Log
  */
 function(Controller, MessageToast, Log) {
     "use strict";
          return Controller.extend("logaligroupa21.invoices6.controller.HelloPanel",  {
            
            oninit: function() {  

                       },
                    
      onBeforeRendering: function() {
            window.message = 'Log Message - onBeforeRendering';
            Log.info(window.message);
            Log.error(window.message);
      },

       onAfterRendering: function() {
            debugger;
       },

        onShowHello : function () {
             MessageToast.show("Hello World");
      },
      onOpenDialog: function()    {
              this.getOwnerComponent().openHelloDialog();           
             }         
   });
});