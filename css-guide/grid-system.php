
<h2>Microweber CSS Grids</h2>
<p> Microweber's grid system contains 2 parts: <strong>Static</strong> & <strong>Dynamic</strong>; </p>
<h3>Dynamic Grid</h3>
<p>Dynamic grid is used for live edit development. The "admin" user can change the width of columns directly from the site</p>
<p> The dynamic grid contains 3 classes: <strong>.mw-row</strong>, <strong>.mw-col</strong>, <strong>.mw-col-container</strong> </p>
<ul>
  <li><strong>.mw-row</strong> - Main holder</li>
  <li> <strong>.mw-col</strong> - Column element. On this element you define the width of the column in <strong>%</strong>.
    You can add as many columns as you want but the total width of all of them must be <strong>100%</strong> </li>
  <li><strong>.mw-col-container</strong> - Column container - this element is used for adding extra space(margin, padding) inside the column</li>
</ul>
<h4>Usage and Example</h4>
<pre class="prettyprint"><code class="language-php ">  &lt;div class="<span class="g">mw-row</span>">
      &lt;div class="<span class="g">mw-col</span>" style="width: <span class="u">30%</span>">
        &lt;div class="<span class="g">mw-col-container</span>">Item 1&lt;/div>
      &lt;/div>
      &lt;div class="<span class="g">mw-col</span>" style="width: <span class="u">70%</span>">
        &lt;div class="<span class="g">mw-col-container</span>">Item 2&lt;/div>
      &lt;/div>
  &lt;/div></code></pre>
<h4>Responsibility</h4>
<p>Columns become one below the other when window size is &lt;768px </p>
<hr>
<h3>Static Grid</h3>
<p>The static grid is a simple fluid grid system. The with of the columns can only be edited only from the css or html.</p>
<p> The static grid contains 3 classes: <strong>.mw-ui-row</strong>, <strong>.mw-ui-col</strong>, <strong>.mw-ui-col-container</strong> </p>
<ul>
  <li><strong>.mw-ui-row</strong> - Main holder</li>
  <li> <strong>.mw-ui-col</strong> - Column element. On this element you define the width of the column in <strong>%</strong> or <strong>px</strong>. </li>
  <li><strong>.mw-ui-col-container</strong> - Column container - this element is used for adding extra space(margin, padding) inside the column</li>
</ul>
<h4>Usage and Examples</h4>
<pre class="prettyprint"><code class="language-php">&lt;div class="<span class="g">mw-ui-row</span>">
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">30%</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 1&lt;/div>
      &lt;/div>
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">70%</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 2&lt;/div>
      &lt;/div>
  &lt;/div></code></pre>
<pre class="prettyprint"><code class="language-php">&lt;div class="<span class="g">mw-ui-row</span>">
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">200px</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 1&lt;/div>
      &lt;/div>
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">auto</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 2&lt;/div>
      &lt;/div>
  &lt;/div></code></pre>
<pre class="prettyprint"><code class="language-php">&lt;div class="<span class="g">mw-ui-row</span>">
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">20%</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 1&lt;/div>
      &lt;/div>
      &lt;div class="<span class="g">mw-ui-col</span>" style="width: <span class="u">200px</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Item 2&lt;/div>
      &lt;/div>
      &lt;div class="<span class="g">mw-ui-col</span>">
        &lt;div class="<span class="g">mw-ui-col-container</span>">Automatic scaling&lt;/div>
      &lt;/div>
  &lt;/div></code></pre>
<h4>Responsibility</h4>
<p>Columns become one below the other when window size is &lt;768px. <br>
  For 1024 you can add <span class="u">.mw-ui-row-drop-on-1024</span> class to the row element. <br>
  Also if you want your grid to not break on any resolution you must replace <span class="u">mw-ui-row</span> with <span class="u">mw-ui-row-nodrop</span> </p>
<hr>
<h3>Compatibility</h3>
<p>You can use both grids along with other frameworks like Bootstrap, Blueprint, etc. </p>
