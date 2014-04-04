<h2>Boxes and tables</h2>
<h3>Boxes</h3>
<h4>Simple box</h4>
<div class="mw-o-box">
  <div class="mw-o-box-content"> A box </div>
</div>
<br>
<pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-o-box&quot;&gt;
  &lt;div class=&quot;mw-o-box-content&quot;&gt; A box &lt;/div&gt;
&lt;/div&gt;</code></pre>
 <br>
<h4>Box with header</h4>
<div class="mw-o-box">
  <div class="mw-o-box-header"> The header </div>
  <div class="mw-o-box-content"> Box content... </div>
</div>
<br>
<pre class="prettyprint"><code class="language-html">&lt;div class=&quot;mw-o-box&quot;&gt;
  &lt;div class=&quot;mw-o-box-header&quot;&gt; The header &lt;/div&gt;
  &lt;div class=&quot;mw-o-box-content&quot;&gt; Box content... &lt;/div&gt;
&lt;/div&gt;</code></pre>
<br>
 
<br>
<h3>Tables</h3>
<table width="100%" cellspacing="0" cellpadding="0" class="mw-ui-admin-table">
  <thead>
    <tr>
      <th>Table </th>
      <th>Head</th>
      <th>Client</th>
      <th>Country</th>
      <th>City</th>
      <th>Orders</th>
      <th>View</th>
    </tr>
  </thead>
  <tfoot>
    <tr>
      <td>Table </td>
      <td>Footer</td>
      <td>Client</td>
      <td>Country</td>
      <td>City</td>
      <td>Orders</td>
      <td>View</td>
    </tr>
  </tfoot>
  <tbody>
    <tr>
      <td>Lorem</td>
      <td>Ipsum</td>
      <td>Sit</td>
      <td>Amet</td>
      <td>Dolor</td>
      <td>987987</td>
      <td><a class="mw-ui-admin-table-show-on-hover mw-ui-btn" href="javascript:;">View on hover</a></td>
    </tr>
  </tbody>
</table>
<a class="" href="javascript:$('#table_code_sample').toggle();void(0);">Show code</a>

<div id="table_code_sample" style="display:none;"><pre class="prettyprint"><code class="language-html">&lt;table width=&quot;100%&quot; cellspacing=&quot;0&quot; cellpadding=&quot;0&quot; class=&quot;mw-ui-admin-table&quot;&gt;
  &lt;thead&gt;
    &lt;tr&gt;
      &lt;th&gt;Table &lt;/th&gt;
      &lt;th&gt;Head&lt;/th&gt;
      &lt;th&gt;Client&lt;/th&gt;
      &lt;th&gt;Country&lt;/th&gt;
      &lt;th&gt;City&lt;/th&gt;
      &lt;th&gt;Orders&lt;/th&gt;
      &lt;th&gt;View&lt;/th&gt;
    &lt;/tr&gt;
  &lt;/thead&gt;
  &lt;tfoot&gt;
    &lt;tr&gt;
      &lt;td&gt;Table &lt;/td&gt;
      &lt;td&gt;Footer&lt;/td&gt;
      &lt;td&gt;Client&lt;/td&gt;
      &lt;td&gt;Country&lt;/td&gt;
      &lt;td&gt;City&lt;/td&gt;
      &lt;td&gt;Orders&lt;/td&gt;
      &lt;td&gt;View&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tfoot&gt;
  &lt;tbody&gt;
    &lt;tr&gt;
      &lt;td&gt;Lorem&lt;/td&gt;
      &lt;td&gt;Ipsum&lt;/td&gt;
      &lt;td&gt;Sit&lt;/td&gt;
      &lt;td&gt;Amet&lt;/td&gt;
      &lt;td&gt;Dolor&lt;/td&gt;
      &lt;td&gt;987987&lt;/td&gt;
      &lt;td&gt;&lt;a class=&quot;mw-ui-admin-table-show-on-hover mw-ui-btn&quot; href=&quot;javascript:;&quot;&gt;View on hover&lt;/a&gt;&lt;/td&gt;
    &lt;/tr&gt;
  &lt;/tbody&gt;
&lt;/table&gt;</code></pre></div>