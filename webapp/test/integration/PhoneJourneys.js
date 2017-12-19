jQuery.sap.require("sap.ui.qunit.qunit-css");
jQuery.sap.require("sap.ui.thirdparty.qunit");
jQuery.sap.require("sap.ui.qunit.qunit-junit");
QUnit.config.autostart = false;

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
		"com/prod/test/integration/NavigationJourneyPhone",
		"com/prod/test/integration/NotFoundJourneyPhone",
		"com/prod/test/integration/BusyJourneyPhone"
	], function () {
		QUnit.start();
	});
});