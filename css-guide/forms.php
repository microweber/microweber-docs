<h2>Form Elements</h2>
<p>Varous form elements to build your forms</p>
<div class="mw-defaults">
  <div id="exampleholder_forms">
    <h3>Text fields</h3>
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Text-field</label>
      <input type="text" class="mw-ui-field" placeholder="Input" />
    </div>
    <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
    &lt;label class=&quot;mw-ui-label&quot;&gt;Text-field&lt;/label&gt;
    &lt;input type=&quot;text&quot; class=&quot;mw-ui-field&quot; placeholder=&quot;Input&quot; /&gt;
&lt;/div&gt;</code></pre>
    <hr />
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Text-area</label>
      <textarea class="mw-ui-field" placeholder="Textarea"></textarea>
    </div>
    <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
    &lt;label class=&quot;mw-ui-label&quot;&gt;Text-area&lt;/label&gt;
    &lt;textarea class=&quot;mw-ui-field&quot; placeholder=&quot;Textarea&quot;&gt;&lt;/textarea&gt;
&lt;/div&gt;</code></pre>
    <hr />
    <h3>Drop-down menus</h3>
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Dropdown 1</label>
      <select class="mw-ui-simple-dropdown">
        <option>Select</option>
        <option>Option 1</option>
        <option>Option 2</option>
      </select>
    </div>
    <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
  &lt;label class=&quot;mw-ui-label&quot;&gt;Dropdown 1&lt;/label&gt;
  &lt;select class=&quot;mw-ui-simple-dropdown&quot;&gt;
    &lt;option&gt;Select&lt;/option&gt;
    &lt;option value=&quot;1&quot;&gt;Option 1&lt;/option&gt;
    &lt;option value=&quot;2&quot;&gt;Option 2&lt;/option&gt;
  &lt;/select&gt;
&lt;/div&gt;</code></pre>
    <hr />
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Dropdown 2</label>
      <div class="mw-ui-select">
        <select>
          <option selected>Select</option>
          <option value="dropdown">Option 1</option>
          <option value="dropdown2">Option 2</option>
        </select>
      </div>
    </div>
    
    
     <hr />
     <pre class="prettyprint"><code class="language-php">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
  &lt;label class=&quot;mw-ui-label&quot;&gt;Dropdown 2&lt;/label&gt;
  &lt;div class=&quot;mw-ui-select&quot;&gt;
    &lt;select&gt;
      &lt;option selected&gt;Select&lt;/option&gt;
      &lt;option value=&quot;dropdown&quot;&gt;Option 1&lt;/option&gt;
      &lt;option value=&quot;dropdown2&quot;&gt;Option 2&lt;/option&gt;
    &lt;/select&gt;
  &lt;/div&gt;
&lt;/div&gt;</code></pre>
     
     
     
     <h3>Checkboxes and Radio buttons</h3>
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Checkboxes</label>
      <label class="mw-ui-check">
        <input type="checkbox">
        <span></span> <span>Checkbox 1</span></label>
      <label class="mw-ui-check">
        <input type="checkbox">
        <span></span> <span>Checkbox 2</span></label>
    </div>
    <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
  &lt;label class=&quot;mw-ui-label&quot;&gt;Checkboxes&lt;/label&gt;
  &lt;label class=&quot;mw-ui-check&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt;
    &lt;span&gt;&lt;/span&gt; &lt;span&gt;Checkbox 1&lt;/span&gt;&lt;/label&gt;
  &lt;label class=&quot;mw-ui-check&quot;&gt;
    &lt;input type=&quot;checkbox&quot;&gt;
    &lt;span&gt;&lt;/span&gt; &lt;span&gt;Checkbox 2&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
    <hr />

    
    <div class="mw-ui-field-holder">
      <label class="mw-ui-label">Radios</label>
      <label class="mw-ui-check">
        <input type="radio" name="q">
        <span></span> <span>Radio 1</span></label>
      <label class="mw-ui-check">
        <input type="radio" name="q">
        <span></span> <span>Radio 2</span></label>
    </div>
    
        <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
  &lt;label class=&quot;mw-ui-label&quot;&gt;Radios&lt;/label&gt;
  &lt;label class=&quot;mw-ui-check&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;q&quot;&gt;
    &lt;span&gt;&lt;/span&gt; &lt;span&gt;Radio 1&lt;/span&gt;&lt;/label&gt;
  &lt;label class=&quot;mw-ui-check&quot;&gt;
    &lt;input type=&quot;radio&quot; name=&quot;q&quot;&gt;
    &lt;span&gt;&lt;/span&gt; &lt;span&gt;Radio 2&lt;/span&gt;&lt;/label&gt;
&lt;/div&gt;</code></pre>
    
     <hr />
     <h3>Submit button</h3>
    <div class="mw-ui-field-holder">
      <button type="submit" class="mw-ui-btn">Submit</button>
    </div>
    <pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-ui-field-holder&quot;&gt;
  &lt;button type=&quot;submit&quot; class=&quot;mw-ui-btn&quot;&gt;Submit&lt;/button&gt;
&lt;/div&gt;</code></pre>
  </div>
</div>
