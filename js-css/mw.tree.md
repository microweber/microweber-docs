<pre>
Interface TreeItem {
    id:Number,
    type:String,
    parent_id:Number,
    parent_type:String,
    title:String,
    subtype?:String
}
</pre>
<h1>mw.tree</h1>
<h2>Usage</h2>
<pre>
    var options = {
        data: [],
        element: document.body
    }
    var <u>myTree</u> = new mw.tree(options);
</pre>
<h2>Options</h2>
<ul>

    <li><b>id:</b> <i>String</i>. Optional. Id of the tree, default: random</li>
    <li><b>element:</b> <i>String</i> selector, jQuery Object, Element. <u>Required</u>. Element inside which the tree will be rendered</li>
    <li><b>selectable:</b> <i>Boolean</i>. Optional. Whenever the tree will have radios and checkboxes.</li>
    <li><b>data:</b> TreeItem[]. <u>Required</u>. Data for the tree.</li>
    <li><b>singleSelect:</b> Boolean. Optional. Only one item can be picked</li>
    <li><b>selectedData:</b> TreeItem[]. Optional. Irtems that are initialy selected.</li>
    <li><b>skip:</b> TreeItem[]. Optional. Items that are going to be skipped from rendering.</li>
    <li><b>sortable:</b> Boolean. Optional.</li>
    <li><b>nestedSortable:</b> Boolean. Optional.</li>
    <li><b>openedClass:</b> String. Optional. Class applied to an opened LI node when it's opened. Default - opened</li>
    <li><b>selectedClass:</b> String. Optional. Class applied to an opened LI node when it's selected. Default - selected</li>
    <li><b>skin:</b> String. Optional. Skin of the tree. By default: 'default'</li>
    <li><b>multiPageSelect:</b> Boolean. Optional. Multiple pages can be selected.</li>
    <li><b>saveState:</b> Boolean. Optional. Whenever the tree state will be saved to the local storage. By default: if the id is provided -> true. If not->false,</li>
    <li><b>append:</b>  TreeItem[]. Optional. Aditional Items that are appended to the tree</li>
    <li><b>prepend:</b>  TreeItem[]. Optional. Aditional Items that are prepended to the tree</li>
</ul>

<h2>Methods</h2>

<h4>myTree.select(item, type?:String) </h4>
<ul>
    <li>item - Can be:
    <ol>
        <li><b>list</b> item node, </li>
        <li><b>number</b> ID of the TreeItem should be combined with type</li>
        <li><b>Object TreeItem</b></li>
        <li><b>Array </b> containing TreeItem</li>
    </ol>
    </li>
</ul>

<h4>myTree.deselect(item, type?:String) </h4>
<ul>
    <li>item - Can be:
    <ol>
        <li><b>list</b> item node, </li>
        <li><b>number</b> ID of the TreeItem should be combined with type</li>
        <li><b>Object TreeItem</b></li>
        <li><b>Array </b> containing TreeItem</li>
    </ol>
    </li>
</ul>

<h4>myTree.open(item, type?:String) </h4>
<ul>
    <li>item - Can be:
    <ol>
        <li><b>list</b> item node, </li>
        <li><b>number</b> ID of the TreeItem should be combined with type</li>
        <li><b>Object TreeItem</b></li>
        <li><b>Array </b> containing TreeItem</li>
    </ol>
    </li>
</ul>

<h4>myTree.close(item, type?:String) </h4>
<ul>
    <li>item - Can be:
    <ol>
        <li><b>list</b> item node, </li>
        <li><b>number</b> ID of the TreeItem should be combined with type</li>
        <li><b>Object TreeItem</b></li>
        <li><b>Array </b> containing TreeItem</li>
    </ol>
    </li>
</ul>

<h2>Events</h2>

<h4>orderChange</h4>

<b>Usage: </b>
<pre>
    $(myTree).on('orderChange', function(event, itemDropped, data, oldData, localData){
        console.log(itemDropped, data, oldData, localData)
    });
</pre>

<h4>orderChange</h4>

<b>Usage: </b>
<pre>
    $(myTree).on('selectionChange', function(event, selectedData){
        console.log(selectedData)
    });
</pre>

<h4>ready</h4>

<b>Usage: </b>
<pre>
    $(myTree).on('ready', function(){

    });
</pre>
