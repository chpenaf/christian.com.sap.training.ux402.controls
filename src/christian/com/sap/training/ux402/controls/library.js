/*!
 * ${copyright}
 */

/**
 * Initialization Code and shared classes of library christian.com.sap.training.ux402.controls.
 */
sap.ui.define([
	"sap/ui/core/library"
], function () {
	"use strict";

	// delegate further initialization of this library to the Core
	// Hint: sap.ui.getCore() must still be used to support preload with sync bootstrap!
	sap.ui.getCore().initLibrary({
		name: "christian.com.sap.training.ux402.controls",
		version: "${version}",
		dependencies: [ // keep in sync with the ui5.yaml and .library files
			"sap.ui.core"
		],
		types: [
			"christian.com.sap.training.ux402.controls.ExampleColor"
		],
		interfaces: [],
		controls: [
			"christian.com.sap.training.ux402.controls.Example"
		],
		elements: [],
		noLibraryCSS: false // if no CSS is provided, you can disable the library.css load here
	});

	/**
	 * Some description about <code>controls</code>
	 *
	 * @namespace
	 * @name christian.com.sap.training.ux402.controls
	 * @author Christian Peña
	 * @version ${version}
	 * @public
	 */
	var thisLib = christian.com.sap.training.ux402.controls;

	/**
	 * Semantic Colors of the <code>christian.com.sap.training.ux402.controls.Example</code>.
	 *
	 * @enum {string}
	 * @public
	 */
	thisLib.ExampleColor = {

		/**
		 * Default color (brand color)
		 * @public
		 */
		Default : "Default",

		/**
		 * Highlight color
		 * @public
		 */
		Highlight : "Highlight"

	};

	return thisLib;

});
