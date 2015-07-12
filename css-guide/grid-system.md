## Microweber CSS Grids

Microweber's grid system contains 2 parts: Static & Dynamic; 

### Dynamic Grid

* The dynamic grid columns can be resized by the user from live edit


Dynamic grid is used for live edit development. The "admin" user can change the width of columns directly from the site
 
The dynamic grid contains 3 classes: .mw-row, .mw-col, .mw-col-container 

.mw-row - Main holder

.mw-col - Column element. On this element you define the width of the column in %. You can add as many columns as you want but the total width of all of them must be 100% 

.mw-col-container - Column container - this element is used for adding extra space(margin, padding) inside the column
 


#### Usage and Example
```html
  <div class="mw-row">
      <div class="mw-col" style="width: 30%">
        <div class="mw-col-container">Item 1</div>
      </div>
      <div class="mw-col" style="width: 70%">
        <div class="mw-col-container">Item 2</div>
      </div>
  </div>
```
### Responsibility

Columns become one below the other when window size is <768px 

### Static Grid

* The static grid columns cannot be resized by the user from live edit 

 
The static grid is a simple fluid grid system. The with of the columns can only be edited only from the css or html.

The static grid contains 3 classes: .mw-ui-row, .mw-ui-col, .mw-ui-col-container 

.mw-ui-row - Main holder

.mw-ui-col - Column element. On this element you define the width of the column in % or px. 

.mw-ui-col-container - Column container - this element is used for adding extra space(margin, padding) inside the column



### Usage and Examples
```html
<div class="mw-ui-row">
      <div class="mw-ui-col" style="width: 30%">
        <div class="mw-ui-col-container">Item 1</div>
      </div>
      <div class="mw-ui-col" style="width: 70%">
        <div class="mw-ui-col-container">Item 2</div>
      </div>
  </div>

<div class="mw-ui-row">
      <div class="mw-ui-col" style="width: 200px">
        <div class="mw-ui-col-container">Item 1</div>
      </div>
      <div class="mw-ui-col" style="width: auto">
        <div class="mw-ui-col-container">Item 2</div>
      </div>
  </div>

<div class="mw-ui-row">
      <div class="mw-ui-col" style="width: 20%">
        <div class="mw-ui-col-container">Item 1</div>
      </div>
      <div class="mw-ui-col" style="width: 200px">
        <div class="mw-ui-col-container">Item 2</div>
      </div>
      <div class="mw-ui-col">
        <div class="mw-ui-col-container">Automatic scaling</div>
      </div>
  </div>
```



### Responsibility

Columns become one below the other when window size is <768px. 
For 1024 you can add .mw-ui-row-drop-on-1024 class to the row element. 
Also if you want your grid to not break on any resolution you must replace mw-ui-row with mw-ui-row-nodrop 

Compatibility

You can use both grids along with other frameworks like Bootstrap, Blueprint, etc. 

