// @ts-nocheck
sap.ui.define([
    
    "sap/ui/core/UIComponent",
    "logaligroupa21/invoices6/model/Models",
    "sap/ui/model/resource/ResourceModel",
    "./controller/HelloDialog",
    "sap/ui/Device"
],
    /**
     * @param {typeof sap.ui.core.UIComponent} UIComponent 
     * @param {typeof logaligroupa21.invoices6.model.Models} Models
     * @param {typeof sap.ui.model.resource.ResourceModel} ResourceModel
     * @param {typeof sap.ui.Device} Device
     */
    function (UIComponent, Models, ResourceModel, HelloDialog, Device) {

        return UIComponent.extend("logaligroupa21.invoices6.Component", {

            metadata: {
                manifest: "json"
            },

            init: function () {
                // call paarent´s init
                UIComponent.prototype.init.apply(this, arguments);
                // set data model to view
                this.setModel(Models.createRecipient());

                // set i18n model to view
               // var i18nModel = new ResourceModel({ bundleName: "logaligroupa21.invoices6.i18n.i18n" });
               // this.setModel(i18nModel, "i18n");

               // set the device model
               this.setModel(Models.createDeviceModel(), "device");


                this._helloDialog = new HelloDialog(this.getRootControl());
                
                this.getRouter().initialize();
            },

            exit: function () {
                this._helloDialog.destroy();
                delete this._helloDialog;
            },

            openHelloDialog: function () {
                this._helloDialog.open();
            },

            // dependiendo el dispositivo se aplica la visualiazcion de los datos cozy=dispistivos tactiles moviles o compact=equipos escritorio
            getContentDensityClass: function() {
                if (!Device.support.touch) {
                    this._sContentDensityClass = "sapUiSizeCompact";
                } else {
                    this._sContentDensityClass = "sapUiSizeCozy";
                }
                    return this._sContentDensityClass;
                }
        });

    });