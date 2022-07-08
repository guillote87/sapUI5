sap.ui.define([
    'sap/ui/demo/nav/controller/BaseController',
], function(BaseController) {
    'use strict';
    
return BaseController.extend("sap.ui.demo.nav.controller.category.CategoryList",{
    onListItemPressed : function(oEvent){
        var oItem, oCtx;
        oItem = oEvent.getSource();
        oCtx = oItem.getBindingContext();
        this.getRouter().navTo("category",{
           CategoryId : oCtx.getProperty("CategoryID")
        });
    }
})


});
