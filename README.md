# Boiled Page grid table component and script

Grid table SCSS component and script for Boiled Page frontend framework. They are intended to create responsive, table-looking layouts with grid component.

## Install

Place `_grid-table.scss` file to `/assets/css/components` directory, and add its path to components block in `assets/css/app.scss` file.

You will also need to place `grid-table.js` to `/assets/js` directory and add its path to `scripts` variable in `gulpfile.js` to be combined with other scripts.

## Grid table component

### Classes

Class name | Description | Example
---------- | ----------- | -------
`grid-table` | Applies a grid table. | `<ul class="grid-table grid"></ul>`
`grid-table-cell` | Applies a grid table cell. | `<li class="grid-table-cell grid-col"></li>`

### Examples

#### Example 1

The following example shows a three-column grid table by default, where columns become full width on smaller screens. `data-grid-table` attributes are used for grid table script.

```html
<ul class="grid-table grid" data-grid-table>
  <li class="grid-table-cell grid-col grid-col--1of3 grid-col--small--full" data-grid-table-cell>
    <h2 class="h6">Lorem ipsum dolor amet</h2>
    <p>Maiores quaerat exercitationem provident et tempora.</p>
  </li>
  <li class="grid-table-cell grid-col grid-col--1of3 grid-col--small--full" data-grid-table-cell>
    <h2 class="h6">Lorem ipsum dolor amet</h2>
    <p>Maiores quaerat exercitationem provident et tempora.</p>
  </li>
  <li class="grid-table-cell grid-col grid-col--1of3 grid-col--small--full" data-grid-table-cell>
    <h2 class="h6">Lorem ipsum dolor amet</h2>
    <p>Maiores quaerat exercitationem provident et tempora.</p>
  </li>
</ul>
```
### Script for example

Add `gridTables` property to `app` object in `assets/js/app.js`.

```js
gridTables: []
```

Place the following code inside `assets/js/app.js` to initialize elements with `data-grid-table` attribute as grid tables.

```js
// Initialize grid tables
var gridTableElems = document.querySelectorAll('[data-grid-table]');
for (var i = 0; i < gridTableElems.length; i++) {
  app.gridTables[i] = new GridTable({
    cells: gridTableElems[i].querySelectorAll('[data-grid-table-cell]')
  });
  app.gridTables[i].detect();
}
```

Place the following code inside the `onBreakpointChange` function in `assets/js/app.js` to detect again first and last row and column of each grid table on breakpoint change.

```js
// Detect again first and last row and column of each grid table
for (var i = 0; i < app.gridTables.length; i++) {
  app.gridTables[i].detect();
}
```

## Grid table script

### Usage

```js
// Create new grid table instance
var gridTable = new GridTable(options);

// Initialize grid table instance
gridTable.init();
```

### Options

The following options are available for grid table constructor:

Option| Type | Default | Required | Description
------|------|---------|----------|------------
`cells` | Array | null | Yes | A `NodeList` type object of grid table cells.
`firstRowClass` | String | 'is-first-row' | No | Class added to grid table cells in first row.
`firstColumnClass` | String | 'is-first-column' | No | Class added to grid table cells in first column.
`lastRowClass` | String | 'is-last-row' | No | Class added to grid table cells in last row.
`firstColumnClass` | String | 'is-first-column' | No | Class added to grid table cells in last column.
`detectCallback` | Function | null | No | Callback function called after first and last row and column of grid table is detected.
`destroyCallback` | Function | null | No | Callback function called after grid table is destroyed.

### Methods

#### Detect grid table

`detect()` - Detect first and last column and row of grid table. It adds related classes to grid table cells.

#### Destroy grid table 

`destroy()` - Destroy grid table. It removes related classes from grid table cells.
