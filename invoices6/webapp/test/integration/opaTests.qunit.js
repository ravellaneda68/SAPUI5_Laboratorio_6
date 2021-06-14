// @ts-nocheck
/* eslint-disable no undef */
/* global Qunit */

QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
    "use-strict";
    sap.ui.require([
        "logaligroupa21/invoices6/test/integration/NavigationJourney"
    ], function() {
        QUnit.start();  
    });
});
