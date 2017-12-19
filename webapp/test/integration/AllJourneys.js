jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

// We cannot provide stable mock data out of the template.
// If you introduce mock data, by adding .json files in your webapp/localService/mockdata folder you have to provide the following minimum data:
// * At least 3 Products in the list
// * All 3 Products have at least one Order_Details

sap.ui.require([
	"sap/ui/test/Opa5",
	"com/prod/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"com/prod/test/integration/pages/App",
	"com/prod/test/integration/pages/Browser",
	"com/prod/test/integration/pages/Master",
	"com/prod/test/integration/pages/Detail",
	"com/prod/test/integration/pages/NotFound"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "com.prod.view."
	});

	sap.ui.require([
		"com/prod/test/integration/MasterJourney",
		"com/prod/test/integration/NavigationJourney",
		"com/prod/test/integration/NotFoundJourney",
		"com/prod/test/integration/BusyJourney",
		"com/prod/test/integration/FLPIntegrationJourney"
	], function () {
		QUnit.start();
	});
});