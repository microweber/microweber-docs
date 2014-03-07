<?php if(!defined('ONE')){
	header("Location: index");

} ?>

<h1 data-field="title" rel="content">How to make a template?</h1>
<div data-field="content" rel="content">
  <div data-mw-title="Title" data-type="title" id="row_1390906260163">
    <div data-mw-title="Text" data-type="text" id="row_1390906260164">
      <p id="row_1390906260165">In Microweber a template is a set of files that determines the overall look of a website. These files are used to generate the site layout and the html code. </p>
      <p id="row_1390906260167">Any html page can be turned into a template by defining editable regions in it.  You can use PHP and HTML to make your template as flexible as you need it to be.</p>
      <p id="row_1390906260168">Here is how to get started...  What you need to know …</p>
      <h4 id="row_1390906260176">Template structure</h4>
      <p id="row_1390906260178">All templates are located into <strong>userfiles/templates</strong> directory</p>
      <p id="row_1390906260179">Each template is contained within its own folder and you need to create a new folder when creating a new template. Usually, the name of the folder is given the name of your new template.</p>
      <p id="row_1390906260180">Here is the <em>most basic</em> template structure</p>
      <pre id="row_1390906260181">userfiles<br />- templates<br />  - my_template<br />     config.php<br />     header.php<br />     index.php<br />     footer.php</pre>
      <p id="row_1390906260182"><strong>Basic template files and their purpose</strong></p>
      <table class="table table-hover">
        <tbody>
          <tr>
            <td>config.php</td>
            <td>holds the name of your template<br /></td>
          </tr>
          <tr>
            <td>index.php</td>
            <td>homepage template and default layout<br /></td>
          </tr>
          <tr>
            <td>header.php, footer.php<br /></td>
            <td>optional files to hold your template's header and footer<br /></td>
          </tr>
          <tr>
            <td>inner.php</td>
            <td>optional file to load a post<br /></td>
          </tr>
        </tbody>
      </table>
     
      <strong>config.php</strong>
      <p id="row_1390906260184">This file indicates the name of your template and its version. <br />
      </p>
      <p id="row_1390906260185">Here is example config file you must create in your template folder<br />
      </p>
      <p id="row_1390906260186"><strong>userfiles/templates/my_template/config.php</strong></p>
      <pre id="row_1390906260187">&lt;?php<br />$config = array();<br />$config['name'] = &quot;My template&quot;;<br />$config['author'] = &quot;Your name&quot;;<br />$config['version'] = 0.1;<br />$config['url'] = &quot;http://example.com/&quot;;<br />
</pre>
      <p id="row_1390906260188">The config file defines the name of your template as it will appear in the &quot;Template selection&quot; menu and in the &quot;Settings&quot; area.</p>
      <p id="row_1390906260189">The <em>version </em>parameter is optional and its used if you want to offer updates.</p>
      <p id="row_1390906260190">After making the config.php file you can start making the layouts of your template.</p>
      <?php print page_content('developer-guide/making-template/_nav'); ?>
      
    </div>
  </div>
</div>
