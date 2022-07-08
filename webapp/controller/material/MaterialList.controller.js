sap.ui.define([
    'sap/ui/demo/nav/controller/BaseController',
], function(BaseController) {
    'use strict';
    
return BaseController.extend("sap.ui.demo.nav.controller.material.MaterialList",{
    onListItemPressed : function(oEvent){
        var oItem, oCtx;
        oItem = oEvent.getSource();
        oCtx = oItem.getBindingContext();
        this.getRouter().navTo("material",{
            employeeId : oCtx.getProperty("MaterialID")
        });
    }
})


});

