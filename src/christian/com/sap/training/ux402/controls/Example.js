/*!
 * ${copyright}
 */

// Provides control christian.com.sap.training.ux402.controls.Example.
sap.ui.define([
	"./library", 
	"sap/ui/core/Control", 
	"./ExampleRenderer"
], function (library, Control, ExampleRenderer) {
	"use strict";

	// refer to library types
	var ExampleColor = library.ExampleColor;

	/**
	 * Constructor for a new <code>christian.com.sap.training.ux402.controls.Example</code> control.
	 *
	 * @param {string} [sId] id for the new control, generated automatically if no id is given
	 * @param {object} [mSettings] initial settings for the new control
	 *
	 * @class
	 * Some class description goes here.
	 * @extends sap.ui.core.Control
	 *
	 * @author Christian Peña
	 * @version ${version}
	 *
	 * @constructor
	 * @public
	 * @alias christian.com.sap.training.ux402.controls.Example
	 */
	var Example = Control.extend("christian.com.sap.training.ux402.controls.Example", /** @lends christian.com.sap.training.ux402.controls.Example.prototype */ {
		metadata: {
			library: "christian.com.sap.training.ux402.controls",
			properties: {
				/**
				 * The text to display.
				 */
				text: {
					type: "string",
					group: "Data",
					defaultValue: null
				},
				/**
				 * The color to use (default to "Default" color).
				 */
				color: {
					type: "christian.com.sap.training.ux402.controls.ExampleColor",
					group: "Appearance",
					defaultValue: ExampleColor.Default
				}
			},
			events: {
				/**
				 * Event is fired when the user clicks the control.
				 */
				press: {}
			}
		},
		renderer: ExampleRenderer,
    onclick: function() {
      this.firePress();
    }
	});
	return Example;

});
