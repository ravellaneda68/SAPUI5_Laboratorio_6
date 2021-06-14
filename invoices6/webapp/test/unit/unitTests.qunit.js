/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"logaligroupa21/invoices6/test/unit/AllTests"
	], function () {
		QUnit.start();
	});
});
