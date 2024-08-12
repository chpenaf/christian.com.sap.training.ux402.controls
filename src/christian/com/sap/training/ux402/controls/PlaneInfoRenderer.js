sap.ui.define([
    "sap/ui/core/Renderer"
],

function (Renderer) {
    "use strict";

    const PlaneInfoRenderer = 
        Renderer.extend("christian.com.sap.training.ux402.controls.HoverButton");
    PlaneInfoRenderer.apiVersion = 2;
    return PlaneInfoRenderer;
});