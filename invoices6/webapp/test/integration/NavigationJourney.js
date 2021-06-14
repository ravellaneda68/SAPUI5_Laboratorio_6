// @ts-nocheck

sap.ui.define([
    "logaligroupa21/invoices6/localService/mockserver",
    "sap/ui/test/opaQunit",
    "./pages/HelloPanel",

    /**
     * param {typeof sap.ui.test.opaQunit } opaQunit
     */
], function (mockserver, opaQunit) {
    "use strict";

    QUnit.module("Navigation");
    opaQunit("Should open the Hellog Dialog", function(Given, When, Then) {

        mockserver.init();

        Given.iStartMyUIComponent({
            componentConfig: {
                name: "logaligroupa21.invoices6"
            }
        });

        // Actions
        When.onTheAppPage.iSayHelloDialogButton();

        // Assertions
        Then.onTheAppPage.iSeeTheHelloDialog();

        // cleanup
        Then.iTeardownMyApp();

    });
});
