## comments

Comments element with form to post a comment

    <module type="comments" /> 

<h3>Module parameters</h3>
<p>You can set those paramters via the module settings or inline</p>
<table class="table table-striped table-hover">
  <thead>
    <tr>
      <th width="113">parameter</th>
      <th width="412">description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code class="language-php">content-id</code></td>
      <td>the id of the content to get comments for, if you don't set this it will use the current content id</td>
    </tr> <tr>
      <td><code class="language-php">no-form</code></td>
      <td>if you set this parameter the comments posting form will not be shown</td>
    </tr>
  </tbody>
</table>


## Examples

#### Display comments for blog post

    <?php //show comments for content ?>
    <module type="comments" content-id="4" />

#### Hide the comments post form

    <?php //show comments for content ?>
    <module type="comments" content-id="11" no-form="true" />
 