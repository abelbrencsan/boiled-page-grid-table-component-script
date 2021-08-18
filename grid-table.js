/**
 * Grid table - v1.1.0
 * Copyright 2021 Abel Brencsan
 * Released under the MIT License
 */

var GridTable = function(options) {

	'use strict';

	// Test required options
	if (typeof options.cells !== 'object') throw 'Grid table "cells" option must be an object';

	// Default grid table instance options
	var defaults = {
		cells: null,
		firstRowClass: 'is-first-row',
		firstColumnClass: 'is-first-column',
		lastRowClass: 'is-last-row',
		lastColumnClass: 'is-last-column',
		detectCallback: null,
		destroyCallback: null
	};

	// Extend grid table instance options with defaults
	for (var key in defaults) {
		this[key] = (options.hasOwnProperty(key)) ? options[key] : defaults[key];
	}

};

GridTable.prototype = function () {

	'use strict';

	var gridTable = {

		/**
		* Detect first and last column and row of grid table. It adds related classes to grid table cells. (public)
		*/
		detect: function() {
			var firstItem = this.cells[0];
			var lastItem = this.cells[this.cells.length - 1];
			for (var i = 0; i < this.cells.length; i++) {
				this.cells[i].classList.remove(this.firstRowClass);
				this.cells[i].classList.remove(this.lastRowClass);
				this.cells[i].classList.remove(this.firstColumnClass);
				this.cells[i].classList.remove(this.lastColumnClass);
				if (this.cells[i].offsetTop == firstItem.offsetTop) {
					this.cells[i].classList.add(this.firstRowClass);
				}
				if (this.cells[i].offsetLeft == firstItem.offsetLeft) {
					this.cells[i].classList.add(this.firstColumnClass);
				}
				if (this.cells[i].offsetTop == lastItem.offsetTop) {
					this.cells[i].classList.add(this.lastRowClass);
				}
				if (this.cells[i].offsetLeft + this.cells[i].offsetWidth == lastItem.offsetLeft + lastItem.offsetWidth) {
					this.cells[i].classList.add(this.lastColumnClass);
				}
			}
			if (this.detectCallback) this.detectCallback.call(this);
		},

		/**
		 * Destroy grid table. It removes related classes from grid table cells. (public)
		 */
		destroy: function() {
			for (var i = 0; i < this.cells.length; i++) {
				this.cells[i].classList.remove(this.firstRowClass);
				this.cells[i].classList.remove(this.lastRowClass);
				this.cells[i].classList.remove(this.firstColumnClass);
				this.cells[i].classList.remove(this.lastColumnClass);
			}
			if (this.destroyCallback) this.destroyCallback.call(this);
		}
	};

	return {
		detect: gridTable.detect,
		destroy: gridTable.destroy
	};

}();
