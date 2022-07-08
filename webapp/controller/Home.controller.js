sap.ui.define([
	"sap/ui/demo/nav/controller/BaseController"
], function (BaseController) {
	"use strict";

	return BaseController.extend("sap.ui.demo.nav.controller.Home", {

		onDisplayNotFound : function () {
			// display the "notFound" target without changing the hash
			this.getRouter().getTargets().display("notFound", {
				fromTarget : "home"
			});
		},

		onNavToEmployees : function () {
			this.getRouter().navTo("employeeList");
		},
		
		onNavToMaterials : function () {
			this.getRouter().navTo("materialList");
		},
		
		onNavToCategories : function () {
			this.getRouter().navTo("categoryList");
		},
		onNavToEmployeeOverview : function ()  {
			this.getRouter().navTo("employeeOverview");
		}


	});

});
