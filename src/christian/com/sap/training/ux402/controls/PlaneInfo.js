sap.ui.define([
    "sap/ui/core/Control"
],

function (Control) {
    "use strict";

    return Control.extend("christian.com.sap.training.ux402.controls.HoverButton", {
        metadata: {
            properties: {
                "seatsMax": {
                    type: "string"
                },
                "seatsOcc": {
                    type: "string"
                }
            }
        }
    });
});